import React from "react";
import Title from "../components/Title";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";
import styled from "styled-components";

const CounterColumn = styled.div`
  counter-set: h3counter h4counter h5counter;

  p {
    text-align: justify;
  }

  h3 {
    counter-reset: h4counter;
  }

  h4 {
    counter-reset: h5counter;
  }

  h3::before {
    counter-increment: h3counter;
    content: counter(h3counter) "\\0000a0\\0000a0";
  }

  h4::before {
    counter-increment: h4counter;
    content: counter(h3counter) "." counter(h4counter) "\\0000a0\\0000a0";
  }

  h5::before {
    counter-increment: h5counter;
    content: counter(h3counter) "." counter(h4counter) "." counter(h5counter)
      "\\0000a0\\0000a0";
  }
`;

const PrivacyPage = () => (
  <PageContainer>
    <SEO title="Privacy" />
    <Title>Privacy Policy</Title>
    <div className="columns">
      <CounterColumn className="column is-three-quarters content">
        <h3>An overview of data protection</h3>
        <h4>General information</h4>
        <p>
          The following information will provide you with an easy to navigate
          overview of what will happen with your personal data when you visit
          this website. The term “personal data” comprises all data that can be
          used to personally identify you. For detailed information about the
          subject matter of data protection, please consult our Data Protection
          Declaration, which we have included beneath this copy.
        </p>
        <h4>Data recording on this website</h4>
        <h5>
          Who is the responsible party for the recording of data on this website
          (i.e., the “controller”)?
        </h5>
        <p>
          The data on this website is processed by the operator of the website,
          whose contact information is available under section “Information
          about the responsible party (referred to as the “controller” in the
          GDPR)” in this Privacy Policy.
        </p>
        <h5>How do we record your data?</h5>
        <p>
          We collect your data as a result of your sharing of your data with us.
          This may, for instance be information you enter into our contact form.
        </p>
        <p>
          Other data shall be recorded by our IT systems automatically or after
          you consent to its recording during your website visit. This data
          comprises primarily technical information (e.g., web browser,
          operating system, or time the site was accessed). This information is
          recorded automatically when you access this website.
        </p>
        <h5>What are the purposes we use your data for?</h5>
        <p>
          A portion of the information is generated to guarantee the error free
          provision of the website. Other data may be used to analyze your user
          patterns.
        </p>
        <h5>
          What rights do you have as far as your information is concerned?
        </h5>
        <p>
          You have the right to receive information about the source,
          recipients, and purposes of your archived personal data at any time
          without having to pay a fee for such disclosures. You also have the
          right to demand that your data are rectified or eradicated. If you
          have consented to data processing, you have the option to revoke this
          consent at any time, which shall affect all future data processing.
          Moreover, you have the right to demand that the processing of your
          data be restricted under certain circumstances. Furthermore, you have
          the right to log a complaint with the competent supervising agency.
        </p>
        <p>
          Please do not hesitate to contact us at any time if you have questions
          about this or any other data protection related issues.
        </p>
        <h4>Analysis tools and tools provided by third parties</h4>
        <p>
          There is a possibility that your browsing patterns will be
          statistically analyzed when you visit this website. Such analyses are
          performed primarily with what we refer to as analysis programs.
        </p>
        <p>
          For detailed information about these analysis programs please consult
          our Data Protection Declaration below.
        </p>
        <h3>Hosting</h3>
        <p>
          We are hosting the content of our website at the following provider:
        </p>
        <h4>External Hosting</h4>
        <p>
          This website is hosted externally. Personal data collected on this
          website are stored on the servers of the host. These may include, but
          are not limited to, IP addresses, contact requests, metadata and
          communications, contract information, contact information, names, web
          page access, and other data generated through a web site.
        </p>
        <p>
          The external hosting serves the purpose of fulfilling the contract
          with our potential and existing customers (Art. 6(1)(b) GDPR) and in
          the interest of secure, fast, and efficient provision of our online
          services by a professional provider (Art. 6(1)(f) GDPR). If
          appropriate consent has been obtained, the processing is carried out
          exclusively on the basis of Art. 6 (1)(a) GDPR and § 25 (1) TDDDG,
          insofar the consent includes the storage of cookies or the access to
          information in the user's end device (e.g., device fingerprinting)
          within the meaning of the TDDDG. This consent can be revoked at any
          time.
        </p>
        <p>
          Our host(s) will only process your data to the extent necessary to
          fulfil its performance obligations and to follow our instructions with
          respect to such data.
        </p>
        <p>We are using the following host(s):</p>
        <p>
          Google Cloud EMEA Limited
          <br />
          Velasco
          <br />
          Clanwilliam Place
          <br />
          Dublin 2<br />
          Ireland
        </p>
        <p>
          The servers on which our website is hosted are located in Frankfurt,
          Germany.
        </p>
        <h5>Data processing</h5>
        <p>
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>
        <h3>General information and mandatory information</h3>
        <h4>Data protection</h4>
        <p>
          The operators of this website and its pages take the protection of
          your personal data very seriously. Hence, we handle your personal data
          as confidential information and in compliance with the statutory data
          protection regulations and this Data Protection Declaration.
        </p>
        <p>
          Whenever you use this website, a variety of personal information will
          be collected. Personal data comprises data that can be used to
          personally identify you. This Data Protection Declaration explains
          which data we collect as well as the purposes we use this data for. It
          also explains how, and for which purpose the information is collected.
        </p>
        <p>
          We herewith advise you that the transmission of data via the Internet
          (i.e., through e-mail communications) may be prone to security gaps.
          It is not possible to completely protect data against third-party
          access.
        </p>
        <h4>
          Information about the responsible party (referred to as the
          “controller” in the GDPR)
        </h4>
        <p>The data processing controller on this website is:</p>
        <p>
          Cloudogu GmbH
          <br />
          Garküche 1
          <br />
          38100 Braunschweig
          <br />
          Germany
        </p>
        <p>
          Represented by the CEO Thomas Grosser.
          <br />
          Phone: <a href="tel:+4953161808880">+49 (531) 61808880</a>
          <br />
          E-mail: <a href="mailto:hello@cloudogu.com">hello@cloudogu.com</a>
        </p>
        <p>
          The controller is the natural person or legal entity that
          single-handedly or jointly with others makes decisions as to the
          purposes of and resources for the processing of personal data (e.g.,
          names, e-mail addresses, etc.).
        </p>
        <h4>Storage duration</h4>
        <p>
          Unless a more specific storage period has been specified in this
          privacy policy, your personal data will remain with us until the
          purpose for which it was collected no longer applies. If you assert a
          justified request for deletion or revoke your consent to data
          processing, your data will be deleted, unless we have other legally
          permissible reasons for storing your personal data (e.g., tax or
          commercial law retention periods); in the latter case, the deletion
          will take place after these reasons cease to apply.
        </p>
        <h4>
          General information on the legal basis for the data processing on this
          website
        </h4>
        <p>
          If you have consented to data processing, we process your personal
          data on the basis of Art. 6(1)(a) GDPR or Art. 9 (2)(a) GDPR, if
          special categories of data are processed according to Art. 9 (1)
          DSGVO. In the case of explicit consent to the transfer of personal
          data to third countries, the data processing is also based on Art. 49
          (1)(a) GDPR. If you have consented to the storage of cookies or to the
          access to information in your end device (e.g., via device
          fingerprinting), the data processing is additionally based on § 25 (1)
          TDDDG. The consent can be revoked at any time. If your data is
          required for the fulfillment of a contract or for the implementation
          of pre-contractual measures, we process your data on the basis of Art.
          6(1)(b) GDPR. Furthermore, if your data is required for the
          fulfillment of a legal obligation, we process it on the basis of Art.
          6(1)(c) GDPR. Furthermore, the data processing may be carried out on
          the basis of our legitimate interest according to Art. 6(1)(f) GDPR.
          Information on the relevant legal basis in each individual case is
          provided in the following paragraphs of this privacy policy.
        </p>
        <h4>Designation of a data protection officer</h4>
        <p>
          We have appointed a data protection officer. You can reach our data
          protection officer under:
        </p>
        <p>
          E-mail:{" "}
          <a href="mailto:datenschutz@cloudogu.com">datenschutz@cloudogu.com</a>
          <br />
          Tel.: <a href="tel:+4915173044032">+49 151 730 44 032</a>
        </p>
        <h4>Recipients of personal data</h4>
        <p>
          In the scope of our business activities, we cooperate with various
          external parties. In some cases, this also requires the transfer of
          personal data to these external parties. We only disclose personal
          data to external parties if this is required as part of the
          fulfillment of a contract, if we are legally obligated to do so (e.g.,
          disclosure of data to tax authorities), if we have a legitimate
          interest in the disclosure pursuant to Art. 6 (1)(f) GDPR, or if
          another legal basis permits the disclosure of this data. When using
          processors, we only disclose personal data of our customers on the
          basis of a valid contract on data processing. In the case of joint
          processing, a joint processing agreement is concluded.
        </p>
        <h4>Revocation of your consent to the processing of data</h4>
        <p>
          A wide range of data processing transactions are possible only subject
          to your express consent. You can also revoke at any time any consent
          you have already given us. This shall be without prejudice to the
          lawfulness of any data collection that occurred prior to your
          revocation.
        </p>
        <h4>
          Right to object to the collection of data in special cases; right to
          object to direct advertising (Art. 21 GDPR)
        </h4>
        <p>
          IN THE EVENT THAT DATA ARE PROCESSED ON THE BASIS OF ART. 6(1)(E) OR
          (F) GDPR, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING
          OF YOUR PERSONAL DATA BASED ON GROUNDS ARISING FROM YOUR UNIQUE
          SITUATION. THIS ALSO APPLIES TO ANY PROFILING BASED ON THESE
          PROVISIONS. TO DETERMINE THE LEGAL BASIS, ON WHICH ANY PROCESSING OF
          DATA IS BASED, PLEASE CONSULT THIS DATA PROTECTION DECLARATION. IF YOU
          LOG AN OBJECTION, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL
          DATA, UNLESS WE ARE IN A POSITION TO PRESENT COMPELLING PROTECTION
          WORTHY GROUNDS FOR THE PROCESSING OF YOUR DATA, THAT OUTWEIGH YOUR
          INTERESTS, RIGHTS AND FREEDOMS OR IF THE PURPOSE OF THE PROCESSING IS
          THE CLAIMING, EXERCISING OR DEFENCE OF LEGAL ENTITLEMENTS (OBJECTION
          PURSUANT TO ART. 21(1) GDPR).
        </p>
        <p>
          IF YOUR PERSONAL DATA IS BEING PROCESSED IN ORDER TO ENGAGE IN DIRECT
          ADVERTISING, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR
          AFFECTED PERSONAL DATA FOR THE PURPOSES OF SUCH ADVERTISING AT ANY
          TIME. THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS
          AFFILIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL
          DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT ADVERTISING
          PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).
        </p>
        <h4>Right to log a complaint with the competent supervisory agency</h4>
        <p>
          In the event of violations of the GDPR, data subjects are entitled to
          log a complaint with a supervisory agency, in particular in the member
          state where they usually maintain their domicile, place of work or at
          the place where the alleged violation occurred. The right to log a
          complaint is in effect regardless of any other administrative or court
          proceedings available as legal recourses. The supervisory authority
          responsible for us is:
        </p>
        <p>Der Landesbeauftragte für den Datenschutz Niedersachsen</p>
        <p>
          Denis Lehmkemper
          <br />
          Prinzenstraße 5<br />
          30159 Hannover
        </p>
        <p>
          Phone: <a href="tel:+495111204500">+49 (511) 120 45 00</a>
          <br />
          Telefax: <a href="tel:+495111204599">+49 (511) 120 45 99</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:poststelle@lfd.niedersachsen.de">
            poststelle@lfd.niedersachsen.de
          </a>
        </p>
        <h4>Right to data portability</h4>
        <p>
          You have the right to have data that we process automatically on the
          basis of your consent or in fulfillment of a contract handed over to
          you or to a third party in a common, machine-readable format. If you
          should demand the direct transfer of the data to another controller,
          this will be done only if it is technically feasible.
        </p>
        <h4>Information about, rectification and eradication of data</h4>
        <p>
          Within the scope of the applicable statutory provisions, you have the
          right to demand information about your archived personal data, their
          source, and recipients as well as the purpose of the processing of
          your data at any time. You may also have a right to have your data
          rectified or eradicated. If you have questions about this subject
          matter or any other questions about personal data, please do not
          hesitate to contact us at any time.
        </p>
        <h4>Right to demand processing restrictions</h4>
        <p>
          You have the right to demand the imposition of restrictions as far as
          the processing of your personal data is concerned. To do so, you may
          contact us at any time. The right to demand restriction of processing
          applies in the following cases:
        </p>
        <ul>
          <li>
            In the event that you should dispute the correctness of your data
            archived by us, we will usually need some time to verify this claim.
            During the time that this investigation is ongoing, you have the
            right to demand that we restrict the processing of your personal
            data.
          </li>
          <li>
            If the processing of your personal data was/is conducted in an
            unlawful manner, you have the option to demand the restriction of
            the processing of your data instead of demanding the eradication of
            this data.
          </li>
          <li>
            If we do not need your personal data any longer and you need it to
            exercise, defend or claim legal entitlements, you have the right to
            demand the restriction of the processing of your personal data
            instead of its eradication.
          </li>
          <li>
            If you have raised an objection pursuant to Art. 21(1) GDPR, your
            rights and our rights will have to be weighed against each other. As
            long as it has not been determined whose interests prevail, you have
            the right to demand a restriction of the processing of your personal
            data.
          </li>
        </ul>
        <p>
          If you have restricted the processing of your personal data, these
          data – with the exception of their archiving – may be processed only
          subject to your consent or to claim, exercise or defend legal
          entitlements or to protect the rights of other natural persons or
          legal entities or for important public interest reasons cited by the
          European Union or a member state of the EU.
        </p>
        <h4>SSL and/or TLS encryption</h4>
        <p>
          For security reasons and to protect the transmission of confidential
          content, such as purchase orders or inquiries you submit to us as the
          website operator, this website uses either an SSL or a TLS encryption
          program. You can recognize an encrypted connection by checking whether
          the address line of the browser switches from “http://” to “https://”
          and also by the appearance of the lock icon in the browser line.
        </p>
        <p>
          If the SSL or TLS encryption is activated, data you transmit to us
          cannot be read by third parties.
        </p>
        <h4>Rejection of unsolicited e-mails</h4>
        <p>
          We herewith object to the use of contact information published in
          conjunction with the mandatory information to be provided in our Site
          Notice to send us promotional and information material that we have
          not expressly requested. The operators of this website and its pages
          reserve the express right to take legal action in the event of the
          unsolicited sending of promotional information, for instance via SPAM
          messages.
        </p>
        <h3>Recording of data on this website</h3>
        <h4>Cookies</h4>
        <p>
          Our websites and pages use what the industry refers to as “cookies.”
          Cookies are small data packages that do not cause any damage to your
          device. They are either stored temporarily for the duration of a
          session (session cookies) or they are permanently archived on your
          device (permanent cookies). Session cookies are automatically deleted
          once you terminate your visit. Permanent cookies remain archived on
          your device until you actively delete them, or they are automatically
          eradicated by your web browser.
        </p>
        <p>
          Cookies can be issued by us (first-party cookies) or by third-party
          companies (so-called third-party cookies). Third-party cookies enable
          the integration of certain services of third-party companies into
          websites (e.g., cookies for handling payment services).
        </p>
        <p>
          Cookies have a variety of functions. Many cookies are technically
          essential since certain website functions would not work in the
          absence of these cookies (e.g., the shopping cart function or the
          display of videos). Other cookies may be used to analyze user behavior
          or for promotional purposes.
        </p>
        <p>
          Cookies, which are required for the performance of electronic
          communication transactions, for the provision of certain functions you
          want to use (e.g., for the shopping cart function) or those that are
          necessary for the optimization (required cookies) of the website
          (e.g., cookies that provide measurable insights into the web
          audience), shall be stored on the basis of Art. 6(1)(f) GDPR, unless a
          different legal basis is cited. The operator of the website has a
          legitimate interest in the storage of required cookies to ensure the
          technically error-free and optimized provision of the operator’s
          services. If your consent to the storage of the cookies and similar
          recognition technologies has been requested, the processing occurs
          exclusively on the basis of the consent obtained (Art. 6(1)(a) GDPR
          and § 25 (1) TDDDG); this consent may be revoked at any time.
        </p>
        <p>
          You have the option to set up your browser in such a manner that you
          will be notified any time cookies are placed and to permit the
          acceptance of cookies only in specific cases. You may also exclude the
          acceptance of cookies in certain cases or in general or activate the
          delete-function for the automatic eradication of cookies when the
          browser closes. If cookies are deactivated, the functions of this
          website may be limited.
        </p>
        <p>
          Which cookies and services are used on this website can be found in
          this privacy policy.
        </p>
        <h4>CCM19</h4>
        <p>
          Our website uses CCM19 to obtain your consent for the storage of
          certain cookies on your device or for the use of specific technologies
          and to document the former in a data protection compliant manner. The
          provider of this technology is Papoo Software & Media GmbH, Auguststr.
          4, 53229 Bonn, Germany (hereinafter referred to as “CCM19”).
        </p>
        <p>
          When you access our website, a connection with the servers of CCM19 is
          established to obtain your consent and other declarations related to
          the use of cookies. Subsequently, CCM19 will store a cookie in your
          browser to be able to allocate the granted consent or revocation. The
          data generated using this system will be archived by us until you ask
          us to delete it, delete the CCM19 cookie yourself or the purpose for
          the archiving of the data no longer applies. This shall be without
          prejudice to any mandatory statutory archiving periods.
        </p>
        <p>
          We use CCM19 to obtain the consent mandated by law for the use of
          cookies. The legal basis for this is Art.6 (1)(1)(f) GDPR.
        </p>
        <h5>Data processing</h5>
        <p>
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>
        <h4>Server log files</h4>
        <p>
          The provider of this website and its pages automatically collects and
          stores information in so-called server log files, which your browser
          communicates to us automatically. The information comprises:
        </p>
        <ul>
          <li>The type and version of browser used</li>
          <li>The used operating system</li>
          <li>Referrer URL</li>
          <li>The hostname of the accessing computer</li>
          <li>The time of the server inquiry</li>
          <li>The IP address</li>
        </ul>
        <p>This data is not merged with other data sources.</p>
        <p>
          This data is recorded on the basis of Art. 6(1)(f) GDPR. The operator
          of the website has a legitimate interest in the technically error free
          depiction and the optimization of the operator’s website. In order to
          achieve this, server log files must be recorded. The server log files
          are stored for 14 days and then deleted.
        </p>
        <h4>Contact form</h4>
        <p>
          If you submit inquiries to us via our contact form, the information
          provided in the contact form as well as any contact information
          provided therein will be stored by us in order to handle your inquiry
          and in the event that we have further questions. We will not share
          this information without your consent.
        </p>
        <p>
          The processing of these data is based on Art. 6(1)(b) GDPR, if your
          request is related to the execution of a contract or if it is
          necessary to carry out pre-contractual measures. In all other cases
          the processing is based on our legitimate interest in the effective
          processing of the requests addressed to us (Art. 6(1)(f) GDPR) or on
          your agreement (Art. 6(1)(a) GDPR) if this has been requested; the
          consent can be revoked at any time.
        </p>
        <p>
          The information you have entered into the contact form shall remain
          with us until you ask us to eradicate the data, revoke your consent to
          the archiving of data or if the purpose for which the information is
          being archived no longer exists (e.g., after we have concluded our
          response to your inquiry). This shall be without prejudice to any
          mandatory legal provisions, in particular retention periods.
        </p>
        <h4>Request by e-mail, post, telephone, or fax</h4>
        <p>
          If you contact us by e-mail, post, telephone or fax, your request,
          including all resulting personal data (name, request) will be stored
          and processed by us for the purpose of processing your request. We do
          not pass these data on without your consent.
        </p>
        <p>
          These data are processed on the basis of Art. 6(1)(b) GDPR if your
          inquiry is related to the fulfillment of a contract or is required for
          the performance of pre-contractual measures. In all other cases, the
          data are processed on the basis of our legitimate interest in the
          effective handling of inquiries submitted to us (Art. 6(1)(f) GDPR) or
          on the basis of your consent (Art. 6(1)(a) GDPR) if it has been
          obtained; the consent can be revoked at any time.
        </p>
        <p>
          The data sent by you to us via contact requests remain with us until
          you request us to delete, revoke your consent to the storage or the
          purpose for the data storage lapses (e.g. after completion of your
          request). Mandatory statutory provisions - in particular statutory
          retention periods - remain unaffected.
        </p>
        <h4>Google Forms</h4>
        <p>
          We have integrated Google Forms on this website. The provider is
          Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland
          (hereinafter referred to as Google).
        </p>
        <p>
          Google Forms enables us to create online forms to collect messages,
          enquiries, and other input from our website visitors in a structured
          manner. All entries you make are processed on Google's servers. Google
          Forms stores a cookie in your browser that contains a unique ID (NID
          cookie). This cookie stores various information such as your language
          settings.
        </p>
        <p>
          The use of Google Forms is based on our legitimate interest in
          determining your request in the most user-friendly way possible (Art.
          6 para. 1 lit. f GDPR). If a corresponding consent has been requested,
          the processing is carried out exclusively on the basis of Art. 6 para.
          1 lit. a GDPR and § 25 para. 1 TDDDG, insofar as the consent includes
          the storage of cookies or access to information in the user's terminal
          device (e.g. device fingerprinting) within the meaning of the TDDDG.
          Consent can be revoked at any time.
        </p>
        <p>
          We will retain the data you provide on the form until you request its
          deletion, revoke your consent for its storage, or the purpose for its
          storage no longer pertains (e.g. after fulfilling your request).
          Mandatory statutory provisions - in particular retention periods -
          remain unaffected.
        </p>
        <p>
          Further information can be found in Google's privacy policy at{" "}
          <a
            href="https://policies.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com
          </a>
          .
        </p>
        <p>
          The company is certified in accordance with the ‘EU-US Data Privacy
          Framework’ (DPF). The DPF is an agreement between the European Union
          and the USA, which is intended to ensure compliance with European data
          protection standards for data processing in the USA. Every company
          certified under the DPF undertakes to comply with these data
          protection standards. Further information on this can be obtained from
          the provider at the following link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
            target="_blank"
            rel="noopener noreferrer"
          >
            .
            www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
          </a>
          .
        </p>
        <h5>Data processing</h5>
        <p>
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>
        <h3>Social Media</h3>
        <h4>GitHub</h4>
        <p>
          Icons (image of the logo of the social media platform, with a link to
          our social media presence there) of the GitHub network are integrated
          on this website. By clicking on the icon, you will be redirected to
          the GitHub page. This is not a Like or Share button. The provider of
          the GitHub website is GitHub Inc, 88 Colin P Kelly Jr Street, San
          Francisco, CA 94107, USA.
        </p>
        <p>
          When you click on the GitHub icon provided on this website, a direct
          connection is established between your browser and the GitHub server.
          GitHub thereby receives the information that you have visited this
          website with your IP address. We would like to point out that, as the
          provider of the pages, we have no knowledge of the content of the
          transmitted data or its use by GitHub. Further information on this can
          be found in GitHub's privacy policy at{" "}
          <a
            href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.github.com/en/github/site-policy/github-privacy-statement
          </a>
          .
        </p>
        <p>
          If you do not want GitHub to be able to associate your visit to our
          GitHub website with your GitHub user account, please log out of your
          GitHub user account.
        </p>
        <p>
          The use of the GitHub icon with a link to our GitHub page is based on
          Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate
          interest in the widest possible visibility in social media.
        </p>
        <p>
          GitHub is responsible for the data security of the GitHub service. You
          can assert data subject rights (e.g. requests for information)
          regarding the data processed by GitHub directly with GitHub.
        </p>
        <p>
          Data transfer to the USA is based on the standard contractual clauses
          of the EU Commission. You can find details here:{" "}
          <a
            href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement
          </a>
          .
        </p>
        <p>
          The company is certified in accordance with the ‘EU-US Data Privacy
          Framework’ (DPF). The DPF is an agreement between the European Union
          and the USA, which is intended to ensure compliance with European data
          protection standards for data processing in the USA. Every company
          certified under the DPF undertakes to comply with these data
          protection standards. Further information on this can be obtained from
          the provider at the following link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active
          </a>
          .
        </p>
        <h3>Our social media appearances</h3>
        <p>
          This privacy policy applies to the following social media presence:{" "}
          <a
            href="https://github.com/scm-manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/scm-manager
          </a>
        </p>
        <h4>Data processing through social networks</h4>
        <p>
          We maintain publicly available profiles in social networks. The
          individual social networks we use can be found below.
        </p>
        <p>
          Social networks such as Facebook, X etc. can generally analyze your
          user behavior comprehensively if you visit their website or a website
          with integrated social media content (e.g., like buttons or banner
          ads). When you visit our social media pages, numerous data
          protection-relevant processing operations are triggered. In detail:
        </p>
        <p>
          If you are logged in to your social media account and visit our social
          media page, the operator of the social media portal can assign this
          visit to your user account. Under certain circumstances, your personal
          data may also be recorded if you are not logged in or do not have an
          account with the respective social media portal. In this case, this
          data is collected, for example, via cookies stored on your device or
          by recording your IP address.
        </p>
        <p>
          Using the data collected in this way, the operators of the social
          media portals can create user profiles in which their preferences and
          interests are stored. This way you can see interest-based advertising
          inside and outside of your social media presence. If you have an
          account with the social network, interest-based advertising can be
          displayed on any device you are logged in to or have logged in to.
        </p>
        <p>
          Please also note that we cannot retrace all processing operations on
          the social media portals. Depending on the provider, additional
          processing operations may therefore be carried out by the operators of
          the social media portals. Details can be found in the terms of use and
          privacy policy of the respective social media portals.
        </p>
        <h4>Legal basis</h4>
        <p>
          Our social media appearances should ensure the widest possible
          presence on the Internet. This is a legitimate interest within the
          meaning of Art. 6 (1) lit. f GDPR. The analysis processes initiated by
          the social networks may be based on divergent legal bases to be
          specified by the operators of the social networks (e.g., consent
          within the meaning of Art. 6 (1) (a) GDPR).
        </p>
        <h4>Responsibility and assertion of rights</h4>
        <p>
          If you visit one of our social media sites (e.g., Facebook), we,
          together with the operator of the social media platform, are
          responsible for the data processing operations triggered during this
          visit. You can in principle protect your rights (information,
          correction, deletion, limitation of processing, data portability and
          complaint) vis-à-vis us as well as vis-à-vis the operator of the
          respective social media portal (e.g., Facebook).
        </p>
        <p>
          Please note that despite the shared responsibility with the social
          media portal operators, we do not have full influence on the data
          processing operations of the social media portals. Our options are
          determined by the company policy of the respective provider.
        </p>
        <h4>Storage time</h4>
        <p>
          The data collected directly from us via the social media presence will
          be deleted from our systems as soon as you ask us to delete it, you
          revoke your consent to the storage or the purpose for the data storage
          lapses. Stored cookies remain on your device until you delete them.
          Mandatory statutory provisions - in particular, retention periods -
          remain unaffected.
        </p>
        <p>
          We have no control over the storage duration of your data that are
          stored by the social network operators for their own purposes. For
          details, please contact the social network operators directly (e.g.,
          in their privacy policy, see below).
        </p>
        <h4>Your rights</h4>
        <p>
          You have the right to receive information about the origin, recipient,
          and purpose of your stored personal data at any time and free of
          charge. You also have the right to object, the right to data
          portability and the right to file a complaint with the responsible
          regulatory agency. Furthermore, you can request the correction,
          blocking, deletion and, under certain circumstances, the restriction
          of the processing of your personal data.
        </p>
        <h4>Individual social networks</h4>
        <h5>GitHub</h5>
        <p>
          We have a profile on GitHub. The provider of this service is GitHub,
          Inc, 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. Details on
          how they handle your personal data and further information on the
          GitHub terms of use and the GitHub privacy policy can be found at{" "}
          <a
            href="https://help.github.com/articles/github-terms-of-service/"
            target="_blank"
            rel="noopener noreferrer"
          >
            help.github.com/articles/github-terms-of-service/
          </a>{" "}
          and <br />
          <a
            href="https://help.github.com/articles/github-privacy-statement/"
            target="_blank"
            rel="noopener noreferrer"
          >
            help.github.com/articles/github-privacy-statement/
          </a>
          .
        </p>
        <h3>Analysis tools and advertising</h3>
        <h4>Matomo</h4>
        <p>This website uses the open-source web analysis service Matomo.</p>
        <p>
          Through Matomo, we are able to collect and analyze data on the use of
          our website-by-website visitors. This enables us to find out, for
          instance, when which page views occurred and from which region they
          came. In addition, we collect various log files (e.g. IP address,
          referrer, browser, and operating system used) and can measure whether
          our website visitors perform certain actions (e.g. clicks, purchases,
          etc.).
        </p>
        <p>
          The use of this analysis tool is based on Art. 6(1)(f) GDPR. The
          website operator has a legitimate interest in the analysis of user
          patterns, in order to optimize the operator’s web offerings and
          advertising. If appropriate consent has been obtained, the processing
          is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25
          (1) TDDDG, insofar the consent includes the storage of cookies or the
          access to information in the user’s end device (e.g., device
          fingerprinting) within the meaning of the TDDDG. This consent can be
          revoked at any time.
        </p>
        <h5>IP anonymization</h5>
        <p>
          For analysis with Matomo we use IP anonymization. Your IP address is
          shortened before the analysis, so that it is no longer clearly
          assignable to you.
        </p>
        <h5>Hosting</h5>
        <p>We host Matomo with the following third-party provider:</p>
        <p>
          InnoCraft Ltd, 7 Waterloo Quay PO625, 6140 Wellington, New Zealand
        </p>
        <h5>Data processing</h5>
        <p>
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>
        <h4>Google Ads</h4>
        <p>
          The website operator uses Google Ads. Google Ads is an online
          promotional program of Google Ireland Limited (“Google”), Gordon
          House, Barrow Street, Dublin 4, Ireland.
        </p>
        <p>
          Google Ads enables us to display ads in the Google search engine or on
          third-party websites, if the user enters certain search terms into
          Google (keyword targeting). It is also possible to place targeted ads
          based on the user data Google has in its possession (e.g., location
          data and interests; target group targeting). As the website operator,
          we can analyze these data quantitatively, for instance by analyzing
          which search terms resulted in the display of our ads and how many ads
          led to respective clicks.
        </p>
        <p>
          The use of these services occurs on the basis of your consent pursuant
          to Art. 6(1)(a) GDPR and § 25(1) TDDDG. You may revoke your consent at
          any time.
        </p>
        <p>
          Data transmission to the US is based on the Standard Contractual
          Clauses (SCC) of the European Commission. Details can be found here:{" "}
          <a
            href="https://policies.google.com/privacy/frameworks"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy/frameworks
          </a>{" "}
          and{" "}
          <a
            href="https://business.safety.google/controllerterms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            business.safety.google/controllerterms/
          </a>
          .
        </p>
        <p>
          The company is certified in accordance with the “EU-US Data Privacy
          Framework” (DPF). The DPF is an agreement between the European Union
          and the US, which is intended to ensure compliance with European data
          protection standards for data processing in the US. Every company
          certified under the DPF is obliged to comply with these data
          protection standards. For more information, please contact the
          provider under the following link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
          </a>
          .
        </p>
        <h3>Newsletter</h3>
        <h4>Newsletter data</h4>
        <p>
          In order to keep you informed about new products, current offers and
          similar, we offer you the opportunity to subscribe to our newsletter.
          If you would like to receive the newsletter offered on the website or
          when registering, we require an e-mail address from you as well as
          information that allows us to verify that you are the owner of the
          e-mail address provided and that you agree to receive the newsletter.
          No further data is collected, or only on a voluntary basis.
        </p>
        <p>
          We use the double opt-in procedure for registration to ensure that you
          personally subscribe to the newsletter. In the double opt-in
          procedure, we send you an email to the email address you have provided
          after you have registered for the newsletter with a link to confirm
          that you wish to receive the newsletter. This ensures that no-one can
          register with a third-party e-mail address. When you register for the
          newsletter, the following personal data is stored:
        </p>
        <ul>
          <li>e-mail address</li>
          <li>
            Your first and last name, if applicable, if you provide this
            voluntarily
          </li>
          <li>IP address</li>
          <li>Date and time of registration</li>
        </ul>
        <p>
          We log the data for the future dispatch of the newsletter and to
          protect our legitimate interest in being able to prove your
          registration. If the receipt of the newsletter is not confirmed, your
          registration / your data will be automatically deleted after 1 week.
        </p>
        <p>
          We use the newsletter service provider CleverReach to process the
          newsletter.
        </p>
        <h4>Clever Reach</h4>
        <p>
          We use CleverReach to send newsletters. The provider is CleverReach
          GmbH & Co. KG, Schafjückenweg 2, 26180 Rastede, Germany (hereinafter:
          ‘CleverReach’). CleverReach is a service that can be used to organize
          and analyze the sending of newsletters. The data you enter for the
          purpose of receiving the newsletter (e.g. email address) is stored on
          CleverReach's servers in Germany or Ireland.
        </p>
        <p>
          In order to be able to send you newsletters that match your interests,
          we would like to analyze the use of our email newsletter - for
          example, whether you have opened the newsletter or clicked on certain
          links.
        </p>
        <p>
          Our newsletters sent with CleverReach enable us to analyze the
          behavior of newsletter recipients. Among other things, we can analyze
          how many recipients have opened the newsletter message and how often
          which link in the newsletter was clicked on. Conversion tracking can
          also be used to analyze whether a predefined action (e.g. purchase of
          a product on this website) has taken place after clicking on the link
          in the newsletter. Further information on data analysis by CleverReach
          newsletters can be found at:{" "}
          <a
            href="https://www.cleverreach.com/de/funktionen/reporting-und-tracking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cleverreach.com/de/funktionen/reporting-und-tracking/
          </a>
          .
        </p>
        <p>
          We track the use of the e-mail newsletter exclusively on the basis of
          your consent to receive the newsletter, which we request when you
          register for the newsletter. We use the data to continuously improve
          the quality of the newsletter and to customize content and offers to
          you where necessary.
        </p>
        <p>
          The data processing takes place on the basis of your consent (Art. 6
          para. 1 lit. a GDPR). You can revoke this consent at any time by
          unsubscribing from the newsletter. There is an unsubscribe link at the
          end of every newsletter. You can also unsubscribe from the newsletter
          at any time by sending an informal email to datenschutz@cloudogu.com.
        </p>
        <p>
          If you do not wish to be analyzed by CleverReach, you must unsubscribe
          from the newsletter. For this purpose, we provide a corresponding link
          or button in every newsletter message.
        </p>
        <p>
          The data you provide us with for the purpose of subscribing to the
          newsletter will be stored by us until you unsubscribe from the
          newsletter or the newsletter service provider and deleted from the
          newsletter distribution list after you unsubscribe from the
          newsletter. Your data for the newsletter dispatch will be deleted
          within 3 months after cancellation of the newsletter receipt, provided
          that the deletion does not conflict with any statutory retention
          requirements. Data stored by us for other purposes remains unaffected
          by this.
        </p>
        <p>
          After you unsubscribe from the newsletter distribution list, your
          e-mail address may be stored by us or the newsletter service provider
          in a blacklist if this is necessary to prevent future mailings. The
          data from the blacklist will only be used for this purpose and will
          not be merged with other data. This serves both your interest and our
          interest in complying with the legal requirements when sending
          newsletters (legitimate interest within the meaning of Art. 6 para. 1
          lit. f GDPR). Storage in the blacklist is not limited in time. You can
          object to the storage if your interests outweigh our legitimate
          interest.
        </p>
        <p>
          You can find more details in CleverReach's privacy policy at:{" "}
          <a
            href="https://www.cleverreach.com/de/datenschutz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cleverreach.com/de/datenschutz/
          </a>
          .
        </p>
        <h5>Data processing</h5>
        <p>
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>
        <h4>Newsletter mailing to existing customers</h4>
        <p>
          If you order goods or services from us and enter your e-mail address,
          this e-mail address may subsequently be used by us to send you
          newsletters, provided we inform you of this in advance. In such a
          case, only direct advertising for our own similar goods or services
          will be sent via the newsletter. You can unsubscribe from this
          newsletter at any time. There is a corresponding link in every
          newsletter for this purpose. In this case, the legal basis for sending
          the newsletter is Art. 6 (1)(f) GDPR in conjunction with Section 7 (3)
          UWG.
        </p>
        <p>
          After you unsubscribe from the newsletter distribution list, we may
          store your email address in a blacklist to prevent future mailings to
          you. The data from the blacklist will only be used for this purpose
          and will not be merged with other data. This serves both your interest
          and our interest in complying with the legal requirements when sending
          newsletters (legitimate interest within the meaning of Art. 6 (1)(f)
          GDPR). Storage in the blacklist is not limited in time. You can object
          to the storage if your interests outweigh our legitimate interest.
        </p>
        <h3>Plug-ins and Tools</h3>
        <h4>SalesViewer</h4>
        <p>
          This website uses SalesViewer® technology from SalesViewer® GmbH to
          collect and store data for marketing, market research and optimization
          purposes. The provider is SalesViewer / SalesViewer GmbH, Hueststr.
          30, 44787 Bochum (hereinafter referred to as ‘SalesViewer’).
        </p>
        <p>
          A JavaScript-based code is used for this purpose, which is used to
          collect company-related data and the corresponding use. The data
          collected with this technology is encrypted using a non-reversible
          one-way function (so-called hashing). The data is immediately
          pseudonymized and is not used to personally identify the visitor to
          this website.
        </p>
        <p>
          The data stored by SalesViewer is deleted as soon as it is no longer
          required for its intended purpose and the deletion does not conflict
          with any statutory retention obligations.
        </p>
        <p>
          You can object to the collection and storage of data at any time with
          effect for the future by clicking on this link{" "}
          <a
            href="https://www.salesviewer.com/opt-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.salesviewer.com/opt-out
          </a>{" "}
          to prevent the collection by SalesViewer® within this website in the
          future. An opt-out cookie for this website will be stored on your
          device. If you delete your cookies in this browser, you will need to
          click this link again.
        </p>
        <p>
          The use of SalesViewer is based on Art. 6 para. 1 lit. f GDPR. The
          website operator has a legitimate interest in recording company visits
          to our website and their user behavior. If a corresponding consent has
          been requested, the processing is carried out exclusively on the basis
          of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG, insofar as the
          consent includes the storage of cookies or access to information in
          the user's terminal device (e.g. device fingerprinting) within the
          meaning of the TDDDG. Consent can be revoked at any time.
        </p>
        <p>
          Further details can be found in the provider's privacy policy at{" "}
          <a
            href="https://www.salesviewer.com/de/plattform/datenschutz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.salesviewer.com/de/plattform/datenschutz/
          </a>
          .
        </p>
        <h5>Data processing</h5>
        <p>
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>
        <h3>Online-based Audio and Video Conferences (Conference tools)</h3>
        <h4>Data processing</h4>
        <p>
          We use online conference tools, among other things, for communication
          with our customers. The tools we use are listed in detail below. If
          you communicate with us by video or audio conference using the
          Internet, your personal data will be collected and processed by the
          provider of the respective conference tool and by us. The conferencing
          tools collect all information that you provide/access to use the tools
          (email address and/or your phone number). Furthermore, the conference
          tools process the duration of the conference, start and end (time) of
          participation in the conference, number of participants and other
          “context information” related to the communication process (metadata).
        </p>
        <p>
          Furthermore, the provider of the tool processes all the technical data
          required for the processing of the online communication. This
          includes, in particular, IP addresses, MAC addresses, device IDs,
          device type, operating system type and version, client version, camera
          type, microphone or loudspeaker and the type of connection.
        </p>
        <p>
          Should content be exchanged, uploaded, or otherwise made available
          within the tool, it is also stored on the servers of the tool
          provider. Such content includes, but is not limited to, cloud
          recordings, chat/ instant messages, voicemail uploaded photos and
          videos, files, whiteboards, and other information shared while using
          the service.
        </p>
        <p>
          Please note that we do not have complete influence on the data
          processing procedures of the tools used. Our possibilities are largely
          determined by the corporate policy of the respective provider. Further
          information on data processing by the conference tools can be found in
          the data protection declarations of the tools used, and which we have
          listed below this text.
        </p>
        <h4>Purpose and legal bases</h4>
        <p>
          The conference tools are used to communicate with prospective or
          existing contractual partners or to offer certain services to our
          customers (Art. 6(1)(b) GDPR). Furthermore, the use of the tools
          serves to generally simplify and accelerate communication with us or
          our company (legitimate interest in the meaning of Art. 6(1)(f) GDPR).
          Insofar as consent has been requested, the tools in question will be
          used on the basis of this consent; the consent may be revoked at any
          time with effect from that date.
        </p>
        <h4>Duration of storage</h4>
        <p>
          Data collected directly by us via the video and conference tools will
          be deleted from our systems immediately after you request us to delete
          it, revoke your consent to storage, or the reason for storing the data
          no longer applies. Stored cookies remain on your end device until you
          delete them. Mandatory legal retention periods remain unaffected.
        </p>
        <p>
          We have no influence on the duration of storage of your data that is
          stored by the operators of the conference tools for their own
          purposes. For details, please directly contact the operators of the
          conference tools.
        </p>
        <h4>Conference tools used</h4>
        <p>We employ the following conference tools:</p>
        <h5>Google Meet</h5>
        <p>
          We use Google Meet. The provider is Google Ireland Limited, Gordon
          House, Barrow Street, Dublin 4, Ireland. For details on data
          processing, please see the Google privacy policy:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy
          </a>
          .
        </p>
        <p>
          The company is certified in accordance with the “EU-US Data Privacy
          Framework” (DPF). The DPF is an agreement between the European Union
          and the US, which is intended to ensure compliance with European data
          protection standards for data processing in the US. Every company
          certified under the DPF is obliged to comply with these data
          protection standards. For more information, please contact the
          provider under the following link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
          </a>
        </p>
        <h6>Data processing</h6>
        <p>
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>
        <h5>Google Chat</h5>
        <p>
          We use Google Meet. The provider is Google Ireland Limited, Gordon
          House, Barrow Street, Dublin 4, Ireland. For details on data
          processing, please see the Google privacy policy:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy
          </a>
          .
        </p>
        <p>
          The company is certified in accordance with the “EU-US Data Privacy
          Framework” (DPF). The DPF is an agreement between the European Union
          and the US, which is intended to ensure compliance with European data
          protection standards for data processing in the US. Every company
          certified under the DPF is obliged to comply with these data
          protection standards. For more information, please contact the
          provider under the following link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
          </a>
          .
        </p>
        <h6>Data processing</h6>
        <p>
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>
        <h3>Custom Services</h3>
        <h4>Dealing with business cards</h4>
        <p>
          As part of the exchange of business cards, we receive access to the
          personal data provided by you via the business card. We use the
          information on your business card for the purposes of communication
          and to follow up on the contact. If you have requested that we send
          you information about our products and services during the
          conversation (business card exchange), we will send you the
          information about our company to the contact details on your business
          card. If there is no further exchange or you do not respond to our
          contact and follow-up, we will delete your data (business card) within
          1 year. You have the right to request the deletion of your data at any
          time - please send us an informal e-mail to{" "}
          <a href="mailto:datenschutz@cloudogu.com">datenschutz@cloudogu.com</a>
          .
        </p>
        <h4>Google Drive</h4>
        <p>
          We have integrated Google Drive on this website. The provider is
          Google Ireland Limited (“Google”), Gordon House, Barrow Street, Dublin
          4, Ireland.
        </p>
        <p>
          Google Drive allows us to include an upload area on our website where
          you can upload content. When you upload content, it is stored on
          Google Drive’s servers. When you visit our website, a connection to
          Google Drive is additionally established so that Google Drive can
          determine that you have visited our website.
        </p>
        <p>
          The use of Google Drive is based on Art. 6(1)(f) GDPR. The website
          operator has a legitimate interest in having a reliable upload area on
          its website. If a corresponding consent has been obtained, the
          processing is carried out exclusively on the basis of Art. 6(1)(a)
          GDPR; the consent can be revoked at any time.
        </p>
        <p>
          The company is certified in accordance with the “EU-US Data Privacy
          Framework” (DPF). The DPF is an agreement between the European Union
          and the US, which is intended to ensure compliance with European data
          protection standards for data processing in the US. Every company
          certified under the DPF is obliged to comply with these data
          protection standards. For more information, please contact the
          provider under the following link:{" "}
          <a
            href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
          </a>
          .
        </p>
        <h6>Data processing</h6>
        <p>
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>
        <h4>Community</h4>
        <p>
          On our website you can find a link to our community website
          community.cloudogu.com. There it is possible to create posts in the
          website community or to comment on the posts of other users with the
          personal data provided during registration (especially username). If
          you use this function of our website, your username will be visible
          for other users in your community postings.
        </p>
        <p>
          The legal basis for the processing of the data is also the contract of
          use concluded with you during registration. The data use is intended
          for the fulfillment of this contract or the implementation of
          precontractual measures. The legal basis for the processing of the
          data is therefore Art. 6 (1) (b) GDPR.
        </p>
        <p>
          A further legal basis for the use of your data is Art. 6 (1) (f) GDPR.
          The disclosure of the data in the community is intended on the one
          hand for the identification of the respective authors of each posting
          and on the other hand for the security of the community (e.g. by
          identification and documentation of authorship in the event of
          potentially illegal postings). These purposes also constitute our
          legitimate interest in data processing in accordance with Art. 6 (1)
          (f) GDPR.
        </p>
        <p>
          The data will be deleted as soon as it is no longer necessary to
          achieve the purpose for which it was collected. In the event that
          personal data transmitted by you during registration is disclosed in
          our community, the erasure of the postings provided by you takes place
          as soon as you have deregistered from our website.
        </p>
        <p>
          Since we are always making an effort to minimize data use in
          accordance with the requirements of the applicable data protection
          provisions, we ask you not to provide personal data such as names,
          email addresses or phone numbers in community postings you make. To
          ensure data minimization, postings that include personal data will be
          erased by our community moderators without comment. We ask for your
          understanding in this regard.
        </p>
      </CounterColumn>
    </div>
  </PageContainer>
);

export default PrivacyPage;
