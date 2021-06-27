---
sidebar_position: 7
title: Configuration Guide
---

## **Setup Guide**

Refer to our [developer guide](DeveloperGuide) to see the details of our tech
stack.

## Front-end
To setup the front-end, which is a nextjs application, first clone the github repository and
run `yarn install` to download relevant dependencies.

To setup login functionality take a look at
[this section](DeveloperGuide#providers) and set up your `.env` file
accordingly.

To start the development server, run `yarn dev`. Note that all additional
dependencies should be added via `yarn add`.
- e.g `yarn add react-toastify`

## Back-end
Our backend is a flask application that provides basic CRUD functionality for our application. 
The backend is hosted by a rising cloud service provider [Deta](https://www.deta.sh/) 
and we utilize the Deta Micros & Deta Base to store our data. In terms of configuration,
 a brief understanding of Deta is required and the steps taken to develop the backend include the
 following:
 - clone the backend github repo
 - install relevant Deta CLI tools
 - edit the code in `main.py`
 - update any requirements in `requirements.txt`
 - run `deta deploy` in the command line to deploy the changes
 - view the deta dashboard to check logs and database content


## **Additional Resources**

The editor of choice is Visual Studio Code. Below is a list of recommended
plugins to install:

- Bracket Pair Colorizer 2
- GitLens
- Prettier
- Tailwind CSS intelliSense
- ESLint
