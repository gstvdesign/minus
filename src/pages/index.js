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

const IndexPage = ({ data }) => {
    const productNodes = data.allProductCsv.nodes
    
    return (
    <div className="main">
        <SidebarNav />
        <div className="products">
        {productNodes.map( node =>(
            <div>
                <h1>{node.header}</h1>
                <img src="{node.img}" alt="alt"></img>
                <h2>{node.designer}</h2>
                <p>{node.description}</p>
            </div>
        ))}
        </div>
    </div>
    )
}

export default IndexPage