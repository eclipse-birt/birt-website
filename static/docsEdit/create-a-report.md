---
id: create-a-report
title: Create a Report
sidebar_label: Create a Report
---
## Create a Project

Eclipse uses projects to organize your files. So, the first step is to create a new project. For this demo, let's create a project called "My Reports":

*    Choose File->New->Project. The new project dialog appears.

*    Open the "Business Intelligence and Reporting Tools" group and choose "Report Project".

*    Click Next.

*    Type "My Reports" (without the quotes) as the project name.

*    Click Finish.

*    Click OK if asked to switch to the Report Design perspective. (This occurs if you create a BIRT project while in a perspective other than Report Design.)

## Create a Report

We're now ready to create our first report:

*    Choose File->New->Report. The new report dialog appears.

*    In the tree view, choose the project we just created: My Reports.

*    Enter the following in the file name field: Customers.rptdesign.

*    Click Next.

You can create a report in three ways: as a blank report, by using a BIRT-defined template, or by copying one of your report designs. In this tutorial we will use a Template descibed in the next section.

## Choose a Template

The next page of the New Report dialog presents a selection of report templates. Before we choose the one we want, let's walk though what's available.

*    My First Report - Starts a report template that takes you through a tutorial using on-line help. (That tutorial will eventually replace this one.)

*    Blank Report - Creates a blank report with no predefined content.

*    Simple Listing - A tabular listing with no grouping.

*    Grouped Listing - A tabular listing with grouping. Grouping shows repeated values just once. Grouping also allows you to create subtotals.

*    Dual Column Listing - Produces a listing with two columns side-by-side.

*    Chart & Listing - A tabular listing that adds a chart to the top of the report.

*    Dual Column Chart & Listing - Combines charts and tables so you can display two sets of related data in a single report.

*    Side by Side Chart & Listing - Creates a grouped report where each group contains a chart and a listing side by side.

We're now ready to choose our template:

*    Select the Grouped Listing.

*    Click Finish.

BIRT opens your new report in the Eclipse workspace.