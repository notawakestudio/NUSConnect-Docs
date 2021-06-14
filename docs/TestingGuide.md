---
sidebar_position: 6
title: Testing Guide
---
## **Our Believe & Strategy**
Our testing strategy is guided what is illustrated with the test trophy(By 
Kent C. Dodds): 
![test trophy](https://res.cloudinary.com/kentcdodds-com/image/upload/f_auto,q_auto,dpr_2.0/v1622744540/kentcdodds.com/blog/the-testing-trophy-and-testing-classifications/trophy_wx9aen.png)

Now that we are on the same page, let's go through what we mean by the above.

### Our Believe
We want to empathize that we see tests as a critical part of well-written program. We understand that software of significance should be tested well. This gives the developers great confidence that the software will work as expected. 

### Our Strategy
- Static is a must (Supported by TypeScript & IDE)
- Unit for critical components (Supported by Jest)
- Integration & E2E to ensure users experience what we build (Supported by Cypress)

## **Setup Guide**

After running `yarn install`, you should be ready to start testing as all the required dependencies are installed.

## **Unit Test**
We use Jest and React testing library to perform unit tests. We aimed to include unit tests at the early stage to ensure low
level logics are well tested. To run tests, type in `yarn test`.

## **End to End Test**
We use Cypress to perform end user testing and validation of user interface. Understand that UI changes can be more frequent
and therefore hard to maintain, we have decided to include E2E tests in the later stage. To use Cypress for test development, start
with `npx cypress open` to open up the desktop client of Cypress. Click on one of the written test to run it in the test browser.
Any changes saved on the currently running test file will trigger a rerun of the test. You can also run `npx cypress run` to run 
all tests headlessly.

## **Automated Testing**
On top of verifying program correctness during development, we also ensure updates to the production build are always tested before merging. Please refer to our [Continuous Integration section](DevOpsGuide#continuous-integration) to find out more on how we perform testing with the help of Github Actions.
