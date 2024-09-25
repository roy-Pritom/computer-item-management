import { useState } from "react";
import FilterOption from "../../components/table/FilterOption";
import { useAllProductQuery } from "../../redux/features/product/productApi"

import MyTable from "../../components/table/MyTable";
import { useAppDispatch } from "../../redux/hooks";
import { setMyState } from "../../redux/features/myState/myStateSlice";


const AllItem = () => {
  const dispatch=useAppDispatch();
  dispatch(setMyState(true))
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    compatibility: '',
    minPrice: '',
    maxPrice: '',
    interfaceType: '',
    condition: '',
    capacity: '',
    name: '', 
    color:'',
  });

  const { data, isLoading } = useAllProductQuery(filters);


  // Handlers for changing filter states
  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="relative">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-bold leading-tight">Products</h2>
          </div>
          <FilterOption handleFilterChange={handleFilterChange} />
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-y-auto overflow-x-auto h-[370px]">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              {/* reuseable table */}
              {
                data?.data.length===0?
                <div className="">
                  <p className="text-xl font-bold text-center my-10">Empty</p>
                </div>
                :
              <MyTable data={data?.data} isLoading={isLoading} isButton={false} isUpdate={false}/>
              }
        
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllItem