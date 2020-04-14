---
title: SCM-Manager 2.0.0-rc3
date: 2020-02-05T16:26:43+00:00
author: Rene Pfeuffer
slug: /release/scm-manager-2-0-0-rc3/
categories:
  - release
  - scm-manager

---
Last week we stumbled upon an error in the plugin loader. If you have installed some plugins with dependencies between them, the may end up loading them in the wrong sequence and therefore running into an error. We fixed this error with SCM-Manager 2.0.0-rc3.

If your SCM-Manager 2.0.0-rc2 is starting up without problem, you can safely ignore this new release.

## Get the fixed version

You can download the RC-3 here

- [.tar.gz](https://maven.scm-manager.org/nexus/content/repositories/releases/sonia/scm/scm-server/2.0.0-rc3/scm-server-2.0.0-rc3-app.tar.gz) (sha1: c23d8804c10e90d45832f4af3af9a1aa8658c666)
- [.zip](https://maven.scm-manager.org/nexus/content/repositories/releases/sonia/scm/scm-server/2.0.0-rc3/scm-server-2.0.0-rc3-app.zip) (sha1: 42b3c320ff334eda7cbc0d8f56c05978dbc0840f)

or use it via Docker

`docker run -p 8080:8080 -v scm-home:/var/lib/scm --name scm scmmanager/scm-manager:2.0.0-rc3`

