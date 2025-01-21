---
title: Potential leak of password details in trace log
date: 2025-01-17T17:00:00+00:00
author: René Pfeuffer
categories:
  - release
  - security
  - scm-manager
keywords:
  - vulnerability
---
We found a potential risk that could reveal details about user passwords in the trace log.
Passwords or parts of them have never been logged in plain text, though.

To fix this issue, we released new versions of SCM-Manager:

- [2.46.5](https://scm-manager.org/download/2.46.5) (a fix for a slightly older version)
- [2.48.4](https://scm-manager.org/download/2.48.4) (for those who do not want to update to 3.x yet)
- [3.6.1](https://scm-manager.org/download/3.6.1) (the fix for the latest version)

We highly recommend to update to one of these versions.
