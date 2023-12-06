import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getOrders } from '../../API';

const Orders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
        setDataSource(res.products);
        setLoading(false);
    })
  }, []);

  return (
    <>
      <h2 style={{fontSize: '28px', width: '85vw'}}>Inventory</h2>
      <Table 
      columns={[
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (price) => {
              return <span>${price}</span>
            }
        },
        {
            title: 'DiscountedPrice',
            dataIndex: 'discountedPrice',
            render: (price) => {
              return <span>${price}</span>
            }
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
          title: 'Total',
          dataIndex: 'total',
        },
      ]}
      loading={loading}
      dataSource={dataSource}
      pagination={false}
      ></Table>
    </>
  )
}

export default Orders;
