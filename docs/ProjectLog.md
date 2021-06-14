---
sidebar_position: 9
title: Project Log
---

## **Team Progress breakdown**

| Date      | Task Description                                | Team member | hours |
| --------- | ----------------------------------------------- | ----------- | ----- |
| 03/5/2021 | Initial team meeting                            | YL + JX     | 3     |
| 05/5/2021 | Learning React and NextJS                       | YL + JX     | 15    |
| 10/5/2021 | Week 1 Sprint team meeting                      | YL + JX     | 2     |
| Week 1    | Set up Quiz, Forum Dashboard                    | YL + JX     | 20    |
| 17/5/2021 | Week 2 Sprint team meeting                      | YL + JX     | 2     |
| Week 2    | Set up Login authentication                     | JX          | 5     |
| 24/5/2021 | Week 3 Sprint team meeting                      | YL + JX     | 2     |
| Week 3    | Set up & migrate documentation site             | YL          | 5     |
| Week 3    | Set up firebase connection                      | JX          | 5     |
| Week 3    | UI improvements and responsive design for forum | JX          | 5     |
| Week 3    | Improve Quiz creation UI                        | YL          | 5     |
| week 3    | UI fixes for landing and dashboard              | YL          | 3     |
| week 3    | Video and milestone 1 docs preparation          | YL + JX     | 3     |
| week 3    | Discuss backend data formats and arrangements   | YL + JX     | 3     |
| 31/5/2021 | Week 4 Sprint team meeting                      | YL + JX     | 2     |
| Week 4    | Adding tags to forum posts                      | YL          | 2     |
| Week 4    | Include Cypress as E2E teting tool              | YL          | 5     |
| 07/6/2021 | Week 5 Sprint team meeting                      | YL + JX     | 2     |
| Week 5    | Fix fetch & update of forum data                | YL          | 5     |
| Week 5    | Update landing page for forum                   | JX          | 5     |
| Week 5    | Update UI of Quiz functionality                 | JX          | 5     |
| Week 5    | Create badges page                              | JX          | 5     |
| week 5    | Create scoreboard page                          | YL          | 3     |
| week 5    | Update profile page to display module info      | YL + JX     | 3     |
| 14/6/2021 | Week 6 Sprint team meeting                      | YL + JX     | 2     |
|           | Week 7 Sprint team meeting                      | YL + JX     | 2     |
|           | Week 8 Sprint team meeting                      | YL + JX     | 2     |
|           | Week 9 Sprint team meeting                      | YL + JX     | 2     |
|           | Week 10 Sprint team meeting                     | YL + JX     | 2     |

## **Progress in a few words**

Also noting down some thoughts along the way...

### Week 1

First week of development saw significant changes to our application. Besides
the quiz functionality that I was working on, the landing page, dashboard as
well as other aspects of the project had great improvements made. Though UI is
not a focus in our initial phase of development, it was nice to view the
application and receive visual feedback from the work that we put in. There were
many challenges that we managed to overcome via discussion and experimentation.
We were able to decide on the schema of data to be stored and also create a few
mock data files to work with. The application was also finally deployed to the
cloud and we would be able to see real time updates to it with every PR we
merge. I think this week created a great foundation for us to continue to work
and improve our product towards final release.

18/5/2021 - Yongliang

### Week 2

Second week of development included UI improvements, the creation of our logo,
functionality improvements and allowed for users to login to access the pages.
We also added a backend on [deta base](https://www.deta.sh/) to the project and
revamped the UI used for documentation purposes. Continuing from the first week
of development, we refactored code and cleaned up redundant functions. Whilst
developing the pages, we realized that there was significant lag coming from
`getServerSideProps()` and started using `getStaticProps()` instead. As
development continued, we have changed the way we stored the data multiple times
and created a backend API written in flask to facilitate this. And with the
addition of the deta base backend, we are now able to get and post data with
ease. Overall, the improvements to the app this week have been substantial and
will be crucial moving forward.

25/5/2021 - Jun Xiong

### Week 3

Last week's progress was slightly slow and we had to spend some time updating
all the documentation and publicity resources in preparation for milestone 1
submission. However, I am glad that the login functionality is now in place and
we are in good position to make the gamification side of the project. In terms
of quiz and forum functionalities, we were proceeding at a slower pace due to
more considerations required in terms of data storage and communication between
the front-end and the back-end. Overall, the improvements though small, were
still important as we head towards more complex work in the coming month.

31/5/2021 - Yongliang

### Week 4

We made a lot of progress last week, with forum and quiz seeing major backend
improvements with relation to speed and functionality. We also improved the UI
and updated most of our website to support both mobile view and dark mode. We
are still behind on some of our goals like gamificaiton and course selection but
I think that with the following weeks, things will start to pick up pace.
Overall, the changes made last week will put up in a better position to continue
development as we start to add more pages and more features to the app.

7/6/2021 - Jun Xiong

### Week 5

Further changes were made in order to get the forum and quiz basic functionalities to
be even more polish. There were many  consuming tasks that though not important
individually, affect the overall user experience of our application. We added things like
the search and filter functionality to forum. We also started to look at the highlight of
our application: the integration between forum and quiz. The ability to view a relevant post
when reviewing a quiz attempt was implemented and more updates to come in the following days!
Overall, I would say the week's progress was on the slower side of development. However, there
were many important lessons we learned through this journey. For example, the exploration of 
data management packages such as SWR and react-query for the front-end data fetching mechanism. 
There were also many minor design bugs that we uncovered and fixed along the way. As we are soon
reaching the midway of our development, we hope to keep up with the consistency and make realistic
improvements towards finishing the application.

14/6/2021 - Yong Liang
