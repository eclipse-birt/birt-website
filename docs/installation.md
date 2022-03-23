---
id: installation
title: Installation
sidebar_label: Installation
---

## Download

BIRT has a design and runtime component. Both can be found in several different forms and versions. The BIRT download site is here:

<center>[** https://downloads.eclipse.org/birt **](https://downloads.eclipse.org/birt)</center>

## Sources

:::tip
[** Find what you need at: github.com/eclipse/birt.**](https://github.com/eclipse/birt) 
:::

Once you've downloaded your BIRT component, you need to install it. For instructions please continue reading...

If you have not yet done so, install Eclipse, GEF, EMF and BIRT. You'll find complete instructions for doing so on the BIRT Install page.
Open BIRT

BIRT is a perspective within Eclipse. To open it, use the Window item on the Eclipse main menu. Choose Open Perspective, then Report Design. If report Design does not appear directly in the Open Perspective window, then choose Other... A list of perspectives will appear. Choose Report Design.

Eclipse will switch to display the BIRT perspective.

## Designer Install

BIRT can be downloaded and installed in different ways:

*    The complete BIRT designer or RCP Designer can be installed by downloading the required package here.

*    or by downloading the Eclipse IDE for Java and Report Developers Package.

*    or through the update manager as described here. Make sure to use the latest Update Site. Update Manager URLs as a package that only contains the BIRT plugins (Framework) from the download page. Note additional requirements are located on the download page as well. These include dependencies on other Eclipse projects. These dependencies are listed on the download page for the specific build.

All of the above downloads contain the BIRT designer. The BIRT project has many additional downloads, including a runtime for deploying the BIRT engine in a web application or standalone Java application. The additional downloads are available for any build of BIRT by selecting the appropriate build here.

Once you have downloaded one of the above packages, unzip the package into your chosen directory. This will create an eclipse directory that contains eclipse.exe. Run eclipse.exe to start the designer.
Create a Windows Shortcut

*    From the desktop, right click, choose New -> Shortcut.

*    For location, enter "C:\Program Files\eclipse\eclipse.exe" (without quotes)

*   Click Next

*   Enter "Eclipse" for the shortcut name.

## Framework Designer Install

As stated above, the framework install only contains the required BIRT plugins. The Framework install requires that you already have the Eclipse Platform, GEF, EMF, DTP and WTP packages. The specific version of each, is listed on the specific build's download page. Unzip each package into your eclipse directory.
Optional Eclipse Link File

If you are installing the framework, you can download the BIRT framework and unzip the contents to any directory.

*    After doing this, create a links directory in your installed Eclipse location (ie C:\eclipse\links).

*    Within this directory create a file with a unique name like birt.link.

*    Open the file you just created and enter path=drive:/pathtobirt (ie path=c:/birt)

## JDBC Drivers

You will likely want to use your own JDBC driver with BIRT. Use the data source editor's JDBC driver management wizard. To start the wizard, open a BIRT report design, go to the Data Explorer view, right click on "Data Sources" and select "New Data Source". Choose "JDBC Data Source" and click "Next". In the next dialog, choose "Manage Drivers..." to bring up the "Manage JDBC Drivers" dialog.

In the "JAR Files" tab, click on "Add..." to add the JAR file required by your JDBC driver. Then go to the "Driver" tab to confirm that the list of drivers includes the new drivers added. You may also want to assign a display name and URL template for the new drivers in this tab.
Updating a BIRT Installation

If you have a version of BIRT installed, and want to install a newer version, do the following:

*    Close Eclipse.

*    Locate your Eclipse plugins directory. If you installed on Windows in the default location, this is "C:\program files\eclipse\plugins".

*   Delete all directories that start with "org.eclipse.birt".

*    Download and install BIRT as described in the BIRT section above.

*    Restart Eclipse with the -clean option: eclipse -clean

## Deploying to a Java Sever

Please see Setting up the BIRT Viewer.
Installing BIRT Language Packs on Windows

BIRT can be downloaded and installed in different ways:

*    Download the Language Pack for the desired product and extract into your eclipse install.

*    Open the Regional and Language Options in the Control Panel and switch to the advanced tab.

*    Select the group 1 language you desire from the drop-down combo box.

*    Save changes and restart the system.

*    Launch Eclipse and select Window->Preferences->Report Design->Preview. Select the desired language from the drop-down combo box.

*    Restart Eclipse.

## Common Problems

Some problems are due to cached information within Eclipse. Eclipse caches information about plugins for faster startup. Adding BIRT as we did above may result in stale cached information. Symptoms of this problem include:

*    The BIRT perspective does not appear in Eclipse.

*    You receive "An error occurred" dialogs when opening reports or using the BIRT UI.

Cleaning Cached Plugin Information

The solution is to clean up the cached information. The recommended practice is to start Eclipse with the -clean option:

  **Enter:** 

  ```javascript
   cd "\Program Files\eclipse" 
   eclipse -clean  
  ````

Cleaning the Cache on Windows

If you are on Windows, and are not familiar with how to invoke Eclipse from the command line, do the following:

*    Choose Start->All Programs->Accessories->Command Prompt

*    Move to the directory where you installed eclipse. If you installed Eclipse in the standard location, enter:

  **Enter:** 

  ```javascript
   cd "\Program Files\eclipse" 
   eclipse -clean   
  ````
	

Eclipse will restart. Again check for the BIRT perspective.

