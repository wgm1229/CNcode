import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Tag } from 'antd';
import { LikeOutlined } from '@ant-design/icons'
import { getTopicDetail } from '../../../api/api'
import TypeTag from '../../../components/TypeTag'
import Author from '../../../components/atuhor/Author'
import './article.scss'
function Article () {
  let { id } = useParams();
  const [detail, setdetail] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getTopicDetail(id).then((res) => {
      if (res.data.success) {
        setdetail(res.data.data)
        setloading(false)
      }
    }).catch(err => console.log(err))
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="article">
      {!loading && <Card title={
        <div>
          <h2>{detail.title}</h2>
          <div>
            <TypeTag data={detail} />
            <Author data={{
              avatar_url: detail.author.avatar_url,
              loginname: detail.author.loginname,
              create_at: detail.create_at
            }} />
          </div>
        </div>
      } loading={loading}>
        <div className='content' dangerouslySetInnerHTML={{ __html: detail.content }}></div>
      </Card>}
      {!loading && <Card className='reply' title={
        <div>全部评论{detail.reply_count}</div>
      }>
        {detail.replies.map((reply) => {
          return <div key={reply.id}>
            <p className='reply_user'>
              <span>
                {reply.author.loginname === detail.author.loginname && <Tag color="blue">作者</Tag>}
                <Author data={{
                  avatar_url: reply.author.avatar_url,
                  loginname: reply.author.loginname,
                  create_at: reply.create_at,
                  hiddenText: true
                }} />
              </span>
              <span>
                <LikeOutlined />
                {reply.ups.length ? reply.ups.length : ''}
              </span>
            </p>
            <div dangerouslySetInnerHTML={{ __html: reply.content }}></div>
          </div>
        }
        )}
      </Card>}
    </div >
  )
}
export default Article