import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { 
  AppstoreOutlined, 
  ShopOutlined, 
  ShoppingCartOutlined, 
  UserOutlined 
} from '@ant-design/icons';
import './sidemenu.css';

const SideMenu = () => {
  const navigate = useNavigate()
  return (
    <div className='SideMenu'>
      <Menu
      className='SideMenuVertical'
      mode='vertical'
      onClick={(item) => {
        // item.key
        navigate(item.key)
      }}

      items={[
        {
          label: 'Dashboard',
          key: '/',
          icon: <AppstoreOutlined />,
        },
        {
          label: 'Inventory',
          key: '/inventory',
          icon: <ShopOutlined />,
        },
        {
          label: 'Orders',
          key: '/orders',
          icon: <ShoppingCartOutlined />,
        },
        {
          label: 'Customers',
          key: '/customers',
          icon: <UserOutlined />,
        },

        ]}>

      </Menu>
    </div>
  )
}

export default SideMenu;
