import { bringFavorites } from "@/src/api/Products/products.route";
import { EmptyFavorites } from "@/src/components/common/EmptyFavorites";
import { ProductCard } from "@/src/components/common/productCard";
import { ProductType } from "@/src/types/ProductsTypes/products";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

export default function Favorites() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);  
  const [productsData, setProductsData] = useState<ProductType[]>([]);   
  console.log('me renderice')
    useEffect(()=>{
        const getFavoritesData = async () =>{
            try{
                setIsLoading(true);
                const response = await  bringFavorites();
                setProductsData(response?.data);       
                console.log('productsData',productsData)
            }catch(error){
                console.error('Error en getProductsData: ', error);
            }finally{
                setIsLoading(false);
            }
        }
        getFavoritesData();
    },[])


  return (
    <View style={{ flex: 1 }}>

          {!productsData || productsData?.length===0?(
            <EmptyFavorites/>
          ):(
              <FlatList
                style={{marginTop:20}}
                data={productsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProductCard productsData={item} />}
                // ListHeaderComponent={<Header />}
                contentContainerStyle={{ paddingBottom: 20 }}
              />
          )}
    </View>
  );
}

