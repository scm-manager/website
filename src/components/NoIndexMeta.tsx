/**
 * tbd
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";

type Props = {

}

const NoIndexMeta: FunctionComponent<Props> = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  return (
    <Helmet
      link={[
        {
          rel: `canonical`,
          href: `${data.site.siteMetadata.siteUrl}/docs/latest/`
        }
        ]}
        />
  )
};

export default NoIndexMeta;

