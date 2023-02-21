import { Component } from "react"
import { Avatar, List } from "antd"
import { getTopics } from "@/api/api.js"
import Author from "../../components/author/Author"
import "./list.scss"
class SimplifyList extends Component {
  state = {
    loading: false,
    page: 1,
    limit: 20,
    list: [],
  }
  //相当于created
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    let params = {
      page: 1,
      limit: this.state.limit,
      tab: "all",
    }
    this.setState({
      loading: true,
      current: 1,
    })
    this.getList(params)
  }
  onChange = (currentPage) => {
    this.getList({
      page: currentPage,
      limit: this.state.limit,
      tab: "all",
    })
  }
  getList = (params) => {
    getTopics(params)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            list: res.data.data,
            page: params.page,
          })
        } else {
          console.log("列表获取失败", res)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        this.setState({
          loading: false,
        })
      })
  }
  render() {
    //分页配置
    const pagination = {
      size: "small",
      total: 1000,
      defaultPageSize: this.state.limit,
      defaultCurrent: 1,
      showSizeChanger: false,
    }
    return (
      <List
        className="list"
        loading={this.state.loading}
        itemLayout="horizontal"
        dataSource={this.state.list}
        pagination={{
          ...pagination,
          current: this.state.page,
          onChange: this.onChange,
        }}
        renderItem={(item) => (
          <List.Item
            actions={["回复：" + item.reply_count, "访问：" + item.visit_count]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url} />}
              title={item.title}
              description={
                <Author
                  data={{
                    loginname: item.author.loginname,
                    create_at: item.create_at,
                  }}
                />
              }
            />
          </List.Item>
        )}
      />
    )
  }
}

export default SimplifyList
