import { Button, DatePicker, Form, Input, InputNumber } from 'antd';
import { useState } from 'react';
import { useCreateSaleMutation } from '../../redux/features/sale/saleApi';
import { toast } from 'sonner';
import { useGetSingleProductQuery } from '../../redux/features/product/productApi';
import  { Dayjs } from 'dayjs';


const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
  };

  type TSale={
    productId:string;
    quantity:number; 
    buyerName: string;
    date:string;
 }

 type TSaleInputProps={ 
    productId: string;
    setIsModalOpen:React.Dispatch<React.SetStateAction<boolean>> 
}

const SaleInput = ({ productId,setIsModalOpen}:TSaleInputProps) => {
   const {data}=useGetSingleProductQuery(productId);
    const [createSale]=useCreateSaleMutation();

    const [date, setDate] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleDateChange = (date:Dayjs | null, _dateString:string) => {
        // Check if date is not null
        if (date) {
          const formattedDate = date.toISOString();
          setDate(formattedDate)
          // Outputs the date in ISO 8601 format (UTC)
        }
      };

    const onFinish = async (values:TSale) => {
        const toastId=toast.loading('processing')
        try{
            const {quantity,buyerName}=values;

            const saleData={
                productId,
                quantity,
                buyerName,
                date
            }
            await createSale(saleData); 
            toast.success('sale created successfully',{id:toastId,duration:2000})
            setIsModalOpen(false)

        }catch(err){
        toast.error('something went wrong!',{id:toastId,duration:2000})


        }
      
    }
    return (
        <div>
            <Form onFinish={onFinish} >
                <div className='grid grid-cols-2 gap-4'>
                    <Form.Item 
                    label="ItemId" name="productId" className="form-item-custom">
                        <Input readOnly defaultValue={productId} className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm" type='text' />
                    </Form.Item>
                    <Form.Item 
                       rules={[{ required: true, message: 'Please enter quantity!' },
                       { type: 'number', max: data?.data?.stockQuantity, message: `Quantity cannot be greater than ${data?.data?.stockQuantity}` }
                    ]}
                    label="Quantity" name="quantity" 
                    className="form-item-custom">
                        <InputNumber
                         className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm w-full" />
                    </Form.Item>
                    <Form.Item 
                      rules={[{ required: true, message: 'Please enter buyer name!' }]}
                    label="Buyer" name="buyerName" className="form-item-custom">
                        <Input className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm" type='text' />
                    </Form.Item>
            

                    <Form.Item name="date" label="Date pic"
                    className="form-item-custom" {...config}>
                        <DatePicker onChange={handleDateChange}/>
                    </Form.Item>

                </div>



                <Button htmlType='submit' type='primary' className='w-full bg-slate-900'>Sell</Button>

            </Form>

        </div>
    );
};

export default SaleInput;