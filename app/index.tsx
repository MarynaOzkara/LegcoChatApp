import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-red-500"
    >
      <Text className="text-white text-5xl font-bold">Welcome to Legco Chat</Text>
    </View>
  );
}
