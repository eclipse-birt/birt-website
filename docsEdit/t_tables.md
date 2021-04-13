---
id: t_tables
title: Tables 
sidebar_label: Tables 
---

##  Layout

Our customer listing report will display customer information in the form of a table: just like an HTML table, with the added ability to iterate over report data. The Grouped Listing template we chose earlier created the table for us, we just need to fill in the details. Before we do, let's introduce the various BIRT report items.
Report Items (Elements)

BIRT provides a variety of report items or Elements for use when creating your report. Report items appear in the Palette view. Report items include:

*   Label - Displays a simple piece of text such as "Customer Name".

*   Text - Text that can include HTML formatting and computed values. Used to create headings, form letters, "mail-merge" effects, etc.

*   Dynamic Text - Displays a database column that can contain HTML formatted (CLOB) data. Allows for advanced CLOB data manipulation through expressions.

*   Data - Displays a database column or a computed value. Provides formatting.

*   Image - Any kind of image supported by a web browser. Images can be embedded in the report, referenced through a URI, read from the resource folder or retrieved from a BLOB field in a data set.

*   Grid - Provides a tabular arrangement of report items, much like an HTML table. This element doesnt iterate over data sets like a List or a Table.

*   List - Presents data from a data set in any kind of format. Used when the layout for each row is more sophisticated than a simple table row. This Element will iterate over a bound Data Set.

*   Table - Presents data from a data set in the form of a table. Can contain grouping levels. Like an HTML table that has a table row for each data set row. This Element, like a list will iterate over a bound Data Set.

*   Chart - Displays a business chart such as a pie chart, line chart, etc.

This tutorial will use all the elements except for List, Chart and Dynamic Text.

## Create the Table Detail

The New Report dialog created a starter report that contains a table item with one level of grouping. If we'd chosen a blank report, we could create the table simply by dragging it from the palette.

The next step is to add content to the table. We'll start with the detail band which repeats to display each row from our data set. Here's how:

*   Display the Data Explorer if it's not already visible.

*   Expand the Data Sets node of the tree.

*   Expand the entry for the Customers data set that we created. This will display the columns available from the data set.

*   Select the CUSTOMERNAME column.

*   Locate the detail band within the table. (It is has a gray "Detail Row" label.)

*   Drag the CUSTOMERNAME column into the detail band cell second from the left. This operation adds a Data Element and a Label Element to the Table Element. The Binding Editor maps the Data Element to the Data Set row column CUSTOMERNAME. The Binding Editor is available by selecting the Binding tab in the Property Editor for the Table. You can change this value by selecting the ellipse next to the expression within the Binding Editor. You will now see that the Table Element contains the new Label Element and the new Data Element.

*   Drag the PHONE column into the rightmost cell of the detail band.

## Create the State Group

We want our customer listing to be grouped by state, then city. Using a group causes all rows within the same state to appear together. Let's create the group header for states:

*   Locate the group header row in your table. It has a light gray "Group Header Row" label.

*   Drag the STATE column into the leftmost cell within the Group Header row.

## Creating Groups on your Own

We are using the group created for us by the New Report dialog. If we'd started by dragging the table from the palette, we'd create this first group as we'll explain in the next section.

You must bind (associate) the table to a data set before you can create a group. The binding happened automatically when we dropped the first data set column into the table. However, if you build a table on your own, you can use the Binding tab in the Property Editor to bind the table to a data set.
Create the City Group

Next, we'll create a city group within the state. This groups customers first by state, then by city.

*   Hover the cursor over the table and a Table tab will be displayed.

*   Click on the Table tab to display the table scaffolding.

*   Select the Property Editor->Binding Tab. You will see that the Table is bound to the Customers Data Set. Under Data Column Binding you will notice the three Table columns that have already been created.

*   Select Add. Then Data Binding dialog will be displayed.

*   Enter City in the Name field and select ellipse next to Expression. The BIRT Expression Builder will be displayed.

*   Select Available Data Sets under Category, Customers under Sub-Category and then double-click on the CITY column.

*   Select OK and change the Binding name from New Binding to CITY. The Data Set Row column CITY is now available to be used within the Table.

*   Right-click on the row header for the state group header and a context menu will be displayed.

*   From the context menu choose Insert Group->Below. The Group Details dialog appears.

*   Chose the CITY column in the Group On field and type City in the Name field.

*   Click OK.

Notice that BIRT automatically inserted a Data element for the city group.

## Add a Table Column

We need another table column to display our group heading:

*   Ensure the table scaffolding appears. Right-click on the shaded column header for the first column.

*   Choose Insert->Column to the Right from the context menu. A new column appears.

*   Move the CITY Data Element (the Element in the first column of the second group header) to the second column of the second group header by dragging it.

## Create Column Headings

We're almost done with the basic setup of our table. We just need to refine our column headings. BIRT added headings for us for each column we added to the table.

*   Double-click on the first column header text to change it. Type "State" and press Enter.

*   Drag a label from the palette into the second column heading, type "City" and press Enter.

*   Change the third column header to "Name".

*   Change the last column header to "Phone".
