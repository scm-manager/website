---
title: Log4Shell
date: 2021-12-13T09:00:00+0000
author: René Pfeuffer
categories:
- scm-manager
- security
- release
keywords:
- log4j
- logback
- log4shell
---

Hey SCM-Manager Community,

We're sure you've heard about the vulnerability in log4j called
[Log4Shell](https://nakedsecurity.sophos.com/2021/12/13/log4shell-explained-how-it-works-why-you-need-to-know-and-how-to-fix-it/).
As far as we can say, SCM-Manager **is not affected** by this, because
log4j is not used in SCM-Manager (for logging, we use
[Logback](http://logback.qos.ch/)).

However, if you have installed plugins from external sources,
you can check whether log4j is used somewhere by running this little
script using the [script plugin](https://scm-manager.org/plugins/scm-script-plugin/):

```
println org.apache.logging.log4j.core.lookup.JndiLookup.class.protectionDomain.codeSource
```

If you get the following error, everything should be fine:

```
javax.script.ScriptException: javax.script.ScriptException: groovy.lang.MissingPropertyException: No such property: org for class: Script0
```

If log4j is available, you will get the name of the library.

Feel free to contact us if you have further questions. You can contact the DEV team directly on
[GitHub](https://github.com/scm-manager/scm-manager/) and make sure to check out our new
[community platform](https://community.cloudogu.com/c/scm-manager/).

# Update (2021-12-15)

On December, 14th the Logback team [released a patch](http://logback.qos.ch/news.html)
that removed a potential vulnerability.
This can be exploited, if the attacker has write access to the logback configuration
file. Although this should not be possible with SCM-Manager out of the box, we still
recommend to upgrade to [version 2.27.3](https://scm-manager.org/download/2.27.3/) of SCM-Manager,
where we have updated this dependency.
