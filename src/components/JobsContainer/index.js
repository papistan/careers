import React, { useEffect, useState } from "react"

import "./styles.scss"

const JobsContainer = props => {
  const [jobs, setJobs] = useState(null)
  const [departments, setDepartments] = useState(null)
  const [locations, setLocations] = useState(null)

  const fetchData = async () => {
    const url =
      "https://dl.dropboxusercontent.com/s/90imekuizwoidih/job_listings.json"
    const res = await fetch(url)
    res
      .json()
      .then(res => {
        const jobs = res.jobs
        setJobs(jobs)
        setDepartments(mapDepartments(jobs))
        setLocations(mapLocations(jobs))
      })
      .catch(err => {
        console.log("****** Error:", err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section>
      {jobs ? (
        <div>
          <div>asdfad;flajsf</div>
        </div>
      ) : (
        <p>Fetching Jobs</p>
      )}
    </section>
  )
}

const mapDepartments = data => [
  "All Departments",
  ...new Set(data.map(job => job.department.name)),
]

const mapLocations = data => [
  "All Locations",
  ...new Set(
    data
      .map(job => job.offices)
      .flat()
      .map(office => office.name)
  ),
]

export default JobsContainer
