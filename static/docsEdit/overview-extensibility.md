---
id: overview-extensibility
title: Extensibility
sidebar_label: Extensibility
---
## Extensibility
The spectrum of reporting applications is enormous, and the BIRT team can never provide every feature needed by every application. BIRT's scripting support is one way to extend BIRT. Another is to create BIRT extensions that plug into BIRT. The project provides many extension points that can be used to extend BIRT. Some of the more common ones are listed below.

## Data Access
BIRT uses the Data Tools Open Data Access (ODA) framework for adding custom data access methods. Data access extensions include a runtime component for getting the data. They can also include custom design-time UI for building a custom query. For example, a packaged application vendor can use ODA to build data access UI that works with the vendor's own data model.

![img](/img/BIRT-Image-04.png)

## Report Items
BIRT provides a solid set of report items for presenting data. Applications that have specific needs can create additional report items that work within the designer and engine just like BIRT's own report items. For example, a performance management application might add report items that display stop lights, gauges and other visual indications of performance metrics.

## Chart Types
The BIRT chart package provides a wide variety of chart types. However, some industries have developed very specific chart formats. Developers can create chart plug-ins that add these chart types into the BIRT charting engine.

## Output Formats
BIRT provides output in HTML, Paginated HTML, PDF, XLS, DOC, PPT, ODS, ODP, ODT, and Postscript. Many other types of output are possible: ERich Text Format (RTF), Scalable Vector Graphic (SVG), images, and more. While BIRT will add some of these over time, others may have a more limited audience. Developers can use BIRT engine interfaces to add additional converters, including those specific to a given application.