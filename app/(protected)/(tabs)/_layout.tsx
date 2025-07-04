import { useTheme } from "@/context/theme-context";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabLayout = ()=>{
    const {isDark} = useTheme();
    return <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 40,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "transparent",
            borderTopWidth: 0,
            height: 65,
            paddingBottom: 10
        },
        tabBarBackground: () => (
          <BlurView
            tint={isDark ? "dark" : "light"}
            intensity={80}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 30,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 30,
                backgroundColor: isDark
                  ? "rgba(17, 24, 39, 0.7)"
                  : "rgba(255, 255, 255, 0.7)",
              }}
            />
          </BlurView>
        ),
        tabBarItemStyle: {
            paddingTop: 8,
            paddingBottom: 4
        },
        tabBarActiveBackgroundColor: isDark ? "#60a5fa" : "#3b82f6",
        tabBarActiveTintColor: isDark ? "#6b7280": "#9ca3af",
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginTop: 6
        }
    }}>
        <Tabs.Screen 
            name="index"
            options={{
                title: "Chat",
                 tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: focused
                  ? isDark
                    ? "rgba(96, 165, 250, 0.1)"
                    : "rgba(59, 130, 246, 0.1)"
                  : "transparent",
                paddingBottom: 4,
              }}
            >
              <MaterialCommunityIcons
                name={focused ? "chat" : "chat-outline"}
                color={color}
                size={size}
              />
            </View>
          ),
            }}
        />

        <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: focused
                  ? isDark
                    ? "rgba(96, 165, 250, 0.1)"
                    : "rgba(59, 130, 246, 0.1)"
                  : "transparent",
                marginBottom: 4,
              }}
            >
              <MaterialCommunityIcons
                name={focused ? "account" : "account-outline"}
                color={color}
                size={size}
              />
            </View>
          ),
        }}
      />
    </Tabs>
}
export default TabLayout