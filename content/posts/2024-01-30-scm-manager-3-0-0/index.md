---
title: SCM-Manager 3.0.0
date: 2024-01-30T17:00:00+0000
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

recently we announced that SCM-Manager 3.0.0 is nearly finished. 
Yesterday we finally released the new version and are proud that SCM-Manager, which was created in 2011 by Sebastian Sdorra, reached another milestone.

## What does this mean for you and your SCM-Manager?
* The most important point is, that your daily work with SCM-Manager will not change. The user interface, workflows and CLI remain the same.
* All your plugins remain fully compatible.
* If your scm-server uses the default configuration the migration to 3.0 will be fully automatic.
* If you use custom scm-server configurations, you will have to migrate them. Learn more about migration in the [migration guide](https://scm-manager.org/docs/3.0.x/en/migrate-scm-manager-from-v2/).

If you want to dive deeper into the reasons for the new major release, please refer to our previous [blog post](https://scm-manager.org/blog/posts/2024-01-16-scm-manager-3-0-0/).

## Documentation
We already gave you a sneak peek for the new server configuration. The whole configuration can be done inside the `config.yml`. Also, all configuration options can be set via environment variables, which can be really helpful for Docker and Helm deployments.

Read the [docs](https://scm-manager.org/docs/3.0.x/en/administration/scm-server/).

## Disclaimer
We tested the major changes thoroughly and did our best to ensure maximum compatibility. 
It is still recommended that you back up your server before upgrading. If possible also consider to try this new deployment on your staging environment before upgrading production systems.

## Closing words

Are you still missing an important feature? How can SCM-Manager help you improve your work processes?
We would love to hear from you about what you need most!

Do you have any questions or suggestions about the SCM-Manager?
Contact the DEV team directly on [GitHub](https://github.com/scm-manager/scm-manager/) and make sure
to check out our new [community platform](https://community.cloudogu.com/c/scm-manager/).
