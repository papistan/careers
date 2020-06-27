import React from "react"
import Select, { components } from "react-select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(faCaretDown)

const CaretDownIcon = () => {
  return <FontAwesomeIcon icon="caret-down" />
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  )
}

import "./styles.scss"

const JobsSelect = props => {
  const options = props.list.map(item => {
    return { value: item, label: item }
  })

  const handleSelect = selectedOption => {
    props.eventHandler(selectedOption.value)
  }

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "20px",
      color: "#666666",
      padding: 5,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: "20px",
      lineHeight: "1.25em",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
    }),
    control: (provided, state) => ({
      ...provided,
      borderColor: "#CCCCCC",
      borderRadius: "5px",
      borderWidth: "2px",
    }),
  }

  return (
    <div className="jobs-select-container">
      <p className="overline wide select-label">{props.label}</p>
      <Select
        options={options}
        onChange={handleSelect}
        components={{ DropdownIndicator }}
        placeholder={options[0].label}
        styles={customStyles}
      />
    </div>
  )
}

export default JobsSelect
