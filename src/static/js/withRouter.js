//用于解决class组件无法使用react-router-dom中的方法
import { useLocation, useNavigate, useParams } from "react-router-dom"

// eslint-disable-next-line react/display-name
const withRouter = (Component) => (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()

  return (
    <Component
      {...props}
      location={location}
      navigate={navigate}
      params={params}
    />
  )
}

export default withRouter
