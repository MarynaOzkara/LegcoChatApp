import { useTheme } from '@/context/theme-context'
import { useAuth } from '@clerk/clerk-expo';
import { Stack } from 'expo-router'
import React from 'react'

const ProtectedLayout = () => {
  const {isDark} = useTheme();
  const {isSignedIn} = useAuth()
  return (
    <Stack screenOptions={{
      headerShown: false,
      navigationBarColor: isDark ? "#000" : "#fff"
     }}>
      <Stack.Screen name='(tabs)'/>
      <Stack.Screen name='(modals)/edit-profile.tsx' options={{
        presentation: "modal"
        }}/>
     </Stack>
  )
}

export default ProtectedLayout
