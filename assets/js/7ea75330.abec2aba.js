(self.webpackChunknus_connect_docs=self.webpackChunknus_connect_docs||[]).push([[851],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=l(n),g=o,h=c["".concat(u,".").concat(g)]||c[g]||p[g]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=c;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},220:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),s={sidebar_position:6,title:"Testing Guide"},a={unversionedId:"TestingGuide",id:"TestingGuide",isDocsHomePage:!1,title:"Testing Guide",description:"Our Believe & Strategy",source:"@site/docs/TestingGuide.md",sourceDirName:".",slug:"/TestingGuide",permalink:"/NUSConnect-Docs/TestingGuide",editUrl:"https://github.com/notawakestudio/NUSConnect-Docs/blob/master/docs/TestingGuide.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Testing Guide"},sidebar:"tutorialSidebar",previous:{title:"DevOps Guide",permalink:"/NUSConnect-Docs/DevOpsGuide"},next:{title:"Configuration Guide",permalink:"/NUSConnect-Docs/ConfigurationGuide"}},u=[{value:"<strong>Our Believe &amp; Strategy</strong>",id:"our-believe--strategy",children:[{value:"Our Believe",id:"our-believe",children:[]},{value:"Our Strategy",id:"our-strategy",children:[]}]},{value:"<strong>Setup Guide</strong>",id:"setup-guide",children:[]},{value:"<strong>Static Test</strong>",id:"static-test",children:[]},{value:"<strong>Unit Test</strong>",id:"unit-test",children:[]},{value:"<strong>End to End Test</strong>",id:"end-to-end-test",children:[]},{value:"<strong>Automated Testing</strong>",id:"automated-testing",children:[]},{value:"<strong>System Test</strong>",id:"system-test",children:[]}],l={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"our-believe--strategy"},(0,i.kt)("strong",{parentName:"h2"},"Our Believe & Strategy")),(0,i.kt)("p",null,"Our testing strategy is guided by the test trophy(By\nKent C. Dodds):\n",(0,i.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/kentcdodds-com/image/upload/f_auto,q_auto,dpr_2.0/v1622744540/kentcdodds.com/blog/the-testing-trophy-and-testing-classifications/trophy_wx9aen.png",alt:"test trophy"})),(0,i.kt)("p",null,"Now that we are on the same page, let's go through what we mean by the above."),(0,i.kt)("h3",{id:"our-believe"},"Our Believe"),(0,i.kt)("p",null,"We want to empathize that we see tests as a critical part of well-written program. We understand that software of significance should be tested well. This gives the developers great confidence that the software will work as expected. "),(0,i.kt)("h3",{id:"our-strategy"},"Our Strategy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Static is a must (Supported by TypeScript & IDE)"),(0,i.kt)("li",{parentName:"ul"},"Unit for critical components (Supported by Jest)"),(0,i.kt)("li",{parentName:"ul"},"Integration & E2E to ensure users experience what we build (Supported by Cypress)")),(0,i.kt)("h2",{id:"setup-guide"},(0,i.kt)("strong",{parentName:"h2"},"Setup Guide")),(0,i.kt)("p",null,"After running ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install"),", you should be ready to start testing as all the required dependencies are installed."),(0,i.kt)("h2",{id:"static-test"},(0,i.kt)("strong",{parentName:"h2"},"Static Test")),(0,i.kt)("p",null,"We developed our application in TypeScript to take advantage of the ability to ensure type safety whenever possible. With the help of the IDE, any code that's loosely typed will be obvious to us and we aimed to eliminate the warnings by adding suitable type definitions to objects, variables and function declarations."),(0,i.kt)("h2",{id:"unit-test"},(0,i.kt)("strong",{parentName:"h2"},"Unit Test")),(0,i.kt)("p",null,"We use Jest and React testing library to perform unit tests. We aimed to include unit tests at the early stage to ensure low\nlevel logics are well tested. To run tests, type in ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn test"),"."),(0,i.kt)("h2",{id:"end-to-end-test"},(0,i.kt)("strong",{parentName:"h2"},"End to End Test")),(0,i.kt)("p",null,"We use Cypress to perform end user testing and validation of user interface. Understand that UI changes can be more frequent\nand therefore hard to maintain, we have decided to include E2E tests in the later stage. To use Cypress for test development, start\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"npx cypress open")," to open up the desktop client of Cypress. Click on one of the written test to run it in the test browser.\nAny changes saved on the currently running test file will trigger a rerun of the test. You can also run ",(0,i.kt)("inlineCode",{parentName:"p"},"npx cypress run")," to run\nall tests headlessly."),(0,i.kt)("h2",{id:"automated-testing"},(0,i.kt)("strong",{parentName:"h2"},"Automated Testing")),(0,i.kt)("p",null,"On top of verifying program correctness during development, we also ensure updates to the production build are always tested before merging. Please refer to our ",(0,i.kt)("a",{parentName:"p",href:"DevOpsGuide#continuous-integration"},"Continuous Integration section")," to find out more on how we perform testing with the help of Github Actions."),(0,i.kt)("h2",{id:"system-test"},(0,i.kt)("strong",{parentName:"h2"},"System Test")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Take the whole system and test it against the system specifications.")),(0,i.kt)("p",null,"As we are the sole developers of the entire application, we will function as QA engineers to ensure the system is functioning properly and fails gracefully."))}d.isMDXComponent=!0}}]);