
import { useAllProductQuery, useRemoveProductsMutation } from "../../redux/features/product/productApi";
import MyTable from "../../components/table/MyTable";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import Swal from "sweetalert2";
import { removeProductFromState } from "../../redux/features/product/productSlice";
import { setMyState } from "../../redux/features/myState/myStateSlice";

const EditItem = () => {
  
  const { data, isLoading } = useAllProductQuery(undefined);
  const [bulkDelete] = useRemoveProductsMutation();
  const { productIds } = useAppSelector((state: RootState) => state.selectedItem)
  const dispatch=useAppDispatch();
  dispatch(setMyState(false))
  const productData = {
    productIds: productIds
  }
  // console.log('redux',productIds);
  const handleBulkDelete = () => {
    if(productIds.length===0){
      return alert("please select at least one product")
    }
   Swal.fire({
    title: 'Are you sure?',
    text: "are you want to delete it!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result)=>{
    if (result.isConfirmed) {
      // User confirmed, proceed with deletion
     bulkDelete(productData)
        .then(() => {
          dispatch(removeProductFromState());
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
  })
  }

  return (
    <div className="">
      <div className="container mx-auto px-4 ">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-bold leading-tight">Products</h2>
          </div>
          <div className="flex justify-end">
            <Button type="primary" size="large" onClick={handleBulkDelete} className="bg-slate-900">Bulk Delete</Button>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-y-auto overflow-x-auto  h-[490px]">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              {/* reuseable table */}
              {
                  data?.data.length===0?
                  <div className="">
                  <p className="text-xl font-bold text-center my-10">Empty</p>
                </div>:
              <MyTable data={data?.data} isUpdate={true} isLoading={isLoading} isButton={false} />

              }


              {/* <div
                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button
                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  <button
                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div> */}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItem;