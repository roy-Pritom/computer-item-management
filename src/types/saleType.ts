export type TSale={
    _id:string;
    productId:string;
    quantity:number; 
    buyerName: string;
    date:string;
 }

 export type TSaleHistory={
    _id:string;
    totalSales:number;
    salesCount:number;
 }
 export type TWeekSaleHistory={
    _id:{
        year:string;
        week:string;
    };
    totalSales:number;
    salesCount:number;
 }