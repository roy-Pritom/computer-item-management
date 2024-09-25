import { Layout, Button, theme } from 'antd';
import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import { toast } from 'sonner';
const { Header, Content } = Layout;


const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch=useAppDispatch();
  const handleLogout=()=>{
    dispatch(logout())
    toast.success('Logged out')
  }
  return (
    <Layout className='h-[100vh] '>
      <SideBar collapsed={collapsed} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Button onClick={handleLogout} className='bg-gray-900 text-white'>Logout</Button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >

          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;