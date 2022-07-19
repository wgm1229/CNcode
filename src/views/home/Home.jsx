import { Fragment, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { updateTab } from "../../store/homeReducer"
import Footer from "../../components/footer/Footer"
import topicType from "../../static/js/topicType"
import './Home.scss'
function Home () {
  const dispatch = useDispatch()
  const leftNav = topicType
  let { type } = useParams()
  const [acvtiveNav, setAcvtiveNav] = useState(type)
  const changeNav = (type) => {
    setAcvtiveNav(type)
    dispatch(
      updateTab(type)
    )
  }
  return (
    <Fragment>
      <div className="home">
        <div className="leftNav" >
          {leftNav.map(nav => nav.listshow && <Link
            className={[acvtiveNav === nav.value ? 'active' : ''].join(' ')}
            key={nav.value}
            to={`/home/${nav.value}`}
            onClick={() => changeNav(nav.value)}
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