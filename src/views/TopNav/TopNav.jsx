import { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, BookOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './TopNav.scss'
const items = [
  {
    label: '首页',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: '教程',
    key: 'learn',
    icon: <BookOutlined />,
  },
  {
    label: '关于',
    key: 'about',
    icon: <ExclamationCircleOutlined />
  },
];

const TopNav = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className='topnav'>
      <img src={require("../../static/images/logo.svg").default} alt="" />
      <Menu onClick={onClick} selectedKeys={[current]} className="nav" theme="dark" mode="horizontal" items={items} />
    </div>
  );
};

export default TopNav;