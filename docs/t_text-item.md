---
id: t_text-item
title: Text Item 
sidebar_label: Text Item 
---

the final step in our report is to create the actual header text. We want it to look something like this:


```
        <CENTER>
        <FONT size="6" color=blue>
        Customer Listing
        </FONT>
        <BR>
        <I>For internal use only</I>
        </CENTER>
```



## Customer Listing

For internal use only 

We could create this with two labels. But, we'll take this opportunity to try out the Text element which allows us to use HTML formatting within the text.

## Create a Text Item

Let's create our text item. To do this:

*   Drag a Text Element from the palette and drop it into the center cell within our grid.

*   The Edit Text Item dialog appears.

*   In the top combo box, choose HTML/Dynamic Text. The dialog displays a variety of HTML tags we can insert.

*   Using the button next to Formatting, pull down the list and choose Layout.

*   Click the \<CENTER\> tag to add it.

*   From the list near the top of the dialog, insert a \<FONT\> element.

*   In the attributes provided, set the size to 6 and the color to blue. Erase the face attribute. The text should now look like this:


```
        <CENTER>
        <FONT size="6" color=blue>

        </FONT>
        </CENTER>
```


*   Continue using the editor to create the text below:


```
        <CENTER>
        <FONT size="6" color=blue>
        Customer Listing
        </FONT>
        <BR>
        <I>For internal use only</I>
        </CENTER>
```


*   Click OK and save your changes.

## Dynamic Text

While we won't use it in this tutorial, there is one other feature of Text Elements to note. Select the Dynamic Text category and you'll see a tag. This allows you to insert expressions directly into your HTML. For example, to display an address line in US format, we could type:

    <value-of>row["city"]</value-of>,
    <value-of>row["state"]</value-of>
    <value-of format="@@@@@-@@@@">row["zip"]<value-of> 

The row values correspond to the name column within the Binding Editor for the given report container element. So for example if we added a Text Element to our Table, we could use row["CUSTOMERNAME"] within the value-of tag.

## Final Test

We're now ready to give the report a final test. Click the Preview tab to see the report with formatting applied.