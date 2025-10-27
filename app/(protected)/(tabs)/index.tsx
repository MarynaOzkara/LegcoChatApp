
// import { useAuth } from '@clerk/clerk-react'
import { ChatItem } from '@/components/ChatItem'
import { Loader } from '@/components/Loader'
import { NewChatButton } from '@/components/NewChatButton'
import { useTheme } from '@/context/theme-context'
import { chatData } from '@/dummyData'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
  // const { isSignedIn} = useAuth()
   const isDark = useTheme();
   const isLoading = false
  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      {/* Header */}
      <View className='flex-row items-center justify-between px-4 py-2'>
        <Text className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}>Legco Chat</Text>
      </View>
      {/* Chat List */}
      {isLoading ? (
        <View className='flex-1 items-center justify-center'>
          <Loader/>
        </View>) : (
        <FlatList
          data={chatData}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ChatItem item={item as any} />}
          className={isDark ? "bg-gray-900" : "bg-white"}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View className='px-4 py-2'>
              <Text className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}>Stories</Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <View className={`items-center justify-center flex-1 py-20`}>
              <MaterialCommunityIcons
                name='chat-outline'
                size={48}
                color={isDark ? "#fff" : "#000"}
              />
              <Text className={`mt-4 text-lg ${isDark ? "text-white" : "text-black"}`}>No chats yet</Text>
              <Text className={`mt-2 text-center px-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>Start a new conversation with your friends.</Text>
            </View>
          )} 
        />
      )}

      {/* New Chat */}
      <View className='absolute bottom-24 right-4'>
         <NewChatButton/>
      </View>
        
      
    </SafeAreaView>
  )
}

export default Index
