(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(96)),o=["components"],s={id:"data_modelling",title:"Data Modelling Principles"},l={unversionedId:"data_modelling",id:"data_modelling",isDocsHomePage:!1,title:"Data Modelling Principles",description:"Context",source:"@site/docs/data_modelling.md",slug:"/data_modelling",permalink:"/architecture-pillars/data_modelling",editUrl:"https://github.com/LBHackney-IT/architecture-pillars/edit/master/docs/data_modelling.md",version:"current",sidebar:"docs",previous:{title:"Developer technical on-boarding",permalink:"/architecture-pillars/developer_onboarding"},next:{title:"Architecture Decision Records",permalink:"/architecture-pillars/adr"}},c=[{value:"Context",id:"context",children:[]},{value:"Vision",id:"vision",children:[]},{value:"Principles",id:"principles",children:[]}],d={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"context"},"Context"),Object(r.b)("p",null,"Hackney is in the process of building multiple data entities as part of building a new housing system. During this process, we have produced multiple data entities and identified arrears to replicate across all entities for consistency. This includes common naming conventions for data properties, criteria for choosing suitable data entities and structure of entities. "),Object(r.b)("p",null,"By introducing a common way to model existing and future entities, we can achieve consistency, which will help with future development and maintenance of data quality."),Object(r.b)("h3",{id:"vision"},"Vision"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Produce data entities and properties with consistent naming standards ",Object(r.b)("strong",{parentName:"li"},"so that")," we can introduce consistency in our data entities and store data with a focus on data quality."),Object(r.b)("li",{parentName:"ul"},"Clear criteria for choosing data sources ",Object(r.b)("strong",{parentName:"li"},"so that")," services use consistent data sources, which will speed up future development work due to familiarity with technology and provide better ROI and future maintenance."),Object(r.b)("li",{parentName:"ul"},"Produce set standards for modelling data entities, including the understanding of when and how to use a data subset, compliant with our event-driven architecture approach ",Object(r.b)("strong",{parentName:"li"},"so that")," performance of services will be improved and data reused will be maintained efficiently. "),Object(r.b)("li",{parentName:"ul"},"Able to help in understanding the logical representation of the data ",Object(r.b)("strong",{parentName:"li"},"so that")," both technical and business stakeholders can understand the purpose of a given data entity and the type of data stored."),Object(r.b)("li",{parentName:"ul"},"Able to avoid any data duplication and denormalisation ",Object(r.b)("strong",{parentName:"li"},"so that")," data we store can easily be maintained and is promoting data quality and consistency.")),Object(r.b)("h3",{id:"principles"},"Principles"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1. No complex Relationship")),Object(r.b)("p",null,"Data entities created should introduce no complex relationships to ensure easy data maintenance and promote flexibility."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2. Able to get multiple , heterogenous item types using single request")),Object(r.b)("p",null,"Having a data entity, which maintains a subset of data from a different data entity is advised to avoid making multiple API requests to retrieve related data. This can improve performance, reduce development effort and cost associated with running the service. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3. Thinking about making the data model works for other areas of Hackney (reusability)")),Object(r.b)("p",null,"Always attempt to make the data entity reusable, while modelling it, where appropriate. This includes modelling it in a generic way, by avoiding property names and objects specific to a single service / service area. A good practice is using a \u201ctarget type\u201d and \u201ctarget ID\u201d, which can link up a data model to multiple targets (e.g. a person or an organization), instead of using naming conventions such as \u201cperson ID\u201d. This applies to entities related to a core entity - e.g. contact details related to a person or organization."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"4. Keep related data together")),Object(r.b)("p",null,"By keeping the related data together will enable us to avoid any kind of data duplication which means effective data flows. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"5. Design and add data needed for the specific use cases. Enrich afterwards when needed")),Object(r.b)("p",null,"When data entity design proves complex and involves potential future use cases, which will require long business processes to finalize, it is always best to take an iterative approach and start by modelling the data entity as per any of the known use cases. In this way, a data entity can start being used practically, before evolving as new information and use cases are identified. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"6. Data design to be domain driven")),Object(r.b)("p",null,"Creating and model data entities based on a given domain promotes reusability as it makes the entity suitable for reuse by multiple services, instead of building a single data entity as per the needs of a single service, which can result in data duplication, difficult maintenance and poor data quality over time. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"7. OK to maintain subsets of data from another domain (if no permissions implications)")),Object(r.b)("p",null,"In order to improve performance, reduce the number of API calls to retrieve related data and reduce cost that comes with it, it is advisable to have data entities, which maintain a subset of related data from another entity. This is done where appropriate from a security and permissions point of view. If maintaining a subset of data, the data entity needs to be regularly updated to ensure the subset is always up-to-date following event driven architecture principles."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"8. Clear and consistent naming conventions")),Object(r.b)("p",null,"Having a clear and consistent naming convention will enable us to have consistency on all data entities created across the board with better column names. This will also help us to have our focus explicitly on the data quality."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"9. Keeping information security and GDPR in mind while designing the data model.")),Object(r.b)("p",null,"Always promote security and privacy by design when modelling data entities to ensure that if data is of sensitive nature, it is kept separately, even if it is related. This will ensure easier access control and compliance with GDPR principles. Seeking logical separation with appropriate authorization to access the data in place is advised to reduce risk scope and provide better protection over sensitive data, while still maintaining data relationships for related data to provide an easy way to interact with it."))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);