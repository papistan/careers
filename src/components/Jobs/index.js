import React from "react"
import { Job } from "components"
import "./styles.scss"

const Jobs = props => (
  <div className="jobs-container2">
    {props.jobs.map(job => (
      <Job job={job} />
    ))}
  </div>
)

export default Jobs
