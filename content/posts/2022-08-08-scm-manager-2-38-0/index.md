---
title: SCM-Manager 2.38.0
date: 2022-08-08T14:00:00+0000
author: Konstantin Schaper
categories:
- scm-manager
- scm-review-plugin
- scm-ci-plugin
- scm-content-search-plugin
- scm-ssh-plugin
- scm-expression-language-plugin
- release
- plugins
- cli
keywords:
- cli
- pull requests
- continuous integration
- search
- ubuntu
---

Hello SCM-Manager Community,

we continuously put in the effort to improve the SCM-Manager. This iteration focused on extensions to the CLI,
contextual search and additional information for the pull request overview.

Due to complex changes to our underlying frontend build infrastructure, we experienced unexpected problems 
with local plugin builds after the release. We have implemented a solution and released it under 2.38.1, but
none of this negatively impacts production instances.

## CLI Extensions

It is now possible to manage plugins and permissions to the same extend to which it is possible through the web interface.

## Contextual Search

We made our global search context-sensitive, which allows you to search in a specific namespace or a specific repository directly.

## Enhanced Pull Request Overview

Improvements were made to both the Review- and the CI-Plugin that add additional columns to the Pull Request table.
They provide information on the status of the workflow engine as well as the current CI-status.

## SSH Plugin

We bumped the version of the underlying library sshd from 2.5.1 to 2.9.0. This was required because Ubuntu 22.04 could not handle the SSH keys with the "outdated" RSA algorithm. This update caused a breaking change we were not aware of. The default host key algorithm was changed from RSA to EC automatically and the host keys were regenerated. This caused a lot of trouble because all systems had to accept the changed host keys.

To prevent this issue for everyone else, we added a config field which keeps the previous host key algorithm.
If you want to upgrade your algorithm, you need to manually change your host key algorithm in the SSH config via the UI.

## Closing words
Are you still missing an important feature? How can SCM-Manager help you improve your work processes?
We would love to hear from you about what you need most!

Do you have any questions or suggestions about the SCM-Manager?
Contact the DEV team directly on [GitHub](https://github.com/scm-manager/scm-manager/) and make sure
to check out our new [community platform](https://community.cloudogu.com/c/scm-manager/).
