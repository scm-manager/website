---
title: SCM-Manager 2.0.0
date: 2020-06-05T14:42:49+0000
author: Sebastian Sdorra
categories:
  - scm-manager
  - release
displayToc: true
---

Good news, we made it. Before running out of numbers for our release candidates, we finally released version 2.0.0 of SCM-Manager. 

It took us nearly 10 years, over 10,000 commits and 8 release candidates.

# What’s new?

To be honest, more than we can explain in a single post, but we will try! In the next chapters we will give you an overview of the most important changes. More detailed blog posts and documents will follow.

Things that did **not** change are the reliable foundations, the easy installation process, the minimal maintenance, and the extensibility to match your specific needs.

But now, allow us to proudly present to you, what we at [Cloudogu](https://cloudogu.com/) build for you over the couple last years.

## Frontend

The most obvious change is the new user interface. We recreated the whole UI from scratch. The 1.x UI was based on [ExtJS](https://www.sencha.com/products/extjs/), which worked great, but by now its look is somewhat outdated. The good thing about [ExtJS](https://www.sencha.com/products/extjs/) was, that it is possible to override any UI element from a plugin, which is great in terms of extensibility, but not really maintainable if you want to evolve the core. The new frontend stack is entirely based on [React](https://reactjs.org/) and [Bulma](https://bulma.io/) and it has well-defined extension points, which make the whole site easier to maintain.

But enough about the technical background, here are some screenshots of the new UI:

<div class="columns image-list">
<div class="column">

![Login](assets/login.png)
![Repositories](assets/repositories.png)
![Commits](assets/commits.png)

</div>
<div class="column">

![Sources](assets/sources.png)
![Markdown](assets/markdown.png)
![Source tree](assets/tree.png)

</div>
</div>

## Plugins

We created a whole new package format for the plugins, which should fix all the problems with v1 plugin installations. With the new format, only a single file has to be fetched, and the server can restart on its own.

We migrated [25 well-known plugins](/plugins/) that were available for v1 (like [jenkins](/plugins/scm-jenkins-plugin/), [redmine](/plugins/scm-redmine-plugin/), [jira](/plugins/scm-jira-plugin/), [ldap](/plugins/scm-ldap-plugin/), [cas](/plugins/scm-cas-plugin/), [branch-wp](/plugins/scm-branchwp-plugin/), and so on). Additionally we also created a few great new plugins for you that were not possible with v1.:

### Review Plugin

With the [review plugin](/plugins/scm-review-plugin/) you can implement a branch based peer review process: Develop new features on a branch, create a pull request where you describe your changes, and let a peer developer inspect these changes. You can write comments for the whole pull request, for single files and even for changed lines. Finally, you can merge the branches inside of SCM-Manager. With the help of the [CI plugin](/plugins/scm-ci-plugin) you can enforce complex workflows, for example to ensure, that Jenkins builds have been run successfully and only working code will be incorporated.

<div class="columns image-list">
<div class="column">

![PR Overview](assets/review-overview.png)
![PR Comments](assets/review-inline-comments.png)

</div>
<div class="column">

![PR Details](assets/review-detail.png)
![PR Conflicts](assets/review-conflicts.png)

</div>
</div>

### Editor Plugin

Have you ever wanted to make a small change in a repository? Like updating a README (which by the way can be displayed by the [readme plugin](/plugins/scm-readme-plugin)) or uploading a new file? Now you can use the [editor plugin](/plugins/scm-editor-plugin) to do so.

![Editor Plugin](assets/editor-plugin.png)

### SSH Plugin

You are done with constantly entering your username and password? No problem, use the [ssh plugin](/plugins/scm-ssh-plugin) with an ssh key.

### Landingpage Plugin (MySCM)

Sometimes it gets hard to keep track of important things. This is, where our new [landingpage plugin](/plugins/scm-landingpage-plugin) comes into play: On a single page you can see your tasks, the latest events and relevant data like your favorite repositories.

![Landingpage Plugin](assets/landingpage.png)


### OpenAPI Plugin

We are proud of the new [level 3 REST API](https://martinfowler.com/articles/richardsonMaturityModel.html), and we would like to enable you to use it. Instead of writing a big documentation we give you an [open API plugin](/plugins/scm-openapi-plugin) to explore all the possibilities interactively.

![OpenAPI Plugin](assets/openapi.png)

## Permissions

The permission model of SCM-Manager v1 was limited to the distinction between admins and users and it only used roles you could assign for single repositories. With version 2 you can now assign finly grained permissions, both globally and repository specific. The details about this are definitely a topic for another document.

![Permissions](assets/permissions.png)

## Repository URLs

One of the most annoying things in v1 was the fact, that the URLs for the repository ui and the one for the checkout/clone are different. With SCM-Manager 2 we wanted to change this. In order to fix this problem, we had to introduce a limitation for the repository names. In v1 it was possible to create repositories with any depth (a/b/c). This makes it really hard to add an ui to the same path, because it is nearly impossible to differentiate between the name of the repository and technical routes. So we decided to introduce namespaces. In SCM-Manager 2, a repository identifier consists of two parts: the namespace and the name of the repository. The namespace can be auto generated with a strategy (e.g. current username, year, repository type) or can be chosen freely.

This change fixes the routing problem and removes the technical ids from the urls (which were nearly omnipresent in v1). For your convenience, we tried to create redirects from the old urls to the new ones if you migrate from v1 to v2.

## Versioning

You may have noticed a little detail in our new version number: We moved from 1.60 to 2.0.0, that is, from now on we use [semantic versioning](https://semver.org/).

# Getting started

Want to get it right now? Head over to our new [download page](/download/2.0.0/). You have the choice:

* Docker
* Kubernetes
* Debian/Ubuntu
* Red Hat/CentOS/Fedora
* Generic Linux
* Windows
* Mac OS X

There is no excuse to not getting started today.

If you want to migrate from v1, please have a look at the [migration instructions](/docs/2.0.x/en/migrate-scm-manager-from-v1/).
