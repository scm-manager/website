import React, { FC } from "react";
import styled from "styled-components";

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

export default Setting;
