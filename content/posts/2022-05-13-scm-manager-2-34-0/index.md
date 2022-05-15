---
title: SCM-Manager 2.34.0
date: 2022-05-13T14:00:00+0000
author: Konstantin Schaper
categories:
- scm-manager
- release
keywords:
- accessibility
- ux
- jenkins
- redmine
- jira
- docker
- arm
---

Hi SCM-Manager Community,

we have done some serious spring cleaning in the last couple of weeks which included many improvements in the areas of accessibility and user experience as well as a large number of bugfixes.

There is too much to cover it all but a small selection of tweaks and new features are showcased in this blog post.
For the full list, please head over to our [changelog](https://scm-manager.org/download/2.34.0#changelog).

## New Docker multi-arch builds

Did you know that you can also use the SCM-Manager with Docker ?
Our official images are available on [Dockerhub](https://registry.hub.docker.com/r/scmmanager/scm-manager)
and from this version forward, we are releasing additional linux builds for *arm64* and *arm/v7* architectures.
It future-proves our build-pipeline for broader application possibilities and 
if you ever wanted to run your SCM-Manager in a Docker container on a Raspberry Pi, this is also for you!

## Ignoring changeset CI status in Pull Request workflow rules

Overall our workflow engine for pull requests is performing as intended, but there was an edge case where a build-breaker 
carried over when branching which resulted in the pull request having failed workflow rules based on CI status, even if the
target branch did not contain it anymore. The rule simply checked both the changeset and the pull request and if any of them
were unsuccessful, it failed. To fix this, we added a new checkbox to all workflow rules regarding CI status' that allows you to
disable changeset checks and only verify the PR status for a particular rule.

## New Overflow Menu

The action bar in the source view has been struggling with an ever-increasing number of buttons due to new features added from plugins over the last couple of months.
It is not tragic yet, but could soon pose a problem and is already borderline unsightly on small and medium screens.
We therefore implemented a new overflow menu that hides secondary actions and frees space in the action bar while
still giving plugin developers full control where to place their actions. All [Editor Plugin](https://scm-manager.org/plugins/scm-editor-plugin/) actions are now displayed in this menu,
but the [File Lock Plugin](https://scm-manager.org/plugins/scm-file-lock-plugin/) for example still displays the lock state outside the menu as a primary action.

## Visibility of selected lines in source view

Since we recently first introduced the *High Contrast* and then shortly after the *Dark* themes for the SCM-Manager,
some pages needed additional attention. When creating permalinks for a line of code in the source view for example,
the code line is highlighted with a different background color. This worked well in *Light Mode* but the default
values were not optimal for either High Contrast Mode or Dark Mode. The challenge we faced was keeping both the contrast 
between page background and highlighted line as well as the contrast between highlighting color and the actual text at a
readable level. This proved close to impossible which lead to a compromise: the selected line now has an additional bar
on the left side which provides visually impaired users a clear indicator that stands in stark contrast to the page background
while the background color of the highlighted line is tuned to ensure optimal readability.

## Closing words
Are you still missing an important feature? How can SCM-Manager help you improve your work processes?
We would love to hear from you about what you need most!

Do you have any questions or suggestions about the SCM-Manager?
Contact the DEV team directly on [GitHub](https://github.com/scm-manager/scm-manager/) and make sure
to check out our new [community platform](https://community.cloudogu.com/c/scm-manager/).
