import { useState, useEffect } from 'react';
import { Space } from 'antd';
import { getOrders, getCustomers, getInventory } from '../../API';
import { DollarCircleOutlined, ShoppingOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import DashboardCard from './DashboardCard';
import DashboardTable from './DashboardTable';
import DashboardChart from './DashboardChart';
import './dashboard.css';

const DashboardPage = () => {
  const [orders, set0rders] = useState(0)
  const [inventory, setInventory] = useState(0)
  const [customer, setCustomer] = useState(0)
  const [revenue, setRevenue] = useState(0)

  useEffect(() => {
    getOrders().then((res) => {
      set0rders(res.total);
      setRevenue(res.discountedTotal)
    })
    getCustomers().then((res) => {
      setCustomer(res.total);
    })
    getInventory().then((res) => {
      setInventory(res.total);
    })
  }, []);

  return (
    <div className='flex'>
      <h2 style={{fontSize: '28px'}}>Dashboard</h2>
      <Space direction='horrizontal'>
        <DashboardCard 
          icon={<ShoppingCartOutlined className='icon'
            style={{color: 'green'}}/>}
          title={'Orders'} 
          value={orders} 
        />
        <DashboardCard 
          icon={<ShoppingOutlined className='icon'
            style={{color: 'red'}}/>}
          title={'Inventory'} 
          value={inventory} 
        />
        <DashboardCard 
          icon={<UserOutlined className='icon'
            style={{color: 'blue'}}/>}
          title={'Customer'} 
          value={customer} 
        />
        <DashboardCard 
          icon={<DollarCircleOutlined className='icon'
            style={{color: 'purple'}}/>}
          title={'Revenue'} 
          value={revenue} 
        />
      </Space>
      <Space className='statistics'>
        <DashboardTable />
        <DashboardChart />
      </Space>
    </div>
  )
}

export default DashboardPage;
