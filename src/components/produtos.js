import React from "react"
import { graphql } from "gatsby"

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
export default ({ data }) => {
    const orderNodes = data.allOrdersCsv.nodes;

    return (
        <tbody>
            {orderNodes.map(node => (
                <header>
                    <h1>{node.header}</h1>
                    <h2>{node.designer}</h2>
                    <p>{node.descripition}</p>
                </header>
            ))}
        </tbody>
    )
}

export default Products