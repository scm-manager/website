---
title: SCM-Manager 2.40.0
date: 2022-11-22T17:00:00+0000
author: Konstantin Schaper
categories:
- scm-manager
- scm-review-plugin
- scm-redmine-plugin
- scm-jira-plugin
- scm-webhook-plugin
- scm-commit-message-checker-plugin
- scm-pathwp-plugin
- release
- plugins
keywords:
- keyboard
- power-user
---

Dear SCM-Manager Community,

in the following few paragraphs we have summarized some of the changes and features available in the new release.
We have also fixed a series of complicated bugs and are actively preparing to make new integrations with third-party systems easier in the future.

## Keyboard Shortcuts

Over the last month we have worked tirelessly on the previously announced keyboard shortcut system. We hope
these will allow users to move around quicker and speed up their workflows, saving time in the process.

You can open the context-sensitive list of shortcuts available to the active user on the current page by pressing `?`.

Otherwise, you can always look things up in the [documentation](https://scm-manager.org/docs/2.40.x/en/user/shortcuts/).

## Enhances LFS Support

For some time now, SCM-Manager supports LFS for git. With this release, LFS files will also be handled correctly
in the repository import. So if you want to move your repository with LFS files from another repository
manager to SCM-Manager, this now is easier than ever. Just click "Add Repository", select "Import Repository", enter
the URL of your old repository and some credentials (if necessary) and you are on your way.

## Good News for Plugin Developers

We love to support our community in the implementation of new ideas.
Below, we listed some new public APIs released alongside 2.40.0 you might find interesting.
Please open a question in our forum whenever you need a kick-start for your new plugin or if any of the new features are unclear.

### Shortcuts API

The Shortcuts API is simple to use and open for plugin developers. For further information on how to use it in your plugin,
please refer to the documentation available in `@scm-manager/ui-components`.

### Extensible Webhooks

We released an update to our [Webhook Plugin](https://scm-manager.org/plugins/scm-webhook-plugin/) that allows developers
to create integrations tailored to their needs.

## Closing words
Are you still missing an important feature? How can SCM-Manager help you improve your work processes?
We would love to hear from you about what you need most!

Do you have any questions or suggestions about the SCM-Manager?
Contact the DEV team directly on [GitHub](https://github.com/scm-manager/scm-manager/) and make sure
to check out our new [community platform](https://community.cloudogu.com/c/scm-manager/).
