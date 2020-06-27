import React from "react"
import { Department } from "components"

const Departments = props => (
  <div className="jobs-select-container">
    {Object.entries(props.filteredJobsByDepartment).map(departmentArray => (
      <Department departmentArray={departmentArray} />
    ))}
  </div>
)

export default Departments
