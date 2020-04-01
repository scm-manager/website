---
title: SCM-Manager 2.0.0-rc4
date: 2020-02-14T13:38:26+00:00
author: Rene Pfeuffer
slug: /release/scm-manager-2-0-0-rc4/
categories:
  - release
  - scm-manager

---
For some time, the incompatability of SCM-Manager 2 with Java 9 or above has annoyed us. Now we can happily announce, that this is history. With the new version 2.0.0-rc4 SCM-Manager can run on Java 9 and above.

A little error though has not made it into this release: If you are hosting mercurial repositories, you cannot create new commits, when XSRF protection is enabled. This is no new bug in this version and if you haven’t come accross it with previous releases, it should be of no relevance for you (this should be relevant only if you are using the editor plugin with mercurial repositories). This bug will be fixed in the next release.

## Get the new version

You can download the RC-4 here

- [.tar.gz](https://maven.scm-manager.org/nexus/service/local/repositories/releases/content/sonia/scm/scm-server/2.0.0-rc4/scm-server-2.0.0-rc4-app.tar.gz) (sha1: 7aa87cec712335b93b0cbc49333c5fc9edd26fdc)
- [.zip](https://maven.scm-manager.org/nexus/service/local/repositories/releases/content/sonia/scm/scm-server/2.0.0-rc4/scm-server-2.0.0-rc4-app.zip) (sha1: 603cf76d7d685951533ad19f5e1aa990607ec3bf)

or use it via Docker

`docker run -p 8080:8080 -v scm-home:/var/lib/scm --name scm scmmanager/scm-manager:2.0.0-rc4`

