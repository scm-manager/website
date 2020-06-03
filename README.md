<p align="center">
  <a href="https://www.scm-manager.org/">
    <img alt="SCM-Manager" src="https://download.scm-manager.org/images/logo/scm-manager_logo.png" width="500" />
  </a>
</p>
<h1 align="center">
  scm-manager.org
</h1>

This repository contains sources of the scm-manager main website [scm-manager.org](https://scm-manager.org).
The website is build with [GatsbyJS](https://www.gatsbyjs.org/).

## Development

To build the website in development mode, we need the following content from the core and plugin repositories:

* README.md
* CHANGELOG.md
* LICENSE.txt
* and the docs folder

The content can be fetched automatically by using the collect-content script from the `package.json`.

The script requires a valid github api token with access to public repositories: 
[create personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

After the access token is copied, we have to export the token as environment variable `GITHUB_API_TOKEN`.
Now we are able to run the `collect-content` script and than we can start gatsby in development mode.

```bash
export GITHUB_API_TOKEN="your_github_api_token"
yarn install
yarn run collect-content
yarn run develop
```

## Need help?

Looking for more guidance? Full documentation lives [in the SCM-Manager repository](https://scm-manager.org/docs/). Do you have further ideas or need support?

- **Community Support** - Contact the SCM-Manager support team for questions about SCM-Manager, to report bugs or to request features through the official channels. [Find more about this here](https://www.scm-manager.org/support/).

- **Enterprise Support** - Do you require support with the integration of SCM-Manager into your processes, with the customization of the tool or simply a service level agreement (SLA)? **Contact our development partner Cloudogu! Their team is looking forward to discussing your individual requirements with you and will be more than happy to give you a quote.** [Request Enterprise Support](https://cloudogu.com/en/scm-manager-enterprise/).
