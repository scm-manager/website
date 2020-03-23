import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/hero-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="section-image">
      <Img
        alt="SCM-Manager Process Image"
        fluid={data.file.childImageSharp.fluid}
      />
    </div>
  );
}
