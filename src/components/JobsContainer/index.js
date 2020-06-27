import React, { useEffect, useState } from "react"
import { JobsSelect, Departments } from "components"

import "./styles.scss"

const JobsContainer = props => {
  const [jobs, setJobs] = useState(null)
  const [departments, setDepartments] = useState(null)
  const [locations, setLocations] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(
    "All Departments"
  )
  const [selectedLocation, setSelectedLocation] = useState("All Locations")

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
            filteredJobsByDepartment={filterJobs(
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
  const allLocations = selectedLocation == "All Locations"
  const addJobToFilteredJobs = job => {
    if (filteredJobsByDepartment[job.department.name]) {
      filteredJobsByDepartment[job.department.name] = [
        ...filteredJobsByDepartment[job.department.name],
        job,
      ]
    } else {
      filteredJobsByDepartment[job.department.name] = [job]
    }
  }

  jobs.forEach(job => {
    if (allDepartments && allLocations) {
      addJobToFilteredJobs(job)
    } else if (allDepartments && matchesLocation(job, selectedLocation)) {
      addJobToFilteredJobs(job)
    } else if (job.department.name === selectedDepartment && allLocations) {
      addJobToFilteredJobs(job)
    } else if (
      job.department.name === selectedDepartment &&
      matchesLocation(job, selectedLocation)
    ) {
      addJobToFilteredJobs(job)
    }
  })
  return filteredJobsByDepartment
}

export default JobsContainer
