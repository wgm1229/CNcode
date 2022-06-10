import { Fragment, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import topicType from "../../static/js/topicType"
import './home.scss'
function Home () {
  const leftNav = topicType
  let { type } = useParams()
  const [acvtiveNav, setAcvtiveNav] = useState(type)
  return (
    <Fragment>
      <div className="home">
        <div className="leftNav" >
          {leftNav.map(nav => <Link
            className={[acvtiveNav === nav.value ? 'active' : ''].join(' ')}
            key={nav.value}
            to={`/home/${nav.value}`}
            onClick={() => setAcvtiveNav(nav.value)}
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