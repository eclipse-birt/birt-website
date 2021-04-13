---
id: t_grids
title: Grids 
sidebar_label: Grids 
---

## Create a Grid

Let's add a suitable heading to our report. It will use the classic "left/center/right" layout: a logo on the left, the report title in the center, and the run date on the right. Before you do this you may want to remove the current basic heading, which simply says "Report Header". To do this:

*   Select the Grid item containing the "Report Header" which is located above your table.

*   Delete it by right-clicking on it and selecting the delete option from the context menu.

The easiest way to create such a layout is to use a grid. A grid is like an HTML table, it tells BIRT the desired layout, and BIRT does the work to make it happen. In this case, we want a one-row grid with three columns each 1/3 the width of the page.

*   Drag a Grid item from the palette into your report above your table. The Insert Grid dialog appears.

*   Choose 3 columns and 2 rows.

*   Click OK.

## Row Properties

We want the contents of the header to be top-aligned. And we'll use the second row as a spacer between the header proper and the report body:

*   Select the entire first row of the Grid that you just added.

*   In the General page of the Property Editor, set the vertical alignment to Top.

*   Select the second row.

*   In the General page of the Property Editor, set the height to 0.25 in.

## Column Properties

We want each of the three columns to be 1/3 the width of the page, and we want them to be left, center and right aligned:

*   Select the first column header.

*   Switch to the General tab in the Property Editor. Notice that the width is unset. As in HTML, if the column width is not set, BIRT will size the column to its content.

*   Set the column widths to 33%. Do this by typing "33" in the width field, then selecting "%" from the adjacent pull-down.s

*   Select the middle column.

*   Repeat the step above to set the width to 33%.

*   In the General page of the Property Editor, set the text alignment to Center.

*   Select the rightmost column.

*   Repeat the step above to set the width to 33%.

*   In the General page of the Property Editor, set the text alignment to Right.

## Insert an Image

Let's click the preview tab to see how our report looks after the formatting. Not bad, but we still need the report heading. To do this:

*   Drag an Image item from the palette into the left-most cell of your grid.

*   The Image Builder dialog appears.

*   Ensure that the URL radio button is selected.

*   Enter the following URL: "http://www.eclipse.org/birt/resources/documentation/tutorial/multichip-4.jpg". (don't forget to add the quotes.)

*   Click the Preview button to ensure that the URL is correct.

*   Click Insert to add the image to your report.

You can also embed an image from your local disk. Embedding the image copies the image into the report design. Using a URL is more efficient.

## Insert a Run Date

Next, let's display the current date in the right-most cell in the heading. To do this:

*   Drag a Data item from the Palette into the right-most cell of your grid.

*   The New Data Item dialog will be displayed. Change the name to current_date.

*   Set the Data Type column to Date Time. Select the ellipse next to the Expression. The expression builder will appear.

*   Type "new Date( )" (without the quotes) to display the current date.

*   Click OK.

*   Set the date format. Select the Format DateTime page within the Property Editor.

*   Choose the date format that looks like this: May 12, 2005. (The actual date will be today's date.) This is the BIRT "Medium Date" date format.

BIRT uses Java formatting for dates, numbers and strings. In addition, BIRT adds a number of specialized, locale-aware date formats described in the ROM Styles Specification.