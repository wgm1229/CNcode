import './article.scss'
import { getTopicDetail } from '../../../api/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Article () {
  let { id } = useParams();
  const [detail, setdetail] = useState({});
  useEffect(() => {
    getTopicDetail(id).then((res) => {
      if (res.data.success) {
        setdetail(res.data.data)
      }
    }).catch(err => console.log(err))
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="article">文章</div>
  )
}
export default Article