---
id: viewer-setup
title: Viewer Setup
sidebar_label: Viewer Setup
---

## BIRT POJO Viewer
The Viewer is POJO based. 

### Using Tomcat

This page explains how to deploy the BIRT viewer to a Java EE container. We'll use [Apache Tomcat](http://tomcat.apache.org/), since it is open source and readily available. The same concepts, perhaps with different details, apply to other app servers. These instructions assume you'll install Tomcat on your own machine using the default port number of 8080.

If you don't have Tomcat installed on your system you can download it from http://tomcat.apache.org/

[See BIRT POJO Viewer Tomcat Deployment](http://wiki.eclipse.org/BirtPOJO_Viewer_Tomcat_Deployment).

### Install the Viewer

Deploy the BIRT Viewer application. Follow these steps:

* Download the zip file with the BIRT report engine runtime. The file is named birt-runtime-version#.zip.  
    
* Unzip the file in a staging area.

* Look under the birt-runtime- directory and locate the "Web Viewer Example" directory.

* Copy the Web Viewer Example directory to the webapps directory of your Tomcat installation. For ease of reference, rename the directory to "birt-viewer".

* Stop, then restart Tomcat.

* Display the Tomcat manager application to check that the viewer is deployed: http://localhost:8080/manager/html.

* Verify that birt-viewer is listed as an application, then click on the birt-viewer link.
    
* A page confirming that the BIRT viewer has been installed should be displayed. Click on the link labeled "View Example" to confirm that your installation is working properly.

    * The BIRT Viewer requires that cookies be enabled.

If you choose to put the Viewer into some other location, you'll need to use a context entry within the server.xml file to indicate the deployment location. See Tomcat documentation for details.

### Install your JDBC Drivers

Add the jar files for your JDBC drivers to the Viewer. Copy the driver the following directory:

#### BIRT JDBC Driver Location Note:

If you are installing BIRT 2 series the driver needs to be copied to birt-viewer\WEB-INF\platform\plugins\org.eclipse.birt.report.data.oda.jdbc\drivers directory.
If you are installing BIRT 3.7 or higher, the jdbc driver should be placed in the WebViewer's classpath (eg WEB-INF/lib).

### Testing a More Complex Report

We'll test the viewer further using one of the example reports created for the "Classic Models" database. Note that Classic Models database is included in the birt runtime distribution so no further set-up is required. Follow these steps:

* Download the zip file with the BIRT report engine runtime. The file is named birt-runtime-.zip.

* Click on the following link to download the example report design, [SalesInvoice.rptdesign](https://www.eclipse.org/birt/phoenix/examples/solution/SalesInvoice.rptdesign) into another browser window. Use the "Save as..." command from the file menu to save the report into the birt-viewer/report directory.

* If you've installed everything in its default location, then click on the following link. If you've changed anything, then copy the following URL into your browser and make the needed changes.

        http://localhost:8080/birt-viewer/run?__report=Report\SalesInvoice.rptdesign 

    or

        http://localhost:8080/birt-viewer/frameset?__report=Report\SalesInvoice.rptdesign 

The report should run and appear in your browser. See [Viewer Usage](https://www.eclipse.org/birt/documentation/integrating/viewer-usage.php) for information on the Viewer Operations.

### Deploying to JBoss

If you are deploying BIRT version 2 series to JBoss use the following steps:

* Download the zip file with the BIRT report engine runtime. The file is named birt-runtime-version#.zip.

* Unzip the file in a staging area.

* Look under the birt-runtime- directory and locate the "WebViewerExample" directory.

* Copy the "WebViewerExample" directory to your JBoss installation, under the deploy directory for your configuration. (eg) C:\jboss-4.0.3SP1\server\default\deploy.

* Rename the WebViewerExample directory to birt.war, so it will deploy in place.

* Start up JBoss and enter the URL to BIRT (ie http://localhost:8080/birt) and run the test report.

If you are deploying the BIRT Viewer version 3.7 or later to JBoss use the directions supplied on the following link:
[BIRT POJO Viewer JBoss Deployment](https://wiki.eclipse.org/BirtPOJO_Viewer_JBOSS_Deployment)

### Other Java EE Servers
BIRT FAQ has instructions for many other deployement options.

If you are installing BIRT 3.7 or later see these pages:
[BIRT POJO Viewer Websphere Deployment](https://wiki.eclipse.org/BirtPOJO_Viewer_WebSphere_Deployment)
[BIRT POJO Viewer WebLogic Deployment](https://wiki.eclipse.org/BirtPOJO_Viewer_WebLogic_Deployment)
[BIRT POJO Viewer JBoss Deployment](https://wiki.eclipse.org/BirtPOJO_Viewer_JBOSS_Deployment)
[BIRT POJO Viewer Tomcat Deployment](https://wiki.eclipse.org/BirtPOJO_Viewer_Tomcat_Deployment)
