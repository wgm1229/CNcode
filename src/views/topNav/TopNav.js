import { Component } from "react";
import {
  HomeOutlined,
  BookOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./TopNav.scss";

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
];

class Nav extends Component {
  state = {
    currentNav: "",
  };
  onClick = (e) => {
    this.setState({ currentNav: e.key });
  };
  render() {
    return (
      <div className="topnav">
        <img src={require("../../static/images/logo.svg").default}></img>
        <Menu
          className="nav"
          mode="horizontal"
          theme="dark"
          items={navlist}
          selectedKeys={[this.currentNav]}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default Nav;
