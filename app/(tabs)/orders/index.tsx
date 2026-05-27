import { getOrderData } from "@/src/api/Products/products.route";
import PrimaryButton from "@/src/components/ui/Button/PrimaryButton";
import { Typography } from "@/src/components/ui/Texts/Texts";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Orders() {
  const [order, setOrder] = useState();
  
  useEffect(()=>{
    const getData = async() => {
      try{
        const response = await getOrderData();
        console.log('order: ', response)
        setOrder(response?.data)
      }catch(error){
        console.error('Error en getData', error);
      }
    }
    getData();
  },[])

  return (
    <View style={{ flex: 1 }}>
      {order || order?.length>0 ? ( 
        <Text>Orders2</Text>  
      ):(
        <View style={{flex:1, width:"100%", alignItems:'center', justifyContent:'center', gap:15}}>
          <View style={{backgroundColor:'#E6E7E8', padding:25, borderRadius:'50%'}}>
            <FontAwesome5 name="box-open" size={50} color="gray" />
          </View>
          
          <View style={{display:'flex', width:'100%', alignItems:'center', gap:2}}>
            <Typography variant="title" style={{color:'black'}}>Tu carrito está vacío</Typography>
            <Typography variant="paragraph" style={{color:'gray', width:'90%' }} >Agrega productos de restaurantes cercanos para empezar a salvar comida</Typography>
          </View>

          <View style={{display:'flex', width:'100%', alignItems:'center'}}>
            <PrimaryButton text="Explorar restaurantes" style={{fontSize:12}}></PrimaryButton>
          </View>
          
        </View>
        
      )
      }
      
    </View>
  );
}