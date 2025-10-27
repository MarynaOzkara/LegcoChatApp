import { useTheme } from "@/context/theme-context";
import { ActivityIndicator, View } from "react-native";

export const Loader = () => {
    const {isDark} = useTheme();    
  return (
    <View className={`flex-1 items-center justify-center ${isDark ? "bg-white" : "bg-gray-900"} `}>
        <ActivityIndicator size="large" color={isDark ? "#000" : "#fff"} />
    </View>
  )
}