import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"

const WelcomeText = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const metadata = data.site.siteMetadata;
  return (
    <div className="section-header">
      <h1 className="title">{ metadata.title }</h1>
      <h2 className="subtitle is-4 is-spaced">{ metadata.description }</h2>
      <Link to="/plugins" className="button is-primary is-large">
        Explore
      </Link>
    </div>
  );
}


export default WelcomeText;
