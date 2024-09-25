import { useState } from 'react';
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useRegisterMutation } from '../redux/features/auth/authApi';
import { toast } from 'sonner';

const { Option } = Select;
const Register = () => {
    const [register]=useRegisterMutation();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onFinish=async(values:any)=>{
        const toastId=toast.loading('loading...')
      try{
         await register(values);
         toast.success('successfully register',{id:toastId,duration:2000})
         setOpen(false)
       
      }catch(err){
        console.log(err);
      }
    }
    return (
        <>

            <p className='cursor-pointer text-blue-500' onClick={showDrawer} >
                Create New account
            </p>
            <Drawer
                title="Create a new account"
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                       
                    </Space>
                }
            >
                <Form layout="vertical"
                onFinish={onFinish}
                hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="firstName"
                                label="First Name"
                                rules={[{ required: true, message: 'Please enter first name' }]}
                            >
                                <Input type='text' placeholder="Please enter first name" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                rules={[{ required: true, message: 'Please enter last name' }]}
                            >
                                <Input type='text' placeholder="Please enter last name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[{ required: true, message: 'Please select gender' }]}
                            >
                                <Select placeholder="Please select gender">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="type"
                                label="Type"
                                rules={[{ required: true, message: 'Please choose the type' }]}
                            >
                                <Select placeholder="Please choose the type">
                                    <Option value="myself">For Myself</Option>
                                    <Option value="business">For Business</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, message: 'Please enter email' }]}
                            >
                                <Input type='email' placeholder="Please enter email" />

                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[{ required: true, message: 'Please enter password' }]}
                            >
                                                <Input type='password' placeholder="Please enter password" />

                            </Form.Item>
                        </Col>
                    </Row>
                    {/* <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="please enter url description" />
                            </Form.Item>
                        </Col>
                    </Row> */}
                
                        <Button type='primary' htmlType='submit' className='bg-gray-800 '>
                            Signup
                        </Button>
                    
                </Form>
            </Drawer>

        </>
    );
};

export default Register;