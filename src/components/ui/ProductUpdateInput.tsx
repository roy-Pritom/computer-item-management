import { Button, Form, Input, InputNumber, Select, Spin } from 'antd';
import { useAddProductMutation, useGetSingleProductQuery, useUpdateProductMutation } from '../../redux/features/product/productApi';
import { toast } from 'sonner';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
type TUpdateInputProps = {
    productId: string;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

}
const ProductUpdateInput = ({ productId, setIsModalOpen }: TUpdateInputProps) => {
    const { isDuplicate } = useAppSelector((state: RootState) => state.myState)
    const [UpdateProduct] = useUpdateProductMutation();
    const [addProduct] = useAddProductMutation();
    const { data, isLoading } = useGetSingleProductQuery(productId);
    const { name, price, stockQuantity, category, brand, compatibility, interfaceType, condition, capacity, color } = data?.data || {};

    const initialValues = {
        name, price, stockQuantity, category, brand, compatibility, interfaceType, condition, capacity, color
    }

    const onFinish = async (values: object) => {
        const toastId = toast.loading('processing')
        console.log(values);
        try {
            const options = {
                productId: productId,
                data: values
            }
            if (isDuplicate === true) {
                // for duplicate create
                const r = await addProduct(values)
                console.log(r);
                toast.success('successfully created', { id: toastId, duration: 2000 })
                setIsModalOpen(false)

            }
            else {
                // for update
                await UpdateProduct(options)
                toast.success('successfully updated', { id: toastId, duration: 2000 })
                setIsModalOpen(false)

            }
        } catch (err) {
            toast.error('something went wrong!', { id: toastId, duration: 2000 })
        }
    }
    return (
        <div>
            {
                isLoading ? <Spin><p>Loading..</p></Spin>
                    :
                    <Form
                        onFinish={onFinish}
                        initialValues={initialValues}
                    >
                        <div className='grid grid-cols-2 gap-4'>
                            <Form.Item className="form-item-custom" label="name" name="name">
                                <Input type='text' />
                            </Form.Item>
                            <Form.Item className="form-item-custom" label="price" name="price">
                                <InputNumber type='number' />
                            </Form.Item>
                            <Form.Item className="form-item-custom" label="quantity" name="stockQuantity">
                                <InputNumber type='number' />
                            </Form.Item>
                            <Form.Item className="form-item-custom" label="category" name="category">
                                <Input type='text' />
                            </Form.Item>
                            <Form.Item className="form-item-custom" label="brand" name="brand">
                                <Input type='text' />
                            </Form.Item>
                            <Form.Item className="form-item-custom" label="interface" name="interfaceType">
                                <Input type='text' />
                            </Form.Item>
                            <Form.Item className="form-item-custom" label="compatibility" name="compatibility">
                                <Input type='text' />
                            </Form.Item>
                            <Form.Item className="form-item-custom" label="condition" name="condition">
                                <Select >
                                    <Select.Option value="new">New</Select.Option>
                                    <Select.Option value="used">Used</Select.Option>
                                </Select>

                            </Form.Item>
                            <Form.Item className="form-item-custom" label="capacity" name="capacity">
                                <Input type='text' />
                            </Form.Item>
                            <Form.Item className="form-item-custom" label="color" name="color">
                                <Input type='text' />
                            </Form.Item>
                        </div>


                        <Button htmlType='submit' type='primary' className='w-full bg-slate-900'>{
                            isDuplicate ? 'Duplicate' : 'Update'
                        }</Button>

                    </Form>
            }
        </div>
    );
};

export default ProductUpdateInput;