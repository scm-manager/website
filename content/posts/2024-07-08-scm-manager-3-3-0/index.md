---
title: SCM-Manager 3.3.0 and an important vulnerability bugfix
date: 2024-07-08T17:00:00+0000
author: Thomas Zerr
categories:
  - scm-manager
  - release
  - security
keywords:
  - minor
  - vulnerability
---

Dear SCM-Manager Community,

today we released the new version of the SCM-Manager 3.3.0.
This release focuses primarily on an important vulnerability bugfix, that prevents users from escalating their privileges in a namespace of repositories.
Additionally, some new features and minor bugfixes were also added to this release.

## Namespace privilege escalation

With version 3.0.4 a new feature was released for namespace privilege settings.
This feature could be abused to escalate the privileges of a user within a namespace.
Every version between 3.0.4 and 3.2.2 is exploitable with this vulnerability.
Therefore, we would strongly advise to update your SCM-Manager to version 3.3.0 as soon as possible, if you are running one of the affected versions.

## Merge Tool Detection

In git it is possible to configure that certain files can only be merged by external merge tools, instead of using the git internal merge tool.
This configuration can be provided inside a repository with a `.gitattributes` file.
The backend merge api of the SCM-Manager can provide feedback if two branches can be merged, by checking for merge conflicts.
With version 3.3.0 the SCM-Manager can also check, whether two branches can be merged, by evaluating the `.gitattributes` file and check if a file needs to be merged by an external merge tool first.

## Closing words

Are you still missing an important feature? 
How can SCM-Manager help you improve your work processes?
We would love to hear from you about what you need most!

Do you have any questions or suggestions about the SCM-Manager?
Contact the DEV team directly on [GitHub](https://github.com/scm-manager/scm-manager/) and make sure
to check out our new [community platform](https://community.cloudogu.com/c/scm-manager/).
