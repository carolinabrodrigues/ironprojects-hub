# IronProjects Hub

## Description

Application to manage projects submission for our UX/UI students’ final project.

Companies will be able to add and edit their projects, but will not have access to all projects.

Students will be able to see the projects list and details, and pick their favourite ones.

## Data

Projects

```json
{
 "id": Number,
 "companyId": Number,
 "studentId": Array,
 "stakeholders":
   [
     {
       "name": String,
       "email": String
      }
   ]
  "challengeName": String,
  "challengeDescription": String,
  "videoSubmission": String,
}
```

Companies

```json
{
  "id”: Number,
  "companyName": String,
  "website": String,
  "companyUserName": String,
  "companyUser": {
       “email”: String,
       “password”: String,
    },
  "agreesWithConditions": Boolean,
}
```

Students

```json
{
  "id": Number,
  "name": String,
  "studentUser": {
       “email”: String,
       “password”: String,
    },
  "cohort": String,
  "projectId": Array,
}
```

## API's

After MVP: https://worldtimeapi.org/

## Packages

- Styling packages

- Axios

- React Router Dom

## Links

### Git

Frontend: [Repository Link Placeholder]()

Backend: [Repository Link Placeholder]()

[Deploy Link Placeholder]()

### Contributors

Carolina Rodrigues - [`<carolinabrods>`](https://github.com/person1-username)

Rita Martins - [`<ritadomar>`](https://github.com/person2-username)
