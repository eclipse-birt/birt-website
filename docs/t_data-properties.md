---
id: t_data-properties
title: Data Properties 
sidebar_label: Data Properties 
---

In addition to the visual properties we just saw, BIRT provides a set of data-related properties for each report item. We'll use these to control the sort order of the customers within our report.

Data sets in BIRT are reusable: you can use the same data set multiple times. For example, suppose you want to show year-to-date (YTD) sales three ways: by month, by sales rep, and as a chart. With BIRT, you define the data set once, but present it three times. Each use of the data set can provide data properties that customize the data set to that particular use.

## Data properties include:

*   Data set binding: lets you specify the data set to use with any given report item.

*   Parameter binding: you can pass data into the data set. For example, you can create a "master/detail" subreport by using data set parameters to pass data from the current row in the master report to the detail for the subreport. Or as another example, you can obtain a list of customers from one database, then have the subreport display orders from a different database.

*   Filters: provide filter conditions unique to a given presentation. For example, a list of transactions might list all transactions, but then use filters to display sales in one chart, returns in another.

*   Groups: provide ability to create subtotals as we have already seen.

*   Sorting: controls the order of the detail rows within a table. This is the property we'll use.

## Setting the Detail Sort

We're ready to specify the sort order for customers within our report.

*   Select the table. (by clicking on the table tab in the Layout Editor.)

*   Choose the Sorting tab within the Property Editor. (Note: Sorting is a tab on the top of the Property Editor and not a page on the left as we've used thus far.)

*   Click the Add button to add a new sort condition.

*   Use the pull-down under Sort Key to choose "CUSTOMERNAME".

*   Leave the Sort Direction at Ascending.
