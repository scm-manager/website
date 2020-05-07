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

/* TODO: replace helper function with a more sensible approach */
const pluginPath = path => {
  if (path.split("/").length > 3) {
    return path.substr(0, path.lastIndexOf("/"));
  }
  return path;
};

const PluginNavigation: FC<Props> = ({ path, name }) => {
  return (
    <Menu>
      <MenuSection title="Getting started">
        <MenuEntry>
          <Link
            to={`${pluginPath(path)}/`}
            activeClassName="is-active"
            title="Readme"
          >
            Readme
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`${pluginPath(path)}/install/`}
            activeClassName="is-active"
            title="Installation"
          >
            Installation
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`${pluginPath(path)}/docs`}
            activeClassName="is-active"
            title="Documentation"
          >
            Documentation
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`${pluginPath(path)}/releases/`}
            activeClassName="is-active"
            title="Releases"
          >
            Releases
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`${pluginPath(path)}/license/`}
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
