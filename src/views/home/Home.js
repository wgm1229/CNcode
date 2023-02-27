import { Component } from "react"
import { Link, Outlet } from "react-router-dom"
import topicType from "@/static/js/topicType.js"
import withRouter from "../../static/js/withRouter"
import "./Home.scss"
class Home extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    leftNav: topicType,
    acvtiveNav: "",
  }
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    this.setState({
      acvtiveNav: this.props.params.type,
    })
  }
  render() {
    return (
      <div className="home">
        <div className="leftNav">
          {this.state.leftNav.map(
            (nav) =>
              nav.listshow && (
                <Link
                  className={[
                    this.state.acvtiveNav === nav.value ? "active" : "",
                  ].join(" ")}
                  to={`/home/${nav.value}`}
                  key={nav.value}
                  onClick={() => this.setState({ acvtiveNav: nav.value })}
                >
                  {nav.label}
                </Link>
              ),
          )}
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
