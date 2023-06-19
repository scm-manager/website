import React, { FC } from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import MenuSection from "./MenuSection";
import MenuEntry from "./MenuEntry";
import ExternalLink from "./ExternalLink";

type Props = {
  name: string;
};

const PluginNavigation: FC<Props> = ({ name }) => {
  return (
    <Menu>
      <MenuSection title="Getting started">
        <MenuEntry>
          <Link
            to={`/plugins/${name}/`}
            activeClassName="is-active"
            title="Readme"
          >
            Readme
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`/plugins/${name}/releases/`}
            activeClassName="is-active"
            title="Releases"
          >
            Releases
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`/plugins/${name}/license/`}
            activeClassName="is-active"
            title="License"
          >
            License
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`/plugins/${name}/install/`}
            activeClassName="is-active"
            title="Installation"
          >
            Installation
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`/plugins/${name}/docs`}
            activeClassName="is-active"
            title="Documentation"
          >
            Documentation
          </Link>
        </MenuEntry>
      </MenuSection>
      <MenuSection title="External links">
        <MenuEntry>
          <ExternalLink
            to={`https://sonarcloud.io/dashboard?id=sonia.scm.plugins%3A${name}`}
            value="SonarQube"
          />
        </MenuEntry>
        <MenuEntry>
          <ExternalLink
            to={`https://github.com/scm-manager/${name}`}
            value="GitHub"
          />
        </MenuEntry>
      </MenuSection>
    </Menu>
  );
};

export default PluginNavigation;
