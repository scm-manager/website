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
    <div className="section-header has-text-centered">
      <h1 className="title is-spaced">{ metadata.title }</h1>
      <h2 className="subtitle is-3">{ metadata.description }</h2>
      <Link to="/plugins" className="button is-primary is-large">
        Explore
      </Link>
    </div>
  );
}


export default WelcomeText;
