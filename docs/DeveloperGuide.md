---
sidebar_position: 3
sidebar_label: "Developer Guide"
title: "Developer Guide"
---

## **Introduction**

Frustrated with the lack of material and information available from previous
semesters and the lack of functionality in the official learning management
system LumiNUS, we set out to design a system where students can learn their
module content in a more engaging way.

With our background as teaching assistants for the module CS2030(Programming
methodology II), we have a burning desire to help our students strive for
perfection. We know that learning takes time and continuous effort, but making
the process of learning fun and enjoyable will greatly improve students’
performance.

We hope that our project becomes a source of external motivating factors that
nudge students to learn the materials by heart. We want students to feel good
doing assignments, and be rewarded with virtual points and record their attempts
for further analysis. We also want students to try alternative ways of learning,
via questions and answers in a forum, via quizzes that are self generated or
created by the TAs, and via consolidating their learning into articles to be
shared with other module students in the wiki.

If you think: "Yet another contrived combination of Luminous and Coursemology",
please read our [Competitive Analysis](CompetitiveAnalysis) section to find out
why we think different.

---

## **Tech Stack**

### **Front end**

- Next.js
- TypeScript
- Tailwind CSS
- Chakra UI
- Many other awesome reusable packages on NPM

### **Back end**

- Firebase
- Deta base
- Flask

### **Test**

- Jest
- React testing library
- Cypress
- JMeter

---

## **Timeline, testing, configuration, dev-ops, workflow**

- [Timeline](Timeline)
- [Testing guide](TestingGuide)
- [Configuration guide](ConfigurationGuide)
- [DevOps guide](DevOpsGuide)
- [Workflow guide](WorkflowGuide)

---

## **Product Scope**

### **Target user profile**

- NUS students, teaching assistants and professors looking for a better learning
  management system
- prefers to view the website on both mobile and laptop environment
- taking or planning to take a supported module
- requires help with learning activities
- looking for ways to interact and learn from peers from the same module
- wants to have a all-in-one place to check out all related materials
- is keen to help others learning the same module

### **Value proposition**

- provide powerful features to enhance learning experience and effectiveness
- user centric and tailored to learners of respective modules
- intuitive UI and smooth navigation between pages
- easy to get started with comprehensive supporting documentations
- mobile first and responsive

---

## **Functionality**

### **Layout and page design**

Having a consistent layout and page design is necessary for the UX of our app
and to maintain this, we have a few layout components that we use:

- NavBar
- Footer
- Sidebar Layout

These components serve to maintain the layout of our pages and make creating
pages easy. Discussion on each layout component will be below.

### How to use these components

To use a layout, just warp any child components being used inside the said
layout. For example

```html
<Layout>
	<div>This is inside the layout</div>
</Layout>
```

The layout will add the necessary items to the page, and any changes made to the
layout will affect all pages.

However, the NavBar and Footer layouts are automatically added to each page by
default as we have included them in our \_app page.

### NavBar

The Nav bar relies on user data and session data, as it maintains information
about the user name and profile. The NavBar also works as the toggle for our
Dark Mode and can be used to toggle between the states.

The nav bar is made up of 3 different parts:

- The quick links and navigation area: links to the dashboard, quick links and
  dark mode toggle is stored.
- The banner area: displays our logo and banner in the middle area of the
  navbar.
- The profile area: displays user profile information, the module information
  and a user picture.

The NavBar is built to be responsive in 3 different stages.

- For larger screens, the full data will be displayed along with the banner and
  user profile information.
- For medium sized screens, the banner will be omitted and the profile will only
  show a picture.
- For mobile, only the quick navigation bar will be shown and everything else
  will be hidden.

### Footer

The footer is a simple component that will be placed at the bottom of any page,
after the content. If there is no content on the page or if the content does no
span the height of the page, the footer will not be sticked to the bottom of the
page.

The footer only have one part and it contains all the quick links to other
information such as our documentation and other details.

### Sidebar Layout

The sidebar layout is reliant on user data as it maintains information about the
user name and profile. The sidebar can be added to any layout and will work
responsively in any given layout. The children of the sidebar layout should have
their css set width to full to fill up the rest of the space.

The sidebar is made up of 2 parts:

- Sidebar header has quick links to:
  - forum
  - quiz
  - dashboard
  - module
- Sidebar body has quick links to:
  - profile
  - inbox
  - badges
  - scoreboard
  - logout

The sidebar layout is also built to be responsive in 2 different stages:

- For larger screens, the sidebar will be appended to the the side of each page.
- For mobile, the sidebar will be hidden and there will be a pullout drawer to
  access the quick links.

---

### **User & Roles**

As our application intends to make use of gamification, by necessity we need to
have a way to keep track of users and their activities. Users first login via
the social login options provided. Our firebase backend will keep track of the
user session as well as the unique user ID. For a first time user, the user ID
will be retrieved from firebase and used to populate the user database over at
Deta base, our main backend database. All relevant information of the user will
be saved. One such example includes system generated messages that will be shown to the user as well as all module related data.

The user data structure is as follows:

```json
{
  id: string
  modules: Module[]
  profilePicUrl: string
  role: string
  userName: string
  displayName: string
  email: string
  created_date: number
  inbox: Message[]
}
```

The available roles of a user include:
- Admin
- Student

All users will be given a role of "Student" initially. This allows for all required actions that can be taken, such as taking a quiz, making a post in the forum, or seeing his/her progress at the dashboard. As an "Admin", the user will be granted certain rights that might be required to maintain the website. Examples as follows:
- Ability to delete posts/replies that belong to anyone
- Ability to create new module
- Ability to make announcements and quests

---

### **Index Generation**

Index generation will all be done by
[nano-id](https://zelark.github.io/nano-id-cc/). We will use this to help us
generate the index for all quizzes, questions, posts and replies that are stored
in our database. All the unique identifiers are 21 characters long and are
randomly generated. The chances of us getting a duplicate are 1% after 149
billion years of continuous generation.

---

### **Quiz Page**

There are essentially two pieces of data involved in the quiz functionality.

- A quiz (collection of questions)
- A quiz question

Main considerations

- Quiz Modes (previewing, taking, reviewing)
- CRUD & Database interactions
- Search and filter
- Linkage with other components
- Storing and display of markdown text
- Code syntax highlighting
- Integration with Forum

### Quiz

A quiz is made up of

- meta data
- collection of questions (identified by question ID)

```json
{
	"id": "TxRDDtSEpnpodO0d-3ygJ", // 21 char unique identifier generated by nanoid
	"title": "CS2030 Quiz 1", // for readability and easy of classification
	"author": "Bob", // potentially changed to user ID
	"created": "May 11, 2021", // simple readable date, for filtering
	"week": "1", // for simple classification and display on task board
	"tags": ["OOP", "intro"], // for filtering and searching
	"questions": [
		"mtCHNvypLt4TKizuqmP6f",
		"gf669ye6dy4ltJSkKb_tZ",
		"SUdbM9KBpsbywHQvxpFir",
		"YQdkspzjHcwTL3txI2Bc8"
	] // list of questions
}
```

For each quiz, there will be a list of questions. The order of questions
displayed in the quiz is according to the order stored. There will be two
different modes when interacting with the quiz. User is either taking a quiz or
reviewing a quiz. The UI should be kept mostly the same, except for the ability
to interact with the quiz. When a user submitted a quiz, he will be able to
review the quiz results and check the correct answers for each question.

### Question

A question is made up of

- meta data
- question text
- answers (both correct and incorrect answers)

```json
{
	"id": "gf669ye6dy4ltJSkKb_tZ", // 21 char unique identifier generated by nanoid
	"modules": ["CS2030", "CS2030S"], // for cases of variants
	"type": "MRQ", // MCQ, MRQ
	"question": "What are valid format specifiers for `the String.format()` method?",
	"correct_answers": ["%f", "%d", "%s"], // in consideration of MRQ
	"incorrect_answers": ["%w", "%z", "%q"],
	"author": "yongliang" // consider changing this to contributors and user ID
}
```

For each question, there will be a list of potential answers. Each answer is a
string that is either defined as correct or incorrect. The order of the answers
will be random when shown, hence there is no inherent order for each answer
position. This also means that the setter should use "None of the other options"
instead of "None of the above options" when setting questions.

### Quiz page design considerations

#### Making a question and quiz

Instead of forcing users to start with a quiz, we would like to treat a question
as a build block instead. Users are free to create as many questions as they
like, and curate a quiz out of the created questions. This approach will allow
for more reusability and flexibility in terms of generating a stream of
questions.

Current we offer two ways to make a question/quiz. One will be via a form
(preferred) and there is also an option of using an markdown editor. Note that
both options support markdown syntax.

#### Option 1 (Form)

User can fill in the form, the details of a question:

- type
- modules
- question
- correct answers
- incorrect answers

The question details will be parsed to retrieve individual fields and converted
to a JSON object posted to the backend. The other details required for a
question, such as an id and author id, will also be included in the JSON object
to be saved.

The same procedure is the same for creating a quiz.

#### Option 2 (Markdown Editor)

User can type in according to the format, the details of a question:

```text
---
type: MCQ
modules:
- CS2030
- CS2030S
correct_answers:
- "Collection of related classes and interfaces which are bundled together"
incorrect_answers:
- "We should declare fields as private as much as possible"
- "We should not throw exceptions that reveal internal implementation of a class as much as possible"
- "We should avoid using accessors and mutators (also known as getters and setters) to private fields as much as possible"
- "We should use polymorphism so that each class is responsible for handling its own behavior as much as possible"
- "None of the others"
---
"What is a package in java?"
```

The question details will also be shown on the right preview panel for checking
of markdown behavior. Once done, user can click submit to upload the question to
question bank. Note that the syntax has to be validated to ensure user is
submitting according to the specified format. The question text will be parsed
to retrieve individual fields and converted to a JSON object posted to the
backend. The other details required for a question, such as an id and author id,
will also be included in the JSON object to be saved.

The same procedure is the same for creating a quiz.

### Use cases

System: NUS Connect

Use case: Take a quiz Actor User

MSS:

1. User chooses a quiz
2. User starts the quiz
3. User submits the quiz
4. System shows scores

Use case ends.

Extensions:

```text
2a. User sees a question.
    2a1. User selects answers
    2a2. System stores user selections
    2a3. User navigate to another question
```

---

### **Forum Page**

The content of forum is split into multiple components, a list of all the posts,
the main post and the replies. There are essentially two pieces of data involved
in the post functionality.

- A post
- A reply

Main considerations

- Allowed tags
- CRUD & Database interactions
- Search and filter
- Linkage with other components
- Storing and display of markdown text
- Code syntax highlighting
- Integration with Quiz

### Post

A post is made up of

- meta data
- collection of tags selected by the user
- an optional string linking to a question

A student cannot create tags but the module admins can create tags. This is to
prevent too many random single use tags from popping up.

```json
{
	"id": "J69uViSUVik2Xwcr_wZUK", // 21 char unique identifier generated by nanoid
	"author_id": "Alan_Tan", // user who made the post
	"title": "How to post a quiz", // user fills in this field, it is compulsory
	"content": "This is a longer message, This is a longer message", // user fills in this field, it is not compulsory
	"created_date": "12 April 2020", // auto generated with javascript datetime function
	"edited_date": "12 April 2020", // auto generated with javascript datetime function
	"tags": ["Question"], // user selects the tags
	"week": "Week 1", // week is auto generated based on the school sem
	"reply_count": "37", // reply count updated after a reply is posted
	"up_votes": "10", // up votes will be updated after a user likes the post
	"is_edited": false, // will show if the user has changed or updated the original post
	"related_question_id": "" // A string ID that will link to a question. This field is optional
}
```

### Reply

A reply is made up of

- meta data

A reply can only be created if the main post exists and hence cannot exist as a
stand alone unit. This is done to make sure that there are no replies that have
no master post.

```json
{
	"id": "placeholder", // 21 char unique identifier generated by nanoid
	"post_id": "J69uViSUVik2Xwcr_wZUK", // the main post that this reply was posted under
	"author_id": "Alan_Tan", // user who made the reply
	"content": "This is a reply message", // user fills in this field, it is compulsory
	"created_date": "12 April 2020", // auto generated with javascript datetime function
	"edited_date": "12 April 2020", // auto generated with javascript datetime function
	"up_votes": "10", // up votes will be updated after a user likes the reply
	"is_edited": false // will show if the user has changed or updated the original post
}
```

### Forum page design considerations

#### Data structure of posts and replies

Some considerations to take note of:

- Execution time
- Maintainability
- Data Storage
- Searching and filtering
- Database interactions
- Coding conventions

Minimally, we wanted the post and reply to have an unidirectional relationship
between each other.

#### Option 1 (Current choice)

Posts will not have an array of replies and the reply will instead store the
post_id. Although it might take longer to get the data. This makes more sense as
a reply should not be able to exist without a post and a post can exist without
a reply.

#### Option 2

Posts will store a list of replies and the reply will not have the post_id. That
way, when getting data for a post page, the function will only have to look for
the reply indexes that are in the list of replies.

---

### **Dashboard Page**

In the dashboard page, there is information about the level of the user, the
recent announcements that are posted, quests that the user can do, some info
about the user badges and the the user's ranking on the leader board. There are
2 major components in the dashboard page:

- Announcement Item
- Quest Item

These components are used to display the data for Announcements and quests
respectively.

Some of the main considerations that were taken into consideration are:

- CRUD & database interactions
- Filtering by week
- Inline editing
- Linkage with other components

### Announcement

The announcement is made up of

- meta data
- title and contents

```json
{
	"id": "hg1x0pHhPrxk6Adr0EHVR", // 21 char unique identifier generated by nanoid
	"week": 1, // for classification and filtering
	"author_id": "WnqaRimjGDDY9KxM49XQ", // to find the user who made the announcement
	"title": "Welcome to your first week of CS2030!", // title of the announcement
	"content": "Some things to note for this week ...", // content of the announcement
	"created_date": 1622557680592 // date the announcement is created in number form
}
```

The announcements can be filtered by week in the dashboard and can only be
posted, edited and deleted by users with admin privileges.

### Quest

The quest is made up of

- meta data
- description and rewards

```json
{
	"id": "AImRUMlFnX7JwU-eInSoK", // 21 char unique identifier generated by nanoid
	"description": "Post a forum post", // description of the quest for users to see
	"week": 1, // for classification and filtering
	"type": "forum", // for classification and auto generation of quest requirements
	"count": 1, // number of times the quest can be completed
	"link": "", // quick link to the location of the quest
	"start_date": 1622557680592, // user input start date
	"end_date": 1622557680592, // user input end date
	"reward": {
		"exp": 20, // exp for completion of quest
		"badge": "new badge" // badge for completion of quest (may be left empty)
	} // reward item that can be used to award exp and badges
}
```

The quests can be filtered by week in the dashboard and can only be posted,
edited and deleted by users with admin privileges.

### Dashboard page design considerations

todo

---

### **Forms and data modification**

All our user input forms are built from formik and yup with some use of
react-select for multi and single select fields. The following pages make use of
some type of form:

- Dashboard (announcement and quest)
- Forum (post and edit)
- Quiz (create quiz and create question)

All of the forms we built are used for both editing and creation purposes and
hence we take in the optional label of the form as a component in order to check
if the form is editing or creating an object. Along with this, most of the forms
will take in an optional object of the original type. For example, if we are
editing a post, the NewPost form will take in the current post and then can be
used to auto fill in the previously typed in fields.

### Formik and Yup

Formik helps us to get the values in and out of the form state, perform
validation and send error messages and handles the form submissions.

Yup handles the validation of each field and is flexible in providing error
messages for the user to see.

### Forms design considerations

We chosoe formik over redux-forms as formik is lighter and faster for any system
to run. On top of that, we have no need for some of the functionality that
redux-form provides and hence formik was a good choice for us.

---

### **Integration**

The integration of quiz and forum is one of the core features of the
application. Currently, typical quiz applications do not support continued
discussion. The quiz/question setters might add in an explanation for people to
check against their answers, but they usually failed to convey in entirety what
is required for the takers to fully dissolve their doubts. Therefore, what
usually happens afterwards is that someone has to explicitly create a forum post
outside of the quiz system, make a explicit reference what quiz/question he/she
is talking about, then make some clarifying questions. Imagine all these
valuable clarifications that could benefit the question takers in the future
semesters, but turning into a disorganized mess and getting lost in time.

We offer a few practical ways to integrate between functionalities.

(Current implementation)

- When someone is reviewing a quiz that he/she just taken, there is an option to
  ask related questions in the forum. By clicking on that option, the taker can
  write a post without specifying which question he/she is referring to. The
  question ID will be recorded and when someone sees such a post, the post
  itself contains an option to view the question directly.
- When reviewing a quiz, the takers can also see related posts listed in the
  same page.

(Alternative)

- When someone is creating a question, as the setter he/she can include an
  explanation, which will be automatically published as a special category of
  automatic post. His explanation will be the first comment. That comment could
  potentially be hidden and only be seen if someone had attempted that question.
  That post will contain a reference to the exact question and have a way to
  allow viewers to attempt that question directly. What is nice with this
  setting is that the viewers can comment and leave behind a trail of focused
  discussion for that particular question.
- The other channel to automatically publish question related post is when
  someone is attempting or reviewing a quiz/question. There will be an option to
  create a post if there’s no post for that question. If there’s already a post,
  he can check and comment on that existing post.

So technically every question will have posts where people can continue the
discussion over many semesters. On the other hand, these posts will only be
generated if ever someone needs an explanation. Thus, if the question is easy
and no one had any issue with the question, there won’t be a post for that
question at all.

---

### **Login and Authentication**

Login is done with [next-auth](https://next-auth.js.org). To check if someone is
signed in, the useSession() hook is implemented and to save the state between
pages, `Provider` from next-auth/client is implemented. If the application is
ready for deployment, change the `NEXTAUTH_URL` in .env to the canonical URL of
the website. All traffic is secure as it uses cross site request forgery tokens
on sign in and sign out. More info on security and authentication can be found
[here](https://next-auth.js.org/getting-started/introduction).

#### Providers

Currently the supported providers are: Google ang Github. To setup providers in
development, Google and Github accounts are needed. To add the necessary
information. A `.env` file will have to be made in the root directory. The
contents of the `.env` file as as follows:

```text
GITHUB_ID=
GITHUB_SECRET=

GOOGLE_ID=
GOOGLE_SECRET=

NEXTAUTH_URL=http://localhost:3000

```

To set it up, get the a API authentication id and secret from Github and
Google's developers pages and put them in their respective fields.

---

### **Module**

A module is equivalent to any course of study. We organize information into different modules as a direct mapping of the modular system in universities such as NUS. However, there is no restriction in creating an artificial course that may not exist in real life.

The shape of module data is as follows:
```json
{
  id: string
  title: string
  users: string[]
  questions: Question[]
  quizzes: Quiz[]
  posts: Post[]
  replies: Reply[]
  announcements: Announcement[]
  quests: Quest[]
}
```

There is a bi-directional relationship between modules and users, where a module keeps a list of userIds of enrolled users and each user keeps a list of enrolled modules as well. This means care must be taken to ensure that the information between a module and a user is always in sync.

Though not planned to actively support all modules in NUS at the moment, the module system we built should be able to expand and allow multiple modules to be run concurrently.

---

## **User Stories**

Priorities:

- High (must have): `* * *`
- Medium (nice to have): `* *`
- Low (unlikely to have):`*`

| Priority | As a …​        | I want to …​                                                         | So that I can…​                                                      |
| -------- | -------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `* * *`  | student        | track my progress throughout the semester                            | meet my module requirements                                          |
| `* * *`  | student        | visualize my progress                                                | be motivated to work towards completing required tasks               |
| `* * *`  | student        | have a clear view of weekly tasks to be completed                    | tell what is to be done and what is left                             |
| `* * *`  | student        | have a level bar to judge my progress                                | feel like I’m improving as the weeks go by                           |
| `* * *`  | student        | post my opinions on the forum anonymously                            | stop feeling embarrassed to ask “dumb” questions                     |
| `* * *`  | student        | upvote or like forum posts that are interesting                      | help make them receive more attention                                |
| `* * *`  | student        | view my upvoted forum posts                                          | easily find and refer to them later                                  |
| `* * *`  | student        | tag my posts                                                         | have an easier time finding and classifying them                     |
| `* * *`  | student        | chat with my fellow module mates via forum Q&A                       | learn from others who are also taking the module                     |
| `* * *`  | student        | do past year quizzes                                                 | get a better understanding of the module                             |
| `* * *`  | student        | be able to make my own quizzes                                       | share my knowledge with other students and help them learn           |
| `* * *`  | student        | upvote and like quizzes                                              | receive more attention                                               |
| `* * *`  | student        | view my upvoted quizzes                                              | easily find and refer to them later                                  |
| `* * *`  | student        | join telegram groups that are related to the mod                     | view discussions and ask questions                                   |
| `* * *`  | student        | have all relevant information about a module within a single webpage | immediately navigate to it                                           |
| `* * *`  | student        | contribute online resources that I found to related to module topics | let others benefit from them                                         |
| `* * *`  | student        | write guides and articles                                            | let them serve as references to myself and my fellow module students |
| `* * *`  | student        | gamify the process of learning                                       | make doing module related work more fun                              |
| `* * *`  | student        | write my forum posts in markdown                                     | have an easier time formatting my posts                              |
| `* * *`  | student        | save my forum posts                                                  | continue where I left off in the future                              |
| `* * *`  | student        | contribute to the success of the module                              | future students taking this module can learn better                  |
| `* *`    | teaching staff | be able to monitor the progress of my students                       | meet my module requirements                                          |
| `* *`    | teaching staff | create quizzes for students to attempt                               | test easily misunderstood concepts                                   |
| `* *`    | teaching staff | provide feedback to students for their attempted exercises           | clarify any doubts on the spot                                       |

---

## **Non-Functional Requirements**

> Non-functional requirements specify the constraints under which the system is
> developed and operated.

- Technical requirements:
  - should work on both 32-bit and 64-bit environments
  - should work with all existing OS that can install and browse the web via
    Chrome/Firefox
- Performance requirements:
  - should respond within a maximum of three seconds
- Load requirements:
  - should work under heavy load
  - should allow over 1k modules/posts/quiz/questions/users
- Quality requirements:
  - should be usable by a freshman
  - should be usable by all NUS students
- Security requirements:
  - should be secure against known attacks/hacks
  - should not store passwords
- Process requirements:
  - should follow schedule closely and deliver a major update every one month
- Notes about project scope:
  - should not required to handle majority of admin tasks of a TA/Prof

---

## **Developer Workflow**

Please checkout our [workflow guide](WorkflowGuide.md)

---

## **Glossary**

| Term     | Description                               |
| -------- | ----------------------------------------- |
| quiz     | a collection of questions                 |
| question | includes question text and answer options |
| answer   | a possible option for a question          |
| forum    | a collection of posts by users            |
| post     | a way of communication between users      |
| badge    | a token of accomplishment                 |