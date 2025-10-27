import { useTheme } from "@/context/theme-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export const NewChatButton = () => {
    const { isDark } = useTheme();          
    return (
        <TouchableOpacity className="absolute bottom-6 right-6" onPress={() =>router.push("/new-chat")}>
            <View className={`w-16 h-16 rounded-full items-center justify-center ${isDark ? "bg-blue-600" : "bg-blue-500"} shadow-lg`}>
                <MaterialCommunityIcons
                name="message-plus"
                size={24}
                color={isDark ? "black": "white"}
                />
            </View>
               
                
            
        </TouchableOpacity>
    )
}
        