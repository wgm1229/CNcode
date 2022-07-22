import { useState } from 'react'
import './home.scss'
import List from './list/List'
import topicType from '../../static/js/topicType'
type nav = {
  label: string
  value: string
  // active?: boolean
}
function Home() {
  const leftNav = topicType
  const [activeNav, setActiveNav] = useState<string>('all') //当前左侧选中的菜单
  const changeNav = (nav: nav) => {
    //切换左侧菜单
    setActiveNav(nav.value)
  }
  return (
    <div className="home">
      <div className="left">
        {leftNav.map((nav) => {
          return (
            nav.listshow && (
              <span className={activeNav === nav.value ? 'active' : ''} key={nav.value} onClick={() => changeNav(nav)}>
                {nav.label}
              </span>
            )
          )
        })}
      </div>
      <div className="right">
        <List tab={activeNav} />
      </div>
    </div>
  )
}
export default Home
