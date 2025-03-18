---
title: JWT Configuration and SQLite Support
date: 2025-03-11T17:00:00+0000
author: Florian Scholdei
categories:
  - scm-manager
keywords:
  - performance
  - security
  - authentication
---

With the next minor release, we are introducing some exciting changes, particularly regarding JWT (JSON Web Token) configuration and Javadoc.
We would also like to give you an outlook on what lies ahead regarding SQLite.

## JWT – Flexible Lifetime Configuration

You will be able to set the JWT lifetime on an hourly basis in the global configuration.
This gives you more control over token validity and allows you to adjust security settings to match your requirements.

If you reduce the token lifetime in the configuration, all previously issued tokens will immediately become invalid.
This ensures a consistent security strategy and prevents older tokens from staying active longer than necessary.

We are also introducing a new option for infinite JWTs in the configuration file (`config.yml`), but we strongly advise against using it.
Keeping tokens valid indefinitely poses a significant security risk.
If you choose this option, ensure you have alternative protection measures in place to prevent unauthorized access.

This feature will be available with the next release.

## Javadoc

From now on, we will publish the [Javadoc for the latest SCM Manager core version](https://scm-manager.org/javadoc) on our website with every release.
In Java, Javadoc comments are used as a standardized method to document code.
This is a first step and will be updated and expanded to improve clarity and help developers better understand the core API.

The entry point for this will also be available via the development section in the documentation.

## SQLite Support – A Work in Progress

SCM-Manager currently works with XML files to save settings and status, which can sometimes become hard to handle in larger instances or over time.
In these cases, we sometimes encounter performance problems when reading and writing. 
Especially aggregations over different data sets are cumbersome and often slow. 
We introduced a lot of caching mechanisms, but we think, we've met a dead end here.
The advantages, on the other hand, are simple migrations of data or manual changes on the basis of XML files and simple expandability by plugin developers.

So after weighing pros and cons for a while, we identified [SQLite](https://www.sqlite.org/) as a possible alternative, tested it positively and are happy to confirm that it's in development!
We created an API, that on the one hand extends the existing store API so that migration is simple, but on the other hand allows somewhat complex queries, that are still type-safe.
This could be done without moving away from the simple entity based approach with XML annotations. 
Instead of XML files, entities will be stored as JSON blobs in the database. 
These JSON blobs can be handles extremely fast and effective by SQLite.

However, we don't want to make any premature promises. 
There is no fixed timeline for when SQLite will be fully integrated.
As a user, you should not notice any changes at all (despite some performance improvements, if we're lucky). 
The only downside will be, that data for plugins using this new store will no longer be stored exclusively in the directory of the repository. 
Exports and imports will work the same way as before, nonetheless.

Also, we will not migrate everything into the new database. Only those use cases where we've experienced performance issues or data inconsistencies will be migrated. 
So this only effects a tiny number of plugins. 
Things like configurations will probably never be moved away from XML files. 
It is way too convenient to be able to modify them manually when something does not work as expected (like an authorization plugin that blocks any access).

Since development is still in progress, now is the perfect time to share your thoughts. 
What do you need from SQLite support? 
Are there specific use cases we should consider?
Community feedback is crucial to shaping our roadmap, so let's discuss! 
We encourage you to join the conversation in our community forums or through other channels.

## Closing Words

Are you still missing an important feature? How can SCM-Manager help you improve your work processes?
We would love to hear from you about what you need most!

Do you have any questions or suggestions about the SCM-Manager?
Contact the DEV team directly on [GitHub](https://github.com/scm-manager/scm-manager/) and make sure
to check out our [community platform](https://community.cloudogu.com/c/scm-manager/).
