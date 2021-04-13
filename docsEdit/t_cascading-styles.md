---
id: t_cascading-styles
title: Cascading Styles
sidebar_label: Cascading Styles
---

## About Style Cascade

We've mentioned that BIRT uses CSS to define the styles for report items, and we saw how to define and apply our own style. BIRT also follows the "cascade" part of Cascading Style Sheets: you can set a property once for the report, or a container, and have that value cascade down through the contents of the container.

In BIRT, Grid, List and Table items are containers: they can hold other report items. The report itself is the ultimate container for all report items.
Setting Report-Wide Properties

Our report currently uses the default font: a serif style. (Actually, by default BIRT uses the font set in your browser. Many browsers use a serif style by default, but if you've changed your default browser font, that is how the report will appear.)

Let's use a sans-serif style instead. We do this by using a pre-defined BIRT style called report, which specifies the default style for report items. If you are familiar with CSS, this is like defining a style that selects the HTML body tag.

*   Open or locate the Outline view.

*   Scroll down to the bottom to find the Styles node.

*   Open the Styles node.

*   Right-click and select New Style.

*   From the General page, check the Predefined Style radio button and select "report" from the associated drop down list.

*   Click OK

*   Go to the Styles node in the Outline view and find the style named "report". Double-click it to open the Style editor.

*   In the Font page, choose "sans serif" as the font type.

*   Click OK.

All items in your report will change to sans-serif font.

The names "serif" and "sans-serif" are defined by CSS: they are generic font styles that don't depend on the specific fonts installed on a machine. CSS generic font names avoid dependencies on specific fonts installed on the browser machine; something that is important if your reports will be appear as part of a public web site. You can also use font lists as in CSS. For example: "Helvetica, Arial, sans-serif".

## Other Default Styles

BIRT defines default styles for most report items and for list and table bands. See the ROM Styles Specification for the complete list.

The Styles node displays the styles that apply to each of the report items. However, there are additional styles that apply to grouping levels and other contexts. If you wish to use one of these, simply create a style with the required name.
Check the Reporte

Let's click the preview tab to see how our report looks after the formatting. Not bad, but we still need a better report heading.


