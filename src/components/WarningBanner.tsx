import { Link } from "gatsby";
import React, { FC } from "react";

type Props = {
  version: string;
  latestPageVersion: string;
  latestVersion: string;
  latestPageLink: string;
  latestRootLink: string;
}

const WarningBanner: FC<Props> = ({ version, latestPageVersion, latestVersion, latestRootLink, latestPageLink }) => {
  let subtitle;

  if (version === latestVersion) {
    return null;
  } else if (latestPageVersion !== latestVersion && version !== latestPageVersion) {
    subtitle = <>This page does not refer to the most recent version of the SCM-Manager. <Link  to={latestRootLink}>Go to the latest documentation</Link> or <Link to={latestPageLink}>go to the latest version of this page</Link>.</>;
  } else {
    subtitle = <>This page does not refer to the most recent version of the SCM-Manager. <Link to={latestPageLink}>Go to the latest version of this page</Link>.</>;
  }

  return <div className="notification is-warning mb-4">
    {subtitle}
  </div>;
};

export default WarningBanner;
