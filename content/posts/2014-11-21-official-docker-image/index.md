---
title: Official docker image
date: 2014-11-21T17:56:55+00:00
author: Sebastian Sdorra
slug: /scm-manager/official-docker-image/
categories:
  - scm-manager

---
The official SCM-Manager docker image has arrived the docker registry.

- <a title="docker-scm-manager" href="https://bitbucket.org/sdorra/docker-scm-manager" target="_blank" rel="noopener noreferrer">Source code</a>
- <a title="sdorra/scm-manager" href="https://registry.hub.docker.com/u/sdorra/scm-manager/" target="_blank" rel="noopener noreferrer">Docker registry</a>

Here are some examples for the usage of the image:

```shell script
# run the latest scm-manager version
docker run sdorra/scm-manager

# expose scm-manager http port
docker run -p 8080:8080 sdorra/scm-manager

# run a specific scm-manager version
# version 1.42 is currently the only available version
docker run -p 8080:8080 sdorra/scm-manager:1.42

# use a persitent volume
mkdir /var/lib/scm
chown 1000:1000 /var/lib/scm
docker run -v /var/lib/scm:/var/lib/scm -p 8080:8080 sdorra/scm-manager:1.42
```
