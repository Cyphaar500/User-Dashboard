import React, { useEffect, useState } from 'react';
import { Avatar, Rate, Table } from 'antd';
import { getInventory } from '../../API';

const Inventory = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
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
            title: 'Thumbnail',
            dataIndex: 'thumbnail',
            render: (link) => {
              return <Avatar src={link}/>
            }
        },
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
            title: 'Rating',
            dataIndex: 'rating',
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled/>
            }
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
      ]}
      loading={loading}
      dataSource={dataSource}
      pagination={{
        pageSize: 7,
      }}
      ></Table>
    </>
  )
}

export default Inventory;
