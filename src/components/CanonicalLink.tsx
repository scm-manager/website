import React, { FC } from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  path: string;
}

const CanonicalLink: FC<Props> = ({path}) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  if (!path) {
    return null;
  }

  let href = data.site.siteMetadata.siteUrl
  if (!href.endsWith("/")) {
    href += "/";
  }
  if (path.startsWith("/")) {
    href += path.substring(1);
  } else {
    href += path;
  }

  return (
    <Helmet
      link={[
        {
          rel: `canonical`,
          href,
        },
      ]}
    />
  );
};

export default CanonicalLink;

