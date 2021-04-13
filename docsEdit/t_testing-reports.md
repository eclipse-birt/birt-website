---
id: t_testing-reports
title: Testing Reports 
sidebar_label: Testing Reports 
---

We're now ready to test the report layout. We verified the data set earlier, so now we want to verify that the report is presenting the data as we expect.

We preview the report by clicking on the Preview tab in the lower left corner of the report editor. This report has no parameters, but if it did, they could be modified by selecting the Show Report Parameters button.

The window that appears is an embedded web browser, which displays the report in HTML format. The report appears as a single page. This works best for smaller data sets. Since the sample database has quite a bit of data, we used a WHERE clause to limit the results. We could also use a report parameter or a data set filter to limit the amount of data displayed at any one time.

There are a number of ways we can improve the report's appearance:

*   Add a title to the top of the report.

*   Add some color to enhance the column headings.

*   Shrink the size of the city and state columns.

*   Add some color to make the state and city group headers stand out.

*   Format the phone numbers.

*   Sort customers by name.

Before we apply these aesthetic enhancements, let's look at other ways to preview the report.

## Preview as HTML

The Preview tab is handy for a quick review of your report. BIRT runs the report each time you switch to Preview. However, you can have either the Layout or the Preview tab open, but not both.

Instead, we can preview the report in a separate window. Find the Preview button in the toolbar. Use the little arrow next to it to open the pull-down. You can then Preview as HTML in a separate window. This allows you to switch back and forth between your layout editor and your preview without rerunning the report.
Preview in Web Viewer

This option is similar to the one above. It allows the report to be previewed as HTML in a separate browser window using the BIRT Web Viewer. The viewer provides powerful navigation capabilities such as TOC, Previous Page, Next Page, Goto Page as well as search and export capabilities.

To preview the report in the Web Viewer use the toolbar Preview button and select the Web Viewer option or alternatively invoke File->Preview in Web Viewer.

## Preview as PDF

You can also choose Preview as PDF. This converts the layout to a multi-page PDF format.