import { Typography } from "@/src/components/ui/Texts/Texts";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack } from "expo-router";
import { View } from "react-native";
export default function TabsLayout() {
    const PRIMARY = "#4F46E5";
    return(
    <View style={{flex: 1 }}>
      <View style={{backgroundColor:'#4F46E5',paddingLeft:20, paddingRight:20, paddingBottom:30, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>

        <View
        style={{
            paddingLeft: 10,
            paddingRight: 16,
            paddingTop: 12,
            paddingBottom: 12,
            
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
        }}
        >
            <View style={{display:'flex', flexDirection:'row', gap:8, alignItems:'center'}}>
                <Ionicons name="arrow-back" size={24} color="white" />
                <Typography variant="title" >Mis Favoritos</Typography>
            </View>
            


        </View>
      </View>
            <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
    )
    
}