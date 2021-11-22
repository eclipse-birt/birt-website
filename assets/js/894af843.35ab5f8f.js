"use strict";(self.webpackChunkbirt_website=self.webpackChunkbirt_website||[]).push([[9233],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var l=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,s=function(e,t){if(null==e)return{};var a,l,s={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=l.createContext({}),p=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=s,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return a?l.createElement(h,n(n({ref:t},c),{},{components:a})):l.createElement(h,n({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,n=new Array(r);n[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,n[1]=o;for(var p=2;p<r;p++)n[p]=a[p];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1101:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var l=a(7462),s=a(3366),r=(a(7294),a(3905)),n=["components"],o={id:"template-sample-database",title:"Sample Database",sidebar_label:"Sample Database"},i=void 0,p={unversionedId:"template-sample-database",id:"template-sample-database",isDocsHomePage:!1,title:"Sample Database",description:"The BIRT sample database provides a simple set of tables and data that form the basis for BIRT sample reports. The schema is for Classic Models, a retailer of scale models of classic cars. The database contains typical business data such as customers, orders, order line items, products and so on. It was designed to illustrate many of the features of the BIRT report designer.",source:"@site/docs/template-sample-database.md",sourceDirName:".",slug:"/template-sample-database",permalink:"/docs/template-sample-database",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/template-sample-database.md",tags:[],version:"current",frontMatter:{id:"template-sample-database",title:"Sample Database",sidebar_label:"Sample Database"},sidebar:"someSidebar",previous:{title:"Templates & Examples",permalink:"/docs/template-introduction"}},c=[{value:"Schema",id:"schema",children:[],level:2},{value:"Install",id:"install",children:[],level:2},{value:"MySQL Version",id:"mysql-version",children:[],level:2},{value:"Localized Version of the Sample Database",id:"localized-version-of-the-sample-database",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Apache Derby",id:"apache-derby",children:[],level:2},{value:"MySQL",id:"mysql",children:[],level:2}],d={toc:c};function m(e){var t=e.components,a=(0,s.Z)(e,n);return(0,r.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The BIRT sample database provides a simple set of tables and data that form the basis for BIRT sample reports. The schema is for Classic Models, a retailer of scale models of classic cars. The database contains typical business data such as customers, orders, order line items, products and so on. It was designed to illustrate many of the features of the BIRT report designer."),(0,r.kt)("p",null,"The sample database is open source; you are free to use it for your own use to experiment with other tools; to create samples for other tools, etc. The sample database is provided under the terms Eclipse."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"The database consists of eight tables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Offices: sales offices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Employees: All employees, including sales reps who work with customers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Customers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Orders: Orders placed by customers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Order Details: Line items within an order.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Payments: Payments made by customers against their account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Products: The list of scale model cars")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Product Lines: The list of product line classifcation"))),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://www.eclipse.org/birt/resources/documentation/sample-database/ClassicModelsDBSchema.pdf"},"ER-diagram (PDF version)")," shows the table structure and relationships. "),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"The sample database is available in two forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apache Derby database, which is included in the BIRT download")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scripts to load a MySQL database (Instructions below)\nThe scripts to load a MySQL database are contained in the sample database zip file. This zip also has documentation and logos for the sample database."))),(0,r.kt)("h2",{id:"mysql-version"},"MySQL Version"),(0,r.kt)("p",null,"To install the MySQL version of the sample database, you must have MySQL installed. See mysql.com for instructions."),(0,r.kt)("p",null,"Install the MySQL JDBC driver into BIRT:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download and unzip MySQL Connector/J 3.1 JDBC driver located at:")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://dev.mysql.com/downloads/"},"http://dev.mysql.com/downloads/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the JDBC driver using the instructions on the install page. Enter the following for the URL template:")),(0,r.kt)("p",null,"jdbc:mysql://","[host][,failoverhost...]","[:port]","/","[database]","..."),(0,r.kt)("p",null,"You are now ready to create the Classic Models database:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the zip file containing the MySQL database scripts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Expand the zip file into a convenient location.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Expanding the zip file created the ClassicModels/mysql directory with some MySQL scripts. From the command line, move to the this directory:"))),(0,r.kt)("p",null,"% cd /ClassicModels/mysql"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start the mysql utility, giving the name (and password, if needed) of a user permission to create databases. For example, to use the default root user:")),(0,r.kt)("p",null,"% mysql --user=root"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the ClassicModels database and load the schema. (Loading the schema the schema the first time will give error messages as it attemps to empty any existing tables, just ignore these.)")),(0,r.kt)("p",null,"mysql> create database ClassicModels;\nmysql> use ClassicModels;\nmysql> source create_classicmodels.sql;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Load the table contents:")),(0,r.kt)("p",null,"mysql> source load_classicmodels.sql;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exit from mysql:")),(0,r.kt)("p",null,"mysql> quit;"),(0,r.kt)("h2",{id:"localized-version-of-the-sample-database"},"Localized Version of the Sample Database"),(0,r.kt)("p",null,"Following is the Derby Database localized into French, German, Spanish, Japanese, Korean, and Simplified Chinese."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Localized Derby Sample Database")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You can now use the sample database within BIRT to create reports. The key information you need to get started is how to create a data source for the database. The details vary depending on the database system you selected."),(0,r.kt)("h2",{id:"apache-derby"},"Apache Derby"),(0,r.kt)("p",null,'The Apache Derby version of the database is included in the BIRT download as a built-in data source. To access it, simply select the "Classic Models Inc. Sample Database" entry in the new data source dialog.'),(0,r.kt)("h2",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"Data source properties for the MySQL sample database:"),(0,r.kt)("p",null,"Driver Class:\tcom.mysql.jdbc.Driver\nURL:\tjdbc:mysql://localhost/classicmodels\nUser Name:\troot\nPassword:"))}m.isMDXComponent=!0}}]);