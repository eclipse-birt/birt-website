---
id: template-sample-database
title: Sample Database
sidebar_label: Sample Database
---

The BIRT sample database provides a simple set of tables and data that form the basis for BIRT sample reports. The schema is for Classic Models, a retailer of scale models of classic cars. The database contains typical business data such as customers, orders, order line items, products and so on. It was designed to illustrate many of the features of the BIRT report designer.

The sample database is open source; you are free to use it for your own use to experiment with other tools; to create samples for other tools, etc. The sample database is provided under the terms Eclipse.

## Schema
The database consists of eight tables:

+ Offices: sales offices

+ Employees: All employees, including sales reps who work with customers.

+ Customers

+ Orders: Orders placed by customers

+ Order Details: Line items within an order.

+ Payments: Payments made by customers against their account

+ Products: The list of scale model cars

+ Product Lines: The list of product line classifcation

This [ER-diagram (PDF version)](https://www.eclipse.org/birt/resources/documentation/sample-database/ClassicModelsDBSchema.pdf) shows the table structure and relationships. 



## Install

The sample database is available in two forms:

+ Apache Derby database, which is included in the BIRT download

+ Scripts to load a MySQL database (Instructions below)
The scripts to load a MySQL database are contained in the sample database zip file. This zip also has documentation and logos for the sample database.

## MySQL Version

To install the MySQL version of the sample database, you must have MySQL installed. See mysql.com for instructions.

Install the MySQL JDBC driver into BIRT:

+ Download and unzip MySQL Connector/J 3.1 JDBC driver located at:

http://dev.mysql.com/downloads/

+ Install the JDBC driver using the instructions on the install page. Enter the following for the URL template:

jdbc:mysql://[host][,failoverhost...][:port]/[database]...

You are now ready to create the Classic Models database:

+ Download the zip file containing the MySQL database scripts.

+ Expand the zip file into a convenient location.

+ Expanding the zip file created the ClassicModels/mysql directory with some MySQL scripts. From the command line, move to the this directory:

% cd /ClassicModels/mysql

+ Start the mysql utility, giving the name (and password, if needed) of a user permission to create databases. For example, to use the default root user:

% mysql --user=root

+ Create the ClassicModels database and load the schema. (Loading the schema the schema the first time will give error messages as it attemps to empty any existing tables, just ignore these.)

mysql> create database ClassicModels;
mysql> use ClassicModels;
mysql> source create_classicmodels.sql;

+ Load the table contents:

mysql> source load_classicmodels.sql;

+ Exit from mysql:

mysql> quit;

## Localized Version of the Sample Database

Following is the Derby Database localized into French, German, Spanish, Japanese, Korean, and Simplified Chinese.

+ Localized Derby Sample Database

## Usage

You can now use the sample database within BIRT to create reports. The key information you need to get started is how to create a data source for the database. The details vary depending on the database system you selected.

## Apache Derby

The Apache Derby version of the database is included in the BIRT download as a built-in data source. To access it, simply select the "Classic Models Inc. Sample Database" entry in the new data source dialog.

## MySQL

Data source properties for the MySQL sample database:

Driver Class:	com.mysql.jdbc.Driver
URL:	jdbc:mysql://localhost/classicmodels
User Name:	root
Password:	