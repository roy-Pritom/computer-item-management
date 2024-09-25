import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
import { toast } from 'sonner';
import { useAddProductMutation } from '../../redux/features/product/productApi';
import Loader from '../../components/ui/Loader';
import { TProduct } from '../../types/productType';


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const AddItem = () => {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const onFinish = async (values: TProduct) => {
const toastId=toast.loading('Processing')
    try {
      await addProduct(values);
      toast.success('Product created successfully',{id:toastId,duration:2000})

    } catch (err) {
      toast.error('Something went wrong!',{id:toastId,duration:2000})
    }
  }

  return (
   <div className="">
    <h2 className='font-bold text-2xl'>Add Item</h2>
     <div className={`flex justify-center items-center h-full relative
     mt-10`}>
      <Form
        onFinish={onFinish}
        className={`md:h-full lg:h-full h-[620px] overflow-auto md:overflow-hidden  lg:overflow-hidden bg-purple-100 md:p-14 form-layout rounded-md p-5 ${isLoading ? 'blur' : null}`} {...formItemLayout} variant="filled" style={{ maxWidth: 670 }}>
  
          <div className="lg:grid lg:grid-cols-2">
          <Form.Item className="form-item-custom" label="Name" name="name" rules={[{ required: true, message: 'Please enter product name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please enter price!' }]}
        >
          <InputNumber type='number' style={{ width: '100%' }} />
        </Form.Item>



        <Form.Item
          label="Quantity"
          name="stockQuantity"
          rules={[{ required: true, message: 'Please enter quantity!' }]}
        >
          <InputNumber type='number' style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item className="form-item-custom" label="Category" name="category" rules={[{ required: true, message: 'Please enter category!' }]}>
          <Input type='text' className='' />
        </Form.Item>
        <Form.Item className="form-item-custom" label="Brand" name="brand" rules={[{ required: true, message: 'Please enter brand!' }]}>
          <Input type='text' />
        </Form.Item>
        <Form.Item className="form-item-custom" label="Compatibility" name="compatibility" rules={[{ required: true, message: 'Please enter compatibility!' }]}>
          <Input type='text' />
        </Form.Item>
        <Form.Item className="form-item-custom" label="Interface" name="interfaceType" rules={[{ required: true, message: 'Please enter interface!' }]}>
          <Input type='text' />
        </Form.Item>


        <Form.Item className="form-item-custom" label="Condition" name="condition" rules={[{ required: true, message: 'Please input!' }]}>
          <Select>
            <Select.Option value="new">New</Select.Option>
            <Select.Option value="used">Used</Select.Option>
          </Select>
        </Form.Item>


        <Form.Item className="form-item-custom" label="Capacity" name="capacity" rules={[{ required: true, message: 'Please enter capacity!' }]}>
          <Input type='text' />
        </Form.Item>

        <Form.Item className="form-item-custom" label="Color" name="color" rules={[{ required: true, message: 'Please enter color!' }]}>
          <Input type='text' />
        </Form.Item>
          </div>
      


        <Form.Item className="form-item-custom mr-7 md:mr-0" wrapperCol={{ offset: 2, span: 18 }}>
          <Button type="primary" className='bg-slate-900
       hover:bg-blue-500 w-full  submit-button' htmlType="submit">
            Add Item
          </Button>
        </Form.Item>
      </Form>
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Loader/>
        </div>
      )}
    </div>
   </div>
  )
}

export default AddItem