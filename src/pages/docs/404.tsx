import React, { FC } from "react";
import PageContainer from "../../layout/PageContainer";
import SEO from "../../components/SEO";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import { PageProps, graphql, useStaticQuery, Link } from "gatsby";

type PathContext = {
  version?: string;
  language?: string;
  path?: string;
};

type PageContentProps = {
  context: PathContext;
  data: any;
};

const createPathContext = (path: string): PathContext => {
  const parts = path.replace("/docs/", "").split("/");

  let version;
  if (parts.length > 0) {
    version = parts.shift();
  }

  let language;
  if (parts.length > 0) {
    language = parts.shift();
  }

  let rpath;
  if (parts.length > 0) {
    rpath = parts.join("/");
  }

  return {
    version,
    language,
    path: rpath,
  };
};

const VersionChooser: FC<PageContentProps> = ({ data }) => (
  <div className="content">
    <p>Please choose one of the existing versions.</p>
    <ul>
      {data.versions.group
        .map(g => g.fieldValue)
        .map(version => (
          <li key={version}>
            <Link to={`/docs/${version}/en/`}>{version}</Link>
          </li>
        ))}
    </ul>
  </div>
);

const LanguageChooser: FC<PageContentProps> = ({ context, data }) => (
  <div className="content">
    <p>Please choose one of the existing languages.</p>
    <ul>
      {data.languages.childrenLanguagesYaml.map(lang => (
        <li key={lang.value}>
          <Link to={`/docs/${context.version}/${lang.value}/`}>
            {lang.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const VersionNotSelected: FC<PageContentProps> = props => (
  <>
    <Subtitle>No version of the documentation was selected.</Subtitle>
    <VersionChooser {...props} />
  </>
);

const UnknownVersion: FC<PageContentProps> = ({ context, ...props }) => (
  <>
    <Subtitle>
      The selected version <strong>{context.version}</strong> of the
      documentation does not exists.
    </Subtitle>
    <VersionChooser context={context} {...props} />
  </>
);

const LanguageNotSelected: FC<PageContentProps> = props => (
  <>
    <Subtitle>The language of the documentation was selected.</Subtitle>
    <LanguageChooser {...props} />
  </>
);

const UnknownLanguage: FC<PageContentProps> = ({ context, ...props }) => (
  <>
    <Subtitle>
      The selected language <strong>{context.language}</strong> of the
      documentation does not exists.
    </Subtitle>
    <LanguageChooser context={context} {...props} />
  </>
);

const createLink = (context: PathContext) => {
  return `/docs/${context.version}/${context.language}/${context.path}`;
};

const PathNotFound: FC<PageContentProps> = ({ context }) => {
  let content = null;
  if (context.language !== "en") {
    content = (
      <div className="content">
        <p>It is possible that the page is not yet translated.</p>
        <ul>
          <li>
            <Link
              to={createLink({
                ...context,
                language: "en",
              })}
            >
              Englisch version
            </Link>
          </li>
          <li>
            <Link
              to={createLink({
                ...context,
                path: "",
              })}
            >
              Documentation Root
            </Link>
          </li>
        </ul>
        <h3>Contribution</h3>
        <p>
          Help us to complete the translation with{" "}
          <a href="https://gitlocalize.com/repo/4277">GitLocalize</a>
        </p>
      </div>
    );
  }
  return (
    <>
      <Subtitle>
        The selected path <strong>{context.path}</strong> could not be found.
      </Subtitle>
      {content}
    </>
  );
};

const existsVersion = (data: any, version: string) => {
  return data.versions.group.map(g => g.fieldValue).includes(version);
};

const existsLanguage = (data: any, language: string) => {
  return data.languages.childrenLanguagesYaml
    .map(lang => lang.value)
    .includes(language);
};

const DocsNotFoundPage: FC<PageProps> = ({ location }) => {
  const data = useStaticQuery(versionAndLanguage);
  const context = createPathContext(location.pathname);

  const contentProps = {
    context,
    data,
  };

  let content;
  if (!context.version) {
    content = <VersionNotSelected {...contentProps} />;
  } else if (!existsVersion(data, context.version)) {
    content = <UnknownVersion {...contentProps} />;
  } else if (!context.language) {
    content = <LanguageNotSelected {...contentProps} />;
  } else if (!existsLanguage(data, context.language)) {
    content = <UnknownLanguage {...contentProps} />;
  } else {
    content = <PathNotFound {...contentProps} />;
  }
  return (
    <PageContainer>
      <SEO title="404: Documentation not found" />
      <Title>Documentation not Found</Title>
      {content}
    </PageContainer>
  );
};

const versionAndLanguage = graphql`
  query {
    languages: file(relativePath: { eq: "docs/languages.yml" }) {
      childrenLanguagesYaml {
        label
        value
      }
    }
    versions: allMarkdownRemark {
      group(field: fields___version) {
        fieldValue
      }
    }
  }
`;

export default DocsNotFoundPage;
