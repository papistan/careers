import React, { useEffect, useState } from "react"
import { JobsSelect, Departments } from "components"

import "./styles.scss"

const JobsContainer = props => {
  const [jobs, setJobs] = useState(null)
  const [filteredJobsByDepartment, setFilteredJobsByDepartment] = useState(null)
  const [departments, setDepartments] = useState(null)
  const [locations, setLocations] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)

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
    <section className="jobs-container ">
      {jobs ? (
        <>
          <div className="jobs-selects">
            {departments && (
              <JobsSelect
                list={departments}
                eventHandler={setSelectedDepartment}
                className={"jobs-select"}
                label={"Department"}
              />
            )}
            {locations && (
              <JobsSelect
                list={locations}
                eventHandler={setSelectedLocation}
                label={"Location"}
              />
            )}
          </div>
          <Departments
            filteredJobs={filterJobs(
              jobs,
              selectedDepartment,
              selectedLocation
            )}
          />
        </>
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

const matchesLocation = (job, selectedLocation) =>
  job.offices.map(office => office.name).includes(selectedLocation)

const filterJobs = (jobs, selectedDepartment, selectedLocation) => {
  const filteredJobsByDepartment = {}
  const allDepartments = selectedDepartment === "All Departments"

  jobs.forEach(job => {
    if (allDepartments && matchesLocation(job, selectedLocation)) {
      filteredJobsByDepartment[job.department] = [
        ...filteredJobsByDepartment[job.department],
        job,
      ]
    } else if (
      job.department === selectedDepartment &&
      matchesLocation(job, selectedLocation)
    ) {
      filteredJobsByDepartment[job.department] = [
        ...filteredJobsByDepartment[job.department],
        job,
      ]
    }
  })
  return filteredJobsByDepartment
}

export default JobsContainer
