import { Avatar, Image } from 'antd'
import TypeTag from '../typetag/TypeTag'
import './author.scss'
type author = {
  hiddenType?: boolean //隐藏文章类型
  hiddenText?: boolean //隐藏"发表于"
  avatar_url: string //头像图片
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
      <Avatar src={<Image src={props.avatar_url} />} />
      <span className="name">{props.loginname}</span>
      <span className="time">
        {!props.hiddenText && '发表于：'}
        {props.create_at.split('T')[0]}
      </span>
    </div>
  )
}
export default Author
