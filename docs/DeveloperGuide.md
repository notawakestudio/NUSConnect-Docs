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

---

## **Tech Stack**

### **Front end**

- Next.js
- TypeScript
- Tailwind CSS

### **Back end**

- Firebase
- Deta base
- Flask

### **Test**

- Jest
- React testing library
- Cypress

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

- perfers viewing the website on both mobile and laptop environment
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

A quiz is make up of

- meta data
- collection of questions (identified by question ID)

```javaScript
    {
        "id":"TxRDDtSEpnpodO0d-3ygJ", // 21 char unique identifier generated by nanoid
        "title":"CS2030 Quiz 1", // for readability and easy of classification
        "author":"Bob", // potentially changed to user ID
        "created":"May 11, 2021", // simple readable date, for filtering
        "week":"1", // for simple classification and display on task board
        "tags":["OOP","intro"], // for filtering and searching
        "questions": ["mtCHNvypLt4TKizuqmP6f","gf669ye6dy4ltJSkKb_tZ", "SUdbM9KBpsbywHQvxpFir","YQdkspzjHcwTL3txI2Bc8"] // list of questions
    },
```

For each quiz, there will be a list of questions. The order of questions
displayed in the quiz is according to the order stored. There will be two
different modes when interacting with the quiz. User is either taking a quiz or
reviewing a quiz. The UI should be kept mostly the same, except for the ability
to interact with the quiz. When a user submitted a quiz, he will be able to
review the quiz results and check the correct answers for each question.

### Question

A question is make up of

- meta data
- question text
- answers (both correct and incorrect answers)

```javaScript
{
    "id": "gf669ye6dy4ltJSkKb_tZ", // 21 char unique identifier generated by nanoid
    "modules": ["CS2030", "CS2030S"], // for cases of variants
    "type": "MRQ", // MCQ, MRQ
    "question": "What are valid format specifiers for `the String.format()` method?",
    "correct_answers": ["%f", "%d","%s"], // in consideration of MRQ
    "incorrect_answers": ["%w","%z","%q"],
    "author":"yongliang", // consider changing this to contributors and user ID
}
```

For each question, there will be a list of potential answers. Each answer is a
string that is either defined as correct or incorrect. The order of the answers
will be random when shown, hence there is no inherent order for each answer
position. This also means that the setter should use "None of the other options"
instead of "None of the above options" when setting questions.

### Making a question & quiz

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

```
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

```
2a. User sees a question.
    2a1. User selects answers
    2a2. System stores user selections
    2a3. User navigate to another question
```

---

### **Forum Page**

The content of forum is split into multiple components, a list of all the posts,
the main post and the replies.

#### **Post**

Below is the example data for a single post. Some notable items in this are the
`id` which is randomly generated by
[nano-id](https://zelark.github.io/nano-id-cc/). The author's data is stored in
another database and can be accessed by using the author_id.

```javascript

 {
     "id" : "J69uViSUVik2Xwcr_wZUK",
     "author_id": "Alan_Tan",
     "title": "How to post a quiz",
     "content":"This is a longer message, This is a longer message",
     "created_date": "12 April 2020",
     "edited_date": "12 April 2020",
     "tags": ["Question"],
     "week": "Week 1",
     "reply_count": "37",
     "up_votes": "10",
     "is_edited": false
 }

```

#### **Reply**

Below is the example data for a single reply. Some notable items in this are the
`id` which is randomly generated by
[nano-id](https://zelark.github.io/nano-id-cc/). Replies are stored separately
from the post itself and are all tagged to a post_id.

```javascript

{
     "id" : "reply2",
     "post_id" : "J69uViSUVik2Xwcr_wZUK",
     "author_id" : "Alan_Tan",
     "content":"This is a reply message",
     "created_date": "12 April 2020",
     "edited_date": "12 April 2020",
     "up_votes": "10",
     "is_edited": false
}

```

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

```
GITHUB_ID=
GITHUB_SECRET=

GOOGLE_ID=
GOOGLE_SECRET=

NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=

```

To set it up, get the a API authentication id and secret from Github and
Google's developers pages and put them in their respective fields.

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

## **Glossary**

| Term     | Description                               |
| -------- | ----------------------------------------- |
| quiz     | a collection of questions                 |
| question | includes question text and answer options |
| answer   | a possible option for a question          |
| forum    | a collection of posts by users            |
| post     | a way of communication between users      |