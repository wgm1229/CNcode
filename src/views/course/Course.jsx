import { Card } from 'antd'
import courseData from './courseData'
import Footer from '../../components/footer/Footer'
import './course.scss'
import { Fragment } from 'react'
function Course () {
  return (
    <Fragment>
      <div className="course">
        {courseData.map(card => <Card key={card.title} title={card.title} >
          <div dangerouslySetInnerHTML={{ __html: card.content }}></div>
        </Card>
        )}
      </div>
      <Footer />
    </Fragment>
  )
}
export default Course