---
title: XML-Parser Expat (CVE-2022-23852)
date: 2022-02-02T12:00:00+0000
author: Eduard Heimbuch
categories:
- scm-manager
- security
keywords:
- vulnerability
- expat
- cve
alert: true
---

Hey SCM-Manager Community,

Maybe you have heard about a [new vulnerability](https://nvd.nist.gov/vuln/detail/CVE-2022-23852) regarding Expat which is likely as dangerous as Log4Shell.

The SCM-Manager is only affected if you have the PlantUML-Plugin installed. We highly recommend uninstalling this plugin until we can provide a fixed version.
If your SCM-Manager is running inside the [Cloudogu Ecosystem](https://cloudogu.com/en/ecosystem/download/) you also need to take down the [PlantUML Dogu](https://github.com/cloudogu/plantuml).

Also find the related forum post [here](https://community.cloudogu.com/t/security-vulnerability-plantuml-plugin-xml-parser-expat-cve-2022-23852/502).
