---
id: overview-customization
title: Customization
sidebar_label: Customization
---
## Data Customization
Reports often require additional business logic to prepare data for presentation. BIRT provides a number of tools to help:

![img](/img/BIRT-Image-03.png)

+ Computed Columns - Databases organize data for storage, but often data must be combined to prepare it for presentation. Computed columns let you define additional data set columns based on business logic. The logic can be a simple expression, a script, or a call to existing Java logic.

+ Input and Output Parameters - Many data sources support parameters: the ability to pass data into or out of a query. For example, SQL Select statements can include input parameters. Stored procedures can have both input and output parameters.

+ Column Meta-data - You can provide column aliases when the names provided by the data source are unintuitive.

+ Filtering - Some data sources, especially SQL, provide excellent built-in filtering features. However, some data sources (flat files, application objects) may not provide filtering. In other cases, the filter conditions are defined in scripts or Java code. You can define such filters as part of the report, and the BIRT engine will apply them automatically.

+ Scripted Data Sets - Some reports require access to specialized or unusual data. You can create such access in Java or scripts and use the scripted data set to integrate that logic into your report.

## Conditional Formatting

While some reports have a fixed format, others require conditional formatting. For example, a report that lists transactions may want to present a sale differently than a return. Or, a customer service report may want to show colors that indicate which metrics are above, at or below plan. BIRT provides several conditional formatting features:

+ Conditional Visibility - You can hide report elements based on data. In the transaction report above, you can create sections for both sales and return transactions, then hide the one that is not required for a given record.

+ Value Mapping - Database data often uses code values: M/F for male or female, 1/2 for sales and returns, etc. Value mapping lets you define a mapping from database value to display value. For example, we can map the value "1" to "Sale" and the value "2" to "Return."

+ Highlighting - Simple expressions let you select the style to apply to a given report item. For example, in the customer service report, we can use green to show metrics above plan, and red to show those below plan.

## Scripting

BIRT provides scripting based on JavaScript (formally known as ECMAScript). JavaScript is often thought of as a client-side scripting language, but it works just as well on a server for expressing report logic. In particular, JavaScript provides excellent integration with your existing Java logic, making it very simple to call your logic from BIRT reports.

BIRT provides a complete set of JavaScript objects to access the Report Object Model: a representation of both the design and runtime aspects of your report, allowing complete control of the report to handle even the most complex report formatting tasks.

## Java Event Coding
In addition to JavaScript, event handlers can be coded in Java. BIRT supplies a set of interfaces for report item creation and data collection. Once the event handler is written in Java and associated with a report element, the report can be debugged through the Eclipse Java Development Tools.

## Project Management
BIRT integrates with the Eclipse project management features to organize related reports. BIRT also works with Eclipse CVS support for source management. BIRT's XML report design format makes it easy to compare two reports, or two versions of the same report, to track changes.

## Styles
Anyone who has designed a web page knows that the same visual styles get used over and over. Cascading Style Sheets (CSS) allow web designers to extract style information from content, and to reuse style over and over.

BIRT provides a similar style feature. Indeed, BIRT styles are based on CSS styles, making BIRT's visual properties familiar to web application developers. BIRT styles cascade, allowing you to set a style in one place and have it affect the entire report, a section of the report, or a single report item. BIRT also allows importing or referencing of existing Cascading Style Sheets.

## Libraries
Typical applications include many related reports. A simple customer application may include an alphabetical customer listing, customers sorted by geography, customers assigned to specific sales reps, customers filtered by status and more. In general, users frequently want another variation to solve specific business needs.

The result is that reporting applications consist of suites of closely related reports. The same data sources, styles, business logic, report items and more are used across many reports.

BIRT supports libraries that organize these shared resources. Libraries can contain any report element including styles, data sources, report items, scripts and so on.

## Internationalization
The web allows worldwide access to your application. BIRT provides excellent support for internationalization and localization.

+ Text Localization - You can create a single report that automatically displays strings in the user's language. All labels and report text can be externalized and translated using the standard Java localization rules. At runtime, BIRT uses resource keys to locate the correct translations of your text.

+ Language Packs - Language Packs are available to translate the BIRT offerings into many different languages.

+ Localization - BIRT provides locale-aware data formatting, meaning that a date can appear in mm/dd/yy format for US users, and dd-mm-yy format for Europeans.

+ Dynamic Formatting - Chinese text is very compact, German is often quite lengthy, and English of medium size. BIRT automatically adjusts the size of report items to fit their content to avoid the need to test the report with every possible translation. BIRT works like HTML in this regard: the size of content expands as needed to hold its data.

+ Bidirectional Support - BIRT supports bidirectional(BIDI) formatting for report content. No only can content be formatted RTL or LTR, this feature supports combining both within a single report.