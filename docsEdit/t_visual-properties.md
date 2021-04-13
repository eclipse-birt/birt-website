---
id: t_visual-properties
title: Visual Properties 
sidebar_label: Visual Properties 
---

## Resizing Table Columns

Let's adjust the size of the table columns. Tables & columns can be sized using absolute sizes (inches, centimeters), or relative sizes (percentage of the width of the page.) Here, we'll adjust the column widths by directly changing them in the report layout. To do this:

*   Click the Layout tab to switch back to the report layout.

*   Display, then click on the table tab to display the "scaffolding."

*   Find the black line that separates the "City" and "State" column headings.

*   With the cursor over this line, hold down the left mouse button and resize the column to be about big enough to hold the two-letter state code and label.

*   Repeat the above to resize the city column.

## Setting the Background Color

Let's dress up the state heading by setting the row's background color. To do this:

*   Select the state group header row (first group header) by clicking on the shaded box to the left of the row. (Remember to display, then click on the table tab to display the scaffolding.)

*   Locate or open the Property Editor.

*   A list of property types appears at the left of the view. Click on the General group.

*   Find the Background color field. Click on the empty gray button to display the color picker.

*   Pick the blue color third from the right in the top row. This is a standard color, but is a bit too dark for our needs.

*   Click on the "Define Custom Colors" button.

*   Take the right-most slider (saturation) and move it up to produce a very light blue.

*   Click OK.

## Setting the Font

Now, let's give the state a bold font. We'll also dress up the city group heading by giving it a dark blue, bold, larger font. To do this:

*   Select the state Data Element. (it's located below the state label.)

*   Switch to the General property group in the Property Editor.

*   Find the Font size field. Change the size to "Large".

*   Click the [B] (bold) button to make the font bold.

*   Select the city Data Element.

*   Again, switch to the General property group.

*   Set the font size to Large.

*   Click on the Font Color button.

*   The color chooser again opens. Again choose the blue that is third from the right in the top row.

*   Click OK.

## Formatting Data

We want to format the phone numbers so that they have correct North American format: (123) 555-1212. We do this by applying a string format to the phone number field. Formats are also available for dates and numbers.

*   Select the phone number Data Element.

*   Switch to the Format String page in the Property Editor.

*   Choose Custom for Format String as.

*   Choose Phone Number from the list.

*   In the Format Code field, add a space after the closing parenthesis to produce the following:

*   (@@@) @@@-@@@@

## Setting a Border

Next, let's put a "drop shadow" border around our table.

*   Click on the table tab.

*   Select the Borders page in the Property Editor.

*   Set the Style field to a solid line. (This is the default.)

*   Set the Color field to a black. (Use the color name pull-down, or choose the bottom left color in the color picker.) (This is the default.)

*   Set the Width property to the thinnest line.

*   Click the top, bottom, left and right border buttons. A thin border appears around the table.

*   Switch to the Properties view (Window->Show View->Properties) to specify that a wider border should be used for the bottom and right sides.

*   Click on the table tab to initialize the Properties view with the table's properties.

*   Expand the Box node in the Properties View and set the Border bottom width and Border left width fields to medium.

## More on Properties

BIRT provides a wide variety of properties for formatting report items. The properties are based on the W3C CSS (Cascading Style Sheet) standard. If you've ever used CSS to format HTML, you are well on your way to understanding formatting in BIRT.