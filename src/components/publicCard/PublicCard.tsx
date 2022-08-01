import { Card } from 'antd'
import './pubiccard.scss'
import { cardType } from './datatype'
type props = {
  data: Array<cardType>
}
function Course(props: props) {
  return (
    <div className="publicCard">
      {props.data.map((card) => (
        <Card title={card.title} key={card.title}>
          <div dangerouslySetInnerHTML={{ __html: card.content }}></div>
        </Card>
      ))}
    </div>
  )
}
export default Course
