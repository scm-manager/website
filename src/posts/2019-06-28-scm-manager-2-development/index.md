---
title: SCM-Manager 2 development
date: 2019-06-28T18:23:51+00:00
author: Daniel Huchthausen
slug: /scm-manager-2/scm-manager-2-development/
categories:
  - cloudogu
  - scm-manager

---
Over the last couple of years it became clear that SCM-Manager 1 does not have the capabilities to fulfill the requirements of a modern SourceCodeManagement Tool. Great feature requests had to be rejected, because they simply could not be implemented with SCM-Manager 1. That is why the development of SCM-Manager 2 started. Now, thanks to the tremendous effort of [Cloudogu](https://cloudogu.com/en/blog/scm-manager-collaboration), it is almost done and ready to use. This is what it looks like.

[![SCM-Manager 2 screenshot](assets/scm-manager-2-overview.png)](https://www.scm-manager.org/wp-content/uploads/2019/06/scm-manager-2-overview.png)

## Major changes at a glance

The big differences between SCM-Manager 1 and 2 are the technologies: the frontend of SCM-Manager 2 is based on React and Redux. The backend uses HATEOAS to provide a level 3 REST API.

Based on the new architecture and on acquired experiences from SCM-Manager 1, the new version will have numerous new features and some changes that make SCM-Manager 2 more convenient and secure. The changes and new features will be introduced in additional posts here. So stay tuned!

## Missing features

Even though the development of SCM-Manager 2 is almost complete, there are still some features missing. That is for example the plugin center and a migration path from SCM-Manager 1 to 2.

If you can’t wait for the official release, you can get the latest build of SCM-Manager 2 [here](https://oss.cloudogu.com/jenkins/job/scm-manager/job/scm-manager-2.x/job/2.0.0-m3/) or the latest Docker image [here](https://hub.docker.com/r/cloudogu/scm-manager/tags).

From now on, we will share details about the new features of SCM-Manager 2 here.

