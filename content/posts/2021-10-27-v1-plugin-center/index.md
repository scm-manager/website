---
title: SCM-Manager v1 Plugin Center
date: 2021-10-27T09:42:42+0000
author: Sebastian Sdorra
categories:
- scm-manager
- plugin-center
- v1
keywords:
- plugins
- v1
- plugin-center
---

Hello SCM-Manager Community,

On 2020-06-04 we released SCM Manager v2 in the first stable version. That was 510 days ago.
Today we decided to shutdown the PluginCenter for version 1 at the 2022-04-30 and we also disabled access via http today.

## What does this mean for running 1.x instances?

Running instances will continue to run without interruption.
Installing and updating plugins will only be possible via https until the 2022-04-30. 
From 2022-05-01 it will no longer be possible to install or update plugins at all, but running instances will of course continue to run.

## How can I make sure that my v1 instance uses https?

To make sure that your instance uses https to access the PluginCenter, the URL under `Config -> General -> Plugin repository` must start with `https` and not `http`. Normally the URL should look like this:

```text
https://plugins.scm-manager.org/scm-plugin-backend/api/{version}/plugins?os={os}&arch={arch}&snapshot=false
```

If the URL uses http SCM-Manager will only show the installed plugins on the plugins tab and not the one from the PluginCenter.

## It's time to upgrade!
If you still have running 1.x instances, now is the right time to upgrade to v2. Take a look at our [migration guide](/docs/latest/en/migrate-scm-manager-from-v1/) and if you still have questions, we are happy to answer those in our [forum](https://community.cloudogu.com/c/scm-manager/19).
