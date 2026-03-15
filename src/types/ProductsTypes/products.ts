export interface ProductType {
  id: string; 
  name: string;
  price: number;
  isFavorite: boolean;
  puntuation: number;
  availableQuantity: number;
  section: string;
  time: string;
  hasPromotion: boolean;
  promotionPrice: number;
  oldPrice:number;
  distance:number;

}

export interface GetAvailableProductsResponse {
  data: ProductType[];
}