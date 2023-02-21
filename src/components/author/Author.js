import { Component } from "react"
import { Avatar } from "antd"
import withRouter from "@/static/js/withRouter"
import "./author.scss"

class Author extends Component {
  constructor(props) {
    super(props)
  }
  state = {}
  goToUser = () => {
    this.props.navigate(`/user/${this.props.data.loginname}`)
  }
  render() {
    return (
      <span>
        {this.props.data.avatar_url && (
          <Avatar className="profilepicture" src={this.props.data.avatar_url} />
        )}
        <span className="name" onClick={this.goToUser}>
          {this.props.data.loginname}
        </span>
        <span className="time">
          {!this.props.data.hiddenText && <span>发表于：</span>}
          {this.props.data.create_at.split("T")[0]}
        </span>
      </span>
    )
  }
}

export default withRouter(Author)
