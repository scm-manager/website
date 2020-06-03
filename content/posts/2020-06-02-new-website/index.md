---
title: New website
date: 2020-06-02T15:23:49+0000
author: Sebastian Sdorra
categories:
  - scm-manager
  - infrastructure
---
Today we reached another great goal on our road to the 2.0.0 release.

#### We released our new website 🎉🥳

Our old website was a somewhat outdated wordpress blog.
The blog was fine, but it does no longer match our needs.
In the development process of SCM-Manager we use pull requests a lot, so we want to use that workflow for our website, too.

At that point it was clear that we need a completely new website which matches our needs.
So we decided not only to create a new home for the blog and the marketing stuff, we decided to create a central place for nearly all SCM-Manager related information:

* [marketing information](/)
* [support information](/support/)
* [news/blog](/blog/)
* [download](/download/) inclusive [archive](/download/archive/)
* [plugin index](/plugins/)
* [documentation for core](/docs/) and [plugins](/plugins/)

So we created a new pretty and blazing fast [website](https://github.com/scm-manager/website).
The new site is based on [GatsbyJS](https://www.gatsbyjs.org/), a static website generator which matches all our needs.

With the new website we decided also to remove the comment support from the site as announced at the [Cloudogu support team
 post](/blog/posts/2019-07-30-cloudogu-support-team).

## Documentation

The documentation is fetched from the [docs folder](https://github.com/scm-manager/scm-manager/tree/develop/docs/) of the [SCM-Manger repository](https://github.com/scm-manager/scm-manager), and the docs for the plugins are fetched from the individual [plugin repo](https://github.com/scm-manager?q=plugin).
We know the documentation is far from complete, but we will work hard to fix that.

## Contribution

If you find any issue in the website or in the docs please open an issue in the corresponding repository.
If you are able to fix this issue by yourself, we are more than happy to accept a pull request.
