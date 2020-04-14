---
title: SCM-Manager 2 Milestone 1
date: 2014-12-13T17:02:44+00:00
author: Sebastian Sdorra
slug: /release/scm-manager-2-milestone-1/
categories:
  - release
  - scm-manager

---
After a long development time SCM-Manager 2 reaches milestone 1. Here are the main features of the first milestone of SCM-Manager 2:

## Server

With version 2 SCM-Manager will switch to <a title="Semantic Versioning" href="https://semver.org" target="_blank" rel="noopener noreferrer">Semantic Versioning</a>. All upcoming SCM-Manager 2 versions and plugins will use the MAJOR.MINOR.PATCH scheme for their version numbers.

## Repository Cleanup

Deprecated and used modules, packages, classes, methods and fields are completely removed from the repository. Some modules are renamed to match their maven artifact id. The following modules are moved to their own repositories to get the repository smaller and to improve release cycles:

- <a title="scm-plugin-archetype" href="https://bitbucket.org/sdorra/scm-plugin-archetype" target="_blank" rel="noopener noreferrer">scm-plugin-archetype</a>
- <a title="scm-plugin-backend" href="https://bitbucket.org/sdorra/scm-plugin-backend" target="_blank" rel="noopener noreferrer">scm-plugin-backend</a>
- [smp-maven-plugin](https://github.com/scm-manager/smp-maven-plugin) formerly known as scm-maven-plugin

## Event handling

The handling of events in SCM-Manager 2 is now controlled only by the Subscribe annotation, the old style listener classes are removed. In addition we switched from the <a title="Google Guava EventBus" href="https://code.google.com/p/guava-libraries/wiki/EventBusExplained" target="_blank" rel="noopener noreferrer">Google Guava EventBus</a> to <a title="Legman" href="https://github.com/sdorra/legman" target="_blank" rel="noopener noreferrer">Legman</a>. <a title="Legman" href="https://github.com/sdorra/legman" target="_blank" rel="noopener noreferrer">Legman</a> is a fork of the <a title="Google Guava EventBus" href="https://code.google.com/p/guava-libraries/wiki/EventBusExplained" target="_blank" rel="noopener noreferrer">Google Guava EventBus</a>, which fixes some problems of SCM-Manager with the <a title="Google Guava EventBus" href="https://code.google.com/p/guava-libraries/wiki/EventBusExplained" target="_blank" rel="noopener noreferrer">Google Guava EventBus</a>. Have a look at the list of fired <a title="SCM-Manager events" href="https://docs.scm-manager.org/apidocs/latest/sonia/scm/event/class-use/Event.html" target="_blank" rel="noopener noreferrer">events</a> (TODO update link) by SCM-Manager all of them can be handled like below:

```java
@EagerSingleton
public class Listener {

  @Subsribe
  public void handleEvent(PostReceiveRepositoryHookEvent event){
    // handle event
  }

}
```

## Java and bundled Jetty (scm-server)

With version 2 we will switch to java 7, older versions of java are no longer supported. With this step we are able to use the java7 package from <a title="JGit" href="https://eclipse.org/jgit/" target="_blank" rel="noopener noreferrer">JGit</a>, which should bring a performance boost for all SCM-Manager git operations. We will also update <a title="Jetty" href="https://www.eclipse.org/jetty/" target="_blank" rel="noopener noreferrer">Jetty</a> from version 7 to version 9.2.x. This update will give us opportunities like WebSockets and SPDY.

## Performance, startup and appserver compatibility

We have dropped all classpath scanning operations in favor of a <a title="annotation processor" href="https://docs.oracle.com/javase/7/docs/api/javax/annotation/processing/Processor.html" target="_blank" rel="noopener noreferrer">annotation processor</a>. The annotation processor will store all classes which are annotated with Extension, ExtensionPoint, Subscribe or Path annotation durring the compilation. This change results in a shorter startup with a lower memory footprint, because we don’t have to load all classes from package classpath to check for annotations. The annotation processor solves also problems with the classpath scanning on some application servers.

## Plugins

The plugin system of SCM-Manager 2 is completely rewritten. Here are some of the main features:

### Structure and packaging

Plugins are no longer ordinary jar files. In SCM-Manager 2 plugins are packaged as a single smp file. The smp packages are containing classes, resources and all dependencies of a plugin. The structure of a smp file looks like this:

- classes (classes and resources)
- webapp (web resource like scripts, stylesheets and images)
- lib (plugin dependencies)

The switch to smp packages allows us to drop the complex and error-prone <a title="Aether" href="https://eclipse.org/aether/" target="_blank" rel="noopener noreferrer">Aether</a> based plugin system of SCM-Manager 1.x. It also solves the problem with offline plugin installations.

### Class and resource loading

SCM-Manager 2 creates an isolated classloader for each plugin, this protects us from classloading conflicts. The isolated classloaders also allows the override of core dependencies for plugins. The new plugins will also introduce WebResourceLoaders, which are able to load resources from the webapp directory for a plugin.

### Plugin descriptor

Descriptors are now validated by dtd. The descriptors are now supports tags for later improvements to the plugin center.

## Download

**Warning:** SCM-Manager 2 Milestone 1 is not compatible with SCM-Manager 1.x and it is not ready for production use. This release is only for testing purposes.

- [scm-server-2.0.0-M1-app.zip](https://maven.scm-manager.org/nexus/content/repositories/releases/sonia/scm/scm-server/2.0.0-M1/scm-server-2.0.0-M1-app.zip "scm-server-2.0.0-M1-app.zip")
- [scm-server-2.0.0-M1-app.tar.gz](https://maven.scm-manager.org/nexus/content/repositories/releases/sonia/scm/scm-server/2.0.0-M1/scm-server-2.0.0-M1-app.tar.gz "scm-server-2.0.0-M1-app.tar.gz")
- [scm-webapp-2.0.0-M1.war](https://maven.scm-manager.org/nexus/content/repositories/releases/sonia/scm/scm-webapp/2.0.0-M1/scm-webapp-2.0.0-M1.war "scm-webapp-2.0.0-M1.war")

## What comes next?

Milestone 2 will target the user/group management and the security system of SCM-Manager. The development of Milestone 2 is organised <a title="SCM-Manager 2 Milestone 2 development" href="https://trello.com/b/Afb3hoJ9/scm-manager-2-0-0-milestone-2" target="_blank" rel="noopener noreferrer">here</a>.

