import { Link } from "gatsby"
import React from "react"

const SidebarNav = () => (
  <sidebar>
    <div className="brand">
      <Link to="/">Marca</Link>
    </div>
    <div className="navigation">
      <nav>
        <Link to="/sobre/">Sobre</Link>
        <Link to="/contato/">Contato</Link>
      </nav>
    </div>
  </sidebar>
)

export default SidebarNav
