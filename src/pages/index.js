import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { JobsContainer, Layout, SEO } from "components"

import "./index.scss"

import animatedOpenPositions from "../images/open-positions.gif"

const imageQuery = graphql`
  query {
    openPositions: file(relativePath: { eq: "open-positions@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const IndexPage = () => {
  const [showAnimation, setShowAnimation] = useState(false)
  const data = useStaticQuery(imageQuery)

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero-container">
        <div className="hero-content">
          <p className="overline wide">open positions</p>
          <h1>Help us create the future of software</h1>
          <p>
            The ability to make software opens up tremendous creative
            possibilitties, and we want to empower people to bring thse
            possibility to life—no matter how ambitious. The good news is that
            creating software doesn't have to mean writing code. What will you
            create?
          </p>
        </div>

        <div className="center hidden-mobile">
          <div
            className="hero-image"
            onMouseEnter={() => setShowAnimation(true)}
            onMouseLeave={() => setShowAnimation(false)}
          >
            <img
              src={animatedOpenPositions}
              alt="Two people juggling shapes animated"
              className={`open-positions-gif ${!showAnimation && "hidden"}`}
            />
            <Img
              fluid={data.openPositions.childImageSharp.fluid}
              alt="Two people juggling shapes"
              className={`open-positions-img ${showAnimation && "hidden"}`}
            />
          </div>
        </div>
      </section>
      <JobsContainer />
    </Layout>
  )
}

export default IndexPage
