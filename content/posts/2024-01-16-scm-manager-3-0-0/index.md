---
title: SCM-Manager 3.0.0
date: 2024-01-16T17:00:00+0000
author: Eduard Heimbuch
categories:
- scm-manager
- release
- plugins
keywords:
- major
- administration 
---

Dear SCM-Manager Community,

We are finally confident to announce SCM Manager 3.0.0 which will we released soon.
But before you get too excited or even panic, we would like to clarify what actually changed and how you can make the upgrade as effortless as possible.

## Why the new major version?
SCM-Manager follows [semantic versioning](https://semver.org/lang/de/). This simply means that the new version represents the nature of the changes included.
Version 3.0.0 contains breaking changes that the administrators and/or developers must be aware of and take actions.
We tried to keep the breaking changes as minimal as possible, but we also wanted to take the opportunity to make some changes that we have been planning for a long time.
The chances are that you will not notice the major version at all. At least users should not notice any changes.

But let's take a look at what actually will be changed and why.

## What will change?

### Unavoidable breaking changes
Because the old version of Jetty (the underlying webserver) ran out of maintenance, we finally had to upgrade Jetty to the newer version.
By doing so, we ran into breaking changes regarding the server configuration.
This regards custom settings like a different context path or SSL configuration that has been taken place in the `server-config.xml`.

The second bigger obstacle we stumbled upon is that many newer Java libraries are already (only) available for `jakarta` instead of `javax`.
This means that we had to upgrade many other libraries to newer versions.

### New config format
We took the opportunity for breaking changes and finally simplified our server configuration.
The new configuration will fully be explained in the docs and can be done via a single `config.yml` or environment variables
(this should simplify the configuration for instances running with docker).
It combines and simplifies the server configuration, the logging configuration and a lot of other sometimes hidden webapp configurations in a single file.

To give you a sneak peek of how the new `config.yml` could look like:

```yaml
# base server config
##  Address to listen 0.0.0.0 means on every interface
addressBinding: 0.0.0.0
port: 8080
contextPath: /scm

## Evaluates headers set by a reverse proxy like X-Forwarded-For, X-Forwarded-Proto and X-Forwarded-Host
forwardHeadersEnabled: true

## increase http header size for mercurial
httpHeaderSize: 16384

# ssl config - ssl is only evaluated if key store path is set
https:
  ## path to your cert file
  keyStorePath: ""
  keyStorePassword: secret
  keyStoreType: PKCS12
  sslPort: 8443
  redirectHttpToHttps: false

# Temp directory used for jetty webserver. The temporary directory for internal operations can be configured as "workDir" in webapp.
tempDir: ./work

# logging
log:
  ## Destination of logging files
  logDir: ./logs
  rootLevel: WARN
  enableFileAppender: true
  enableConsoleAppender: true
  logger:
    sonia.scm: INFO
    com.cloudogu.scm: INFO

webapp:
  ## Sets explicit working directory for internal processes, empty means default java temp dir
  workDir:
  ## Home directory "scm-home" which is also set for classpath
  homeDir:
  cache:
    dataFile:
      enabled: true
    store:
      enabled: true
  ## Warning: Enabling this option can lead to security issue.
  endlessJwt: false
  ## Number of async threads
  asyncThreads: 4
  ## Max seconds to abort async execution
  maxAsyncAbortSeconds: 60
  ## Amount of central work queue workers
  centralWorkQueue:
    workers: 4
  ## Strategy for the working copy pool implementation [sonia.scm.repository.work.NoneCachingWorkingCopyPool, sonia.scm.repository.work.SimpleCachingWorkingCopyPool]
  workingCopyPoolStrategy: sonia.scm.repository.work.SimpleCachingWorkingCopyPool
  ## Amount of "cached" working copies
  workingCopyPoolSize: 5
```

### Plugin Compatibility
We ensured that all SCM-Manager 2.x plugins are fully compatible and will run with SCM-Manager 3.x. 
The automatic migration on your first start with version 3.x could take some minutes depending on the number of installed
plugins, because they have to be converted once with the built-in plugin adapter.
This means you cannot downgrade afterwards. We want to mention that neither your repositories nor any data files will be processed and will not be modified.

### New java version
Java 11 is outdated, as the end of life was reached in September 2023. SCM-Manager 3.x requires Java 17, which in the best case should simply be beneficial for the performance.

## tl;dr

The new major version is mainly a technical upgrade. It's configuration has been simplified a lot and is now done via a single `config.yml` or environment variables.
This is the only incompatibility which must be adjusted by an administrator.

Aside from that, the new version is fully compatible with the old one. All plugins will work as before.
Also, the UI, REST API, CLI and Core APIs will not change. Most users will not notice the major version.


## Support for older SCM-Manager versions
Beginning with the official release of SCM-Manager 3.0.0 we will end the support for SCM-Manager 2.x.
Critical security issues will potentially be fixed, but we strongly suggest to upgrade your SCM-Manager asap.
If your upgrade is blocked by the changed configuration format, and you need more options for the Jetty configuration,
we will do our best to help you asap.

## Closing words

Are you still missing an important feature? How can SCM-Manager help you improve your work processes?
We would love to hear from you about what you need most!

Do you have any questions or suggestions about the SCM-Manager?
Contact the DEV team directly on [GitHub](https://github.com/scm-manager/scm-manager/) and make sure
to check out our new [community platform](https://community.cloudogu.com/c/scm-manager/).
