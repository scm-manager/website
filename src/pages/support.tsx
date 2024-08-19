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
      <h2>Enterprise Support</h2>
      <p>
        With our enterprise support services we offer you the integration of
        SCM-Manager into your  processes and to customize the tool according to
        your needs. Please feel free to reach out to us.
      </p>
      <p>
        <a
          className="button is-primary"
          href="https://platform.cloudogu.com/en/support/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Request your quote
        </a>
      </p>
      <hr />
      <h2>Community Support</h2>
      <p>Use this forum for general questions and to discuss feature ideas.</p>
      <p>
        <a
          className="button is-primary"
          href="https://community.cloudogu.com/c/scm-manager/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Community Forum
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

      <p>Mailing List</p>
      <p><i>The mailing list is currently discontinued and only available as read only</i></p>
      <p>
        <a
          className="button is-primary"
          href="https://groups.google.com/forum/#!forum/scmmanager"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Group / Mailing list
        </a>
      </p>
    </div>
  </PageContainer>
);

export default SupportPage;
