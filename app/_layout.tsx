import { ThemeProvider, useTheme } from "@/context/theme-context";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";


function Layout() {
  const { isDark } = useTheme();
  return (<><Slot/><StatusBar style = {isDark ? "light" : "dark"}/></>)
}

export default function RootLayout() {
  return (
  <ThemeProvider>
    <Layout/>
    
  </ThemeProvider>) 
}
