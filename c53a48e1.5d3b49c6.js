(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{160:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/repo_standards1-89e5572c74b3136ce4ae71ef3d1374d8.png"},161:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/repo_standards2-a8cdd94c7a243ca99bdc4b5d04a051e0.png"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(94)),i=["components"],c={id:"repository_standards",title:"Managing our GitHub repositories\u2019 branches"},s={unversionedId:"repository_standards",id:"repository_standards",isDocsHomePage:!1,title:"Managing our GitHub repositories\u2019 branches",description:"Stale branches",source:"@site/docs/repository_standards.md",slug:"/repository_standards",permalink:"/architecture-pillars/repository_standards",editUrl:"https://github.com/LBHackney-IT/architecture-pillars/edit/master/docs/repository_standards.md",version:"current",sidebar:"docs",previous:{title:"Enhancing the Quality Assurance process in Hackney through the use of automation",permalink:"/architecture-pillars/qa_process"},next:{title:"Minimum QA testing requirements in Hackney\u2019s Software Development Lifecycle",permalink:"/architecture-pillars/minimum_qa_standard"}},l=[{value:"Stale branches",id:"stale-branches",children:[]},{value:"Automating deletion of merged branches",id:"automating-deletion-of-merged-branches",children:[]}],u={toc:l};function p(e){var t=e.components,c=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"stale-branches"},"Stale branches"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What are stale branches?")),Object(o.b)("p",null,"Branches that have not had any commits in the last 3 months. Those are usually the result of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Feature branches, which were never merged and released."),Object(o.b)("li",{parentName:"ul"},"Branches used for Proof Of Concepts (POCs) and spikes."),Object(o.b)("li",{parentName:"ul"},"Incomplete work.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What is the problem with stale branches?")),Object(o.b)("p",null,"Keeping stale branches might result in a large list of available branches in a repository, making it difficult to identify branches, which contain relevant, on-going work. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"How to deal with stale branches?")),Object(o.b)("p",null,"Developers should periodically check and delete any branches that are no longer needed to their respective projects. It is the responsibility of the engineers contributing to a repository to ensure that the branches they create are removed when no longer needed."),Object(o.b)("h3",{id:"automating-deletion-of-merged-branches"},"Automating deletion of merged branches"),Object(o.b)("p",null,"To reduce the number of redundant branches, all repositories must have the automated deletion option enabled for branches, which are merged into a main branch."),Object(o.b)("p",null,"Once deleted, the branches can be restored at a later stage if needed."),Object(o.b)("p",null,"To enable automated deletion of branches, go to the repository\u2019s \u2018Settings\u2019 page.\n",Object(o.b)("img",{alt:"alt text",src:r(160).default})),Object(o.b)("p",null,"Under \u201cGeneral\u201d, navigate to the \u2018Pull requests\u2019 section and select the \u2018Automatically delete head branches\u2019 option."),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:r(161).default})))}p.isMDXComponent=!0},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(h,c(c({ref:t},l),{},{components:r})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);