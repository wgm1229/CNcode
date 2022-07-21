import { BookOutlined, HomeOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useState } from 'react'
import './TopNav.scss'
import logo from '../../static/images/logo.svg'
import { useNavigate } from 'react-router-dom'
const items = [
  {
    label: '首页',
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label: '教程',
    key: 'course',
    icon: <BookOutlined />
  },
  {
    label: '关于',
    key: 'about',
    icon: <ExclamationCircleOutlined />
  }
]

/* 顶部导航 */
const TopNav: React.FC = () => {
  const [current, setCurrent] = useState('mail')
  const navigate = useNavigate()
  const onClick = (e: any) => {
    setCurrent(e.key)
    navigate(`/${e.key}`)
  }
  return (
    <div className="topnav">
      <img src={logo} />
      <Menu className="nav" onClick={onClick} selectedKeys={[current]} theme="dark" mode="horizontal" items={items} />
    </div>
  )
}
export default TopNav
