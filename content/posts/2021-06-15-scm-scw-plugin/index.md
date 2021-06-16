---
title: SCM-SCW-Plugin
date: 2021-06-15T15:00:00+0000
author: Eduard Heimbuch
categories:
- scm-scw-plugin
- cloudogu
keywords:
- cloudogu
- secure-code-warrior
---

Hey SCM-Manager community,

We are proud to inform you about our newest (and first) official partnership with [Secure Code Warrior](https://www.securecodewarrior.com/).
As part of our cooperation, we created the `SCM-SCW-Plugin` which integrates the Secure Code Warrior learning material into SCM-Manager.
Besides GitHub, SCM-Manager is the second exclusive integration with Secure Code Warrior support.

## Who is Secure Code Warrior?
[Secure Code Warrior](https://www.securecodewarrior.com/) offers a platform that provides developers, 
as well as others that are interested in security, with knowledge about security vulnerabilities. 
We think that their approach of using gamification and micro-learning works very well, because it sensitizes developers to the major topic of software security in the long term.

## What is the SCM-SCW-Plugin?
The `SCM-SCW-Plugin` brings parts of the `Secure Code Warrior` knowledge into your SCM-Manager. 
We focused mainly on two scenarios for the first implementation, 
both of which depend on pull requests you may know from the `SCM-Review-Plugin`.

### Scenario 1: Pull Request Description

A developer from our team has found a critical `SQLI` (`SQL Injection`) security bug in our code.
He fixes the vulnerability on a new bugfix branch and creates a pull request in our SCM-Manager. 

**Issue:**
Unfortunately, no other developer has knowledge about `SQLI` and therefore cannot verify his changes.

**Solution:**
As soon as the title or description of the pull request contains keywords related to the security-related fix, such as `SQLI`, 
Secure Code Warrior learning content will be shown directly on the pull request.
Now the reviewers can learn about SQL injection before reviewing the changes.

![Pull Request Description](assets/SCW-PR-Description.jpg)

### Scenario 2: Pull Request Comments
A developer from our team creates a new feature regarding sql statements. 
He also pushes his feature on a new feature branch and creates a pull request in SCM-Manager.

Afterwards a reviewer checks the new features and finds some issues in the code. 
There is an attack vector which can be exploited with SQL injection using user-controlled inputs.
The reviewer creates comments describing his findings in the pull request.

**Issue:**
Now the developer needs to understand how this vulnerability works and how to fix it.

**Solution:**
As soon as the reviewer posts comments which contain special keywords like `sqli` or `SQL injection` in the pull request,
the Secure-Code-Warrior-Plugin adds matching content from Secure Code Warrior in an additional comment. 

![Pull Request Description](assets/SCW-PR-Comment.png)

## Where can I download this plugin?

This plugin is completely free and doesn't need an account for `Secure Code Warrior`.
But since it is not available in the official SCM-Manager plugin center, it has be downloaded and installed manually.

Find out more about the plugin and how to install it in the [official documentation](https://forum.cloudogu.com/topic/101).
Register and download the `SCM-SCW-Plugin` from myCloudogu [myCloudogu](https://files.cloudogu.com/file/scm-manager/plugins/secure-code-warrior/latest).
