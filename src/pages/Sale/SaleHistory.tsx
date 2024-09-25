import moment from "moment";
import Loader from "../../components/ui/Loader";
import { useGetAllSaleQuery } from "../../redux/features/sale/saleApi";
import { TSale} from "../../types/saleType";
import SaleFilterOption from "../../components/ui/SaleFilterOption";
import { useState } from "react";



const SaleHistory = () => {
    const [value,setValue]=useState('');
    const [isFilter,setIsFilter]=useState(false);
    const { data, isLoading } = useGetAllSaleQuery(value);
    const formattedDate = moment(data?.data?.date).format("MMMM DD, YYYY h:mm:ss A");

const handleFilterChange=(e:any)=>{
    const { value } = e.target;
    if(value==='weekly' || value==="daily" || value==="yearly" || value==="monthly"){
        setIsFilter(true);
        console.log('l');
    }
    else{
        setIsFilter(false)
    }
    console.log(value);
    setValue(value);
}
if(data?.data.length===0){
    return     <div className="">
    <p className="text-xl font-bold text-center my-10">Empty</p>
  </div>
}
    return (
        <div className="relative ">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-bold leading-tight">Sale History</h2>
                    </div>
                    <SaleFilterOption handleFilterChange={handleFilterChange} />
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-hidden overflow-auto  h-[470px]">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        
                        {
                            isFilter ? 
                        (
                                <table className="min-w-full leading-normal 
                            
                                " >
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Sales Count
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Total Sale
                                            </th>
    
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            isLoading ?
                                                <div className="absolute top-20  left-0 w-full h-full flex justify-center items-center">
                                                    <Loader />
                                                </div>
                                                :
                                                data?.data?.map((item:any,index:number) => <tr
                                                    key={index}
                                                >
                                   <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <span
                                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden
                                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                            
                                    <span className="relative">
                                        {
                                            value==='weekly'?
                                          <p>{item._id?.year} week{item._id?.week}</p>
                                            :
                                            moment(item._id).format("MMMM DD, YYYY")
                                        }
                                                                
                                                
                                                            </span>
                            </span>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {item?.salesCount}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {item.totalSales}
                                                        </p>
                                                    </td>
                                                   
    
    
    
                                                </tr>)
                                        }
    
    
                                    </tbody>
                                </table>
                            ):
                            (
                                <table className="min-w-full leading-normal 
                            
                                " >
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Product Id
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Buyer Name
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Quantity
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Date
                                            </th>
    
    
    
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            isLoading ?
                                                <div className="absolute top-20  left-0 w-full h-full flex justify-center items-center">
                                                    <Loader />
                                                </div>
                                                :
                                                data?.data?.map((item: TSale) => <tr
                                                    key={item._id}
                                                >
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex items-center">
    
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {item.productId}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {item.buyerName}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {item.quantity}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <span
                                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden
                                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                            <span className="relative">{formattedDate}</span>
                                                        </span>
                                                    </td>
    
    
    
                                                </tr>)
                                        }
    
    
                                    </tbody>
                                </table>
                            )
                        }
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleHistory;