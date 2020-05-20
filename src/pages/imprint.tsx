import React from "react";
import Title from "../components/Title";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";

const ImprintPage = () => (
  <PageContainer>
    <SEO title="Imprint" />
    <Title>Imprint</Title>
    <div className="columns">
      <div className="column is-three-quarters">
        <p>
          Cloudogu GmbH
          <br />
          Brabandtstr. 9-10
          <br />
          38100 Braunschweig
          <br />
        </p>
        <a href="mailto:&#105;&#110;&#102;&#111;&#64;&#115;&#99;&#109;&#45;&#109;&#97;&#110;&#97;&#103;&#101;&#114;&#46;&#111;&#114;&#103;">
          &#105;&#110;&#102;&#111;&#64;&#115;&#99;&#109;&#45;&#109;&#97;&#110;&#97;&#103;&#101;&#114;&#46;&#111;&#114;&#103;
        </a>
        <p>&nbsp;</p>
        <h3>
          <strong>Limitation of liability for internal content</strong>
        </h3>
        <p>
          The content of our website has been compiled with meticulous care and
          to the best of our knowledge. However, we cannot assume any liability
          for the up-to-dateness, completeness or accuracy of any of the pages.
        </p>
        <p>
          Pursuant to section 7, para. 1 of the TMG (Telemediengesetz – Tele
          Media Act by German law), we as service providers are liable for our
          own content on these pages in accordance with general laws. However,
          pursuant to sections 8 to 10 of the TMG, we as service providers are
          not under obligation to monitor external information provided or
          stored on our website. Once we have become aware of a specific
          infringement of the law, we will immediately remove the content in
          question. Any liability concerning this matter can only be assumed
          from the point in time at which the infringement becomes known to us.
        </p>
        <p>&nbsp;</p>
        <h3>
          <strong>Limitation of liability for external links</strong>
        </h3>
        <p>
          Our website contains links to the websites of third parties (“external
          links”). As the content of these websites is not under our control, we
          cannot assume any liability for such external content. In all cases,
          the provider of information of the linked websites is liable for the
          content and accuracy of the information provided. At the point in time
          when the links were placed, no infringements of the law were
          recognisable to us. As soon as an infringement of the law becomes
          known to us, we will immediately remove the link in question.
        </p>
        <p>&nbsp;</p>
        <h3>
          <strong>Copyright</strong>
        </h3>
        <p>
          The content and works published on this website are governed by the
          copyright laws of Germany. Any duplication, processing, distribution
          or any form of utilisation beyond the scope of copyright law shall
          require the prior written consent of the author or authors in
          question.
        </p>
        <p>&nbsp;</p>
        <h2><strong>Data protection</strong></h2>
        <p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this Privacy Policy.</p>
        <p>The use of our website is generally possible without providing personal data. If personal data (for example name, address, or email addresses) is collected on our web pages, this always takes place to the extent possible on a voluntary basis. This data is not shared with third parties without your express consent.</p>
        <p>Please note that the transfer of data on the internet (for example via email communication) may have security gaps. Gap-free protection of the data from access by third parties is not possible.</p>
        <p>&nbsp;</p>
        <h3><strong>Cookies</strong></h3>
        <p>We are not using cookies on the website.</p>
        <p>&nbsp;</p>
        <h3><strong>Server log files</strong></h3>
        <p>The provider of the web pages automatically collects and stores information in the server log files that your browser transfers to us automatically. These are:</p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system used</li>
          <li>Referring URL</li>
          <li>Hostname of the accessing computer</li>
          <li>Time of the server request</li>
        </ul>
        <p>This data cannot be assigned to specific persons. A combination of this data with other data sources is not performed. We reserve the right to review this data at a later time if we become aware of any concrete indications of unlawful use.</p>
        <p>&nbsp;</p>
        <h3><strong>Matomo (formerly Piwik)</strong></h3>
        <p>This website uses the open source web analysis service Matomo. It does not use cookies to gather information. Your IP address is anonymized before data is saved in Matomo. This analysis tool is used on the basis of 7/10 Art. 6 Para. 1 lit. f GDPR. The website operator has a legitimate interest in the anonymized analysis of user behavior in order to optimize both its website and its advertising.</p>
        <p>The information collected on the use of this website will not be passed on to third parties. If you do not agree to the storage and use of your data, you can deactivate the storage and use here. In this case, an opt-out cookie is stored in your browser, which prevents Matomo from storing usage data. If you delete your cookies, the Matomo opt-out cookie will also be deleted. The opt-out must be reactivated when you visit this website again.</p>
        <iframe style={{ border: 0, height: "200px", width: "600px" }} src="https://cloudogu.matomo.cloud/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=f7f7f7&fontColor=999999&fontSize=16px&fontFamily=%22Droid%20Sans%22"></iframe>
        <p>&nbsp;</p>
        <h3><strong>SSL Encryption</strong></h3>
        <p>This site uses SSL encryption for security reasons and to protect the transmission of confidential content, such as requests you send to us as a site operator. You can recognize an encrypted connection by the fact that the address bar of the browser changes from "http://" to "https://" and by the lock symbol in your browser bar.</p>
        <p>If SSL encryption is activated, the data that you transfer to us cannot be read by third parties.</p>
        <p>&nbsp;</p>
        <h3><strong>Right to information, deletion, blocking</strong></h3>
        <p>You have the right to free information about your stored personal data, its origin and recipients and the purpose of data processing as well as a right to correction, blocking or deletion of this data at any time. For this and other questions on the subject of personal data, you can contact us at any time at the address given in the legal notice if you have any further questions on the subject of personal data.</p>
        <p>&nbsp;</p>
        <h3><strong>Objection to advertising emails</strong></h3>
        <p>We hereby object to the use of the contact data published as part of the imprint obligation for the sending of advertising and informational materials that were not expressly requested. The operators of these pages expressly reserve the right to take legal action in the event of unsolicited advertising information, such as spam emails.</p>
        <p>&nbsp;</p>
        <h3>
          <strong>Image sources</strong>
        </h3>
        <p>
          Image index page:{" "}
          <a href="http://www.freepik.com" title="To Freepik">
            Designed by Freepik
          </a>
        </p>
      </div>
    </div>
  </PageContainer>
);

export default ImprintPage;
