import { AuthProvider } from "@/src/contexts/auth/authContext";
import { Stack } from "expo-router";
import { Platform, View } from "react-native";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
return(
  <>
    <AuthProvider>
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
    </AuthProvider>  
    <Toast/>
  </>
)

}