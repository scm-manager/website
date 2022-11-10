import React from "react";
import Title from "../components/Title";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";
import styled from "styled-components";

const CounterColumn = styled.div`
  counter-reset: h3counter h4counter h5counter;

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
          statistically analyzed when your visit this website. Such analyses are
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
          appropriate consent has been obtained, the processing is conducted
          exclusively based on Art. 6 (1)(a) GDPR and § 25 (1) TTDSG, insofar
          the consent includes the storage of cookies or the access to
          information in the user's end device (e.g., device fingerprinting)
          within the meaning of the TTDSG. This consent can be revoked at any
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
          The server locations on which our website is hosted are in Frankfurt,
          Germany.
        </p>
        <h4>Data processing</h4>
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
          your personal data very seriously. Hence, we manage your personal data
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
          Brabandtstraße 9–10
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
          data based on Art. 6(1)(a) GDPR or Art. 9 (2)(a) GDPR, if special
          categories of data are processed according to Art. 9 (1) DSGVO. In the
          case of explicit consent to the transfer of personal data to third
          countries, the data processing is also based on Art. 49 (1)(a) GDPR.
          If you have consented to the storage of cookies or to the access to
          information in your end device (e.g., via device fingerprinting), the
          data processing is additionally based on § 25 (1) TTDSG. The consent
          can be revoked at any time. If your data is required for the
          fulfillment of a contract or for the implementation of pre-contractual
          measures, we process your data based on Art. 6(1)(b) GDPR.
          Furthermore, if your data is required for the fulfillment of a legal
          obligation, we process it based on Art. 6(1)(c) GDPR. Furthermore, the
          data processing may be conducted based on our legitimate interest
          according to Art. 6(1)(f) GDPR. Information on the relevant legal
          basis in each individual case is provided in the following paragraphs
          of this privacy policy.
        </p>
        <h4>Designation of a data protection officer</h4>
        <p>We have appointed a data protection officer.</p>
        <p>
          Data protection officer
          <br />
          Phone: <a href="tel:+4915126523279">+49 151 26523279</a>
          <br />
          E-mail:{" "}
          <a href="mailto:datenschutz@cloudogu.com">datenschutz@cloudogu.com</a>
        </p>
        <h4>
          Information on data transfer to the USA and other non-EU countries
        </h4>
        <p>
          Among other things, we use tools of companies domiciled in the United
          States or other from a data protection perspective non-secure non-EU
          countries. If these tools are active, your personal data may
          potentially be transferred to these non-EU countries and may be
          processed there. We must point out that in these countries, a data
          protection level that is comparable to that in the EU cannot be
          guaranteed. For instance, U.S. enterprises are under a mandate to
          release personal data to the security agencies and you as the data
          subject do not have any litigation options to defend yourself in
          court. Hence, it cannot be ruled out that U.S. agencies (e.g., the
          Secret Service) may process, analyze, and permanently archive your
          personal data for surveillance purposes. We have no control over these
          processing activities.
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
          proceedings available as legal recourses.
        </p>
        <p>The State Commissioner for Data Protection of Lower Saxony</p>
        <p>
          Barbara Thiel
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
          You have the right to demand that we hand over any data we
          automatically process based on your consent or in order to fulfil a
          contract be handed over to you or a third party in a commonly used,
          machine readable format. If you should demand the direct transfer of
          the data to another controller, this will be done only if it is
          technically feasible.
        </p>
        <h4>Information about, rectification and eradication of data</h4>
        <p>
          Within the scope of the applicable statutory provisions, you have the
          right to at any time demand information about your archived personal
          data, their source and recipients as well as the purpose of the
          processing of your data. You may also have a right to have your data
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
            the processing of your data in lieu of demanding the eradication of
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
          In some cases, it is possible that third-party cookies are stored on
          your device once you enter our site (third-party cookies). These
          cookies enable you or us to take advantage of certain services offered
          by the third party (e.g., cookies for the processing of payment
          services).
        </p>
        <p>
          Cookies have a variety of functions. Many cookies are technically
          essential since certain website functions would not work in the
          absence of the cookies (e.g., the shopping cart function or the
          display of videos). The purpose of other cookies may be the analysis
          of user patterns or the display of promotional messages.
        </p>
        <p>
          Cookies, which are required for the performance of electronic
          communication transactions, or for the provision of certain functions
          you want to use (e.g., for the shopping cart function) or those that
          are necessary for the optimization (required cookies) of the website
          (e.g., cookies that provide measurable insights into the web
          audience), shall be stored on the basis of Art. 6(1)(f) GDPR, unless a
          different legal basis is cited. The operator of the website has a
          legitimate interest in the storage of required cookies to ensure the
          technically error free and optimized provision of the operator’s
          services. If your consent to the storage of the cookies and similar
          recognition technologies has been requested, processing occurs
          exclusively based on the consent obtained (Art. 6(1)(a) GDPR and § 25
          (1) TTDSG); this consent may be revoked at any time.
        </p>
        <p>
          You have the option to set up your browser in such a manner that you
          will be notified any time cookies are placed and to permit the
          acceptance of cookies only in specific cases. You may also exclude the
          acceptance of cookies in certain cases or in general or activate the
          delete function for the automatic eradication of cookies when the
          browser closes. If cookies are deactivated, the functions of this
          website may be limited.
        </p>
        <p>
          In the event that third-party cookies are used or if cookies are used
          for analytical purposes, we will separately notify you in conjunction
          with this Data Protection Policy and, if applicable, ask for your
          consent.
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
          This data is recorded based on Art. 6(1)(f) GDPR. The operator of the
          website has a legitimate interest in the technically error free
          depiction and the optimization of the operator’s website. In order to
          achieve this, server log files must be recorded. The server log files
          are stored for 14 days and then deleted.
        </p>
        <h4>Request by e-mail, telephone, or fax</h4>
        <p>
          If you contact us by e-mail, telephone or fax, your request, including
          all resulting personal data (name, request) will be stored and
          processed by us for the purpose of processing your request. We do not
          pass these, data on without your consent.
        </p>
        <p>
          These data are processed based on Art. 6(1)(b) GDPR if your inquiry is
          related to the fulfillment of a contract or is required for the
          performance of pre-contractual measures. In all other cases, the data
          are processed based on our legitimate interest in the effective
          handling of inquiries submitted to us (Art. 6(1)(f) GDPR) or based on
          your consent (Art. 6(1)(a) GDPR) if it has been obtained; the consent
          can be revoked at any time.
        </p>
        <p>
          The data sent by you to us via contact requests remain with us until
          you request us to delete, revoke your consent to the storage or the
          purpose for the data storage lapses (e.g. after completion of your
          request). Mandatory statutory provisions - in particular, statutory
          retention periods - remain unaffected.
        </p>
        <h4>Google Forms</h4>
        <p>
          We have integrated Google Forms into this website. The provider is
          Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland
          (hereinafter referred to as „Google”).
        </p>
        <p>
          Google Forms enables us to generate online forms to record messages,
          inquiries and other entries entered by visitors to our website. All
          entries you make will be processed on Google’s servers. Google Forms
          stores a cookie in your browser that contains a unique ID (NID
          cookie). This cookie stores a wide range of information, including,
          for example your language settings.
        </p>
        <p>
          We use Google Forms based on our legitimate interest in determining
          your needs as effectively as possible (Art. 6(1)(f) GDPR). If
          appropriate consent has been obtained, the processing is conducted
          exclusively based on Art. 6(1)(a) GDPR and § 25 (1) TTDSG, insofar the
          consent includes the storage of cookies or the access to information
          in the user’s end device (e.g., device fingerprinting) within the
          meaning of the TTDSG. This consent can be revoked at any time.
        </p>
        <p>
          The data you enter into the form will remain in our possession until
          you ask us to delete them, revoke your consent to the archiving of
          your data or until the purpose of archiving the data no longer exists
          (e.g., upon completion of the processing of your inquiry). This does
          not affect mandatory statutory provisions – in particular, those
          governing retention periods.
        </p>
        <p>
          For more information, please consult Google’s Data Privacy Policy at{" "}
          <a
            href="https://policies.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com
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

        <h4>Google Groups</h4>
        <p>
          The Google Group we have created allows emails sent to{" "}
          <a href="mailto:scmmanager@googlegroups.com">
            scmmanager@googlegroups.com
          </a>{" "}
          to be distributed to all email addresses of its members, after prior
          moderation by the "SCMM" working group. We want to create an offer to
          provide quality support to our users or to inform them about content
          related to our products/SCM Manager. A special feature is that e-mails
          sent to the distribution list are publicly viewable in the group's
          archive. The address of the mailing list is{" "}
          <a
            href="https://groups.google.com/g/scmmanager"
            target="_blank"
            rel="noopener noreferrer"
          >
            groups.google.com/g/scmmanager
          </a>
          .
        </p>
        <p>
          You can use the mailing list as a non-member as well as a member, in
          both cases the{" "}
          <a href="https://policies.google.com/terms?hl=de">terms of use</a> and{" "}
          <a href="https://policies.google.com/privacy?hl=de">privacy policy</a>{" "}
          of Google apply.
        </p>
        <p>
          As a non-member, you can send messages to the mailing list yourself
          and view the public archive of the mailing list via the address given
          above. If a message sent by you is delivered to the members of the
          mailing list after successful moderation, it is now publicly viewable
          including sender, e-mail address and content.
        </p>
        <p>
          As a member you can, beyond the possibilities of a non-member,
          automatically receive e-mails that have been previously "moderated" by
          the SCMM working group as well as make your own settings for your
          membership at{" "}
          <a
            href="https://groups.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            groups.google.com
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

        <h4>Comment function on this website</h4>
        <p>
          For the comment function on this site, in addition to your comment,
          information on the time of creation of the comment, your e-mail
          address and the username you have chosen will be stored.
        </p>

        <h5>Storage of the IP address</h5>
        <p>
          Our comment function stores the IP addresses of users who post
          comments. Since we do not check comments on this website before they
          are activated, we need this data in order to be able to take action
          against the author in the event of legal violations such as insults or
          propaganda.
        </p>

        <h5>Notification of forum entries</h5>
        <p>
          As a user of the site, you will receive notifications in MyCloudogu
          about forum entries that you have commented on yourself after logging
          in.
        </p>

        <h5>Storage period of comments</h5>
        <p>
          The comments and related data are stored and remain on this website
          until the commented content has been completely deleted or the
          comments have to be deleted for legal reasons (e.g. offensive
          comments).
        </p>

        <h5>Legal basis</h5>
        <p>
          The storage of the comments is based on your consent (Art. 6 para. 1
          lit. a DSGVO). You can revoke any consent you have given at any time.
          For this purpose, an informal communication by e-mail to us is
          sufficient. The legality of the data processing operations already
          carried out remains unaffected by the revocation.
        </p>
        <h3>Social media</h3>
        <h4>GitHub</h4>
        <p>
          Icons (image of the logo of the social media platform, with a stored
          link to our social media presence there) of the GitHub network are
          integrated on this website. When you click on the icon, you will be
          redirected to the GitHub page. This is not a Like or Share button. The
          provider of the GitHub website is GitHub Inc, 88 Colin P Kelly Jr
          Street, San Francisco, CA 94107, USA.
        </p>
        <p>
          When you click on the GitHub icon provided on this website, a direct
          connection is established between your browser and the GitHub server.
          GitHub thereby receives the information that you have visited this
          website with your IP address. We would like to point out that we, as
          the provider of the pages, have no knowledge of the content of the
          transmitted data or its use by GitHub. For more information, please
          refer to the privacy policy of GitHub at:{" "}
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
          If you do not want GitHub to associate your visit to our GitHub
          website with your GitHub user account, please log out of your GitHub
          user account.
        </p>
        <p>
          The use of the GitHub icon with a deposited link to our GitHub page is
          based on Art. 6 (1) lit. f DSGVO. The website operator has a
          legitimate interest in ensuring the greatest possible visibility in
          social media.
        </p>
        <p>
          GitHub is responsible for the data security of the GitHub service. You
          can assert data subject rights (e.g., requests for information)
          regarding the data processed by GitHub directly with GitHub.
        </p>
        <h3>Our Social Media appearances</h3>
        <h4>Data processing through social networks</h4>
        <p>
          We maintain publicly available profiles in social networks. The
          individual social networks we use can be found below.
        </p>
        <p>
          Social networks such as Github, Twitter etc. can generally analyze
          your user behavior comprehensively if you visit their website or a
          website with integrated social media content (e.g., like buttons or
          banner ads). When you visit our social media pages, numerous data
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
          processing operations may therefore be conducted by the operators of
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
          If you visit one of our social media sites (e.g., GitHub), we,
          together with the operator of the social media platform, are
          responsible for the data processing operations triggered during this
          visit. You can in principle protect your rights (information,
          correction, deletion, limitation of processing, data portability and
          complaint) vis-à-vis us as well as vis-à-vis the operator of the
          respective social media portal (e.g., GitHub).
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

        <h4>Individual social networks</h4>
        <h5>GitHub</h5>
        <p>
          We have a profile on YouTube. The provider of this service is GitHub,
          Inc, 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. For details
          on their handling of your personal data, as well as further
          information on the GitHub Terms of Use and the GitHub Privacy Policy,
          please visit:{" "}
          <a
            href="https://help.github.com/articles/github-terms-of-service/"
            target="_blank"
            rel="noopener noreferrer"
          >
            help.github.com/articles/github-terms-of-service/
          </a>{" "}
          and{" "}
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
          came. In addition, we collect various log files (e.g., IP address,
          referrer, browser, and operating system used) and can measure whether
          our website visitors perform certain actions (e.g., clicks, purchases,
          etc.).
        </p>
        <p>
          The use of this analysis tool is based on Art. 6(1)(f) GDPR. The
          website operator has a legitimate interest in the analysis of user
          patterns, in order to optimize the operator’s web offerings and
          advertising. If appropriate consent has been obtained, the processing
          is conducted exclusively based on Art. 6(1)(a) GDPR and § 25 (1)
          TTDSG, insofar the consent includes the storage of cookies or the
          access to information in the user’s end device (e.g., device
          fingerprinting) within the meaning of the TTDSG. This consent can be
          revoked at any time.
        </p>
        <iframe
          style={{ border: 0, height: "200px", width: "600px" }}
          src="https://cloudogu.matomo.cloud/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=f7f7f7&fontColor=999999&fontSize=16px&fontFamily=%22Droid%20Sans%22"
        ></iframe>
        <h5>IP anonymization</h5>
        <p>
          For analysis with Matomo we use IP anonymization. Your IP address is
          shortened before the analysis, so that it is no longer clearly
          assignable to you.
        </p>
        <h5>Hosting</h5>
        <p>We host Matomo with the following third-party provider:</p>
        <p>
          InnoCraft Ltd
          <br />
          7 Waterloo Quay PO625
          <br />
          6140 Wellington
          <br />
          New Zealand
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
          The use of these services occurs based on your consent pursuant to
          Art. 6(1)(a) GDPR and § 25(1) TTDSG. You may revoke your consent at
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
            href="https://privacy.google.com/businesses/controllerterms/mccs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy.google.com/businesses/controllerterms/mccs/
          </a>
          .
        </p>
        <h3>Newsletter</h3>
        <h4>Newsletter data</h4>
        <p>
          In order to inform you about product news, current offers and the
          like, we offer the possibility to register for our newsletter. If you
          would like to receive the newsletter offered on the website or during
          registration, we require an e-mail address from you as well as
          information that allows us to verify that you are the owner of the
          specified e-mail address and agree to receive the newsletter. Further
          data is not collected or only on a voluntary basis.
        </p>
        <p>
          For registration, we use the double opt-in procedure to ensure that
          you subscribe to the newsletter personally. In the double opt-in
          process, we send you an e-mail to the specified e-mail address after
          you have subscribed to the newsletter with a link to confirm that you
          wish to receive the newsletter. This ensures that no one can register
          with a foreign e-mail address. When you register for the newsletter,
          the following personal data is stored:
        </p>
        <ul>
          <li>E-mail address</li>
          <li>
            if applicable, your first and last name, if you provide this
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
          For the processing of the newsletter, we use the newsletter service
          provider CleverReach.
        </p>

        <h4>CleverReach</h4>
        <p>
          We use CleverReach to send newsletters. The provider is CleverReach
          GmbH & Co. KG, Schafjückenweg 2, 26180 Rastede, Germany (hereinafter:
          "CleverReach"). CleverReach is a service with which the newsletter
          dispatch can be organized and analyzed. The data you enter for the
          purpose of receiving newsletters (e.g., e-mail address) is stored on
          CleverReach's servers in Germany or Ireland.
        </p>
        <p>
          In order to be able to send you newsletters that correspond to your
          interests, we would like to analyze the use of our e-mail newsletter -
          for example, whether you opened the newsletter or whether certain
          links were clicked.
        </p>
        <p>
          Our newsletters sent with CleverReach allow us to analyze the behavior
          of newsletter recipients. Among other things, we can analyze how many
          recipients opened the newsletter message and how often which link in
          the newsletter was clicked. With the help of so-called conversion
          tracking, it can also be analyzed whether a predefined action (e.g.,
          purchase of a product on this website) has taken place after clicking
          on the link in the newsletter. For more information on data analysis
          by CleverReach newsletters, please visit:{" "}
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
          We track the use of the e-mail newsletter exclusively according to
          your consent to receive the newsletter, which we request when you
          register for the newsletter. We use the data to continuously improve
          the quality of the newsletter and, if necessary, to tailor content and
          offers to you.
        </p>
        <p>
          The data processing is based on your consent (Art. 6 para. 1 lit. a
          DSGVO). You can revoke this consent at any time by unsubscribing from
          the newsletter. For this purpose, you will find a link for
          unsubscribing at the end of each newsletter. You can also unsubscribe
          from the newsletter at any time by sending an informal email to{" "}
          <a href="mailto:datenschutz@cloudogu.com">datenschutz@cloudogu.com</a>
          .
        </p>
        <p>
          If you do not want CleverReach to analyze your data, you must
          unsubscribe from the newsletter. For this purpose, we provide a
          corresponding link or button in each newsletter message.
        </p>
        <p>
          The data you provide for the purpose of receiving the newsletter will
          be stored by us until you unsubscribe from the newsletter or the
          newsletter service provider and will be deleted from the newsletter
          distribution list after you unsubscribe from the newsletter. Your data
          for the newsletter dispatch will be deleted within 3 months after
          termination of the newsletter receipt, provided that the deletion does
          not conflict with any legal retention obligations. Data that has been
          stored by us for other purposes remains unaffected by this.
        </p>
        <p>
          After you have unsubscribed from the newsletter distribution list,
          your e-mail address will be stored by us or the newsletter service
          provider in a blacklist, if necessary, to prevent future mailings. The
          data from the blacklist will only be used for this purpose and will
          not be merged with other data. This serves both your interest and our
          interest in complying with legal requirements when sending newsletters
          (legitimate interest within the meaning of Art. 6 (1) f DSGVO). The
          storage in the blacklist is not limited in time.{" "}
          <strong>
            You can object to the storage if your interests outweigh our
            legitimate interest.
          </strong>
        </p>
        <p>
          For more details, please refer to the data protection provisions of
          CleverReach at:{" "}
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
          As far as consent has been requested, the tools in question will be
          used based on this consent; the consent may be revoked at any time
          with effect from that date.
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
        <h5>Google Chat</h5>
        <p>
          We use Google Chat. The provider is Google Ireland Limited, Gordon
          House, Barrow Street, Dublin 4, Ireland. For details on data
          processing, please refer to the Google Chat privacy policy:{" "}
          <a
            href="https://policies.google.com/privacy?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy?hl=en
          </a>
          .
        </p>
        <p>
          <strong>Data processing</strong><br />
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>

        <h5>Google Meet</h5>
        <p>
          We use Google Meet. The provider is Google Ireland Limited, Gordon
          House, Barrow Street, Dublin 4, Ireland. For details on data
          processing, please see the Google privacy policy:{" "}
          <a
            href="https://policies.google.com/privacy?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy?hl=en
          </a>
          .
        </p>
        <p>
          <strong>Data processing</strong><br />
          We have concluded a data processing agreement (DPA) for the use of the
          above-mentioned service. This is a contract mandated by data privacy
          laws that guarantees that they process personal data of our website
          visitors only based on our instructions and in compliance with the
          GDPR.
        </p>

        <h3>Custom services</h3>
        <h4>Handling of business cards</h4>
        <p>
          In the course of exchanging business cards, we obtain access to the
          personal data provided by you via the business card. We use the
          information on your business card for the purposes of communication
          and follow-up of the contact. If during the conversation (exchange
          business card) you requested that we send you information about our
          products and services, we will send you the information about our
          company on the contact details of your business card. If there is no
          further exchange, or you do not respond to our contact and follow-up,
          we will delete your data (business card) within 1 year. You have the
          right to request the deletion of your data at any time - please send
          us an informal e-mail to{" "}
          <a href="mailto:datenschutz@cloudogu.com">datenschutz@cloudogu.com</a>
          .
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

        <h4>Handling applicant data</h4>
        <p>
          We offer website visitors the opportunity to submit job applications
          to us (e.g., via e-mail, via postal services on by submitting the
          online job application form). Below, we will brief you on the scope,
          purpose and use of the personal data collected from you in conjunction
          with the application process. We assure you that the collection,
          processing, and use of your data will occur in compliance with the
          applicable data privacy rights and all other statutory provisions and
          that your data will always be treated as strictly confidential.
        </p>

        <h5>Scope and purpose of the collection of data</h5>
        <p>
          If you submit a job application to us, we will process any affiliated
          personal data (e.g., contact and communications data, application
          documents, notes taken during job interviews, etc.), if they are
          required to make a decision concerning the establishment or an
          employment relationship. The legal grounds for the aforementioned are
          § 26 BDSG according to German Law (Negotiation of an Employment
          Relationship), Art. 6(1)(b) GDPR (General Contract Negotiations) and –
          provided you have given us your consent – Art. 6(1)(a) GDPR. You may
          revoke any consent given at any time. Within our company, your
          personal data will only be shared with individuals who participate in
          the processing of your job application.
        </p>
        <p>
          If your job application should result in your recruitment, the data
          you have submitted will be archived on the grounds of § 26 BDSG and
          Art. 6(1)(b) GDPR for the purpose of implementing the employment
          relationship in our data processing system.
        </p>

        <h5>Data Archiving Period</h5>
        <p>
          If we are unable to make you a job offer or you reject a job offer or
          withdraw your application, we reserve the right to retain the data you
          have submitted on the basis of our legitimate interests (Art. 6(1)(f)
          GDPR) for up to 6 months from the end of the application procedure
          (rejection or withdrawal of the application). Afterwards the data will
          be deleted, and the physical application documents will be destroyed.
          The storage serves in particular as evidence in the event of a legal
          dispute. If it is evident that the data will be required after the
          expiry of the 6-month period (e.g., due to an impending or pending
          legal dispute), deletion will only take place when the purpose for
          further storage no longer applies.
        </p>
        <p>
          Longer storage may also take place if you have given your agreement
          (Article 6(1)(a) GDPR) or if statutory data retention requirements
          preclude the deletion.
        </p>

        <h5>Admission to the applicant pool</h5>
        <p>
          If we do not make you a job offer, you may be able to join our
          applicant pool. In case of admission, all documents and information
          from the application will be transferred to the applicant pool in
          order to contact you in case of suitable vacancies.
        </p>
        <p>
          Admission to the applicant pool is based exclusively on your express
          agreement (Art. 6(1)(a) GDPR). The submission agreement is voluntary
          and has no relation to the ongoing application procedure.{" "}
          <strong>
            The affected person can revoke his agreement at any time.
          </strong>{" "}
          In this case, the data from the applicant pool will be irrevocably
          deleted, provided there are no legal reasons for storage.
        </p>
        <p>
          The data from the applicant pool will be irrevocably deleted no later
          than two years after consent has been granted.
        </p>
      </CounterColumn>
    </div>
  </PageContainer>
);

export default PrivacyPage;
