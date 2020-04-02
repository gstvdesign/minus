import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/style.scss"



const Products = () => {
    const data = useStaticQuery(graphql`
    query {
        allProductCsv {
            nodes {
                designer
                header
                img {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                descrition
            }
        }
    }
    `)
    
    const productNodes = data.allProductCsv.nodes

    return (
            <div className="products">
                {productNodes.map(node => (
                    <div>
                        <h1>{node.header}</h1>
                        <Img
                            fluid={node.img.childImageSharp.fluid}
                            alt="Something" />
                        <h2>{node.designer}</h2>
                        <p>{node.description}</p>
                    </div>
                ))}
            </div>
    )
}

export default Products