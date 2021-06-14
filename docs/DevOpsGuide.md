---
sidebar_position: 5
title: DevOps Guide
---

## **Continuous Integration**

We use Github Actions to run tests for each PR.

## **Continous Deployment**

We host our front end on Vercel, which has excellent support for Next.js applications.
Due to resources constraints, following is the steps to deploy our application:
- Merge PR to branch `main` on notawakestudio/NUSConnect Organization Github
- Fetch remote in the fork `main` on tlylt/NUSConnect to sync the changes
- Trigger redeployment on Vercel
- Website should be live in a few minutes at [NUS Connect](https://nus-connect.vercel.app/)