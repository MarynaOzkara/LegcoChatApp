import { ThemeProvider, useTheme } from "@/context/theme-context";
import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { router, Slot, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import { Fragment, useEffect } from "react";


function Layout() {
  const { isDark } = useTheme();
  const {isSignedIn, isLoaded} = useAuth()
  const segments = useSegments()
  if(!isLoaded) { 
    return null
  }

  useEffect(() => {
    if(!isLoaded) return;
    const inProtectedRout = segments[0] === "(protected)";
    if(isSignedIn && !inProtectedRout){
      router.replace("/(protected)/(tabs)")
    } else if(!isSignedIn && inProtectedRout){
      router.replace("/")
    }
  }, [isSignedIn, isLoaded, segments])
  return (
  <Fragment>
    <Slot/>
    <StatusBar style = {isDark ? "light" : "dark"}/>
  </Fragment>)
}

export default function RootLayout() {
  return (
  <ClerkProvider tokenCache={tokenCache}> 
   <ClerkLoaded> 
    <ThemeProvider>
      <Layout/> 
    </ThemeProvider>
   </ClerkLoaded>
  </ClerkProvider>) 
}
