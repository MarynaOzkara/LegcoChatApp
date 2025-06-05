import { useTheme } from "@/context/theme-context";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const {isDark} = useTheme()
  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-[#1a1c1e]" : "bg-white"}`}>
      <View className="flex-1">
        <View className="items-center mt-20" >
          <Image source={require("@/assets/images/chat.png")} style={{width: 200, height: 200, marginBottom: 20}}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
