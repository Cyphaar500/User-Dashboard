import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getOrders } from '../../API';
import './dashboard.css';

const DashboardTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
        setDataSource(res.products.splice(0, 4));
        setLoading(false);
    })
  }, []);

  return (
    <>
      <h2 style={{fontSize: '18px', marginTop: '24px'}}>Recent Orders</h2>
      <Table 
      className='table'
      columns={[
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'discountedPrice',
        },
      ]}
      loading={loading}
      dataSource={dataSource}
      pagination={false}
      ></Table>
    </>
  )
}

export default DashboardTable;
