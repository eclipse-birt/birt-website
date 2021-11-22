"use strict";(self.webpackChunkbirt_website=self.webpackChunkbirt_website||[]).push([[1070],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},210:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"t_cascading-styles",title:"Cascading Styles",sidebar_label:"Cascading Styles"},s=void 0,c={unversionedId:"t_cascading-styles",id:"t_cascading-styles",isDocsHomePage:!1,title:"Cascading Styles",description:"About Style Cascade",source:"@site/docs/t_cascading-styles.md",sourceDirName:".",slug:"/t_cascading-styles",permalink:"/docs/t_cascading-styles",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/t_cascading-styles.md",tags:[],version:"current",frontMatter:{id:"t_cascading-styles",title:"Cascading Styles",sidebar_label:"Cascading Styles"},sidebar:"someSidebar",previous:{title:"Data Properties",permalink:"/docs/t_data-properties"},next:{title:"Create a Report",permalink:"/docs/t_create-a-report"}},p=[{value:"About Style Cascade",id:"about-style-cascade",children:[],level:2},{value:"Other Default Styles",id:"other-default-styles",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-style-cascade"},"About Style Cascade"),(0,o.kt)("p",null,'We\'ve mentioned that BIRT uses CSS to define the styles for report items, and we saw how to define and apply our own style. BIRT also follows the "cascade" part of Cascading Style Sheets: you can set a property once for the report, or a container, and have that value cascade down through the contents of the container.'),(0,o.kt)("p",null,"In BIRT, Grid, List and Table items are containers: they can hold other report items. The report itself is the ultimate container for all report items.\nSetting Report-Wide Properties"),(0,o.kt)("p",null,"Our report currently uses the default font: a serif style. (Actually, by default BIRT uses the font set in your browser. Many browsers use a serif style by default, but if you've changed your default browser font, that is how the report will appear.)"),(0,o.kt)("p",null,"Let's use a sans-serif style instead. We do this by using a pre-defined BIRT style called report, which specifies the default style for report items. If you are familiar with CSS, this is like defining a style that selects the HTML body tag."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open or locate the Outline view.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Scroll down to the bottom to find the Styles node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open the Styles node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Right-click and select New Style.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'From the General page, check the Predefined Style radio button and select "report" from the associated drop down list.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click OK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Go to the Styles node in the Outline view and find the style named "report". Double-click it to open the Style editor.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'In the Font page, choose "sans serif" as the font type.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click OK."))),(0,o.kt)("p",null,"All items in your report will change to sans-serif font."),(0,o.kt)("p",null,'The names "serif" and "sans-serif" are defined by CSS: they are generic font styles that don\'t depend on the specific fonts installed on a machine. CSS generic font names avoid dependencies on specific fonts installed on the browser machine; something that is important if your reports will be appear as part of a public web site. You can also use font lists as in CSS. For example: "Helvetica, Arial, sans-serif".'),(0,o.kt)("h2",{id:"other-default-styles"},"Other Default Styles"),(0,o.kt)("p",null,"BIRT defines default styles for most report items and for list and table bands. See the ROM Styles Specification for the complete list."),(0,o.kt)("p",null,"The Styles node displays the styles that apply to each of the report items. However, there are additional styles that apply to grouping levels and other contexts. If you wish to use one of these, simply create a style with the required name.\nCheck the Reporte"),(0,o.kt)("p",null,"Let's click the preview tab to see how our report looks after the formatting. Not bad, but we still need a better report heading."))}d.isMDXComponent=!0}}]);