import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Setting from "./Setting";

type Props = {
  value: string;
  languages: string[];
  onChange: (value: string) => void;
};

const query = graphql`
  {
    file(relativePath: { eq: "languages.yml" }) {
      childrenLanguagesYaml {
        label
        value
      }
    }
  }
`;

const LanguageSetting: FC<Props> = ({ languages, ...props }) => {
  const languageMapping = useStaticQuery(query);
  const options = languageMapping.file.childrenLanguagesYaml.filter(mapping => languages.includes(mapping.value))

  return <Setting label="Language" {...props} options={options} />;
};

export default LanguageSetting;
