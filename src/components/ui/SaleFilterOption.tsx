import { ChangeEvent } from "react";
import { FaAngleDown } from "react-icons/fa";

interface ChildComponentProps {
    handleFilterChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  }
const SaleFilterOption = ({handleFilterChange}:ChildComponentProps) => {
    return (
        <div className="my-2 flex sm:flex-row flex-col">
            <div className="grid grid-cols-3 gap-1">
             
              <div className="relative ">
                <select
                name='history'
                onChange={handleFilterChange}
                  className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500 ">
                  <option value='' selected  >FilterBySaleHistory default</option>
                  <option>daily</option>
                  <option>weekly</option>
                  <option>monthly</option>
                  <option>yearly</option>
                </select>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
                 <FaAngleDown  />
                </div>
              </div>
             


            </div>
         
            
          </div>
    );
};

export default SaleFilterOption;