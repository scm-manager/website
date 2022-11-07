import React from "react";
import Title from "../components/Title";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";

const PrivacyPage = () => (
  <PageContainer>
    <SEO title="Privacy" />
    <Title>Privacy</Title>
    <div className="columns">
      <div className="column is-three-quarters content">
        <h2>Data protection</h2>
        <p>
          The operators of these pages take the protection of your personal data
          very seriously. We treat your personal data confidentially and in
          accordance with statutory data protection regulations and this Privacy
          Policy.
        </p>
        <p>
          The use of our website is generally possible without providing
          personal data. If personal data (for example name, address, or email
          addresses) is collected on our web pages, this always takes place to
          the extent possible on a voluntary basis. This data is not shared with
          third parties without your express consent.
        </p>
        <p>
          Please note that the transfer of data on the internet (for example via
          email communication) may have security gaps. Gap-free protection of
          the data from access by third parties is not possible.
        </p>
        <h3>Cookies</h3>
        <p>We are not using cookies on the website.</p>
        <h3>Server log files</h3>
        <p>
          The provider of the web pages automatically collects and stores
          information in the server log files that your browser transfers to us
          automatically. These are:
        </p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system used</li>
          <li>Referring URL</li>
          <li>Hostname of the accessing computer</li>
          <li>Time of the server request</li>
        </ul>
        <p>
          This data cannot be assigned to specific persons. A combination of
          this data with other data sources is not performed. We reserve the
          right to review this data at a later time if we become aware of any
          concrete indications of unlawful use.
        </p>
        <h3>Matomo (formerly Piwik)</h3>
        <p>
          This website uses the open source web analysis service Matomo. It does
          not use cookies to gather information. Your IP address is anonymized
          before data is saved in Matomo. This analysis tool is used on the
          basis of 7/10 Art. 6 Para. 1 lit. f GDPR. The website operator has a
          legitimate interest in the anonymized analysis of user behavior in
          order to optimize both its website and its advertising.
        </p>
        <p>
          The information collected on the use of this website will not be
          passed on to third parties. If you do not agree to the storage and use
          of your data, you can deactivate the storage and use here. In this
          case, an opt-out cookie is stored in your browser, which prevents
          Matomo from storing usage data. If you delete your cookies, the Matomo
          opt-out cookie will also be deleted. The opt-out must be reactivated
          when you visit this website again.
        </p>
        <iframe
          style={{ border: 0, height: "200px", width: "600px" }}
          src="https://cloudogu.matomo.cloud/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=f7f7f7&fontColor=999999&fontSize=16px&fontFamily=%22Droid%20Sans%22"
        ></iframe>
        <h3>SSL Encryption</h3>
        <p>
          This site uses SSL encryption for security reasons and to protect the
          transmission of confidential content, such as requests you send to us
          as a site operator. You can recognize an encrypted connection by the
          fact that the address bar of the browser changes from "http://" to
          "https://" and by the lock symbol in your browser bar.
        </p>
        <p>
          If SSL encryption is activated, the data that you transfer to us
          cannot be read by third parties.
        </p>
        <h3>Right to information, deletion, blocking</h3>
        <p>
          You have the right to free information about your stored personal
          data, its origin and recipients and the purpose of data processing as
          well as a right to correction, blocking or deletion of this data at
          any time. For this and other questions on the subject of personal
          data, you can contact us at any time at the address given in the legal
          notice if you have any further questions on the subject of personal
          data.
        </p>
        <h3>Objection to advertising emails</h3>
        <p>
          We hereby object to the use of the contact data published as part of
          the imprint obligation for the sending of advertising and
          informational materials that were not expressly requested. The
          operators of these pages expressly reserve the right to take legal
          action in the event of unsolicited advertising information, such as
          spam emails.
        </p>
      </div>
    </div>
  </PageContainer>
);

export default PrivacyPage;
