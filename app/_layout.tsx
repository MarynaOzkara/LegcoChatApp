import { ThemeProvider, useTheme } from "@/context/theme-context";
import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { router, Slot, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "../global.css";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
})


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
  <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
    <Slot/>
    <StatusBar style = {isDark ? "light" : "dark"}/>
  </ConvexProviderWithClerk>)
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
