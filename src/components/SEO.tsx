/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { truncate } from "lodash";
import Page from "../layout/Page";

type Props = {
  title: string;
  description?: string;
  lang?: string;
  meta?: HTMLMetaElement[];
  image?: {
    src: string;
    height: string;
    width: string;
  },
  pathname?: string;
  keywords?: string[];
};

const SEO: FunctionComponent<Props> = ({ description, lang, meta, image: metaImage, title, pathname, keywords }) => {
  const { site, defaultImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
          }
        }
        defaultImage: file(relativePath: {eq: "images/scm-manager_logo.png"}) {
          childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
      }
    `,
  );

  const metaDescription = truncate(description || site.siteMetadata.description, {
    length: 160,
  });
  const image = metaImage || defaultImage?.childImageSharp?.original;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  console.log(JSON.stringify(metaImage, null, 4));

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
            {
              rel: "canonical",
              href: canonical,
            },
          ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: [...site.siteMetadata.keywords, ...(keywords || [])].join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          image
            ? [
              {
                property: "og:image",
                content: `${site.siteMetadata.siteUrl}${image.src}`,
              },
              {
                property: "og:image:width",
                content: image.width,
              },
              {
                property: "og:image:height",
                content: image.height,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
            : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ],
        )
        .concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
