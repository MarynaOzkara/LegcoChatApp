import { useTheme } from "@/context/theme-context";
import { Id } from "@/convex/_generated/dataModel";
import { formatDistanceToNow } from "date-fns";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";


interface Chat {
  _id: Id<"chats">;
  name: string;
  image: string | null;
  lastMessage: {
    text?: string;
    createdAt: number;
    media?: {
      type: string;
      fileName?: string;
    }[];
  } | null;
  unreadCount: number;
  isGroup: boolean;
}

export const ChatItem = ({item} : {item: Chat}) => {
    const {isDark} = useTheme()
    const getFormatedTime = () => {
        if (!item.lastMessage) return "";
       return formatDistanceToNow(new Date(item.lastMessage.createdAt), { addSuffix: true });
    }
    const getMessagePreview = () => {
        if (!item.lastMessage) return "No message yet";
        if(item.lastMessage.media && item.lastMessage.media.length > 0) {
            const mediaType = item.lastMessage.media[0].type;
            if(mediaType.startsWith("image")) {
                return "📸 Image";
            } else if(mediaType.startsWith("video")) {
                return "🎥 Video";
            } else if(mediaType.startsWith("audio")) {
                return "🎧 Audio";
            } else if(mediaType.startsWith("file")) {
                return "🗎 Document";
            }
        }
        return item.lastMessage.text ? item.lastMessage.text : "No message";
        }
  return <TouchableOpacity
    className={`flex-row items-center px-4 py-3 border-b ${isDark ? "border-gray-200 bg-white"  : "border-gray-700 bg-gray-800"}`}
    onPress={() => {router.push(`/chat/${item._id}`)}}
  >
    <View className="flex-row items-center flex-1 gap-2">
        {/* Avatar can be added here */}
        <Image
            source={ item.image ? { uri: item.image } : require('../assets/images/default-avatar.png')}
            className="w-14 h-14 rounded-full bg-gray-300"
        />
        {/* Chat Name */}
        <View className="flex-1">
            <View className="flex-row items-center justify-between">
                <Text className={`text-lg font-semibold ${isDark ? "text-gray-900" : "text-white"}`}>
                    {item.name}
                </Text>
                <Text className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"} `}>{getFormatedTime()}</Text>
            </View>
            <View className="flex-row items-center justify-between mt-1">
                <Text className={`text-sm ${item.unreadCount > 0 ? isDark ? "text-gray-900 font-semibold" : "text-white font-semibold" : isDark ? "text-gray-500" : "text-gray-400"} flex-1`} numberOfLines={1}>
                    {getMessagePreview()}
                </Text>
                {item.unreadCount > 0 && (
                    <View className={`bg-blue-500 rounded-full px-2 py-1 min-w-[20px] items-center justify-center`}>
                        <Text className="text-white text-xs font-semibold">{item.unreadCount}</Text>
                    </View>
                )}
            </View>
                
        </View>
            
    </View>
  </TouchableOpacity>;
}   


