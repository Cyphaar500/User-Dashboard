import React, { useEffect, useState } from 'react';
import { Avatar, Table } from 'antd';
import { getCustomers } from '../../API';

const Customers = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
        setDataSource(res.users);
        setLoading(false);
    })
  }, []);

  return (
    <>
      <h2 style={{fontSize: '28px', width: '85vw'}}>Inventory</h2>
      <Table 
      columns={[
        {
            title: 'Photo',
            dataIndex: 'image',
            render: (link) => {
              return <Avatar src={link}/>
            }
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            render: (address) => {
              return <span>{address.address}, {address.city}</span>
            }
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

export default Customers;
