import React from "react"
import { graphql } from "gatsby";
import "../styles/style.scss"

import SidebarNav from "../components/sidebar-nav"

export const query = graphql`
    query {
        allProductCsv {
            nodes {
                designer
                header
                img
                descrition
            }
        }
    }
    `

export default ({ data }) => (
    <div className="main">
        <SidebarNav />
            <header>
                <h1>{node.header}</h1>
                <h2>{node.designer}</h2>
                <p>{node.descripition}</p>
            </header>
            )
    </div>
)