import { Tag } from 'antd';
import topicType from "../../static/js/topicType"
const getType = (data) => {
  //1、置顶 2、精华 3、tab类型
  let type = data.top ? 'top' : data.good ? 'good' : data.tab || 'share'
  return topicType.filter(item => item.value === type)[0]
}
/** tag标签
 * @param {Object} props 
 * @returns html
 */
function typeTag (props) {
  const tag = getType(props.data)
  return (
    <Tag color={tag.color}>{tag.label}</Tag>
  )
}
export default typeTag