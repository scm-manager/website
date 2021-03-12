---
title: SCM-Manager 2.15.0
date: 2021-03-012T15:00:00+0000
author: SCM-Team
categories:
  - scm-manager
  - release
keywords:
- release
- search
- markdown
- metrics
---

Hey SCM-Manager community,

you may now search for filenames inside your SCM-Manager repositories and collect metrics for your SCM-Manager server. 
Checkout the newest release to find about everything that changed.

## Search for files inside repositories

Finally, it is possible to search for files and directories within repositories.
To search for a file, you can click the search icon next to the file path in the source view of the repository.
On the file search page, you can enter the text you are looking for.
The search is based on the file path only and hits in the file name are ranked higher than hits in the path.

Tell us how you feel about the search function!

![search](./assets/search.png)

## Partial diff
Another issue that noticeably affected performance was loading changesets with a lot of added/changed/deleted files.

We solved this matter by load the changes as chunks.
You will see about 30 changed files directly and can load more by clicking on the button at the bottom.

![more_diffs](./assets/more_diffs.png)

## Metrics
This new feature set should be especially interesting for administrators running SCM-Manager. 
We created a generic API which collects and provides metrics. 
The first set of metrics contains jvm metrics like memory, threads and garbage collection.

You can get the metrics as [JSON](https://scm-manager.org/plugins/scm-metrics-json-plugin/) or for [Prometheus](https://scm-manager.org/plugins/scm-metrics-prometheus-plugin/) using the related plugin.

## Closing Words

Are you still missing an important feature? How can SCM-Manager help you to improve your work processes? We would love to hear you most needed features!

Have some questions or suggestions for SCM-Manager? Connect directly to the DEV-Team on [GitHub](https://github.com/scm-manager/scm-manager/) or [our Support channels](https://www.scm-manager.org/support/).
