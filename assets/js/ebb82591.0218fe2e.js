(self.webpackChunknus_connect_docs=self.webpackChunknus_connect_docs||[]).push([[445],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5999:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u},default:function(){return l}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),c={sidebar_position:5,title:"DevOps Guide"},a={unversionedId:"DevOpsGuide",id:"DevOpsGuide",isDocsHomePage:!1,title:"DevOps Guide",description:"CI",source:"@site/docs/DevOpsGuide.md",sourceDirName:".",slug:"/DevOpsGuide",permalink:"/NUSConnect-Docs/DevOpsGuide",editUrl:"https://github.com/notawakestudio/NUSConnect-Docs/blob/master/docs/DevOpsGuide.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"DevOps Guide"},sidebar:"tutorialSidebar",previous:{title:"Workflow Guide",permalink:"/NUSConnect-Docs/WorkflowGuide"},next:{title:"Testing Guide",permalink:"/NUSConnect-Docs/TestingGuide"}},u=[{value:"<strong>CI</strong>",id:"ci",children:[]},{value:"<strong>CD</strong>",id:"cd",children:[]}],s={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ci"},(0,i.kt)("strong",{parentName:"h2"},"CI")),(0,i.kt)("p",null,"We use Github Actions to run tests for each PR."),(0,i.kt)("h2",{id:"cd"},(0,i.kt)("strong",{parentName:"h2"},"CD")),(0,i.kt)("p",null,"We host our front end on Vercel, which has excellent support for Next.js applications.\nDue to resources constraints, following is the steps to deploy our application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Merge PR to branch ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," on notawakestudio/NUSConnect Organization Github"),(0,i.kt)("li",{parentName:"ul"},"Fetch remote in the fork ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," on tlylt/NUSConnect to sync the changes"),(0,i.kt)("li",{parentName:"ul"},"Trigger redeployment on Vercel"),(0,i.kt)("li",{parentName:"ul"},"Website should be live in a few minutes at ",(0,i.kt)("a",{parentName:"li",href:"https://nus-connect.vercel.app/"},"NUS Connect"))))}l.isMDXComponent=!0}}]);