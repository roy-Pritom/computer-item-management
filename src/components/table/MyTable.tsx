import { Button } from "antd";
import { TProduct } from "../../types/productType";
import Loader from "../ui/Loader";
import { FaTrashAlt } from "react-icons/fa";
import MyModal from "../modal/MyModal";
import { useRemoveProductMutation } from "../../redux/features/product/productApi";
import Swal from "sweetalert2";
import Checkbox from "antd/es/checkbox/Checkbox";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectProduct } from "../../redux/features/product/productSlice";
import { RootState } from "../../redux/store";
const MyTable = ({data,isLoading,isButton,isUpdate}:{data:TProduct[];isLoading:boolean;isButton:boolean;isUpdate:boolean;}) => {

  const {isDuplicate}=useAppSelector((state:RootState)=>state.myState)
    // for delete
    const [removeProduct]=useRemoveProductMutation();
    const handleDelete=(productId:string)=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "are you want to delete it!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            // User confirmed, proceed with deletion
            removeProduct(productId)
              .then(() => {
                Swal.fire({
                  title: 'Deleted!',
                  text: 'Your product has been deleted.',
                  icon: 'success',
                });
              })
              .catch((error) => {
                Swal.fire({
                  title: 'Error',
                  text: `Failed to delete product: ${error.message}`,
                  icon: 'error',
                });
              });
          }
        });
      }

      const dispatch=useAppDispatch();
      const [checkedItems, setCheckedItems] = useState<string[]>([]);
      // const [isChecked,setIsChecked]=useState(false);


      // handle multiple select item for delete
      const handleCheck = (itemId: string, checked: boolean): void => {
        let newCheckedItems: string[];
    
        if (checked) {
          newCheckedItems = [...checkedItems, itemId];
          // setIsChecked(true);
        } else {
          newCheckedItems = checkedItems.filter(item => item !== itemId);
          // setIsChecked(false);

        }
    
        setCheckedItems(newCheckedItems);
        dispatch(selectProduct(newCheckedItems));
      };

    return (
        <table className={`min-w-full leading-normal`}>
        <thead>
          <tr>
            {
              isUpdate &&
              <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Select
            </th>
            }
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Price
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Quantity
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Category
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Brand
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Compatibility
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Interface
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Condition
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Capacity
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Color
            </th>

            {
                isButton &&
                <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            }
            {
                isUpdate &&
                <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            }
            {
                isDuplicate &&
                <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            }

          </tr>
        </thead>
        <tbody>
          {
            isLoading ?
            <div className="absolute top-20  left-0 w-full h-full flex justify-center items-center">
            <Loader/>
          </div>
              :
              data?.map((item: TProduct) => <tr
                key={item._id}
              >
               {
                isUpdate &&
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">

                  <div className="ml-3">
                    <Checkbox
                      onChange={e => handleCheck(item._id, e.target.checked)}
                      checked={checkedItems.includes(item._id)}
                    />
                  </div>
                </div>
              </td>
               }

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">

                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    ${item.price}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.stockQuantity}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">{item.category}</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.brand}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.compatibility}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.interfaceType}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.condition}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.capacity}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.color}
                  </p>
                </td>
                {
                  isButton &&
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <MyModal isEdit={false} productId={item._id}/>
                </td>
                }
                {
                  isUpdate &&
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-2">
                    
                  <Button type="primary" className="bg-red-500" onClick={()=>handleDelete(item._id)}><FaTrashAlt /></Button>
                   <MyModal isEdit={true} productId={item._id}/>
                
              </td>
                }
                {
                  isDuplicate &&
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-2">
                    
                  
                   <MyModal isEdit={true} productId={item._id}/>
                
              </td>
                }

              </tr>)
          }


        </tbody>
      </table>
    );
};

export default MyTable;