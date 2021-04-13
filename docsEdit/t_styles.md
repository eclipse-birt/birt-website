---
id: t_styles
title: Styles 
sidebar_label: Styles 
---

## About Styles

We mentioned that BIRT uses CSS to define the styles for report items. BIRT also allows you to define the properties in a style sheet, then to apply the style to a report item, just as in HTML. The result is that you create the style once and use it multiple times. If you need to change the look of a report, you can change the style in one place rather then in many different report items. If you've defined your own styles when creating HTML pages, you're well on your way to understanding the BIRT style system. Styles can also be placed into BIRT libraries (Using Themes) and shared across reports.
Creating a Style

Let's use the style feature to format the table header. Let's make the table header a blue bar with contrasting text. Instead of formatting each label one-by-one, we'll define a style, then apply it. To do this:

*   Select the first label (State label) in the Table Header band.

*   Right-click and select Style->New Style from the context menu.

*   The Style Properties dialog appears.

*   Enter "Header" in the Custom Style (Name) field on the General page and make sure that the Custom Style radio button is selected.

*   Switch to the Background page from the left most column of the New Style dialog.

*   Click the Background color button and choose the same blue: third from the right in the top row.

*   Switch to the Font page.

*   Set the Color to white.

*   Set the Weight to Bold.

*   Click OK.

Notice that the new style has been applied to the label.

## Applying a Style

Next, let's apply the style to the other three header labels. (We could have done this in a single step by selecting all four when we defined the style. We're doing it in two steps just to show how it's done.)

*   Select the other three labels: click on the City label, then use Ctrl+click to add the other two to the selection.

*   Choose Style->Apply Style->Header from the context menu.

The other three cells are now also formatted.

## Editing a Style

Suppose we wanted to change the style we just created. Here's how we find and change it.

*   Find or open the Outline view.

*   Scroll down to the bottom and find the Styles node.

*   Open the Styles node to reveal our styles.

*   Double-click the style you want to edit.

*   You can also edit a style by selecting Style->Edit Style->Style Name from the context menu when a report item is selected.
