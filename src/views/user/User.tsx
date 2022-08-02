import { Avatar, Card, Image, List } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getUser } from '../../api/api'
import Author from '../../components/author/Author'
import './user.scss'
import { author } from '../../static/js/publicTs'
type reply = {
  author: author
  id: string
  last_reply_at: string
  title: string
}
type userDetail = {
  avatar_url: string
  create_at: string
  githubUsername: string
  loginname: string
  score: number
  recent_replies: Array<reply>
  recent_topics: Array<reply>
}
function User() {
  const { loginname } = useParams<string>() //姓名
  const [UserDetail, setUserDetail] = useState<userDetail>({
    //用户详情
    avatar_url: '',
    create_at: '',
    githubUsername: '',
    loginname: '',
    score: 0,
    recent_replies: [],
    recent_topics: []
  })
  useEffect(() => {
    /* 获取用户详情 */
    getUser(loginname)
      .then((res) => {
        if (res.data.success) {
          setUserDetail(res.data.data)
        } else {
          console.log('获取用户详情失败')
        }
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="user">
      <Card className="top">
        <Avatar className="header" src={<Image src={UserDetail.avatar_url} />}></Avatar>
        <p>
          <span>
            用户名：<i> {UserDetail.loginname}</i>
          </span>
          <span>
            积分：<i> {UserDetail.score}</i>
          </span>
          <span>
            注册时间：<i> {UserDetail.create_at.split('T')[0]}</i>
          </span>
        </p>
      </Card>
      <Card title="发布的文章">
        <List
          dataSource={UserDetail.recent_topics}
          renderItem={(topic) => (
            <List.Item>
              <List.Item.Meta
                title={<Link to={`/article/${topic.id}`}>{topic.title}</Link>}
                description={<span>最后修改：{topic.last_reply_at.split('T')[0]}</span>}
              />
            </List.Item>
          )}
        />
      </Card>
      <Card title="回复的文章">
        <List
          dataSource={UserDetail.recent_replies}
          renderItem={(reply) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={reply.author.avatar_url}></Avatar>}
                title={<Link to={`/article/${reply.id}`}>{reply.title}</Link>}
                description={
                  <Author hiddenImg={true} hiddenType={true} loginname={reply.author.loginname} create_at={reply.last_reply_at}></Author>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}
export default User
