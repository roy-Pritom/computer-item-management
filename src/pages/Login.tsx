import { Button, Form, Input, Row } from 'antd';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { decodeToken } from '../utils/decodeToken';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import Register from './Register';



type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};
const Login = () => {
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        const toastId = toast.loading('Logging in')
        try {
            const res = await login(values).unwrap();
            //   console.log(res);
            const user = decodeToken(res?.data?.accessToken)
            //   console.log(user);
            // set user in redux state
            dispatch(setUser({ user: user, token: res?.data?.accessToken }))
            toast.success('Logged in', { id: toastId, duration: 2000 })
            navigate('/dashboard/user-dashboard')
        } catch (err) {
            toast.error('Something went wrong', { id: toastId, duration: 2000 })
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row className=' bg-purple-50' justify="center" align="middle" style={{ height: "100vh" }}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className='border pt-10 px-7 pb-5 shadow-lg bg-white rounded-md'

            >
                <Form.Item<FieldType>
                    label="userEmail"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                {/* <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

                <Form.Item className='flex justify-center' >
                    <Button type="primary" className='bg-gray-800 w-[150px]' htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
               <div className="flex gap-1 text-[13px]">
                <p>New to Computech?</p>
                <Register/>
               </div>
            </Form>
        </Row>
    );
};

export default Login;