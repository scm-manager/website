---
title: SCM-Manager 3.10.0
date: 2025-08-20T10:00:00+0000
author: René Pfeuffer
categories:
  - scm-manager
  - release
keywords:
  - performance
  - monitoring
  - review
---

Dear SCM-Manager Community,

yesterday we released version 3.10.0 of the SCM-Manager.

This release does not introduce major new features or visible changes. Instead, it contains important adjustments that
prepare the software for upcoming compatibility improvements with external systems using go-git.

These other changes might be of interest to you:

- If you are using Prometheus or other monitoring tools, you can now use them to monitor the performance of
  the storage layer. This might be of interest if you are experiencing performance issues.
- When you are using the review plugin, the committer of merges or squash commits is now set to the user who
  performed the merge or squash. This ensures that the commit history reflects the actual originator of the changes.
- For the review plugin, you will see that there is a new merge strategy available: fast-forward-only.
  This strategy allows you to enforce that merges are only performed if the branch can be fast-forwarded,
  meaning that there are no new commits on the target branch other than the ones being merged. If this is not possible,
  the merge will be rejected. This can help to keep the commit history clean and linear.

## Closing Words

Especially with the migration of the plugins to the new persistence layer, we have made significant progress. 
On the other hand, these have been big changes. 
So we are looking forward to your feedback on this release. 
Do not hesitate to report any issues you encounter or share your thoughts on the changes.

Are you still missing an important feature? How can SCM-Manager help you improve your work processes?
We would love to hear from you about what you need most!

Do you have any questions or suggestions about the SCM-Manager?
Contact the DEV team directly on [GitHub](https://github.com/scm-manager/scm-manager/) and make sure
to check out our [community platform](https://community.cloudogu.com/c/scm-manager/).
