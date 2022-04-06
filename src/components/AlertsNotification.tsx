import React, { FC, ReactNode } from "react";
import { graphql } from "gatsby";

type LinkAlertProps = {
  link: string;
  children: ReactNode;
};

const LinkAlertWhenPossible: FC<LinkAlertProps> = ({ link, children }) => {
  if (link) {
    return <a href={link}>{children}</a>;
  }
  return <>{children}</>;
};

type Props = {
  alerts: any;
};

const AlertsNotification: FC<Props> = ({ alerts }) => {
  if (!alerts || alerts.length === 0) {
    return null;
  }

  let vulnerabilityText =
    "This version contains a known security vulnerability.";
  if (alerts.length > 1)
    vulnerabilityText =
      "This version contains several known security vulnerabilities.";

  return (
    <div className="notification is-warning mb-4 content">
      <p className="mb-2">{vulnerabilityText}</p>
      <ul>
        {alerts.map(alert => {
          return (
            <li key={alert.title}>
              <p>
                <LinkAlertWhenPossible link={alert.link}>
                  <strong>{alert.title}</strong> ({alert.fields.component}{" "}
                  {alert.affectedVersions})
                </LinkAlertWhenPossible>
                <br />
                {alert.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const fragments = graphql`
  fragment DownloadAlertsFragment on AlertsYaml {
    title
    description
    link
    affectedVersions
    fields {
      component
    }
  }
`;

export default AlertsNotification;
