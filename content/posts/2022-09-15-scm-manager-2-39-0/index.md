---
title: SCM-Manager 2.39.0
date: 2022-09-15T14:00:00+0000
author: Konstantin Schaper
categories:
- scm-manager
- scm-editor-plugin
- scm-manage-folder-plugin
- scm-smeagol-plugin
- scm-review-plugin
- scm-ci-plugin
- scm-content-search-plugin
- scm-commit-search-plugin
- scm-binary-search-plugin
- release
- plugins
keywords:
- search
---

Hello SCM-Manager Community,

over a month has passed since our last feature release during which we have taken the time to round up some significant
additions to our global search. Two brand-new plugins are ready for you in addition to several quality of life improvements
and bugfixes.

## Global Search

We focused again on the global search for SCM-Manager. This time we created two new plugins for you. 
With the [Commit Search Plugin](https://scm-manager.org/plugins/scm-commit-search-plugin/install/) all your repository commit messages will be added to the search index.
On the other hand the [Binary Search Plugin](https://scm-manager.org/plugins/scm-binary-search-plugin/install/) is very useful if you work with the common office document formats like Excel, Word, PowerPoint and many more. 
Using [Apache Tika](https://tika.apache.org/) the textual content of these files is parsed and also added to your search index.
But keep in mind that depending on the size of your repositories these two plugins could impact your instance's performance.

Besides that we added some additional convenience features like more detailed documentation and the new Reindex button to refresh your repository index manually.

## What's coming next ?

We are currently working hard on integrating keyboard shortcuts to first the search and then to other parts of the application.
As with any newly trodden terrain, we want to move carefully and ensure proper function and quality before making it available
in our next minor release.

## Closing words
Are you still missing an important feature? How can SCM-Manager help you improve your work processes?
We would love to hear from you about what you need most!

Do you have any questions or suggestions about the SCM-Manager?
Contact the DEV team directly on [GitHub](https://github.com/scm-manager/scm-manager/) and make sure
to check out our new [community platform](https://community.cloudogu.com/c/scm-manager/).
