/**
 * tbd
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";

type Props = {

}

const NoIndexMeta: FunctionComponent<Props> = () => {
  return (
    <Helmet
      meta={[
        {
          name: `robots`,
          content: `noindex`,
        }
        ]}
        />
  )
};

export default NoIndexMeta;
