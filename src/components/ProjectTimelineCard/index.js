// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <>
      <div className="project-container">
        <img src={imageUrl} alt="project" className="project_image" />
        <div className="project-content">
          <h1 className="tittle">{projectTitle}</h1>
          <div className="duration_container">
            <AiFillCalendar color="#171f46" />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="project_description">{description}</p>
        <a href={projectUrl} className="visit_Link ">
          Visit
        </a>
      </div>
    </>
  )
}
export default ProjectTimelineCard
