import React from "react"
import "../../styles/global/styles.scss"
import "./styles.scss"

const Layout = ({ children }) => (
  <>
    <main className="wrapper">{children}</main>
  </>
)

export default Layout
