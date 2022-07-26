import { Avatar, Image } from 'antd'
import { Link } from 'react-router-dom'
import TypeTag from '../typetag/TypeTag'
import './author.scss'
type author = {
  hiddenImg?: boolean //隐藏头像
  hiddenType?: boolean //隐藏文章类型
  hiddenText?: boolean //隐藏"发表于"
  avatar_url?: string //头像图片
  loginname: string //姓名
  create_at: string //创建时间
  good?: boolean
  top?: boolean
  tab?: string
}
function Author(props: author) {
  return (
    <div className="author">
      {!props.hiddenType && <TypeTag data={{ good: props.good, top: props.top, tab: props.tab }} />}
      {!props.hiddenImg && <Avatar src={<Image src={props.avatar_url} />} />}
      <Link className="name" to={`/user/${props.loginname}`}>
        {props.loginname}
      </Link>
      <span className="time">
        {!props.hiddenText && '发表于：'}
        {props.create_at.split('T')[0]}
      </span>
    </div>
  )
}
export default Author
