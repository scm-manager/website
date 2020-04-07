import React from "react";
import Title from "../components/Title";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";

const SupportPage = () => (
  <PageContainer>
    <SEO title="Support" />
    <Title>Support</Title>
    <div className="content">
      <p>
        Below are our centralized channels that our SCM-Manager support team at
        Cloudogu will be watching. We are looking forward to hearing from you.
      </p>
      <hr />
      <h2>Community Support</h2>
      <p>Use this forum for general questions.</p>
      <p>
        <a
          className="button is-primary"
          href="https://groups.google.com/forum/#!forum/scmmanager"
          target="_blank"
          rel="noopener noreferrer"
        >
          GoogleGroup / Mailinglist
        </a>
      </p>

      <p>Report bugs and create feature requests here.</p>
      <p>
        <a
          className="button is-primary"
          href="https://github.com/scm-manager/scm-manager/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          Issue tracker
        </a>
      </p>
      <p>
        Feel free to use Stackoverflow for your questions, but make sure to use
        the tag "scmmanager".
      </p>
      <p>
        <a
          className="button is-primary"
          href="https://stackoverflow.com/questions/tagged/scmmanager"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stackoverflow
        </a>
      </p>
      <hr />
      <h2>Enterprise Support</h2>
      <p>
        With our enterprise support services we offer you the integration of
        SCM-Manager into your  processes and to customize the tool according to
        your needs. Please feel free to reach out to us.
      </p>
      <p>
        <a
          className="button is-primary"
          href="https://cloudogu.com/en/scm-manager-enterprise/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Request your quote
        </a>
      </p>
    </div>
  </PageContainer>
);

export default SupportPage;
