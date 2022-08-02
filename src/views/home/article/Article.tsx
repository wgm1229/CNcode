import { Card } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTopicDetail } from '../../../api/api'
import Author from '../../../components/author/Author'
import './article.scss'
import { author } from '../../../static/js/publicTs'
type repliesItem = {
  id: string
  author: author
  content: string
  create_at: string
  ups: Array<string>
}
type contentData = {
  title: string
  author: author
  author_id: string
  content: string
  create_at: string
  last_reply_at: string
  replies: Array<repliesItem>
  visit_count: number
  good: boolean
  top: boolean
  tab: string
}
function Article() {
  const { id } = useParams<string>()
  const [Content, setContent] = useState<contentData>({
    //文章内容数据
    title: '',
    author: { avatar_url: '', loginname: '' },
    author_id: '',
    content: '',
    create_at: '',
    last_reply_at: '',
    replies: [],
    visit_count: 0,
    good: false,
    top: false,
    tab: ''
  })
  useEffect(() => {
    getTopicDetail(id)
      .then((res) => {
        if (res.data.success) {
          setContent(res.data.data)
        } else {
          console.log('获取文章失败')
        }
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="article">
      <Card
        title={
          <div>
            <h2>{Content.title}</h2>
            <Author
              avatar_url={Content.author.avatar_url}
              loginname={Content.author.loginname}
              create_at={Content.create_at}
              good={Content.good}
              top={Content.top}
              tab={Content.tab}
            />
          </div>
        }>
        <div dangerouslySetInnerHTML={{ __html: Content.content }}></div>
      </Card>
      <Card title={'全部评论' + Content.replies.length}>
        {Content.replies.map((reply) => (
          <div key={reply.id}>
            <p className="reply_user">
              <Author
                hiddenType={true}
                hiddenText={true}
                avatar_url={reply.author.avatar_url}
                loginname={reply.author.loginname}
                create_at={reply.create_at}
              />
              <span>
                <LikeOutlined />
                {reply.ups.length}
              </span>
            </p>
            <div dangerouslySetInnerHTML={{ __html: reply.content }}></div>
          </div>
        ))}
      </Card>
    </div>
  )
}
export default Article
