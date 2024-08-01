# The Product
IronProjects Hub is a powerful application designed to manage project submissions for academic projects, providing a seamless interface for companies and students to collaborate on real-world projects.

**How It Works**
For Companies:

	•	Add and Edit Projects: Companies can easily add new projects and update existing ones, ensuring that students have access to the most current opportunities.
	•	Restricted Access: Companies have the ability to manage their own projects but do not have visibility into all projects within the hub, maintaining privacy and focus.

For Students:

	•	Explore Projects: Students can browse through a comprehensive list of projects, viewing detailed information about each one, including objectives, requirements, and potential outcomes.
	•	Select Favorites: After reviewing the available options, students can pick their favorite projects that align with their interests and academic goals.

**Tech Stack**
- Javascript
- React
- ChakraUI

Check the app [here](https://ironprojects-hub.netlify.app/)

# Technical Features
- Wishlist UI + Logic
- CRUD operations

# Data

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

[Frontend Repository](https://github.com/carolinabrods/ironprojects-hub/)

[Backend Repository](https://github.com/ritadomar/ironprojects-hub-backend)

[Deploy Link](https://ironprojects-hub.netlify.app/)

<br/>

### Contributors

Carolina Rodrigues - [`<carolinabrods>`](https://github.com/person1-username)

Rita Martins - [`<ritadomar>`](https://github.com/person2-username)
