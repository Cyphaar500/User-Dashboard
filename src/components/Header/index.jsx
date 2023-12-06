import React, { useState, useEffect} from 'react';
import { Avatar, Badge, Drawer, List, Space } from 'antd';
import { FaUser } from 'react-icons/fa';
import { BellFilled, MailOutlined } from '@ant-design/icons';
import { getComments, getOrders } from '../../API';
import './header.css';

const Header = () => {
  const [comments, setComments] = useState([])
  const [orders, set0rders] = useState([])
  const [commentsOpen, setCommentsOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    })
    getOrders().then((res) => {
      set0rders(res.products);
    })
  }, []);

  return (
    <div className='AppHeader'>
      <Avatar size={40} icon={<FaUser />}/>
      <h2 className='Name'>CYPHAAR-TECH</h2>
      <Space className='Badge'>
        <Badge count={comments.length} dot>
          <MailOutlined 
            style={{fontSize: '24px'}}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled 
            style={{fontSize: '24px'}}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer 
        title='Comments' 
        open={commentsOpen} 
        onClose={() => {
          setCommentsOpen(false)
        }}
        maskClosable
        >
        <List 
        dataSource={orders} 
        renderItem={(items) => {
          return <List.Item><span style={{fontWeight: 'bolder'}}>{items.title}</span> has been ordered!</List.Item>
        }}></List>
      </Drawer>
      <Drawer 
        title='Notifications' 
        open={notificationsOpen} 
        onClose={() => {
          setNotificationsOpen(false)
        }}
        maskClosable
        >
        <List 
        dataSource={comments} 
        renderItem={(items) => {
          return <List.Item>{items.body}</List.Item>
        }}></List>
      </Drawer>
    </div>
  )
}

export default Header;
