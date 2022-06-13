import { Avatar, Card, List } from "antd"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getUser } from '../../api/api'
import Author from "../../components/atuhor/Author"
import './user.scss'
function User () {
  let { loginname } = useParams()
  const [userdata, setuserdata] = useState({});
  const [loading, setloading] = useState(true);
  const userid = useSelector(state => state.user.userid)
  useEffect(() => {
    getUser(loginname).then(res => {
      if (res.data.success) {
        setuserdata(res.data.data)
        setloading(false)
      } else {
        console.log('请求错误');
      }
    }).catch((err) => console.log(err))
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid])
  return (
    <div className="user">
      {!loading && <div>
        <Card className="top">
          <Avatar src={userdata.avatar_url}></Avatar>
          <p>
            <span>用户名：<i>{userdata.loginname}</i></span>
            <span>积分：<i>{userdata.score}</i></span>
            <span>注册时间：<i>{userdata.create_at.split('T')[0]}</i></span>
          </p>
        </Card>
        <Card className="content" title='发布的文章'>
          <List
            itemLayout="horizontal"
            dataSource={userdata.recent_topics}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<Link to={`/article/${item.id}`}>{item.title}</Link>}
                  description={
                    '最后修改：' + item.last_reply_at.split('T')[0]
                  }
                />
              </List.Item>
            )}
          />
        </Card>
        <Card className="content" title='回复的文章'>
          <List
            itemLayout="horizontal"
            dataSource={userdata.recent_replies}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.author.avatar_url} />}
                  title={<Link to={`/article/${item.id}`}>{item.title}</Link>}
                  description={
                    <Author
                      data={{
                        loginname: item.author.loginname,
                        create_at: item.last_reply_at
                      }}
                    ></Author>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      </div>}
    </div >
  )
}
export default User