---
title: New home for scm-manager packages
date: 2020-05-18T14:47:49+0000
author: Sebastian Sdorra
slug: /scm-manager-2/new-home-for-scm-manager-packages/
categories:
  - scm-manager
  - infrastructure
---

Before launching our 2.0.0 release we decided to optimize and modernize our infrastructure. One of the first notable changes is the new packages.scm-manager.org Nexus 3 instance replacing our old Nexus 2 instance on maven.scm-manager.org. With this migration most paths have been changed. But fortunately we were able to create redirects for most cases. Only users of the debian package will get errors because a redirect was not possible.

Our recommendation for all users is to update all configurations the new repositories.

## Maven:

```xml
<repositories>

  <repository>
    <id>packages.scm-manager.org</id>
    <name>scm-manager public repository</name>
    <url>https://packages.scm-manager.org/repository/public/</url>
  </repository>

</repositories>
```

## Yum/RPM (for SCM-Manager v1 only):

```ini
[scm-releases]
name=SCM-Manager Releases
baseurl=https://packages.scm-manager.org/repository/yum-v1-releases/
enabled=1
gpgcheck=0
```

## Apt/DEB (for SCM-Manager v1 only):

```bash
deb https://packages.scm-manager.org/repository/apt-v1-releases/ stable main
```

For more detailed instructions have a look at the [SCM-Manager documentation](/docs/1.60.x/en/RPM%20and%20DEB%20packages/).

If you have any questions or issues with the new repositories feel free to ask us on the [mailing list](https://groups.google.com/forum/#!forum/scmmanager).
