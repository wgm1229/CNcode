import { Component } from "react"
import {
  HomeOutlined,
  BookOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import "./TopNav.scss"
import withRouter from "../../static/js/withRouter"

const navlist = [
  {
    label: "首页",
    key: "home/all",
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
    this.props.navigate(`/${e.key}`)
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

export default withRouter(Nav)
