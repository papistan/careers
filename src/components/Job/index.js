import React from "react"
import "./styles.scss"

const Job = ({ job, index }) => (
  <a href={`https://airtable.com/jobs/${job.id}`}>
    <div className="job-container">
      <hr
        className={`job-topborder ${job.department.name.toLowerCase()} index-${index}`}
      />
      <p className="overline office-container">
        {job.offices.map(office => (
          <span className="office">{office.name}</span>
        ))}
      </p>
      <h3>{job.title}</h3>
    </div>
  </a>
)

export default Job
