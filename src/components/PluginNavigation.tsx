import React, { FC } from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import MenuSection from "./MenuSection";
import MenuEntry from "./MenuEntry";
import ExternalLink from "./ExternalLink";

type Props = {
  path: string;
  name: string;
};

const PluginNavigation: FC<Props> = ({ path, name }) => {
  return (
    <Menu>
      <MenuSection title="Getting started">
        <MenuEntry>
          <Link
            to={`${path}`}
            activeClassName="is-active"
            title="Readme"
          >
            Readme
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`${path}/installation`}
            activeClassName="is-active"
            title="Installation"
          >
            Installation
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`${path}/documentation`}
            activeClassName="is-active"
            title="Documentation"
          >
            Documentation
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`${path}/releases`}
            activeClassName="is-active"
            title="Releases"
          >
            Releases
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`${path}/license`}
            activeClassName="is-active"
            title="License"
          >
            License
          </Link>
        </MenuEntry>
      </MenuSection>
      <MenuSection title="External links">
        <MenuEntry>
          <ExternalLink to={`https://oss.cloudogu.com/jenkins/job/scm-manager-plugins/job/${name}/`} value="Jenkins" />
        </MenuEntry>
        <MenuEntry>
          <ExternalLink to={`https://sonarcloud.io/dashboard?id=sonia.scm.plugins%3A${name}`} value="SonarQube" />
        </MenuEntry>
        <MenuEntry>
          <ExternalLink to={`https://github.com/scm-manager/${name}`} value="GitHub" />
        </MenuEntry>
      </MenuSection>
    </Menu>
  );
};

export default PluginNavigation;
