import { Component } from "react"
import { Tag } from "antd"
import topicType from "../../static/js/topicType"
import "./typetag.scss"

const getType = (data) => {
  //1、置顶 2、精华 3、tab类型
  let type = data.top ? "top" : data.good ? "good" : data.tab || "share"
  return topicType.filter((item) => item.value === type)[0]
}
/** tag标签
 * @param {Object} props
 * @returns html
 */
class typeTag extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const tag = getType(this.props.data)
    return <Tag color={tag.color}>{tag.label}</Tag>
  }
}

export default typeTag
