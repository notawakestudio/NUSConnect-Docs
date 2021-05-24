(self.webpackChunknus_connect_docs=self.webpackChunknus_connect_docs||[]).push([[973],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||p[k]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6182:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return d}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={sidebar_position:3,sidebar_label:"Developer Guide",title:"Developer Guide"},o={unversionedId:"DeveloperGuide",id:"DeveloperGuide",isDocsHomePage:!1,title:"Developer Guide",description:"Introduction",source:"@site/docs/DeveloperGuide.md",sourceDirName:".",slug:"/DeveloperGuide",permalink:"/NUSConnect-Docs/DeveloperGuide",editUrl:"https://github.com/notawakestudio/NUSConnect-Docs/blob/master/docs/DeveloperGuide.md",version:"current",sidebar_label:"Developer Guide",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Developer Guide",title:"Developer Guide"},sidebar:"tutorialSidebar",previous:{title:"User Guide",permalink:"/NUSConnect-Docs/UserGuide"},next:{title:"Workflow Guide",permalink:"/NUSConnect-Docs/WorkflowGuide"}},s=[{value:"<strong>Introduction</strong>",id:"introduction",children:[]},{value:"<strong>Tech Stack</strong>",id:"tech-stack",children:[{value:"Front end",id:"front-end",children:[]},{value:"Back end",id:"back-end",children:[]},{value:"Test",id:"test",children:[]}]},{value:"<strong>Timeline, testing, configuration, dev-ops, workflow</strong>",id:"timeline-testing-configuration-dev-ops-workflow",children:[]},{value:"<strong>Product Scope</strong>",id:"product-scope",children:[{value:"<strong>Target user profile</strong>",id:"target-user-profile",children:[]},{value:"<strong>Value proposition</strong>",id:"value-proposition",children:[]}]},{value:"<strong>User Stories</strong>",id:"user-stories",children:[]},{value:"<strong>Quiz</strong>",id:"quiz",children:[]},{value:"<strong>Forum</strong>",id:"forum",children:[]},{value:"<strong>Glossary</strong>",id:"glossary",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},(0,l.kt)("strong",{parentName:"h2"},"Introduction")),(0,l.kt)("p",null,"Frustrated with the lack of material and information available from previous semesters and the lack of functionality in the official learning management system LumiNUS, we set out to design a system where students can learn their module content in a more engaging way."),(0,l.kt)("p",null,"With our background as teaching assistants for the module CS2030(Programming methodology II), we have a burning desire to help our students strive for perfection. We know that learning takes time and continuous effort, but making the process of learning fun and enjoyable will greatly improve students\u2019 performance. "),(0,l.kt)("p",null,"We hope that our project becomes a source of external motivating factors that nudge students to learn the materials by heart. We want students to feel good doing assignments, and be rewarded with virtual points and record their attempts for further analysis. We also want students to try alternative ways of learning, via questions and answers in a forum, via quizzes that are self generated or created by the TAs, and via consolidating their learning into articles to be shared with other module students in the wiki."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"tech-stack"},(0,l.kt)("strong",{parentName:"h2"},"Tech Stack")),(0,l.kt)("h3",{id:"front-end"},"Front end"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nextjs"),(0,l.kt)("li",{parentName:"ul"},"TypeScript"),(0,l.kt)("li",{parentName:"ul"},"Tailwind CSS")),(0,l.kt)("h3",{id:"back-end"},"Back end"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"firebase"),(0,l.kt)("li",{parentName:"ul"},"Deta base"),(0,l.kt)("li",{parentName:"ul"},"flask")),(0,l.kt)("h3",{id:"test"},"Test"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jest"),(0,l.kt)("li",{parentName:"ul"},"React testing library"),(0,l.kt)("li",{parentName:"ul"},"Cypress")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"timeline-testing-configuration-dev-ops-workflow"},(0,l.kt)("strong",{parentName:"h2"},"Timeline, testing, configuration, dev-ops, workflow")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"Timeline"},"Timeline")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"TestingGuide"},"Testing guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"ConfigurationGuide"},"Configuration guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"DevOpsGuide"},"DevOps guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"WorkflowGuide"},"Workflow guide"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"product-scope"},(0,l.kt)("strong",{parentName:"h2"},"Product Scope")),(0,l.kt)("h3",{id:"target-user-profile"},(0,l.kt)("strong",{parentName:"h3"},"Target user profile")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"perfers viewing the website on both mobile and laptop environment"),(0,l.kt)("li",{parentName:"ul"},"taking or planning to take a supported module"),(0,l.kt)("li",{parentName:"ul"},"requires help with learning activities"),(0,l.kt)("li",{parentName:"ul"},"looking for ways to interact and learn from peers from the same module"),(0,l.kt)("li",{parentName:"ul"},"wants to have a all-in-one place to check out all related materials"),(0,l.kt)("li",{parentName:"ul"},"is keen to help others learning the same module")),(0,l.kt)("h3",{id:"value-proposition"},(0,l.kt)("strong",{parentName:"h3"},"Value proposition")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"provide powerful features to enhance learning experience and effectiveness"),(0,l.kt)("li",{parentName:"ul"},"user centric and tailored to learners of respective modules"),(0,l.kt)("li",{parentName:"ul"},"intuitive UI and smooth navigation between pages"),(0,l.kt)("li",{parentName:"ul"},"easy to get started with comprehensive supporting documentations"),(0,l.kt)("li",{parentName:"ul"},"mobile first and responsive")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"user-stories"},(0,l.kt)("strong",{parentName:"h2"},"User Stories")),(0,l.kt)("p",null,"Priorities: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"High (must have): ",(0,l.kt)("inlineCode",{parentName:"li"},"* * *")),(0,l.kt)("li",{parentName:"ul"},"Medium (nice to have): ",(0,l.kt)("inlineCode",{parentName:"li"},"* *")),(0,l.kt)("li",{parentName:"ul"},"Low (unlikely to have):",(0,l.kt)("inlineCode",{parentName:"li"},"*"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Priority"),(0,l.kt)("th",{parentName:"tr",align:null},"As a \u2026\u200b"),(0,l.kt)("th",{parentName:"tr",align:null},"I want to \u2026\u200b"),(0,l.kt)("th",{parentName:"tr",align:null},"So that I can\u2026\u200b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"track my progress throughout the semester"),(0,l.kt)("td",{parentName:"tr",align:null},"meet my module requirements")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"visualize my progress"),(0,l.kt)("td",{parentName:"tr",align:null},"be motivated to work towards completing required tasks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"have a clear view of weekly tasks to be completed"),(0,l.kt)("td",{parentName:"tr",align:null},"tell what is to be done and what is left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"have a level bar to judge my progress"),(0,l.kt)("td",{parentName:"tr",align:null},"feel like I\u2019m improving as the weeks go by")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"post my opinions on the forum anonymously"),(0,l.kt)("td",{parentName:"tr",align:null},"stop feeling embarrassed to ask \u201cdumb\u201d questions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"upvote or like forum posts that are interesting"),(0,l.kt)("td",{parentName:"tr",align:null},"help make them receive more attention")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"view my upvoted forum posts"),(0,l.kt)("td",{parentName:"tr",align:null},"easily find and refer to them later")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"tag my posts"),(0,l.kt)("td",{parentName:"tr",align:null},"have an easier time finding and classifying them")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"chat with my fellow module mates via forum Q&A"),(0,l.kt)("td",{parentName:"tr",align:null},"learn from others who are also taking the module")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"do past year quizzes"),(0,l.kt)("td",{parentName:"tr",align:null},"get a better understanding of the module")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"be able to make my own quizzes"),(0,l.kt)("td",{parentName:"tr",align:null},"share my knowledge with other students and help them learn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"upvote and like quizzes"),(0,l.kt)("td",{parentName:"tr",align:null},"receive more attention")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"view my upvoted quizzes"),(0,l.kt)("td",{parentName:"tr",align:null},"easily find and refer to them later")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"join telegram groups that are related to the mod"),(0,l.kt)("td",{parentName:"tr",align:null},"view discussions and ask questions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"have all relevant information about a module within a single webpage"),(0,l.kt)("td",{parentName:"tr",align:null},"immediately navigate to it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"contribute online resources that I found to related to module topics"),(0,l.kt)("td",{parentName:"tr",align:null},"let others benefit from them")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"write guides and articles"),(0,l.kt)("td",{parentName:"tr",align:null},"let them serve as references to myself and my fellow module students")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"gamify the process of learning"),(0,l.kt)("td",{parentName:"tr",align:null},"make doing module related work more fun")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* * *")),(0,l.kt)("td",{parentName:"tr",align:null},"student"),(0,l.kt)("td",{parentName:"tr",align:null},"contribute to the success of the module"),(0,l.kt)("td",{parentName:"tr",align:null},"future students taking this module can learn better")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* *")),(0,l.kt)("td",{parentName:"tr",align:null},"teaching staff"),(0,l.kt)("td",{parentName:"tr",align:null},"be able to monitor the progress of my students"),(0,l.kt)("td",{parentName:"tr",align:null},"meet my module requirements")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* *")),(0,l.kt)("td",{parentName:"tr",align:null},"teaching staff"),(0,l.kt)("td",{parentName:"tr",align:null},"create quizzes for students to attempt"),(0,l.kt)("td",{parentName:"tr",align:null},"test easily misunderstood concepts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"* *")),(0,l.kt)("td",{parentName:"tr",align:null},"teaching staff"),(0,l.kt)("td",{parentName:"tr",align:null},"provide feedback to students for their attempted exercises"),(0,l.kt)("td",{parentName:"tr",align:null},"clarify any doubts on the spot")))),(0,l.kt)("h2",{id:"quiz"},(0,l.kt)("strong",{parentName:"h2"},"Quiz")),(0,l.kt)("p",null,"There are essentially two pieces of data involved in the quiz functionality."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A quiz (collection of questions)"),(0,l.kt)("li",{parentName:"ul"},"A quiz question")),(0,l.kt)("p",null,"Main considerations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Modes (taking, reviewing)"),(0,l.kt)("li",{parentName:"ul"},"CRUD & Database interaction"),(0,l.kt)("li",{parentName:"ul"},"Search and filter"),(0,l.kt)("li",{parentName:"ul"},"Linkage with other components ")),(0,l.kt)("h4",{id:"quiz-1"},"Quiz"),(0,l.kt)("p",null,"A quiz is make up of "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"meta data"),(0,l.kt)("li",{parentName:"ul"},"collection of questions (identified by question ID)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javaScript"},'    {\n        "id":"TxRDDtSEpnpodO0d-3ygJ", // 21 char unique identifier generated by nanoid\n        "title":"CS2030 Quiz 1", // for readability and easy of classification\n        "author":"Bob", // potentially changed to user ID \n        "created":"May 11, 2021", // simple readable date, for filtering\n        "week":"1", // for simple classification and display on task board\n        "tags":["OOP","intro"], // for filtering and searching\n        "questions": ["mtCHNvypLt4TKizuqmP6f","gf669ye6dy4ltJSkKb_tZ", "SUdbM9KBpsbywHQvxpFir","YQdkspzjHcwTL3txI2Bc8"] // list of questions\n    },\n')),(0,l.kt)("p",null,"For each quiz, there will be a list of questions. The order of questions displayed in the quiz is according to the order stored.\nThere will be two different modes when interacting with the quiz. User is either taking a quiz or reviewing a quiz. The UI should be\nkept mostly the same, except for the ability to interact with the quiz. "),(0,l.kt)("h4",{id:"quesion"},"Quesion"),(0,l.kt)("p",null,"A question is make up of"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"meta data"),(0,l.kt)("li",{parentName:"ul"},"question text"),(0,l.kt)("li",{parentName:"ul"},"answers (both correct and incorrect answers)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javaScript"},'{\n    "id": "gf669ye6dy4ltJSkKb_tZ", // 21 char unique identifier generated by nanoid\n    "modules": ["CS2030", "CS2030S"], // for cases of variants\n    "type": "MRQ", // MCQ, MRQ\n    "question": "What are valid format specifiers for `the String.format()` method?",\n    "correct_answers": ["%f", "%d","%s"], // in consideration of MRQ\n    "incorrect_answers": ["%w","%z","%q"],\n    "author":"yongliang", // consider changing this to contributors and user ID\n}\n')),(0,l.kt)("p",null,'For each question, there will be a list of potential answers. Each answer is a string that is either defined as\ncorrect or incorrect. The order of the answers will be random when shown, hence there is no inherent order for each\nanswer position. This also means that the setter should use "None of the other options" instead of "None of the above options"\nwhen setting questions.'),(0,l.kt)("h4",{id:"making-a-question"},"Making a question"),(0,l.kt)("p",null,"To contribute a question, user first visit the ",(0,l.kt)("inlineCode",{parentName:"p"},"quiz/make")," page."),(0,l.kt)("p",null,"User can then type in according to the format, the details of a question:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'---\ntype: MCQ\nmodules: \n- CS2030\n- CS2030S\ncorrect_answers: \n- "Collection of related classes and interfaces which are bundled together"\nincorrect_answers: \n- "We should declare fields as private as much as possible"\n- "We should not throw exceptions that reveal internal implementation of a class as much as possible"\n- "We should avoid using accessors and mutators (also known as getters and setters) to private fields as much as possible"\n- "We should use polymorphism so that each class is responsible for handling its own behavior as much as possible"\n- "None of the others"\n---\n"What is a package in java?"\n')),(0,l.kt)("p",null,"The question details will also be shown on the right preview panel for checking of markdown behavior.\nOnce done, user can click submit to upload the question to question bank. Note that the syntax has to be\nvalidated to ensure user is submitting according to the specified format. The question text will be parsed\nto retrieve individual fields and converted to a JSON object posted to the backend.\nThe other details required for a quiz, such as an id and author id, will also be included in the JSON object to be saved. "),(0,l.kt)("h4",{id:"use-cases"},"Use cases"),(0,l.kt)("p",null,"System: NUS Connect\nUse case: Take a quiz\nActor User\nMSS:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"User chooses a quiz"),(0,l.kt)("li",{parentName:"ol"},"User starts the quiz"),(0,l.kt)("li",{parentName:"ol"},"User submits the quiz"),(0,l.kt)("li",{parentName:"ol"},"System shows scores")),(0,l.kt)("p",null,"Use case ends."),(0,l.kt)("p",null,"Extensions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"2a. User sees a question.\n    2a1. User selects answers\n    2a2. System stores user selections\n    2a3. User navigate to another question\n")),(0,l.kt)("h2",{id:"forum"},(0,l.kt)("strong",{parentName:"h2"},"Forum")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\n{\n    "id": \n    "modules": ["CS2030", "CS2030S"], // for cases of variants\n    "type": "MRQ", // MCQ, MRQ\n    "difficulty": "easy", // easy, medium, hard\n    "question": "What are valid format specifiers for the String.format() method?",\n    "correct_answers": ["%f", "%d","%s"], // consider cases of MRQ\n    "incorrect_answers": ["%w","%z","%q"],\n    "author":"",\n    "isDraft":boolean,\n    // consider adding more properties such as tags, isSeries etc\n}\n')),(0,l.kt)("h2",{id:"glossary"},(0,l.kt)("strong",{parentName:"h2"},"Glossary")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Term"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quiz"),(0,l.kt)("td",{parentName:"tr",align:null},"a collection of questions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"includes question text and answer options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"answer"),(0,l.kt)("td",{parentName:"tr",align:null},"a possible option for a question")))))}d.isMDXComponent=!0}}]);