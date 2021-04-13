---
id: t_brief-editor-tour
title: Brief Editor Tour
sidebar_label: Brief Editor Tour
---

Before we start work on the report, let's take a quick tour of the UI. We'll be looking at most of the UI in detail as we build our report.

## Cheat Sheets

Notice at the right of your Eclipse workspace (for the default configuration) is a view called "Cheat Sheets." This view walks you though the process of building a report based on the template you selected.

For now, let's go ahead and close that view by clicking on the X (close) button in the upper left corner of the view, since we'll be following the steps in this tutorial.
## Layout Editor

The central area is the Layout Editor. This is the place where you create your report design. The editor has five tabs:

*    Layout - Where you edit your report design.

*    Preview - Runs your report and shows the output.

*    Script - Where you add JavaScript to your report to customize its behavior.

*    XML Source - You can view and modify the XML source of a report from here.

*    Master Page - Used to format page data such as page headers.

## Views

Around the editor are a number of views: The views below can be arranged to the left, right or bottom of the Layout Editor

*    Palette - BIRT View that shows the standard report items you can add to your report using drag & drop.

*    Outline - BIRT View that shows the structure of your report as a tree view.

*    Navigator - Standard Eclipse view that shows your projects, and the reports within your projects.

*    Data Explorer - BIRT View that shows your data sources (connections), data sets (queries) and report parameters. You also use this view to add data set columns to your report layout.

*    Property Editor - BIRT View that displays properties for many report items. It has tabs and groupings that organize properties into categories.

*    Properties View - Standard Eclipse view that shows all properties for a report item as a simple list. This view is optional, and we will not use it in this tutorial.

*    Library Explorer View - BIRT allows the reuse of report objects, such as tables, data sources and styles. Objects created for reuse are stored in a library file. The Library Explorer will display Libraries that exist in the resource folder. Developed libraries can be added to the resource folder by selecting File->Publish Library to Resource Folder or by right clicking in Library Explorer and selecting add. The resource folder location can be configured at Window->Preferences->Report Design->Resource.

## Displaying Views

You can arrange your views any way you like. You can also hide them by clicking the "X" button next to the view tab. If you accidentally hide a view, you can display it again by using the Window->Show View menu item.

Many people find that a convenient layout is to have the Palette, Navigator, Outline and Data Explorer docked at the left edge of your workspace, and the Property Editor and Properties view docked at the bottom of the workspace.