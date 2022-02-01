import React, { FC } from "react";
import { graphql } from "gatsby";

type Props = {
  alerts: any;
};

const AlertsNotification: FC<Props> = ({ alerts }) => {
  if (alerts.length === 0) {
    return null;
  }

  return (
    <div className="notification is-warning mb-4 content">
      <p className="mb-2">This version contains a known security vulnerability.</p>
      <ul>
        {alerts.map((alert) => {
          return (
            <li key={alert.title}>
              <p><a href={alert.link}><strong>{alert.title}</strong> ({alert.fields.component} {alert.affectedVersions})<br/>
                {alert.description}</a></p>
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
