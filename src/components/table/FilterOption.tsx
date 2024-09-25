import { FaAngleDown } from 'react-icons/fa';
import { TProduct } from '../../types/productType';
import { ChangeEvent } from 'react';
import { useAllProductQuery } from '../../redux/features/product/productApi';
interface ChildComponentProps {
    handleFilterChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  }
const FilterOption = ({handleFilterChange}:ChildComponentProps) => {
    const { data } = useAllProductQuery(undefined);
    return (
        <div className="my-2 flex sm:flex-row flex-col">
            <div className="grid lg:grid-cols-3 gird-cos-1 gap-1">
              
              <div className="relative ">
                <select
                name='name'
                onChange={handleFilterChange}
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500 ">
                  <option value='' selected >FilterByName default</option>
                  {
                 data?.data?.map((el:TProduct)=><option 
                 value={el.name} key={el._id}>{el.name}</option>
                    )
                  }
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
                 <FaAngleDown  />
                </div>
              </div>
              <div className="relative ">
                <select
                name='category'
                onChange={handleFilterChange}
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500 ">
                  <option value='' selected >FilterByCategory default</option>
                  {
                 data?.data?.map((el:TProduct)=><option 
                 value={el.category} key={el._id}>{el.category}</option>
                    )
                  }
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
                 <FaAngleDown  />
                </div>
              </div>


              <div className="relative">
                <select
                 name='brand'
                 onChange={handleFilterChange}
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value='' selected >FilterByBrand default</option>
                  {
                    data?.data?.map((el:TProduct)=><option
                    value={el.brand} key={el._id}>{el.brand}</option>
                    )
                  }
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                 <FaAngleDown />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value='' selected >FilterByCompatibility default</option>
                  {
                    data?.data?.map((el:TProduct)=><option
                    value={el.compatibility} key={el._id}>{el.compatibility}</option>
                    )
                  }
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                 <FaAngleDown />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value='' selected >FilterByInterface default</option>
                  {
                    data?.data?.map((el:TProduct)=><option
                    value={el.interfaceType} key={el._id}>{el.interfaceType}</option>
                    )
                  }
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                 <FaAngleDown />
                </div>
              </div>
              <div className="relative">
                <select
                name='condition'
                onChange={handleFilterChange}
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value='' selected >FilterByCondition default</option>
                     <option value="new">new</option>
                     <option value="used">used</option>
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                 <FaAngleDown />
                </div>
              </div>              
              <div className="relative">
                <select
                name='capacity'
                onChange={handleFilterChange}
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value='' selected >FilterByCapacity default</option>
                  {
                    data?.data?.map((el:TProduct)=><option
                    value={el.capacity} key={el._id}>{el.capacity}</option>
                    )
                  }
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                 <FaAngleDown />
                </div>
              </div>   
              <div className="relative">
                <select
                name='color'
                onChange={handleFilterChange}
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value='' selected >FilterByColor default</option>
                  {
                    data?.data?.map((el:TProduct)=><option
                    value={el.color} key={el._id}>{el.color}</option>
                    )
                  }
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                 <FaAngleDown />
                </div>
              </div>  

           <div className="flex">
           <div className="relative">
                <select
                name='maxPrice'
                onChange={handleFilterChange}
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value='' selected >FilterByMaxPrice default</option>
                  {
                    data?.data?.map((el:TProduct)=><option
                    value={el.price} key={el._id}>{el.price}</option>
                    )
                  }
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                 <FaAngleDown />
                </div>
              </div>  
              <div className="relative">
                <select
                name='minPrice'
                onChange={handleFilterChange}
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value='' selected >FilterByMinPrice default</option>
                  {
                    data?.data?.map((el:TProduct)=><option
                    value={el.price} key={el._id}>{el.price}</option>
                    )
                  }
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                 <FaAngleDown />
                </div>
              </div>  
            </div> 


            </div>
          </div>
    );
};

export default FilterOption;