import React, { FC } from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import styled from "styled-components";

export const PATH_PART_INDEX_DOCS_VERSION = 2;
export const PATH_PART_INDEX_DOCS_LANGUAGE = 3;

export const PATH_PART_INDEX_PLUGIN_VERSION = 4;
export const PATH_PART_INDEX_PLUGIN_LANGUAGE = 5;

const Label = styled.label`
  padding-left: 0.75rem;
`;

type OptionObject = {
  label: string;
  value: string;
};

type Option = string | OptionObject;

type SettingProps = {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

const isOptionObject = (opt: Option): opt is OptionObject => {
  return !!(opt as OptionObject).label;
};

const createOption = (opt: Option) => {
  let label;
  let value;
  if (isOptionObject(opt)) {
    label = opt.label;
    value = opt.value;
  } else {
    label = opt as string;
    value = opt as string;
  }
  return (
    <option key={value} value={value}>
      {label}
    </option>
  );
};

const Setting: FC<SettingProps> = ({ label, value, options, onChange }) => (
  <div className="columns is-horizontal field">
    <div className="field-label column has-text-left is-one-third is-vcentered">
      <Label>{label}</Label>
    </div>
    <div className="field-body column">
      <div className="field">
        <div className="control">
          <div className="select is-fullwidth">
            <select
              className="is-fullwidth"
              onChange={e => onChange(e.target.value)}
              value={value}
            >
              {options.map(createOption)}
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const changeVersion = (path: string, version: string, index = PATH_PART_INDEX_DOCS_VERSION) => {
  navigate(replacePathPart(path, index, version));
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
          .sort()
          .reverse()}
        onChange={version => changeVersion(path, version, versionPathIndex)}
      />
      <Setting
        label="Language"
        value={findLanguage(path, languagePathIndex)}
        options={languages.group
          .map(g => g.fieldValue)
          .sort()
          .reverse()}
        onChange={language => changeLanguage(path, language, languagePathIndex)}
      />
    </>
  );
};

export default NavigationSettings;
