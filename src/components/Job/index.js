import React from "react"
import "./styles.scss"

const Job = ({ job, index }) => (
  <div className="job-container">
    <hr className={`job-topborder ${job.department.name.toLowerCase()} index-${index}`} />
    <p className="overline office-container">
      {job.offices.map(office => (
        <span className="office">{office.name}</span>
      ))}
    </p>
    <h3>{job.title}</h3>
  </div>
)

export default Job
