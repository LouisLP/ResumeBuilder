# Jobreel Coding Challenge 🧑‍💻

Thank you for your interest in Jobreel! Through this take-home assignment we will

- evaluate your coding abilities
- judge your technical experience
- understand how you design a solution

We will evaluate your solution based on the following criteria:

- Overall solution design
- Code quality
- UI/UX quality

## Background & Acceptance Criteria

At Jobreel we want to help young talent to kickstart their careers. That’s why we intend to create a resume builder and it is your job to build a simple first prototype that meets the following **acceptance criteria:**

- As a User I can create a new resume
- As a User I can add the following data to a resume
    - Name
    - A short summary
    - Work experience as a list (Title/Company Name, Timeframe, Description)
- As a User I can view a resume in a formatted way (does **not** need to be printable or exportable as PDF)
- As A User I can see all resumes I created in a list and choose existing resumes to edit

## Get started

We created this boilerplate project that already has a server app based on NodeJS/Express/MongoDB set up. Start with running the database via:

```
docker-compose up
```

Then you can install & run the server app

```
cd server
npm i 
npm run dev
```

## Tasks

### Create the backend endpoints

Please add RESTful API endpoints to create, read, delete and update resumes that are persisted in the MongoDB database.

### Create the client application

Please initialize a client application based on a SPA framework of your choice (e.g. React, VueJS) in the `/client` folder. Please make sure it's runnable with a single `npm` command on a different port then the server application.

### Build client features

Please implement all necessary client features to meet the acceptance criteria.

## Submitting your coding challenge

Please submit your coding challenge through a publicly accessible git repository or as email attachment to tobias@jobreel.com on the day before your interview.