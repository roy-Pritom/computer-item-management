import { Layout, Menu} from 'antd';
const {  Sider} = Layout;


import { FaCartPlus, FaChartBar, FaDesktop, FaEdit, FaEye, FaHistory, FaSalesforce } from "react-icons/fa";
import {
    UserOutlined,
  } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

//   sidebar
const items=[
  {
    key:'4',
    icon:<FaChartBar/>,
    label:<NavLink to='/dashboard/user-dashboard'>Dashboard</NavLink>
  },
            
    {
      key: '1',
      icon: <FaDesktop />                ,
      label: 'Computer Management',
      children:[
        {
          key:'11',
          icon:<FaEye />,
          label:<NavLink to='/dashboard/all-item'>All Item</NavLink>
        },
        {
          key:'12',
          icon:<FaCartPlus />,
          label:<NavLink to='/dashboard/add-item'>Add Item</NavLink>
        },
        {
          key:'13',
          icon:<FaEdit />,
          label:<NavLink to='/dashboard/edit-item'>Edit Item</NavLink>
        }
      ]
    },
  
    {
      key: '2',
      icon: <UserOutlined />,
      label: 'Sales Management',
      children:[
        {
          key:'21',
          icon:<FaSalesforce />,
          label:<NavLink to='/dashboard/sale-item'>Sale Item</NavLink>
        },
      ]
    },
  
  
    {
      key: '3',
      icon: <FaHistory />,
      label:<NavLink to='/dashboard/sale-history'>Sale History</NavLink>,
    },
  ]
const SideBar = ({collapsed}:{collapsed:boolean}) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
    );
};

export default SideBar;