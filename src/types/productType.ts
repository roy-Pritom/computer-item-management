export type TProduct = {
    _id:string;
    name: string;
    price: number;
    stockQuantity: number;
    category: string; 
    brand: string;
    compatibility: string; 
    interfaceType: string; 
    condition: 'new' | 'used';
    capacity:string;
    color?: string; 
    
  }