---
id: reapi
title: Report Engine API
sidebar_label: Report Engine API
---

### Concepts

#### Birt POJO Runtime Note:

If you are installing BIRT 3.7 or later See [BIRT 3.7 Migration Guide](http://wiki.eclipse.org/Birt_3.7_Migration_Guide).
It is no longer necessary to set BIRT Home in the DesignConfig class. Just add the BIRT jars to your classpath/buildpath.

#### A report design consist of three key concepts:

* Elements
An "object" within the design such as the report itself, a data set, a style, a table, a label, etc.

* Property
Properties customize an element. For example, a data set has a name and a query. A style has CSS-like style properties. A label has style properties and display text. Properties further divide into property definitions provided by BIRT's Report Object Model (ROM), and property values set by you as you create a report design.

* Slots
A slot describes how elements assemble to form a report. A slot is a place where one element can contain other elements. For example, a report has slots for data sources, data sets, styles and the report body. A table has slots for the header, detail, footer and groups.

### API Services

The BIRT Design Engine API (DEAPI) provides a number of services to applications that work with report designs:

*    Create report designs

*    Read and write report design files

*    Create and delete report elements

*    Put report elements into a slot, or move them from slot to slot

*    Get and set the value of parameters

*    Retrieve metadata about report elements, properties and slots

*    Support undo/redo of changes

*    Perform semantic checks of report designs

### DEAPI SDK

To create an application that uses the DEAPI, you'll need the design engine SDK which can be downloaded from the BIRT downloads pages. Information is [on the main README](https://github.com/eclipse/birt/blob/master/README.md).

This API is described in Javadoc in the org.eclipse.birt.report.model.api package within the org.eclipse.birt.report.model project. Read the package overview for general information about getting started with this API.

### Example

The following code shows a simple example that creates a working report design. Here are the files you'll need:

*    [Sample Java code](res/DeDemo.java)

*    [Report produced by the example](res/sample.rptdesign)

*    [HTML output of the above report](res:///sample.html  )

The first step is to create an instance of the design engine.

    SessionHandle session = DesignEngine.newSession( null ); 

Then, create a new report design.

    ReportDesignHandle design = session.createDesign( ); 

Next, get the "element factory" that creates new elements within your design:

    ElementFactory factory = design.getElementFactory( ); 

Next, we add a page master that determines how the report will appear when printed:

    DesignElementHandle element = factory.newSimpleMasterPage( "Page Master" );
    design.getMasterPages( ).add( element ); 

This design will contain a grid that contains an image and a label. Let's first create the grid and add it to the report's body slot.

    GridHandle grid = factory.newGridItem( null, 2 /* cols */, 1 /* row */ );
    design.getBody( ).add( grid );
    grid.setWidth( "100%" ); 

Next, create the image and add it to the first cell within the grid.

    RowHandle row = (RowHandle) grid.getRows( ).get( 0 );
    ImageHandle image = factory.newImage( null );
    CellHandle cell = (CellHandle) row.getCells( ).get( 0 );
    cell.getContent( ).add( image );
    image.setURI( "http://www.eclipse.org/birt/resources/documentation/tutorial/multichip-4.jpg"); 

Then, create a label and add it to the second cell.

    LabelHandle label = factory.newLabel( null );
    cell = (CellHandle) row.getCells( ).get( 1 );
    cell.getContent( ).add( label );
    label.setText( "Hello, world!" );

Finally, save and close the report design.

    design.saveAs( "sample.rptdesign" );
    design.close( ); 

You can now open the design within BIRT and preview it.
