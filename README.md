# IronProjects Hub

Application to manage project submissions for academic projects:
* Companies can add and edit their projects but do not have access to all projects.
* Students can see the projects list and details, and pick their favorite ones.

<br/>

## Data

**Projects**

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

**Companies**

```json
{
  "id”: Number,
  "name": String,
  "website": String,
  "userName": String,
  “userEmail”: String,
  “userPassword”: String,
  "agreesWithConditions": Boolean,
}
```

**Students**

```json
{
  "id": Number,
  "name": String,
  “email”: String,
  “password”: String,
  "cohort": String,
}
```

**Projects-Students Match**
```json
{
  "id": Number,
  "projectId": Number,
  “studentId”: Number,
}
```

<br/>

## Packages
**Styling Component Library:** 
* [Chakra UI](https://chakra-ui.com/) 

**HTTP Requests Package:**
* [Axios](https://axios-http.com/docs/intro)

**Other Packages:**
* [React Router Dom](https://www.npmjs.com/package/react-router-dom)

<br/>

## Links

### Git

[Frontend Repository](https://github.com/carolinabrods/ironprojects-hub/)

[Backend Repository](https://github.com/ritadomar/ironprojects-hub-backend)

[Deploy Link Placeholder](https://ironprojects-hub.netlify.app/)

<br/>

### Contributors

Carolina Rodrigues - [`<carolinabrods>`](https://github.com/person1-username)

Rita Martins - [`<ritadomar>`](https://github.com/person2-username)
