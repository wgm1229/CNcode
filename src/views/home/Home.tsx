import { useState } from 'react'
import './home.scss'
import List from './list/List'
type nav = {
  label: string
  value: string
  // active?: boolean
}
function Home() {
  const leftNav: Array<nav> = [
    {
      label: '全部',
      value: 'all'
    },
    {
      label: '精华',
      value: 'good'
    },
    {
      label: '分享',
      value: 'share'
    },
    {
      label: '问答',
      value: 'ask'
    },
    {
      label: '招聘',
      value: 'gold'
    },
    {
      label: '测试',
      value: 'test'
    }
  ]
  const [currNav, setCurrNav] = useState<string>('all')
  const changeNav = (nav: nav) => {
    setCurrNav(nav.value)
  }
  return (
    <div className="home">
      <div className="left">
        {leftNav.map((nav) => {
          return (
            <span className={currNav === nav.value ? 'active' : ''} key={nav.value} onClick={() => changeNav(nav)}>
              {nav.label}
            </span>
          )
        })}
      </div>
      <div className="right">
        <List />
      </div>
    </div>
  )
}
export default Home
