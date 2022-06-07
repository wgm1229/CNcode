import { Fragment, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import './home.scss'
function Home () {
  const leftNav = [
    { label: '全部', path: 'all' },
    { label: '精华', path: 'good' },
    { label: '分享', path: 'share' },
    { label: '问答', path: 'talk' },
    { label: '招聘', path: 'recruit' },
    { label: '测试', path: 'test' },
  ]
  const [acvtiveNav, setAcvtiveNav] = useState('all')
  return (
    <Fragment>
      <div className="home">
        <div className="leftNav" >
          {leftNav.map(nav => <Link
            className={[acvtiveNav === nav.path ? 'active' : ''].join(' ')}
            key={nav.path}
            to={`/home/${nav.path}`}
            onClick={() => setAcvtiveNav(nav.path)}
          >{nav.label}</Link>)}
        </div>
        <div className='right'>
          <Outlet />
        </div>
      </div >
      {<Footer />}
    </Fragment>
  )
}
export default Home