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
  omitTitleSuffix?: boolean;
  titleSuffix?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

const SEO: FunctionComponent<Props> = ({ description, lang, meta, image: metaImage, title, pathname, keywords, omitTitleSuffix, titleSuffix, type, publishedTime }) => {
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
        defaultImage: file(relativePath: {eq: "images/default-social-sharing-card.png"}) {
          childImageSharp {
            fixed(width: 1200, height: 628) {
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
  const image = metaImage || defaultImage?.childImageSharp?.fixed;
  // the siteUrl is set by the build (SITE_URL), so staging can be detected without extra configuration
  const isStaging = site.siteMetadata.siteUrl.includes("staging");
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={omitTitleSuffix ? `%s` : `%s | ${titleSuffix || site.siteMetadata.title}`}
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
          content: type || `website`,
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
          type === "article" && publishedTime
            ? [
              {
                property: `article:published_time`,
                content: publishedTime,
              },
            ]
            : [],
        )
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
                property: "twitter:image",
                content: `${site.siteMetadata.siteUrl}${image.src}`,
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
    >
      <script
        id="cookie-consent-manager"
        src="https://cloud.ccm19.de/app.js?apiKey=f19634416c234b01b69fc5444659ecd2966d996becc3e822&amp;domain=637c86e80e922a315d7a046b"
        referrerPolicy="origin" />
      {!isStaging && (
        <script id="matomo-tag-manager">{`
        var _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src='https://cdn.matomo.cloud/cloudogu.matomo.cloud/container_NuEg99LG.js'; s.parentNode.insertBefore(g,s);`}
        </script>
      )}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
