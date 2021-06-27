---
sidebar_position: 6
title: Testing Guide
---

## **Our Believe & Strategy**

Our testing strategy is guided by the test trophy (By Kent C. Dodds):
![test trophy](https://res.cloudinary.com/kentcdodds-com/image/upload/f_auto,q_auto,dpr_2.0/v1622744540/kentcdodds.com/blog/the-testing-trophy-and-testing-classifications/trophy_wx9aen.png)

Now that we are on the same page, let's go through our game plan.

### Our Belief

We want to empathize that we see tests as a critical part of well-written
program. We understand that software of significance should be tested. This
gives the developers great confidence that the software will work as expected.

### Our Strategy

- Static is a must (Supported by TypeScript & IDE integrations)
- Unit for critical components (Supported by Jest)
- Integration & E2E to ensure users experience what we build (Supported by
  Cypress)
   - Test cases are written per page & interactions permitted
   - Test cases should verify both non-logged in users and logged in users behaviors
- System and Acceptance Test (Supported by QA & real users)

### Test Artifacts
For the purpose of accessment and documentation, we provide the following visual test artifacts (Recorded test runs for end to end tests, test summary statistics etc) as a proof of test execution and feedback. The details of the test cases can be found in the codebase as well.

#### Video recorded of a Cypress End-to-end test run:
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jMIecsQFJH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Gif of automated test results of a Github Action run:
![gif](https://github.com/notawakestudio/NUSConnect-Docs/blob/master/static/img/githubActionArtifact.gif?raw=true)

---
## **Setup Guide**

After running `yarn install`, you should be ready to start testing as all the
required dependencies are installed.

## **Static Test**

We developed our application in TypeScript to take advantage of the ability to
ensure type safety whenever possible. With the help of the IDE, any code that's
loosely typed will be obvious to us and we aimed to eliminate the warnings by
adding suitable type definitions to objects, variables and function
declarations.

Along the same lines, we use Prettier + Eslint to enforce a consistent style
guide within the codebase. To run Eslnit, type in `yarn lint`.

## **Unit Test**

We use Jest and React testing library to perform unit tests. We aimed to include
unit tests to ensure low level but critical component logics are well tested. To run
tests, type in `yarn test`.

## **End to End Test**

We use Cypress to perform end user testing and validation of user interface.
Understand that UI changes can be more frequent and therefore hard to maintain,
we have decided to include E2E tests in the later stage. To use Cypress for test
development, start with `npx cypress open` to open up the desktop client of
Cypress. Click on one of the written test to run it in the test browser. Any
changes saved on the currently running test file will trigger a rerun of the
test. You can also run `npx cypress run` to run all tests headlessly.

## **Automated Testing**

On top of verifying program correctness during development, we also ensure
updates to the production build are always tested before merging. Please refer
to our [Continuous Integration section](DevOpsGuide#continuous-integration) to
find out more on how we perform testing with the help of Github Actions.

---

## **System Test**

> Take the whole system and test it against the system specifications.

As we are the sole developers of the entire application, we will function as QA
engineers to ensure the system is functioning properly and fails gracefully.

Test cases: 

- The website should be performant under reasonable load (500 users requesting for the
webpages within a span of 3 seconds)
   - Input: load the homepage using Jmeter with the above specifications.
   - Expected behavior: respond code 200 and report showing pages are loaded successfully.

#TODO (More details to be added)

## **Acceptance Test**

> Test the system to ensure it meets the user requirements.

Given below are instructions to test the application manually. In fact, we will
write the equivalent integration tests such that what's descriped below will
also be verified programmatically.

This section also serves as a guide for a potential user to see what are the
testifiable requirements for the application. Note that the
[user guide](UserGuide) will be the comprehensive source of all user permitted
interactions.

### Launch and exit

1. Initial visit

   1. Visit the
      [https://nus-connect.vercel.app/](https://nus-connect.vercel.app/) of the
      website with a browser of your choice (Recommended: Google Chrome or
      Firefox)
   2. Expected: Shows the NUSConnect landing page with its Logo, Images & Text.

2. Subsequent use

   1. Refreshing or visiting NUSConnect on another browser tab.
   2. Expected: The website should still be in working conditions.

3. Exiting

   1. Close the browser or click the cross button to exit the webpage.
   2. Expected: Website should be closed normally.

### Login

1. Without login

   1. Prerequisites: The User has not logged in before or that the user has
      logged out of the application.
   2. Visit the
      [https://nus-connect.vercel.app/](https://nus-connect.vercel.app/) and any
      of the subpages within the website.
   3. Expected: The user remains logged out and is greeted by the login prompt
      in the navigation bar and other parts such as the forum and quiz. Note
      that the user will see "Anonymous" and a cat profile image on the
      navigation bar as well as when in `/dashboard`. This is the default
      behavior for our application, such that anyone who is not logged in can
      still access certain features.

2. Logging in

   1. Click on the login button on the navigation bar or visit the login page at
      [https://nus-connect.vercel.app/login](https://nus-connect.vercel.app/login).
      Select a social login provider and complete the login request.
   2. Expected: The user is redirected back to the website and is logged in.

3. Logged in

   1. Visit the
      [https://nus-connect.vercel.app/profile](https://nus-connect.vercel.app/profile)
      page.
   2. Expected: The user will see his/her username as well profile picture
      retrieved from Github/Google. The navigation bar will also reflect the
      above user information.

4. Loggin out

   1. Prerequisites: The User has logged in.
   2. Click on `logout` by first clicking on the username on the navigation bar.
   3. The user will be redirected to
      [https://nus-connect.vercel.app/login](https://nus-connect.vercel.app/login)
      page to confirm logout. Click on `Confirm Logout`.
   4. Expected: The user is redirected to
      [https://nus-connect.vercel.app/](https://nus-connect.vercel.app/) and
      remains in logged out state.

### Dashboard & Account

1. Visit Dashboard

   1. Visit
      [https://nus-connect.vercel.app/dashboard](https://nus-connect.vercel.app/dashboard).
   2. Expected: The user sees a personalized dashboard with relevant module
      information. The sidebar will also allow for navigation to other subpages.

2. Visit Badges

   1. Visit
      [https://nus-connect.vercel.app/profile/badges](https://nus-connect.vercel.app/profile/badges).
   2. Expected: The user sees a list of available badges to be earned.

3. Visit Scoreboard

   1. Visit
      [https://nus-connect.vercel.app/scoreboard](https://nus-connect.vercel.app/scoreboard).
   2. Expected: The user sees a mock scoreboard that will later be a live record
      of the experience points of learners within the same module.

4. Visit Profile

   1. Visit
      [https://nus-connect.vercel.app/profile](https://nus-connect.vercel.app/profile).
   2. Expected: The user sees a page with some of the admin information about
      the profile.

### Forum

1. Visit Forum homepage

   1. Visit
      [https://nus-connect.vercel.app/forum](https://nus-connect.vercel.app/forum)
   2. Expected: The user sees a list of existing posts on the left and some
      forum information on the right.

2. Visit a Forum Post

   1. Visit
      [https://nus-connect.vercel.app/forum](https://nus-connect.vercel.app/forum)
      and click on any post on the left hand side.
   2. Expected: The user sees the expanded version of that post as well as all
      the replies that that author has.

3. Making a Forum post

   1. Visit
      [https://nus-connect.vercel.app/forum/create-post](https://nus-connect.vercel.app/forum).
   2. Prerequisites: The user must be logged in to make a post.
   3. Expected: The user sees the interface to create a new post towards the
      right hand side.
   4. Test case 1: Fill in the required fields, and click post.
   5. Expected case 1: A post is successfully posted and the user sees a success
      toast pop up at the top right of the screen.
   6. Test case 2: Leave the fields empty and click post.
   7. Expected case 2: A error message will pop up on the top right and text
      showing the required fields will show up. Post will not be posted.

4. Editing/deleting a Forum post

   1. Visit
      [https://nus-connect.vercel.app/forum/](https://nus-connect.vercel.app/forum).
   2. Prerequisites: The user must be logged in and the post to be edited must
      be posted by said user.
   3. Click on your post on the right hand side and click the edit button on the
      bottom left hand side of the main post.
   4. Expected: You will be given the option to edit your post and delete your
      post.
   5. Test case 1: Edit the fields you want to change, and click save.
   6. Expected case 1: The post is successfully updated and the user sees a
      success toast pop up at the top right of the screen.
   7. Test case 2: Click on delete post at the bottom left hand side of the
      post.
   8. Expected case 2: A prompt asking you if you want to delete your post will
      pop up and clicking delete will remove your post.

5. Replying a Forum post

   1. Visit
      [https://nus-connect.vercel.app/forum](https://nus-connect.vercel.app/forum)
      and click on any post on the right hand side.
   2. Expected: User should see a reply box below the main post at the right
      hand side of the screen
   3. Test case 1: Fill in a reply and click post.
   4. Expected case 1: A reply is successfully created and the user sees a
      success toast pop up at the top right of the screen.
   5. Test case 2: Leave the fields empty and click post.
   6. Expected case 2: A error message will pop up on the top right and text
      showing the required fields will show up. Reply will not be posted.

6. Liking a Forum post or reply

   1. Visit
      [https://nus-connect.vercel.app/forum](https://nus-connect.vercel.app/forum)
      and click on any post on the right hand side.
   2. Expected: User should see a like icon on the main post as well as the
      replies.
   3. Test case 1: Like a post or reply by clicking on the like icon.
   4. Expected case 1: A success toast is shown in the center bottom of the
      screen and the like button turns blue.

### Quiz

1. Visit Quiz homepage

   1. Visit
      [https://nus-connect.vercel.app/quiz](https://nus-connect.vercel.app/quiz)
   2. Expected: The user sees a group of cards in the center of their screen
      with information about each quiz.

2. Visit a Question

   1. Visit
      [https://nus-connect.vercel.app/quiz](https://nus-connect.vercel.app/quiz)
      and click on any question in the center.
   2. Expected: A pop up should appear asking for confirmation and there should
      be an option to go into the question itself.

3. Making a question/quiz

   1. Visit
      [https://nus-connect.vercel.app/quiz](https://nus-connect.vercel.app/quiz).
   2. Prerequisites: The user must be logged in to make a question.
   3. Expected: The user see the contribute a question button in the center of
      the screen. Users can click this to go into a interface to create an
      **individual** question / a quiz made of a few questions.
   4. Test case 1: Fill in the required fields, and click save.
   5. Expected case 1: A question is successfully saved and the user sees a
      success toast pop up at the top right of the screen.
   6. Test case 2: Leave the fields empty and click save.
   7. Expected case 2: A error message will pop up on the top right and text
      showing the required fields will show up. Question will not be posted.

4. Editing/deleting a question

   in progress

5. Liking a quiz

   1. Visit
      [https://nus-connect.vercel.app/quiz](https://nus-connect.vercel.app/quiz)
      and click on the like button on any of the quiz questions.
   2. Expected: User should see a like icon on the main quiz as well as the
      replies.
   3. Test case 1: Like a quiz or reply by clicking on the like icon.
   4. Expected case 1: A success toast is shown in the center bottom of the
      screen and the like button turns blue.
