import { useAuth } from "@/src/contexts/auth/authContext";
import Feather from '@expo/vector-icons/Feather';
import { Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const {userName, lastName} = useAuth();

  return (
    <View style={{display:'flex'}}>
      <View style={{backgroundColor:'#4F46E5',paddingLeft:20, paddingRight:20, paddingBottom:30, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>

        {/* <View >
          <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:6}}>
            <View style={{borderRadius:'100%', backgroundColor:'red', padding:50, width:'10%'}}>
              <Text style={{color:'white'}}>TS</Text>
            </View>
              <View style={{}}>
                <Typography variant="title" style={{color:'white'}}>{userName} {lastName}</Typography>                
              </View>
          </View>
        </View> */}

            <View
      style={{
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 24,
        paddingBottom: 80,
        
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
      }}
    >
      <TouchableOpacity        
        style={{
          padding: 8,
          borderRadius: 999,
          marginBottom: 16,
          alignSelf: "flex-start",
        }}
        activeOpacity={0.7}
      >
        {/* <ArrowLeft size={24} color="white" /> */}
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 16,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 4,
            borderColor: "white",
            backgroundColor: "#EA580C",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 6,
            elevation: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >TS            
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {userName} {lastName} 
          </Text>


        </View>

        <TouchableOpacity          
          style={{
            padding: 8,
            borderRadius: 999,
          }}
          activeOpacity={0.7}
        >
          
          <Feather name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
      </View>
    </View>
  );
}