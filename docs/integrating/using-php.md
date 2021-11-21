---
id: using-php
title: Using PHP
sidebar_label: Using PHP
---

### Motivation

BIRT is designed to be integrated into a Java EE web application. But, what if your chosen development environment is something else, such as PHP? Can you still use BIRT? Yes, you can.  This page discusses how to use BIRT from PHP.

### Setup

PHP has the ability to call Java classes using a PHP/Java Bridge. So, one integration option is to have the PHP engine call the BIRT Engine directly. The scenario is discussed in [an article here](https://www.theserverside.com/news/1363642/Intergrating-BIRT-with-PHP). 

Another option is to host BIRT on its own app server, such as Tomcat, and use the BIRT Viewer URLs to work with BIRT. The rest of this page discusses this option.

The first step is to install Tomcat and the BIRT viewer. Let's assume that you've set up Tomcat on the same machine as the web server running Apache, and that Tomcat listens on port 8080. Once the setup works, we're ready to focus on the PHP side.


### Running a Report

Next step is to run a report from within a PHP script. Let's assume we have a report named test.rptdesign stored in C:/temp. We use a browser redirect to run the report. The redirect appears in an HTML header. Headers must be written before adding any content to the page:

    $fname = "c:/temp/test.rptdesign";
    // Redirect browser
    $dest = "http://localhost:8080/birt-viewer/run?__report=";
    $dest .= urlencode( realpath( \$fname ) );
    header("Location: \$dest" );

The name of the report is given as an absolute path, but a relative path is also allowed once you set up the BIRT_VIEWER_WORKING_FOLDER configuration variable in the BIRT viewer web app's web.xml file. Be sure to encode the file name for use in a URL.

### Passing Parameters

Suppose your report takes parameters. The test report above has one parameter called sample. We simply add them to the report URL in the form described in [Using the Report Viewer](integrating/viewer-usage.md).

    $fname = "c:/temp/test.rptdesign";
    $paramValue = "Hi there!";
    // Redirect browser
    $dest = "http://localhost:8080/birt-viewer/run?__report=";
    $dest .= urlencode( realpath( \$fname ) );
    $dest .= ";sample=" . urlencode( \$paramValue );
    header("Location: \$dest" );

The parameter value must also be encoded when placed into the URL.

### Parameter Form

Ideally, we could use PHP to create a UI form that prompts for the report parameters. The BIRT viewer creates this form in Java using information in the report design. Unfortunately, at present, there is no way to retrieve the raw parameter descriptions from the BIRT viewer using a URL. Instead, there are two alternatives we can use.

First, if we know the parameters ahead of time, we can design a custom form in PHP that prompts the user for them. This works if we have a small number of reports, or if we need to create a specialized parameter page for each report anyway.

Second, we can let the BIRT viewer display the parameter page using the frameset URL.
