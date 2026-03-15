

export const getAvailableProducts = async() => {
    console.log('getAvailableProducts')
    try{
        // const response = await axios.get('');
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