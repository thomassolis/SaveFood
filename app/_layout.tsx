import { Stack } from "expo-router"
import { Platform, View } from "react-native"

export default function HomeScreen() {
return(
    <View style={{width:'100%', height:'100%', backgroundColor:'white'}}>
        <View
  style={{
    width: "100%",
    height: Platform.OS === "ios" ? '7.5%' : '5%',
    backgroundColor: "#4F46E5",
  }}
>

        </View>
        <Stack screenOptions={{ headerShown: false }} />    
    </View>    
)

}