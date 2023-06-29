// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = eachItem => {
    // given the coditoion
    if (eachItem.categoryId === 'PROJECT') {
      return (
        <ProjectTimelineCard
          key={eachItem.duration}
          projectDetails={eachItem}
        />
      )
    }
    return (
      <CourseTimelineCard key={eachItem.duration} courseDetails={eachItem} />
    )
  }

  return (
    <div className="bg-container">
      <h1>
        MY JOURNEY OF <span>CCBP 4.0</span>
      </h1>

      <Chrono
        theme={{secondary: 'white'}}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}
export default TimeLineView
