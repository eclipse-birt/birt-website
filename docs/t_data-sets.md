---
id: t_data-sets
title: Data Sets 
sidebar_label: Data Sets 
---

## Build a Data Set

Now we're ready to build and test our data set.

*   Find or open the Data Explorer view.

*   Select the Data Sets node in the tree view.

*   Right-click to open the context menu. (We'll just say "open the context menu" or "choose x from the context menu" from now on.)

*   Select New Data Set. The New Data Set dialog will appear.

*   Enter "Customers" for the Data Set Name field.

*   Ensure that the Data Source field shows the Sample data source created above.

*   Ensure that the Data Set Type field shows "SQL Select Query".

*   Click Next.

*   Enter the following Query: SELECT *
*   FROM CUSTOMERS
*   WHERE COUNTRY = 'USA'

*   Click Finish.

## Data Set Editor Pages

The data set editor now opens. Let's take a look at the pages within this editor. The data set editor provides the following pages:

*   Query - Displays your SQL SELECT statement. This is where you create and change your SQL query. Once you have the basic query, you can add a WHERE clause, adjust the set of selected columns, and more. Use the SQL editor to add computed columns that are to be calculated by the database engine. Give such columns a name using the SQL ALIAS clause.

*   Data Source - Displays the name of the data source for this data set so you can view or change it.

*   Preview Results - Lets you test your query and see the output. Very handy to make sure that the data is right before you proceed with report design.

*   Computed Columns - Computed columns are calculated by BIRT and appear to the rest of the report just like any other column. You can use JavaScript expressions, and even call into Java for advanced business logic.

*   Parameters - SQL SELECT statements can include input parameters that pass data into the query. They are marked using the SQL "?" symbol in the query. This page lets you give the parameters a name, a default value, and so on. There must be a one-to-one correspondence between entries on this page and the "?" symbols in your query.

*   Filters - Additional filters that BIRT applies to your data. Filters restrict the data passed to the report. The WHERE clause is also a filter: one executed by the database. This tab lets you define additional filters using BIRT (JavaScript) scripting.

*   Output Columns - Shows the columns within the query, and lets you define a column alias for use in the report. Note that this view shows the columns as the report will see them. The Query page shows the columns as selected from the database.

## Database Browser

Switch to the Query page if you're not already there. This page provides a simple database browser.

*   Expand the Sample data source to see the schemas within this database. There is only one: "CLASSICMODELS".

*   Expand "CLASSICMODELS" to see the list of tables in the database.

*   Expand a table to see its columns.

*   This editor supports drag and drop.

## Test the Query

With the data set editor open, do the following:

*   Click on the Preview Results item.

The preview page appears. This page shows the columns selected in your query listed across the top. The actual rows in your query appear down the page.

*   Verify that the list of customers appears.

*   Click OK to close the data set editor.

If an error dialog appears, check the following:

*   Your Eclipse is installed in a directory without spaces.

*   You have typed the SQL statement as shown above.

*   You have not put a semi-colon at the end of your statement.

## Edit a Data Set

Your new data set appears in the Data Explorer along with your data source. We can use the data set editor to change the data set, and to test it to make sure it returns the correct data.

*   Find or open the Data Explorer.

*   Open the Data Sets node.

*   Double-click the Customers data set. The Data Set editor opens.
