import React, { FC } from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import MenuSection from "./MenuSection";
import MenuEntry from "./MenuEntry";

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
          <a
            href={`https://oss.cloudogu.com/jenkins/job/scm-manager-plugins/job/${name}/`}
            title="Jenkins"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jenkins
          </a>
        </MenuEntry>
        <MenuEntry>
          <a
            href={`https://sonarcloud.io/dashboard?id=sonia.scm.plugins%3A${name}`}
            title="SonarQube"
            target="_blank"
            rel="noopener noreferrer"
          >
            SonarQube
          </a>
        </MenuEntry>
        <MenuEntry>
          <a
            href={`https://github.com/scm-manager/${name}`}
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </MenuEntry>
      </MenuSection>
    </Menu>
  );
};

export default PluginNavigation;
