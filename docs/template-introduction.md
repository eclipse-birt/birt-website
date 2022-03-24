---
id: template-introduction
title: Templates & Examples
sidebar_label: Templates & Examples
---

Welcome to the example and template section of the BIRT site. Here you will find examples and templates that illustrate some of the features of BIRT. 

## How to proceed

If you get stuck as you work through the tutorials, or if you want to see the finished report and its template right away, 


:::tip
** [you can simply download all reports and their templates here](../template-download).**
:::


After you have downloaded the reports and tempates, you can see them by clicking on corresponding html-file. 

To try a report for yourself, save it to disk and then use File-->Import to bring the file into your Eclipse workspace. If the report uses the Classic Models database, you should be able to run the report immediately. If the report uses another database, follow the instructions provided in the "Other Notes" section of its description. 

## Solution Reports

The example reports here show just a few of the things you can do with BIRT. Unless otherwise noted, the reports are meant to be run against the "Classic Models Inc." **sample database that is included on the BIRT download page [here](../template-download).**

### Product Catalog

**[View Product Catalog here.](https://www.eclipse.org/birt/phoenix/examples/solution/ProductCatalog.html)**

Prints the Classic Models product catalog, grouped by product category. Provides product name, cost and description. Demonstrates one level grouping and using a grid within a table row to structure spacing. Also shows image inclusion and use of the tag in text item to include the content of a database column. Finally, the report makes use of styles to simplify maintenance and achieve a consistent look. 

### Top Selling Products

**[View Product Catalog here.](https://www.eclipse.org/birt/phoenix/examples/solution/TopSellingProducts.html)**

Displays a pie chart showing revenue by product line. Lists the top selling products, sorted by revenue. Demonstrates use of a chart and sorting a result set. It also shows image inclusion and use of grid and tables to organize report content. Finally, the report makes use of styles to simplify maintenance and achieve a consistent look. 

### Top N / Top M% Customers

**[View Top N / Top M% Customers here.](https://www.eclipse.org/birt/phoenix/examples/solution/TopNPercent.html)**

Making use of the top n and top precent filter capabilities added in BIRT 2.0, this report shows a bar chart with the top N customers by revenue, followed by a listing of the top M% customers by revenue sorted by customer name. This requires multiple passes over the data, but it is all done "under the covers" by the BIRT report engine. N and M are passed into the report as parameters to allow report users to select the number and percentage at run time. 

### Annual Sales By Product Lines

**[Annual Sales By Product Lines here.](https://www.eclipse.org/birt/phoenix/examples/solution/crosstab.html)**

This example illustrates building a static crosstab report using the BIRT Total function. The report presents annual sales revenue by quarter for each of the product lines that Classic Models Inc currently sales. In addition totals are aggregated across horizontal and vertical dimensions. The BIRT Total function can accept a second parameter that filters the aggregate data. In this example this feature is used to only display values that pertain to a product offering, such as Trains. The first parameter in the Total function is the value to aggregate, and in this example it is set to quantity sold multiplied by price each. The second parameter is the filter. So if the filter where specified as dataSetRow["Products::PRODUCTLINE"]=="Motorcycles", only the Motorcycles product line would be aggregated. 

### Sales Invoice

**[Sales Invoice here.](https://www.eclipse.org/birt/phoenix/examples/solution/SalesInvoice.html)**

Prints an invoice for the selected order, including customer and invoice details and products ordered. Demonstrates use of a parameter to select the order to invoice and expressions for several calculated fields, including discount and order total. Uses expression to build customer address string and illustrates suppression of nulls in database fields with javascript function replace. Also shows image inclusion and sophisticated use of grids and tables to organize report content. Finally, the report makes use of styles to simplify maintenance and achieve a consistent look. 

## Reporting Features

This section of Examples focuses on the feature set within BIRT. Simple reports are used to illustrate a function within BIRT. Most examples will have a before and after report that can be downloaded. In addition, the example is illustrated in a Flash presentation. The examples use popups to explain the process and provide no sound.

### XML Data Source

**[View XML Data Source here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/xmlds/after.jpg)**

 This example demonstrates how BIRT can be used to build reports on XML data sources. An XML file or an URI can serve as data sources for a BIRT report. In this example, we utilize URI's to the Eclipse RSS Newsfeed as the data source for a report. 

### Libraries

**[View Newsfeeds After rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/xmlds/after.jpg)**

 This example demonstrates how BIRT can be used to build reusable component report libraries. In this example, we start by creating a library. We utilize URI's to the Eclipse RSS Newsfeed as the data source for a report and store it in the library. We then publish the library to a resource folder. This example demonstrates the creation of non-visual items in a library. It is important to note that visual items can also be created and stored in a library.

### Combination Chart

**[View Combination Chart here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/combochart/final.JPG)**

This example demonstrates how a Combination Chart can be created within BIRT. In addition this example also demonstrates how to add drill to details, using internal bookmarks and the Chart Interactivity Editor. The combination chart presents the outstanding debt for the top 5 customers in Bar Chart format with a Line series representing each customers credit limit superimposed. The bars within the chart are then linked to order details for each customer.

### Cascaded Parameter

**[View Cascaded Parameter rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/cascade/cascade.rptdesig)**

This example demonstrates how to build a BIRT report that uses a cascaded parameter group. A cascaded parameter group allows a group of parameters to be interlinked, where selecting a value for the first parameter affects the choices available in the subsequent parameters. Cascaded parameters can be tied to one or more Data Sets. The Data Sets populate each level of the cascade. Combined with Data Set parameters this offers very good flexibility for culling of returned data for a report.

In this particular example we demonstrate cascading parameters by producing a order details report. The user of the report is presented with a cascaded parameter group that contains customers and orders. When a customer is selected the orders for the customer is updated in the parameter selection. After the order is selected a order detail report is generated for the selected order. This report contains three Data Sets. The customers Data Set is used to retrieve customers for the first level of the cascade. The orders Data Set is used to display orders in the parameter cascade for the selected customer. This Data Set uses the customer selected as part of the where clause and demonstrates tying a report parameter to a Data Set parameter. The final Data Set is orderdetails and uses the order report parameter in its where clause to retrieve the details about the selected order. This is the only Data Set used in the actual output of the report.

### Query Modifications

**[View Query Modifications rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/querymod/OrderDetailsAfter.rptdesign)**

This example demonstrates how to modify a JDBC query using Property Binding or Script. Property Binding is a feature within BIRT that allows run time modification of Data Source and Data Set public properties. This can be useful to add context sensitive information to either element. As an example, the where clause can be modified to retrieve the user name from session or the database URL can be switched between development and production based on a report parameter.

### Drill to Details

**[View Drill to Details master-rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/drill/OrderMasterAfter.rptdesign)**

**[View Drill to Details detail-rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/drill/OrderDetailAfter.rptdesign)**

 This example demonstrates building a master report and a detail report. The master report list orders and allows the report user to click on a particular order number to drill into a detail report for the selected order. This example illustrates using a simple parameter to cull results in the detail report and the hyperlink property within the master report to pass this parameter to the detail report. The hyperlink property within the master report is generated dynamically based on results retrieved from a query.

### Report Elements  

**[View Report Elements rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/elements/ProductLinesAfter.rptdesign)**

This example demonstrates using Label, Text, Dynamic Text, Data, and Image elements within a report design. Some key features and differences between the elements are also identified. This example also illustrates retrieving BLOB and CLOB data from a datasource.

### Sub Reports  

**[View Sub Reports rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/subreport/OrdersAfter.rptdesign)**

This example demonstrates building a report that uses nested tables. The query that is bound to the inner table is parameterized to return order details for a given order number in the outer table. This example also illustrates referencing outer table columns within a nested table. This allows BIRT reports to be designed with master detail information contained within th same report. As the outer table is processing its rows the inner table query is re-executed based on information from the outer table.

### Mapping and Sorting  

**[View Mapping and Sorting  rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/mappingsorting/CustomerListAfter.rptdesign)**

This example demonstrates using the Mapping and Sorting features of BIRT. Mapping allows a BIRT report element to display a different value based on an expression. For example if a query returns a numerical field for month (1-12) the mapping feature can be used to present January - December. In this example we use mapping to display a credit rank for Classic Models customers. Sorting is used in many places in BIRT and is very flexible. In this example we demonstrate adding a sort expression to a Table element that is tied to a report parameter. The parameter allows entering a search string, which is then used in the sort expression to set the sort order for the table.

### Parallel Report  

**[View Parallel Report  rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/parallel/EmployeeAfter.rptdesign)**

This example demonstrates how to build a report with parallel sections. It also illustrates using table filters to cull the data displayed. The report uses a grid element to layout two columns. In each column a set of nested tables are added to retrieve employee information and group by position hierarchy. The tables are filtered by office code.

### Highlighting and Conditional Formatting  

**[View Highlighting and Conditional Formatting rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/highlighting/ProductListAfter.rptdesign)**

This example demonstrates how to add highlighting and conditional formatting to a BIRT report. A Products list report is developed that displays all company products. The example report uses alternating row colors and highlights rows that represent a product that is low in quantity. This report also illustrates adding a script to the onCreate event of a row to modify the row style to italics for products with high markup values.

### Grouping  

**[View Grouping rptdesign-file here.](https://download.eclipse.org/birt/downloads/examples/reports/2.1/grouping/CustomerListAfter.rptdesign)**

This example demonstrates building a grouped report in BIRT. The example report shows a list of customers and groups these by country. Key BIRT features that are covered in this demonstration are grouping, page breaks, table of contents, and aggregrating data per group or as a total.

## Scripting

This section of Examples focuses on scripting within BIRT. Simple reports are used to illustrate scripting functionallity. Most examples will have a before and after report that can be downloaded. In addition, the example is illustrated in a Flash presentation.

## Scripted Data Source 

**[View Scripted Data Source here.](https://download.eclipse.org/birt/downloads/examples/scripting/scripteddatasource/after.html)**

This example is intended to illustrate using BIRT's Scripted Data Source. This example simulates retrieving results from an online survey. The results of the survey are accessed using a Java Object, which is called from a BIRT Scripted Data Source.

### Integrating BIRT

You can find examples which focuses on integrating BIRT and demonstrating the design engine API and the report engine API in the Eclipse **[wiki](https://download.eclipse.org/birt/downloads/examples/scripting/scripteddatasource/after.html)**

These examples focus on using the BIRT APIs to embed or integrate BIRT.

### Extending BIRT

This section of Examples focuses on Extending BIRT. The examples here focus on implementing BIRT supplied extension points, giving the BIRT developer the capability to add to, or change the default behavior of the designer or runtime engine. This includes adding Chart Types, aggregate functions, Data Sources and Report Items.

### Aggregate Function Extension Point 

**[View Aggregate rptdesign-file here.](https://www.eclipse.org/birt/phoenix/examples/extending/aggregate/optim.rptdesign)**

This example shows how to create a BIRT Aggregate Data Extension. Imagine your manager wants you to create a new more optimistic way to sum up data in a report. Is there a way that you can create a common solution that can be consistently re-used across all of your reports? Through the Birt Aggregate Data Extension you can create new custom functions that show up as native BIRT functions.

