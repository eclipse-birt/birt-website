---
id: integrating
title: Integrating BIRT
sidebar_label: Integrating BIRT
---

### Integration Points
BIRT supplies several APIs and an Example Java EE application for generating and viewing reports. The major APIs are the Design Engine API(DE API), Report Engine API(RE API) and the Chart Engine API (CE API). These pages describe the various APIs and illustrate examples on their usage. In addition to the APIs, BIRT supports scripting using Rhino within report designs. A primer is available to get started scripting.

### Example Report Viewer (Java EE App/Plugin)
The BIRT Viewer can be used in a variety of ways:
Note that the BIRT Viewer requires that cookies be enabled.

* As a stand-alone, pre-built web application for running and viewing reports.
* As a starter web application that you can customize to your needs.
* Called through the BIRT tag library.
* As a plugin in existing RCP applications.

#### Web Viewer Links
[Integrating the BIRT Viewer](viewer-setup.md) explains how to deploy the BIRT viewer onto your own application server. The explanation uses Apache Jakarta Tomcat as the sample deployment target.

[Using the BIRT Viewer](viewer-usage.md) discusses the viewer operation URLs, parameters and settings.

[Using the Viewer from PHP](using-php.md) discusses how to run BIRT reports from a non-Java scripting environment such as PHP.

[Viewer Tag Library](viewer-usage.md) discusses how to integrate BIRT using the Tag Libraries.

The viewer code is available in the BIRT source repository in the [org.eclipse.birt.report.viewer](https://github.com/eclipse/birt/tree/master/viewer/org.eclipse.birt.report.viewer) project. See the [BIRT build instructions](https://github.com/eclipse/birt/blob/master/README.md) for information on how to access the sources and build the viewer.
