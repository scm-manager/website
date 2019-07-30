import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/scm-manager_logo_img.png" }) {
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
        alt="SCM-Manager Logo"
        fluid={data.file.childImageSharp.fluid}
      />
    </div>
  );
}
