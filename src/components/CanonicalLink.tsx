import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  path: string;
}

const CanonicalLink: FunctionComponent<Props> = (path) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  return (
    <Helmet
      link={[
        {
          rel: `canonical`,
          href: `${data.site.siteMetadata.siteUrl}/${path}`,
        },
      ]}
    />
  );
};

export default CanonicalLink;

