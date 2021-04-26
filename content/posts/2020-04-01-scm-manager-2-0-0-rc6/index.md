---
title: SCM-Manager 2.0.0-rc6
date: 2020-04-01T07:45:44+00:00
author: René Pfeuffer
slug: /release/scm-manager-2-0-0-rc6/
categories:
  - release
  - scm-manager

---
One of the core features of SCM-Manager is its extensibility with plugins. Installing, updating and removing plugins requires a restart of the SCM-Manager. And to be honest, we would not have thought this would be so hard.

After trying to destroy the complete context of the server and learning a lot about class loader leaks, we now threw this all away and moved to a more fail-proof solution with 2.0.0-rc6: On POSIX systems (that is all Linuxes and Apples) we use the LIBC by default to kill the server process and replace it with a new instance. Doing so, we keep the process id and no monitoring should notice and complain about this. However there is this other operation system, Windows, where we haven’t found a good solution for, yet. So on Windows, after installing plugins or in the migration wizard, you will get a message saying that the server has to be restarted manually. Because we are not satisfied with this, we are still working on an automated solution for Windows. If you do not trust our restart solution, you can implement your own or switch to our simple exit strategy, using startup parameters.

Further changes of 2.0.0-rc6 are mostly small extensions and fixes. In 2.0.0-rc5 a README file for example could mess up the position of the navigation menu. This should be fixed now. And having talked about Windows: The build should now be possible on these machines, again.

You can download the RC-6 here

- [.tar.gz](https://maven.scm-manager.org/nexus/service/local/repositories/releases/content/sonia/scm/scm-server/2.0.0-rc6/scm-server-2.0.0-rc6-app.tar.gz) (sha1: f1cdbda4615c662f9e92d5707b902c12c4907800)
- [.zip](https://maven.scm-manager.org/nexus/service/local/repositories/releases/content/sonia/scm/scm-server/2.0.0-rc6/scm-server-2.0.0-rc6-app.zip) (sha1: 961b5ba8bca98e8b376094bc60a7bb0b7c20feeb)

or use it via Docker

`docker run -p 8080:8080 -v scm-home:/var/lib/scm --name scm scmmanager/scm-manager:2.0.0-rc6`
