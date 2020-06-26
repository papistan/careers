import React from "react"

import "./styles.scss"

const Departments = departments => {
  console.log(departments, "DEPARTMENTS")
  return (
    <div className="jobs-select-container">
      {/* {departments.map(department => (
        <Department department={department} />
      ))} */}
      departmentssss
    </div>
  )
}

export default Departments

const Department = department => (
  <div>
    <img
      src={department.image}
      alt={department.name}
      className="department-img"
    />
    <h2>{department.name}</h2>
  </div>
)
