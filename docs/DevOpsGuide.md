---
sidebar_position: 5
title: DevOps Guide
---

## **Continuous Integration**

We use Github Actions to run checks for each PR. We will need to verify two
things:

- The PR is valid (ability to build and serve the website)
- The PR is correct (pass all the test cases)

The reviewing and merging of a PR will only proceed if the checks have
successfully passed.

## **Continous Deployment**

We host our front end on Vercel, which has excellent support for Next.js
applications. Due to resources constraints, following is the steps to deploy our
application:

- Merge PR to branch `main` on notawakestudio/NUSConnect Organization Github
- Fetch remote in the fork `main` on tlylt/NUSConnect to sync the changes
- Trigger redeployment on Vercel (Typically this is automatic as Vercel detects
  changes in the fork repository)
- Website should be live in a few minutes at
  [NUS Connect](https://nus-connect.vercel.app/)

We aimed to integrate fast and deploy often. This means our
PR-Review-Merge-Deploy cycle is typically within a day and our production site
is always up to date.
