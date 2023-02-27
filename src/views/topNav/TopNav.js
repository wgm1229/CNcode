import { Component } from "react"
import {
  HomeOutlined,
  BookOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import "./TopNav.scss"
import withRouter from "../../static/js/withRouter"
import { connect } from "react-redux"

const navlist = [
  {
    label: "首页",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "教程",
    key: "course",
    icon: <BookOutlined />,
  },
  {
    label: "关于",
    key: "about",
    icon: <ExclamationCircleOutlined />,
  },
]

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    currentNav: "home",
  }
  onClick = (e) => {
    this.setState({ currentNav: e.key })
    //返回首页时，走store中的tab类型
    if (e.key.indexOf("home") !== -1) {
      this.props.navigate(`/${e.key}/${this.props.tab}`)
    } else {
      this.props.navigate(`/${e.key}`)
    }
  }
  render() {
    return (
      <div className="topnav">
        <img src={require("../../static/images/logo.svg").default} alt=""></img>
        <Menu
          className="nav"
          mode="horizontal"
          theme="dark"
          items={navlist}
          selectedKeys={[this.state.currentNav]}
          onClick={this.onClick}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  tab: state.home.tab,
})
export default connect(mapStateToProps)(withRouter(Nav))
