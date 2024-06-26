import React from "react";
import Title from "../components/Title";
import SEO from "../components/SEO";
import PageContainer from "../layout/PageContainer";

const ImprintPage = () => (
  <PageContainer>
    <SEO title="Imprint" />
    <Title>Imprint</Title>
    <div className="columns">
      <div className="column is-three-quarters content">
        <p>
          Cloudogu GmbH
          <br />
          Garküche 1
          <br />
          38100 Braunschweig
          <br />
          Germany
        </p>
        <h3>Represented by</h3>
        <p>
          Cloudogu GmbH, represented by the Managing Director Thomas Grosser
        </p>
        <h3>Contact:</h3>
        <p>
          Phone: <a href="tel:+4953161808880">+49 (531) 61808880</a>
          <br />
          Fax: <a href="tel:+495312352819">+49 (531) 2352819</a>
          <br />
          Email:{" "}
          <a href="mailto:&#105;&#110;&#102;&#111;&#64;&#115;&#99;&#109;&#45;&#109;&#97;&#110;&#97;&#103;&#101;&#114;&#46;&#111;&#114;&#103;">
            &#105;&#110;&#102;&#111;&#64;&#115;&#99;&#109;&#45;&#109;&#97;&#110;&#97;&#103;&#101;&#114;&#46;&#111;&#114;&#103;
          </a>
        </p>
        <h3>Register entry</h3>
        <p>
          Entry in the commercial register.
          <br />
          Register court: Local Court (Amtsgericht) Braunschweig
          <br />
          Register number: HRB 204974
        </p>
        <h3>Value-added tax</h3>
        <p>
          Value-added tax identification number pursuant to §27(a) German VAT
          Act (UmstG):
          <br />
          DE297628722
        </p>
        <h3>Dispute resolution</h3>
        <p>
          We are not prepared or obligated to participate in a dispute
          resolution proceeding before a consumer arbitration board.
        </p>
        <h3>Liability for links</h3>
        <p>
          Our website contains links to external websites of third parties, over
          whose content we have no influence. Therefore, we cannot assume any
          liability for this external content. The respective provider or
          operator of the pages is always responsible for the contents of the
          linked pages. The linked pages were checked for possible legal
          infringements at the time of linking. Illegal content was not
          recognizable at the time of linking.
        </p>
        <p>
          However, permanent monitoring of the content of the linked pages is
          unreasonable without concrete evidence of a violation of the law. Upon
          becoming aware of such legal infringements, we will immediately remove
          this content.
        </p>
        <h3>Copyright</h3>
        <p>
          The contents and works created by the site operators on these pages
          are subject to German copyright law. Duplication, editing,
          distribution, and any kind of use outside the limits of copyright law
          require the written consent of the respective author or creator.
        </p>
        <p>
          The copyrights of third parties are respected for any content on the
          site that was not created by the operator. In particular, the content
          of third parties is marked as such. Should you nevertheless become
          aware of a copyright infringement, please inform us accordingly. Upon
          becoming aware of such legal infringements, we will immediately remove
          this content.
        </p>
        <h3>Image sources</h3>
        <p>
          Image index page:{" "}
          <a href="https://www.freepik.com/" title="To Freepik">
            Designed by Freepik
          </a>
        </p>
      </div>
    </div>
  </PageContainer>
);

export default ImprintPage;
