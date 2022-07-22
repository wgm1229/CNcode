import { Tag } from 'antd'
import topicType, { topicTypeItem } from '../../static/js/topicType'
import './typetag.scss'
type data = {
  top: boolean
  good: boolean
  tab: string
}
const getType = (data: data) => {
  //1、置顶 2、精华 3、tab类型
  const type = data.top ? 'top' : data.good ? 'good' : data.tab || 'share'
  return topicType.filter((item) => item.value === type)[0]
}
/* tag标签 */
function TypeTag(props: { data: data }) {
  const tag: topicTypeItem = getType(props.data)
  return <Tag color={tag.color}>{tag.label}</Tag>
}
export default TypeTag
