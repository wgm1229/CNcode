import { Avatar, Card, List } from "antd"
import { Component } from "react"
import WithRouter from "../../static/js/withRouter"
import { Link } from "react-router-dom"
import { getUser } from "../../api/api"
import Author from "../../components/author/Author"
import "./user.scss"
class User extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    loading: false,
    userdata: {},
  }
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    this.setState({
      loading: true,
    })
    getUser(this.props.params.loginname)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            loading: false,
            userdata: res.data.data,
          })
        } else {
          console.log("获取用户详情失败")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    const loading = this.state.loading
    const userdata = this.state.userdata
    return (
      <div className="user">
        {!loading && (
          <div>
            <Card className="top">
              <Avatar src={userdata.avatar_url}></Avatar>
              <p>
                <span>
                  用户名：<i>{userdata.loginname}</i>
                </span>
                <span>
                  积分：<i>{userdata.score}</i>
                </span>
                <span>
                  注册时间：<i>{userdata.create_at.split("T")[0]}</i>
                </span>
              </p>
            </Card>
            <Card className="content" title="发布的文章">
              <List
                itemLayout="horizontal"
                dataSource={userdata.recent_topics}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={
                        <Link to={`/article/${item.id}`}>{item.title}</Link>
                      }
                      description={
                        "最后修改：" + item.last_reply_at.split("T")[0]
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
            <Card className="content" title="回复的文章">
              <List
                itemLayout="horizontal"
                dataSource={userdata.recent_replies}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={
                        <Link to={`/article/${item.id}`}>{item.title}</Link>
                      }
                      description={
                        <Author
                          data={{
                            loginname: item.author.loginname,
                            create_at: item.last_reply_at,
                          }}
                        />
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        )}
      </div>
    )
  }
}

export default WithRouter(User)
