---
title: Java 11
date: 2021-11-11T11:11:00+0000
author: René Pfeuffer
categories:
- scm-manager
- administration
keywords:
- java
---

Hey SCM-Manager Community,

Java 8 has been around for quite a long time now and it has served SCM-Manager quite well. But everything
has come to an end.

So today we are here to tell you, that we will quit support for Java 8 in March 2021. We chose this date,
because according to Oracle the [support for Java 8](https://www.oracle.com/java/technologies/java-se-support-roadmap.html)
will end then, too. So, if you still run SCM-Manager on Java 8, you should start your transition to Java 11,
which will be our next target platform.

If you already run on Java 11 (or above), or use Docker, there is nothing you have to do. If you use our
Debian or RPM packages, these would force you to install Java 11, if you still run on Java 8. For those using
the unix or windows packages, please make sure that you have installed Java 11.

We do not expect any issues. Nonetheless, if you run into some, feel free to contact us on our
[community platform](https://community.cloudogu.com/c/scm-manager/).
