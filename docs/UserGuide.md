---
sidebar_position: 2
title: "User Guide"
sidebar_label: "User Guide"
---

## **Introduction**

Frustrated with the lack of material and information available from previous
sem’s and the lack of functionality in the official learning management system
LumiNUS, we set out to design a system where students can learn their module
content in a more engaging way.

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
please read our [Competitive Anaylsis](CompetitiveAnalysis) section to find out
why we think different.

## **Quick Start**

For the adventurous, just login with a variety of options (Google, Github, etc)
and start your journey today!

## **Overview**

While our dream is to make learning fun for every student regardless of module,
we hope to first create a pilot platform where targeted students studying
CS2030/S will have the best learning experience in their life.

We want students to know the various ways of learning on top of doing school
assignments (by actively raising questions and answering them, by attempting
quizzes and creating quizzes themselves, and by summarizing what they learn in
articles or diagrams to teach to others).

Lastly we want all their learning activities to be tracked and gamified to
provide a constant stream of motivation to achieve more. In summary, we hope to
provide students with the following:

### **Motivation for users**

- Gamification of tasks and visualization of student’s progress

#### **Quality of life features**

- A better quiz app, makes making quizzes easier and more enjoyable
- Forum is quick and simple to use, one-click to navigate to any post with smart
  sorting and filtering.
- Dashboard for users to see what is going on at a glance with quick access to
  all other pages.

#### **Badges**

Badges are a good way to show off your achievements to the other users in your
class. Some of the badges that are currently available are:

| Badges              | Requirement                                 |
| ------------------- | ------------------------------------------- |
| Smart Badge         | answer 1,10,100 quiz question correct       |
| Strong Badge        | complete 1,10,100 questions                 |
| Math badge          | student                                     |
| Achilles Heel Badge | get 1,10,100 questions wrong                |
| Welcome Badge       | Create and setup your account!              |
| Ace Badge           | get full marks for a quiz 1,10,100 times    |
| Community Badge     | make 1,10,100 forum posts                   |
| Takeoff Badge       | reply a post 1,10,100 times                 |
| Speed Badge         | be the first to reply a post 1,10,100 times |

#### **Experience points**

Leveling system where the user can do quests to get more experience points.

- Users will be able to see their standing in a leader-board to gauge their
  efforts compared to the other students.
- Leveling will feel rewarding as levels get exponentially harder to increase as
  time goes on.
- Leveling will unlock new user privileges as they become higher in level.

### **Learning opportunities**

- Forum
  - A forum for students to interact with one another, with live chatting,
    upvoting, and many other features.
- Wiki
  - Knowledge database for students to see a collection of articles and diagrams
    that aid in explaining concepts taught in class
- Quiz
  - Students and TAs can post their own quizzes and look back on past quizzes

### **Convenience**

- Weekly progress
  - Once the week is over, the previous week’s level and progress will become
    final (cannot be changed). Allowing the student to view the progress they
    have made in each individual week of the semester.
- Be the goto place for students when they need information or want to do
  anything related to the module.

## **Pages and Functionalities**

### 1. General

#### 1.1 Landing page

- **URL**: https://nus-connect.vercel.app/
- **Description**: Showcasing the idea behind the project and introduce the main
  features.
- **Screenshot**: ![landing](/img/userGuide/landing.png)

#### 1.2 Login page

- **URL**: https://nus-connect.vercel.app/login
- **Description**: To login via Github or Google account. Logged in users enjoy
  the ability to have a profile and interact on the website.
- **Screenshot**: ![login](/img/userGuide/login.png)

#### 1.3 Logout page

- **URL**: https://nus-connect.vercel.app/login
- **Description**: After logged in, visiting the login page will provide the
  option to logout. Afterwards users may choose to login with a separate
  account.
- **Screenshot**: ![logout](/img/userGuide/logout.png)

#### 1.4 404 page

- **URL**(example): https://nus-connect.vercel.app/404
- **Description**: The 404 page will also show up for all URL addresses that are
  unaccounted for. Users will be notified that they may have keyed in a wrong
  URL and be provided with a way to navigate back to the home page. Warning: you
  will be greeted by a cat :)
- **Screenshot**: ![404](/img/userGuide/404.png)

### 2. Personal

#### 2.1 Dashboard

- **URL**: https://nus-connect.vercel.app/dashboard
- **Description**: A place to see all the information about users' current
  progress for the selected module and also the module related information. The
  module information includes announcements and quests. For admin users, options
  will be available to modify announcements or edit the quests.
- **Screenshot**: ![dashboard](/img/userGuide/dashboard.png)

#### 2.2 Profile

- **URL**: https://nus-connect.vercel.app/profile
- **Description**: Users will be able to view details of their account. There is
  also the ability to edit users' display name. They may also view their
  enrolled module information.
- **Screenshot**: ![profile](/img/userGuide/profile.png)

#### 2.3 Inbox

- **URL**: https://nus-connect.vercel.app/profile/inbox
- **Description**: All system notifications will be available here. Users will
  be notified about their on-site activities. Users will be able to mark
  messages as read.
- **Screenshot**: ![inbox](/img/userGuide/inbox.png)

#### 2.4 Badges

- **URL**: https://nus-connect.vercel.app/profile/badges
- **Description**: All available badges will be displayed here. Each badge will
  have its icon, name and the description. On the top section, users will be
  able to view their attained badges.
- **Screenshot**: ![badges](/img/userGuide/badges.png)

#### 2.5 Scoreboard

- **URL**: https://nus-connect.vercel.app/profile/scoreboard
- **Description**: Scoreboard showcases all members of a module, ranking from
  the highest experience points to the lowest. This is the place to see one's
  involvement level within each module.
- **Screenshot**: ![scoreboard](/img/userGuide/scoreboard.png)

### 3. Module

#### 3.1 Module

- **URL**: https://nus-connect.vercel.app/module
- **Description**: A list of all currently supported modules on the platform.
  This is the place to join the module.
- **Screenshot**: ![module](/img/userGuide/module.png)

#### 3.2 New Module

- **URL**: https://nus-connect.vercel.app/module/new-module
- **Description**: A quick form for admin users to create a new module
- **Screenshot**: ![new-module](/img/userGuide/new-module.png)

### 4. Quiz

#### 4.1 Quiz Home

- **URL**: https://nus-connect.vercel.app/quiz
- **Description**: Displaying a full list of available quizzes. There are also
  sorting and filtering options for users to easily select a quiz.
- **Screenshot**: ![quiz](/img/userGuide/quiz.png)

#### 4.2 Individual Quiz

- **URL**(example): https://nus-connect.vercel.app/quiz/qff1PXQNLrFUgjI3mycVa
- **Description**: The questions within a quiz will be shown and there will be
  options to review or retry the quiz once done.
- **Screenshot**: ![take-quiz](/img/userGuide/take-quiz.png)

#### 4.3 Make New Question

- **URL**: https://nus-connect.vercel.app/quiz/make-question
- **Description**: Users may submit a new question. These questions can later be
  selected to make up a new quiz. References to the questions can be made when
  discussing them within the forum.
- **Screenshot**: ![make-question](/img/userGuide/make-question.png)

#### 4.4 Make New Quiz

- **URL**: https://nus-connect.vercel.app/quiz/make-quiz
- **Description**: Users may make a new quiz that can be attempted by others.
- **Screenshot**: ![make-quiz](/img/userGuide/make-quiz.png)

### 5. Forum

#### 5.1 Forum home

- **URL**: https://nus-connect.vercel.app/forum
- **Description**: The home page of the forum. Users may view and react to the
  posts on the forum. The toolbar on top will help users navigate the forum more
  effectively.
- **Screenshot**: ![forum](/img/userGuide/forum.png)

#### 5.2 Make New Post

- **URL**: https://nus-connect.vercel.app/forum/create-post
- **Description**: Users may post something related to the module. The support
  of Markdown syntax allows users to make quick but formatted posts.
- **Screenshot**: ![make-post](/img/userGuide/make-post.png)

#### 5.3 Make New Reply

- **URL**(example): https://nus-connect.vercel.app/forum/-lw-c8Daw9IGLOBKa0XUs
- **Description**: When viewing a particular post, logged in users can reply to
  the post.
- **Screenshot**: ![new-comment](/img/userGuide/new-comment.png)

#### 5.4 Individual Post

- **URL**(example): https://nus-connect.vercel.app/forum/-lw-c8Daw9IGLOBKa0XUs
- **Description**: Users may view and react to posts on the forum. The post
  owner will have the ability to edit the post. Other may press the like button
  to show their support.
- **Screenshot**: ![post](/img/userGuide/post.png)

## **Moving forward**

Finally, our final goal is to branch this out to every CS module and then to
every NUS module and become the “forum” for NUS where everyone can come to view
content and interact with peers taking the same mod. We hope to start small but
grow big as we implement more features and make taking a new mod become a better
experience.

We also realized that as much as we would like to implement all the features
that are beneficial and great to have, we did not manage to get to all of them
due to the lack of time. For future improvements and new features, we will
continue to keep track of them in our Github issues page and work on them in the
coming months.

## **Frequently Asked Questions (FAQ)**

Q: Can I use the website without logging in?

A: Our system comes with a gamified profile that tracks the progress of users
who actively participate in various activities. Thus, we recommend users to
login and create a profile with us. However, some features of the website will
be kept public to allow users to access the materials easily.

Q: What is the pricing model for the website?

A: In a very realistic sense, we understand that montary rewards can be very
effective in keeping a project alive. However, we decided to keep our website
free of charge for the initial launch and for as long as possible to support
learning activities. This is possible becaues we stand on the shoulders of
giants (that are kind enough to provide generous resources at minimal costs).

Q: How does it work with the modules that I am taking in NUS?

A: We support a list of modules that are direct mapping of NUS modules. Take
CS2030S as an example, students who are going to take the module in the upcoming
semester are welcome to join the same module in the website and use the study
resources provided. Accordingly, our forum and quiz functions will be organized
into weeks such that students can find the relevant information for that
particular module in that particular week.

Q: What if the module that I attend is not on the website?

A: We are open to support more modules and are ready to do so! If there are any
modules that you would like to see, please contact us directly. We are also keen
to assign admin roles to students who are interested to manage the module.
