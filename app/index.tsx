import { StatusBar } from "expo-status-bar"; 
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { Link } from "expo-router"; 

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-pblack">hello index</Text>
      <StatusBar style="auto" />  
      <Link href="/home" style = {{color: "red"}}>Go to home</Link>
    </View>
  );
}

