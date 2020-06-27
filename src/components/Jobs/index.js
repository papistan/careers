import React from "react"
import { Job } from "components"
import "./styles.scss"

const Jobs = ({ jobs }) => (
  <div className="jobs-container2">
    {jobs.map((job, index) => (
      <Job job={job} index={index} />
    ))}
  </div>
)

export default Jobs
