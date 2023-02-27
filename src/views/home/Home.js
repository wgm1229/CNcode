import { Component } from "react"
import { Link, Outlet } from "react-router-dom"
import topicType from "@/static/js/topicType.js"
import withRouter from "@/static/js/withRouter"
import "./Home.scss"
import { connect } from "react-redux"
import { updateTab } from "@/store/homeReducer"
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
      acvtiveNav: this.props.tab,
    })
  }
  changeType = (nav) => {
    this.setState({ acvtiveNav: nav.value })
    this.props.updateTab(nav.value)
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
                  onClick={() => this.changeType(nav)}
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
const mapStateToProps = (state) => ({
  tab: state.home.tab,
})
export default connect(mapStateToProps, {
  updateTab,
})(withRouter(Home))
