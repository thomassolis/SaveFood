import { getAvailableProducts } from '@/src/api/Products/products.route';
import { ProductCard } from '@/src/components/common/productCard';
import { SearchInput } from '@/src/components/ui/Inputs/Input';
import { Typography } from '@/src/components/ui/Texts/Texts';
import { ProductType } from '@/src/types/ProductsTypes/products';
import { Ionicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
7
export default function Explore() {
    const categories = ["Todos", "Panadería", "Restaurante", "Postre"]
    const [productsData, setProductsData] = useState<ProductType[]>([]);   
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
    useEffect(()=>{
        const getProductsData = async () =>{
            try{
                const response = await  getAvailableProducts();
                setProductsData(response.data);
       
            }catch(error){
                console.error('Error en getProductsData: ', error);
            }
        }
        getProductsData();
    },[])

    const Header = () => (
        <>
            <View style={{backgroundColor:'#4F46E5', display:'flex', paddingLeft:20, paddingRight:20, paddingBottom:30, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
                <View style={{ marginBottom: 10, display:'flex', flexDirection:'row', justifyContent: "space-between"}}>
                    <View >
                        <Image
                            source={require("../../../src/assets/images/icon.png")}
                            style={{ width: 40, height: 40 }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{display:'flex', flexDirection:'row', gap:20}}>
                        <Feather name="shopping-cart" size={24} color="white" />
                        <Ionicons name="person-outline" size={24} color='white' />
                    </View>            
                </View>

                <View style={{display:'flex', gap:10}}>
                    <Typography variant='title'>Hola, Juan</Typography>
                    <Typography>¿Qué quieres salvar hoy?</Typography>
                </View>

                <View style={{marginTop:10}}>
                    <SearchInput/>
                </View>            
            </View>
            <View style={{display:'flex', flexDirection:'row', marginTop:10, paddingLeft:20, paddingRight:20, alignItems:'center', gap:8}}>
                <Entypo name="location" size={24} color="gray" />
                <Text style={{color:'gray'}}>Panamá, Obarrio - 2.5 km</Text>
            </View> 
            <View style={{paddingLeft:20, paddingRight:20, marginTop:20, display:'flex', marginBottom:20}}>
                <Typography variant='title' style={{color:'black'}}>Disponible cerca de ti</Typography>
            </View> 

                <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 8 }}
                    >
                        <View style={{ flexDirection: "row", gap: 8 }}>
                        {categories.map((category) => (
                            <TouchableOpacity
                            key={category}
                            onPress={() => setSelectedCategory(category)}
                            style={{
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                borderRadius: 999,
                                backgroundColor:
                                selectedCategory === category ? "#2563EB" : "#FFFFFF",
                                shadowColor:
                                selectedCategory === category ? "#000" : "transparent",
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: selectedCategory === category ? 0.15 : 0,
                                shadowRadius: selectedCategory === category ? 4 : 0,
                                elevation: selectedCategory === category ? 3 : 0,
                            }}
                            >
                            <Text
                                style={{
                                color:
                                    selectedCategory === category ? "#FFFFFF" : "#4B5563",
                                fontWeight: "500",
                                }}
                            >
                                {category}
                            </Text>
                            </TouchableOpacity>
                        ))}
                        </View>
                    </ScrollView>
            </View>
        </>
    )
    return (
        <FlatList
            data={productsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard productsData={item} />}
            ListHeaderComponent={<Header />}
            contentContainerStyle={{ paddingBottom: 20 }}
        />
);
}