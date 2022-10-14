/*! For license information please see 2.36e6e92a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{104:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(98),i=a(100),s=a(103),u=a(101),d=a(97),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["items","position","className"],h=["className"],b=["items","className","position"],v=["className"],p=["mobile"];function g(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,h=e.prependBaseUrlToHref,b=Object(r.a)(e,m),v=Object(s.a)(c),p=Object(s.a)(t),g=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:h?g:l}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(p)}}:null),b),u)}function O(e){var t=e.items,a=e.position,i=e.className,s=Object(r.a)(e,f),u=Object(c.useRef)(null),d=Object(c.useRef)(null),m=Object(c.useState)(!1),b=m[0],v=m[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var p=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":b})},o.a.createElement(g,Object(n.a)({className:p(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!b))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var c=e.className,l=Object(r.a)(e,h);return o.a.createElement("li",{key:a},o.a.createElement(g,Object(n.a)({onKeyDown:function(e){if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var n=u.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:p(c,!0)},l)))})))):o.a.createElement(g,Object(n.a)({className:p(i)},s))}function E(e){var t,a,i=e.items,s=e.className,m=(e.position,Object(r.a)(e,b)),f=Object(c.useRef)(null),h=Object(u.useLocation)().pathname,p=Object(c.useState)((function(){var e;return null===(e=!(null!=i&&i.some((function(e){return Object(d.isSamePath)(e.to,h)}))))||void 0===e||e})),O=p[0],E=p[1],j=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(g,Object(n.a)({className:j(s)},m)));var k=null!==(t=f.current)&&void 0!==t&&t.scrollHeight?(null===(a=f.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":O})},o.a.createElement(g,Object(n.a)({role:"button",className:j(s,!0)},m,{onClick:function(){E((function(e){return!e}))}}),m.label),o.a.createElement("ul",{className:"menu__list",ref:f,style:{height:O?void 0:k}},i.map((function(e,t){var a=e.className,c=Object(r.a)(e,v);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(g,Object(n.a)({activeClassName:"menu__link--active",className:j(a)},c,{onClick:m.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,p),c=a?E:O;return o.a.createElement(c,n)}},109:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(98),o=a(55),l=a.n(o);var i=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=a(97),u=a(121),d=a(56),m=a.n(d);var f=function(){var e,t=Object(u.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,o=Object(s.useThemeConfig)().announcementBar;if(!o)return null;var l=o.content,i=o.backgroundColor,d=o.textColor,f=o.isCloseable;return!l||f&&a?null:r.a.createElement("div",{className:m.a.announcementBar,style:{backgroundColor:i,color:d},role:"banner"},r.a.createElement("div",{className:Object(c.a)(m.a.announcementBarContent,(e={},e[m.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:l}}),f?r.a.createElement("button",{type:"button",className:m.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=a(3),b=a(7),v=a(24),p=a(21),g=a(101),O=a(103),E=a(100),j=a(22),k=a(123);function y(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var C=a(124);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function S(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var T="Ctrl";var L=r.a.forwardRef((function(e,t){var a=e.translations,c=void 0===a?{}:a,o=S(e,["translations"]),l=c.buttonText,i=void 0===l?"Search":l,s=c.buttonAriaLabel,u=void 0===s?"Search":s,d=_(Object(n.useState)(null),2),m=d[0],f=d[1];return Object(n.useEffect)((function(){"undefined"!=typeof navigator&&f(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":T)}),[]),r.a.createElement("button",w({type:"button",className:"DocSearch DocSearch-Button","aria-label":u},o,{ref:t}),r.a.createElement("span",{className:"DocSearch-Button-Container"},r.a.createElement(C.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},i)),null!==m&&r.a.createElement("span",{className:"DocSearch-Button-Keys"},r.a.createElement("span",{className:"DocSearch-Button-Key"},m===T?r.a.createElement(y,null):m),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K")))})),I=a(99);function P(){var e=function(){var e=Object(p.default)().i18n,t=Object(I.useAllDocsData)(),a=Object(I.useActivePluginAndVersion)(),n=Object(s.useDocsPreferredVersionByPluginId)(),r=[s.DEFAULT_SEARCH_TAG].concat(Object.keys(t).map((function(e){var r,c,o=(null==a||null===(r=a.activePlugin)||void 0===r?void 0:r.pluginId)===e?a.activeVersion:void 0,l=n[e],i=t[e].versions.find((function(e){return e.isLast})),u=null!==(c=null!=o?o:l)&&void 0!==c?c:i;return Object(s.docVersionSearchTag)(e,u.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var D=["contextualSearch"],B=null;function x(e){var t=e.hit,a=e.children;return r.a.createElement(E.a,{to:t.url},a)}function A(e){var t=e.state,a=e.onClose,n=Object(k.a)().generateSearchPageLink;return r.a.createElement(E.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function M(e){var t,c,o=e.contextualSearch,l=Object(b.a)(e,D),i=Object(p.default)().siteMetadata,s=P(),u=null!==(t=null===(c=l.searchParameters)||void 0===c?void 0:c.facetFilters)&&void 0!==t?t:[],d=o?[].concat(s,u):u,m=Object.assign({},l.searchParameters,{facetFilters:d}),f=Object(O.b)().withBaseUrl,E=Object(g.useHistory)(),k=Object(n.useRef)(null),y=Object(n.useState)(!1),C=y[0],w=y[1],_=Object(n.useState)(null),N=_[0],S=_[1],T=Object(n.useCallback)((function(){return B?Promise.resolve():Promise.all([a.e(27).then(a.bind(null,185)),Promise.all([a.e(0),a.e(28)]).then(a.bind(null,184)),a.e(0).then(a.t.bind(null,95,7))]).then((function(e){var t=e[0].DocSearchModal;B=t}))}),[]),I=Object(n.useCallback)((function(){T().then((function(){w(!0)}))}),[T,w]),M=Object(n.useCallback)((function(){w(!1)}),[w]),V=Object(n.useCallback)((function(e){T().then((function(){w(!0),S(e.key)}))}),[T,w,S]),R=Object(n.useRef)({navigate:function(e){var t=e.itemUrl;E.push(t)}}).current,U=Object(n.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:f(""+t.pathname+t.hash)})}))})).current,F=Object(n.useMemo)((function(){return function(e){return r.a.createElement(A,Object(h.a)({},e,{onClose:M}))}}),[M]),H=Object(n.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",i.docusaurusVersion),e}),[i.docusaurusVersion]);return function(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,a=t.tagName;return t.isContentEditable||"INPUT"===a||"SELECT"===a||"TEXTAREA"===a}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?n():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||a()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,c,o])}({isOpen:C,onOpen:I,onClose:M,onInput:V,searchButtonRef:k}),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+l.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.a.createElement(L,{onTouchStart:T,onFocus:T,onMouseOver:T,onClick:I,ref:k}),C&&Object(v.createPortal)(r.a.createElement(B,Object(h.a)({onClose:M,initialScrollY:window.scrollY,initialQuery:N,navigator:R,transformItems:U,hitComponent:x,resultsFooterComponent:F,transformSearchClient:H},l,{searchParameters:m})),document.body))}var V=function(){var e=Object(p.default)().siteConfig;return r.a.createElement(M,e.themeConfig.algolia)},R=a(148),U=a.n(R),F=a(57),H=a.n(F),X=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(H.a.toggle,H.a.dark),style:a},t)},K=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(H.a.toggle,H.a.light),style:a},t)},G=function(e){var t=Object(s.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(p.default)().isClient;return r.a.createElement(U.a,Object(h.a)({disabled:!l,icons:{checked:r.a.createElement(X,{icon:a,style:n}),unchecked:r.a.createElement(K,{icon:c,style:o})}},e))},q=a(111),Y=a(126),W=function(e){var t=Object(g.useLocation)(),a=Object(n.useState)(!e),r=a[0],c=a[1],o=Object(n.useRef)(!1),l=Object(n.useState)(0),i=l[0],s=l[1],u=Object(n.useState)(0),d=u[0],m=u[1],f=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return Object(Y.a)((function(t){var a=t.scrollY;if(e&&!(a<d)){if(o.current)return o.current=!1,c(!1),void s(a);i&&0===a&&c(!0);var n=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&a>=i?c(!1):a+r<n&&c(!0),s(a)}}),[i,d,o]),Object(n.useEffect)((function(){e&&i&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:f,isNavbarVisible:r}},z=a(127),J=a(128),Q=a(104),Z=["mobile"];function $(e){var t=e.mobile,a=Object(b.a)(e,Z),n=Object(p.default)(),c=n.siteConfig.baseUrl,o=n.i18n,l=o.defaultLocale,i=o.currentLocale,s=o.locales,u=o.localeConfigs,d=Object(g.useLocation)().pathname;function m(e){return u[e].label}var f=i===l?c:c.replace("/"+i+"/","/"),v=d.replace(c,"");var O=s.map((function(e){var t=""+function(e){return e===l?""+f:""+f+e+"/"}(e)+v;return{isNavLink:!0,label:m(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":""}})),E=t?"Languages":m(i);return r.a.createElement(Q.a,Object(h.a)({},a,{mobile:t,label:E,items:O}))}var ee=["type"],te={default:function(){return Q.a},localeDropdown:function(){return $},docsVersion:function(){return a(153).default},docsVersionDropdown:function(){return a(154).default},doc:function(){return a(155).default}};function ae(e){var t=e.type,a=Object(b.a)(e,ee),n=function(e){void 0===e&&(e="default");var t=te[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var ne=a(137),re=a(129),ce=a(59),oe=a.n(ce),le="right";var ie=function(){var e,t,a=Object(s.useThemeConfig)(),o=a.navbar,l=o.items,i=o.hideOnScroll,u=o.style,d=a.colorMode.disableSwitch,m=Object(n.useState)(!1),f=m[0],b=m[1],v=Object(n.useState)(!1),p=v[0],g=v[1],O=Object(q.a)(),E=O.isDarkTheme,j=O.setLightTheme,k=O.setDarkTheme,y=W(i),C=y.navbarRef,w=y.isNavbarVisible;Object(z.a)(f);var _=Object(n.useCallback)((function(){b(!0)}),[b]),N=Object(n.useCallback)((function(){b(!1)}),[b]),S=Object(n.useCallback)((function(e){return e.target.checked?k():j()}),[j,k]),T=Object(J.a)();Object(n.useEffect)((function(){T===J.b.desktop&&b(!1)}),[T]);var L=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:le)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:le)}))}}(l),I=L.leftItems,P=L.rightItems;return r.a.createElement("nav",{ref:C,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":f},e[oe.a.navbarHideable]=i,e[oe.a.navbarHidden]=!w,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:_,onKeyDown:_},r.a.createElement(re.a,null)),r.a.createElement(ne.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[oe.a.hideLogoText]=p,t))}),I.map((function(e,t){return r.a.createElement(ae,Object(h.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},P.map((function(e,t){return r.a.createElement(ae,Object(h.a)({},e,{key:t}))})),!d&&r.a.createElement(G,{className:oe.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:E,onChange:S}),r.a.createElement(V,{handleSearchBarToggle:g,isSearchBarExpanded:p}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:N}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(ne.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:N}),!d&&f&&r.a.createElement(G,{"aria-label":"Dark mode toggle in sidebar",checked:E,onChange:S})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.a.createElement(ae,Object(h.a)({mobile:!0},e,{onClick:N,key:t}))})))))))},se=a(60),ue=a.n(se),de=["to","href","label","prependBaseUrlToHref"];function me(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(b.a)(e,de),l=Object(O.a)(t),i=Object(O.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(E.a,Object(h.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?i:a}:{to:l},o),n)}var fe=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var he=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,u=Object(O.a)(i.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(me,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:ue.a.footerLogoLink},r.a.createElement(fe,{alt:i.alt,url:u})):r.a.createElement(fe,{alt:i.alt,url:u})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},be=a(9),ve="light",pe="dark",ge=function(e){return e===pe?pe:ve},Oe=function(){return be.a.canUseDOM?ge(document.documentElement.getAttribute("data-theme")):ve},Ee=function(e){try{localStorage.setItem("theme",ge(e))}catch(t){console.error(t)}},je=function(){var e=Object(s.useThemeConfig)().colorMode,t=e.disableSwitch,a=e.respectPrefersColorScheme,r=Object(n.useState)(Oe),c=r[0],o=r[1],l=Object(n.useCallback)((function(){o(ve),Ee(ve)}),[]),i=Object(n.useCallback)((function(){o(pe),Ee(pe)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",ge(c))}),[c]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&o(ge(e))}catch(a){console.error(a)}}),[o]),Object(n.useEffect)((function(){t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?pe:ve)}))}),[]),{isDarkTheme:c===pe,setLightTheme:l,setDarkTheme:i}},ke=a(125);var ye=function(e){var t=je(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(ke.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},Ce="docusaurus.tab.",we=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(Ce))e[n.substring(Ce.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},_e="docusaurus.announcement.dismiss",Ne="docusaurus.announcement.id",Se=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(_e,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(Ne);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(Ne,t),n&&localStorage.setItem(_e,"false"),(n||"false"===localStorage.getItem(_e))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},Te=a(122);var Le=function(e){var t=we(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=Se(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(Te.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function Ie(e){var t=e.children;return r.a.createElement(ye,null,r.a.createElement(Le,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}function Pe(e){var t=e.locale,a=e.version,n=e.tag,c=t;return r.a.createElement(j.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),a&&r.a.createElement("meta",{name:"docsearch:version",content:a}),n&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:n}))}function De(e){var t=Object(p.default)(),a=t.siteConfig,n=t.i18n.currentLocale,c=a.favicon,o=a.themeConfig,l=o.image,i=o.metadatas,u=a.url,d=e.title,m=e.description,f=e.image,b=e.keywords,v=e.permalink,g=e.searchMetadatas,E=Object(s.useTitleFormatter)(d),k=f||l,y=Object(O.a)(k,{absolute:!0}),C=Object(O.a)(c),w=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement("html",{lang:w}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),c&&r.a.createElement("link",{rel:"shortcut icon",href:C}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:y}),k&&r.a.createElement("meta",{name:"twitter:image",content:y}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),v&&r.a.createElement("meta",{property:"og:url",content:u+v}),v&&r.a.createElement("link",{rel:"canonical",href:u+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(Pe,Object(h.a)({tag:s.DEFAULT_SEARCH_TAG,locale:n},g)),r.a.createElement(j.a,null,i.map((function(e,t){return r.a.createElement("meta",Object(h.a)({key:"metadata_"+t},e))}))))}a(61);var Be=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(62);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return Be(),r.a.createElement(Ie,null,r.a.createElement(De,e),r.a.createElement(i,null),r.a.createElement(f,null),r.a.createElement(ie,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(he,null))}},111:function(e,t,a){"use strict";var n=a(0),r=a(125);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},121:function(e,t,a){"use strict";var n=a(0),r=a(122);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},122:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},123:function(e,t,a){"use strict";var n=a(101),r=a(9),c=a(21);t.a=function(){var e=Object(n.useHistory)(),t=Object(n.useLocation)(),a=Object(c.default)().siteConfig,o=(a=void 0===a?{}:a).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},125:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},126:function(e,t,a){"use strict";var n=a(0),r=a(9),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},127:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},128:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},129:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=["width","height","className"];t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=Object(r.a)(e,l);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:s,width:a,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},137:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(100),i=a(98),s=a(21),u=a(111),d=a(58),m=a.n(d),f=["sources","className","alt"],h=function(e){var t=Object(s.default)().isClient,a=Object(u.a)().isDarkTheme,c=e.sources,l=e.className,d=e.alt,h=void 0===d?"":d,b=Object(r.a)(e,f),v=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,v.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:h,className:Object(i.a)(m.a.themedImage,m.a["themedImage--"+e],l)},b))})))},b=a(103),v=a(97),p=a(106),g=["imageClassName","titleClassName"];t.a=function(e){var t=Object(s.default)().isClient,a=Object(v.useThemeConfig)().navbar,c=a.title,i=a.logo,u=void 0===i?{src:""}:i,d=e.imageClassName,m=e.titleClassName,f=Object(r.a)(e,g),O=Object(b.a)(u.href||"/"),E=u.target?{target:u.target}:Object(p.a)(O)?{}:{rel:"noopener noreferrer",target:"_blank"},j={light:Object(b.a)(u.src),dark:Object(b.a)(u.srcDark||u.src)};return o.a.createElement(l.a,Object(n.a)({to:O},f,E),u.src&&o.a.createElement(h,{key:t,className:d,sources:j,alt:u.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:m},c))}},148:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(149)),i=m(a(1)),s=m(a(150)),u=m(a(151)),d=a(152);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},149:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},150:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},153:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(104),i=a(99),s=a(97),u=["label","to","docsPluginId"];function d(e){var t,a=e.label,c=e.to,d=e.docsPluginId,m=Object(r.a)(e,u),f=Object(i.useActiveVersion)(d),h=Object(s.useDocsPreferredVersion)(d).preferredVersion,b=Object(i.useLatestVersion)(d),v=null!==(t=null!=f?f:h)&&void 0!==t?t:b,p=null!=a?a:v.label,g=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(n.a)({},m,{label:p,to:g}))}},154:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(104),i=a(99),s=a(97),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,a,c=e.mobile,m=e.docsPluginId,f=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,b=e.dropdownItemsAfter,v=Object(r.a)(e,u),p=Object(i.useActiveDocContext)(m),g=Object(i.useVersions)(m),O=Object(i.useLatestVersion)(m),E=Object(s.useDocsPreferredVersion)(m),j=E.preferredVersion,k=E.savePreferredVersionName;var y=null!==(t=null!==(a=p.activeVersion)&&void 0!==a?a:j)&&void 0!==t?t:O,C=c?"Versions":y.label,w=c?void 0:d(y).path;return o.a.createElement(l.a,Object(n.a)({},v,{mobile:c,label:C,to:w,items:function(){var e=g.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){k(e.name)}}})),t=[].concat(h,e,b);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},155:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(104),i=a(99),s=a(98),u=a(97),d=["docId","activeSidebarClassName","label","docsPluginId"];function m(e){var t,a,c=e.docId,m=e.activeSidebarClassName,f=e.label,h=e.docsPluginId,b=Object(r.a)(e,d),v=Object(i.useActiveDocContext)(h),p=v.activeVersion,g=v.activeDoc,O=Object(u.useDocsPreferredVersion)(h).preferredVersion,E=Object(i.useLatestVersion)(h),j=null!==(t=null!=p?p:O)&&void 0!==t?t:E,k=j.docs.find((function(e){return e.id===c}));if(!k)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+j.name+".\nAvailable docIds=\n- "+j.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},b,{className:Object(s.a)(b.className,(a={},a[m]=g&&g.sidebar===k.sidebar,a)),label:null!=f?f:k.id,to:k.path}))}}}]);