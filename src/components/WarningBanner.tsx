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
  let title, subtitle;

  if (version === latestVersion) {
    return null;
  } else if (latestPageVersion !== latestVersion) {
    title = "This page is outdated";
    subtitle = <>It does not exist in the latest documentation. <Link to={latestRootLink}>Click here to go to the latest documentation</Link> or <Link to={latestPageLink}>click here to go to the latest version of this page</Link></>;
  } else {
    title = "This documentation is outdated";
    subtitle = <Link to={latestPageLink}>Go to the latest version of this page</Link>;
  }

  return <section className="hero is-warning mb-4">
    <div className="hero-body">
      <p className="title">
        {title}
      </p>
      <p className="subtitle">
        {subtitle}
      </p>
    </div>
  </section>;
};

export default WarningBanner;
