import { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, BookOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import './TopNav.scss'
const items = [
  {
    label: '首页',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: '教程',
    key: 'course',
    icon: <BookOutlined />,
  },
  {
    label: '关于',
    key: 'about',
    icon: <ExclamationCircleOutlined />
  },
];

const TopNav = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`)
    // console.log('click ', e);
  };

  return (
    <div className='topnav'>
      <img src={require("../../static/images/logo.svg").default} alt="" />
      <Menu onClick={onClick} selectedKeys={[current]} className="nav" theme="dark" mode="horizontal" items={items} />
    </div>
  );
};

export default TopNav;