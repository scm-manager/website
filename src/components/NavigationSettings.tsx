import React, { FC } from "react";
import { navigate } from "gatsby";
import Setting from "./Setting";
import LanguageSetting from "./LanguageSetting";
import versionRangeComparator from "../lib/versionRangeComparator";

export const PATH_PART_INDEX_DOCS_VERSION = 2;
export const PATH_PART_INDEX_DOCS_LANGUAGE = 3;

export const PATH_PART_INDEX_PLUGIN_VERSION = 4;
export const PATH_PART_INDEX_PLUGIN_LANGUAGE = 5;


const changeVersion = (path: string, version: string, index = PATH_PART_INDEX_DOCS_VERSION) => {
  navigate(replacePathPartAndCutOff(path, index, version, "en"));
};

const changeLanguage = (path: string, lang: string, index = PATH_PART_INDEX_DOCS_LANGUAGE) => {
  navigate(replacePathPart(path, index, lang));
};

const findVersion = (path: string, index = PATH_PART_INDEX_DOCS_VERSION) => {
  return findPathPart(path, index);
};

const findLanguage = (path: string, index = PATH_PART_INDEX_DOCS_LANGUAGE) => {
  return findPathPart(path, index);
};

const findPathPart = (path: string, index: number) => {
  return path.split("/")[index];
};

const replacePathPart = (path: string, index: number, newPart: string) => {
  const pathParts = path.split("/");
  pathParts[index] = newPart;
  return pathParts.join("/");
};

const replacePathPartAndCutOff = (path: string, index: number, ...newParts: string[]) => {
  const pathParts = path.split("/").slice(0, index);
  return [...pathParts, ...newParts].join("/");
}

type Props = {
  path: string;
  versions: { group: { fieldValue: string }[] };
  languages: { group: { fieldValue: string }[] }
  versionPathIndex: number;
  languagePathIndex: number;
};

const NavigationSettings: FC<Props> = ({ path, versionPathIndex, languagePathIndex, versions, languages }) => {
  return (
    <>
      <p className="menu-label">Settings</p>
      <Setting
        label="Version"
        value={findVersion(path, versionPathIndex)}
        options={versions.group
          .map(g => g.fieldValue)
          .sort(versionRangeComparator)
          .reverse()}
        onChange={version => changeVersion(path, version, versionPathIndex)}
      />
      <LanguageSetting
        value={findLanguage(path, languagePathIndex)}
        languages={languages.group
          .map(g => g.fieldValue)
          .sort()}
        onChange={language => changeLanguage(path, language, languagePathIndex)}
      />
    </>
  );
};

export default NavigationSettings;
