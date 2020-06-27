import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Jobs } from "components"
import "./styles.scss"

const departmentQuery = graphql`
  query {
    engineering: file(relativePath: { eq: "engineering@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    customerSuccess: file(relativePath: { eq: "customer-success@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    marketing: file(relativePath: { eq: "marketing@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const icons = {
  Engineering: "engineering",
  "Customer Success": "customerSuccess",
  Marketing: "marketing",
}

const Department = props => {
  const data = useStaticQuery(departmentQuery)
  const departmentName = props.departmentArray[0]
  const icons = {
    Engineering: data.engineering.childImageSharp.fluid,
    "Customer Success": data.customerSuccess.childImageSharp.fluid,
    Marketing: data.marketing.childImageSharp.fluid,
  }

  return (
    <div>
      <div className="department-label-container">
        <Img
          fluid={icons[departmentName]}
          alt={departmentName}
          className="department-icon"
        />
        <h2>{departmentName}</h2>
      </div>
        <Jobs jobs={props.departmentArray[1]} />
    </div>
  )
}

export default Department
