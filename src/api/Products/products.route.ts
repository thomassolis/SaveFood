

export const getAvailableProducts = async(selectedCategory?:string) => {
    console.log('selectedCategory', selectedCategory)    
    try{        
        return {
            sucess:true,            
            data:[
                {
                    id:'1',
                    name: 'Panadería Artesanal',
                    price:4.99,
                    isFavorite: true,
                    puntuation:4.8,
                    availableQuantity: 3,
                    section:'Panadería',
                    time: '18:00 - 19:00',
                    hasPromotion: true,
                    promotionPrice: 4.99,
                    oldPrice: 12.99,
                    distance: 0.5        
                },
                {
                    id:'2',
                    name: 'Panadería Artesanal',
                    price:4.99,
                    isFavorite: false,
                    puntuation:4.8,
                    availableQuantity: 3,
                    section:'Panadería',
                    time: '18:00 - 19:00',
                    hasPromotion: true,
                    promotionPrice: 4.99,
                    oldPrice: 12.99,
                    distance: 0.5        
                },
                {
                    id:'3',
                    name: 'Panadería Artesanal',
                    price:4.99,
                    isFavorite: true,
                    puntuation:4.8,
                    availableQuantity: 3,
                    section:'Panadería',
                    time: '18:00 - 19:00',
                    hasPromotion: true,
                    promotionPrice: 4.99,
                    oldPrice: 12.99,
                    distance: 0.5        
                }
            ]
        }
    }catch(error){
        console.error ('Error en getAvailableProducts', error);
        return { success: false, data: [] }
    }
}

export const changeFavoriteStatus = async(id:string, newValue:boolean) => {
    try{
        return {
            success: true,
            message:'Status cambiado satisfactoriamente'
        }
    }catch(error){
        console.error('Error en changeFavoriteStatus', error);
    }
}

export const bringFavorites = async() => {
    try{ 
        return {
            sucess:true,            
            data:[
                {
                    id:'1',
                    name: 'Panadería Artesanal',
                    price:5.00,                    
                    puntuation:4.8,
                    isFavorite: true,
                    availableQuantity: 3,
                    section:'Panadería',
                    time: '18:00 - 19:00',
                    hasPromotion: true,
                    promotionPrice: 4.99,
                    oldPrice: 12.99,
                    distance: 0.5        
                }
            ]
        }
    }catch(error){
        console.error('Error en bringFavorites',error)
    }
}

export const getOrderData = async() => {
    try{ 
        return {
            sucess:true,            
            // data:[
            //     {
            //         id:'1',
            //         name: 'Panadería Artesanal',
            //         price:5.00,                    
            //         puntuation:4.8,
            //         isFavorite: true,
            //         availableQuantity: 3,
            //         section:'Panadería',
            //         time: '18:00 - 19:00',
            //         hasPromotion: true,
            //         promotionPrice: 4.99,
            //         oldPrice: 12.99,
            //         distance: 0.5        
            //     }
            // ]
        }
    }catch(error){
        console.error('Error en bringFavorites',error)
    }
}