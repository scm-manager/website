import React, { FC } from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import MenuSection from "./MenuSection";
import MenuEntry from "./MenuEntry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationSettings from "./NavigationSettings";

type Props = {
  path: string;
  name: string;
};

const pluginPath = path => {
  const pathParts = docsPath(path).split("/");
  // remove language
  pathParts.pop();
  // remove version
  pathParts.pop();
  // remove docs
  pathParts.pop();

  return pathParts.join("/");
};

const docsPath = path => {
  const pathParts = path.split("/");
  // remove ending slash
  pathParts.pop();

  // remove current doc
  if (pathParts.length > 6) {
    pathParts.pop();
  }
  return pathParts.join("/");
};

const PluginNavigation: FC<Props> = ({ path, name }) => {
  return (
    <Menu>
        <Link
          to={`${pluginPath(path)}`}
          activeClassName="is-active"
          title="Back to overview"
        >
          <FontAwesomeIcon icon="level-up-alt" flip="horizontal" /> Back to overview
        </Link>
      <NavigationSettings path={path} />
      <MenuSection title="Getting started">
        <MenuEntry>
          <Link
            to={`${docsPath(path)}`}
            activeClassName="is-active"
            title="Part 1"
          >
            Part 1
          </Link>
        </MenuEntry>
        <MenuEntry>
          <Link
            to={`${docsPath(path)}/path`}
            activeClassName="is-active"
            title="Part 2"
          >
            Part 2
          </Link>
        </MenuEntry>
      </MenuSection>
    </Menu>
  );
};

export default PluginNavigation;
