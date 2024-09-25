import { useState } from "react";
import MyTable from "../../components/table/MyTable";
import { useAllProductQuery } from "../../redux/features/product/productApi";
import { useAppDispatch } from "../../redux/hooks";
import { setMyState } from "../../redux/features/myState/myStateSlice";

const SaleIItem = () => {
  const [inputValue, setInputValue] = useState('');
    const { data, isLoading } = useAllProductQuery({name:inputValue});
    const dispatch=useAppDispatch();
    dispatch(setMyState(false))

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);  
    };
    return (
        <div className="relative ">
             <div className="block relative">
              <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                  <path
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                  </path>
                </svg>
              </span>
              <input placeholder="Search" 
                value={inputValue}
                onChange={handleInputChange}
                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
            </div>
            <div className="mt-2">
            <h2 className="text-2xl font-bold leading-tight">Products</h2>
          </div>
      <div className="container mx-auto px-4 sm:px-8 overflow-y-auto overflow-x-hidden h-[500px]">
        <div className="py-8">
         
  
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              {/* reuseable table */}
              {
                data?.data.length===0?
                <div className="">
                <p className="text-xl font-bold text-center my-10">Empty</p>
              </div>:
              <MyTable data={data?.data} isLoading={isLoading} isButton={true} isUpdate={false}/>
              }
             
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SaleIItem;