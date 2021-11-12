# Advanced Web Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project.

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday (Wednesday for PT) after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Introduction

In this challenge you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the article data array, update data, and delete data.

## Project Setup

[X] Run npm install to install your dependencies.
[X] Run npm start to run your frontend and backend code automatically.
[X] Note your backend code will run automatically when your run npm start. There is no need to seperately run a server.js file and no means to test the server through postman or the browser. Feel free to ignore any messages related to MSW or mock service workers.

## Project Instructions

In this project, you will demonstrate your mastery of these skills by creating **a login page** and **basic CRUD application.** You will implement basic security using **token authentication** and build private routes within the applcation.

## Project Requirements

**See reference materials at the bottom of the this document for API Reference Details.**

### Basic Routing

> _Build the needed utilities to restrict access to private routes._

- [x] Build a `Route` component that renders rendering `Login.js` to the path `/`.
- [x] Build a `Route` component that renders rendering `Login.js` to the path `/login`.
- [x] Build a `Route` component that renders rendering `View.js` to the path `/view`.
- [x] Build a `Route` component that renders rendering `Logout.js` to the path `/logout`.

### Login Authentication

> _Build a login form to authenticate your users along with all the components and utilities needed to support authentication._

- [x] In `Login.js`, build all UI and state functionality needed to capture a username and password. On a successful login, redirect user to the `View.js` component.
- [x] **Make sure that the input for your username and password includes the id="username" and id="password" attributes. Codegrade autotests will fail without them.**
- [x] **Make sure that the submit button to your login form includes the id="submit" attribute. Codegrade autotests will fail without them.**
- [x] In `Login.js`, add a p tag that will display an error if one occurs. Add in all state functionality needed to support error display.
- [x] **Make sure your error p tag has an id="error" attribute attached. Codegrade autotests will fail without them.**
- [x] Construct an http request that retrieves an auth token from the server when the username `Lambda` and the password `School` is passed into the request. Complete successful login auth flow and redirect to `View.js.`
- [x] Display an appropriate error message when login is not successful.

### Route Authentication

- [x] Build a `PrivateRoute` component within the components folder.
- [x] Use the `PrivateRoute` component to build a route rendering `View.js` to the path `/view`.
- [x] Use the `PrivateRoute` component to build a route rendering `Logout.js` to the path `/logout`.

### Request Authentication

> _Complete the requests needed to execute all CRUD functions._

- [x] Build a `axiosWithAuth` module within the utils folder to create an instance of axios with the authentication header.
- [x] Complete the `services/articleService.js` module. It should use make an authenticated call to retrieve and return all articles from the server.

- [x] In `View.js`, when the component mounts, use `articleService` to make an http request and add all articles to state.

- [x] In `View.js`, complete `handleDelete` so that a http request is made that deletes the article with the included id. After successfully deleting the article on the api, update local state to reflect these changes.

- [ ] `editId` is passed into the `EditForm` component. In `EditForm.js`, make a http request on mount to get the article with the id `editId`. Save the result in state.

- [ ] In `View.js`, complete `handleEdit` so that a http request is made that updates the passed in article. Set the editing state to false when the request is complete. After successfully deleting the article on the api, update local state to reflect these changes.

### Logout Authentication

> _Add in the http requests needed to logout of the application._

- [ ] In `Logout.js`, execute a http request to logout on mount. When the request is complete, the user's security token should be removed and the browser should redirect to the login page.

### Advanced Testing

> _Add the following tests within Article.test.js._

- [ ] Build a test that shows the `Article` component, given the correct props, can render without errors.
- [ ] Build a test that shows that when a correctly formatted article is passed into the `Article` component, the correct headline, author, summary and body are displayed.
- [ ] The `Article` component should display "Associated Press" when an author attribute is not avalible. Build a test that verifies that that is true.
- [ ] Build a test that show that when the deleteButton is pressed on an Article, the handleDelete functional property is executed.

> _Add the following tests within View.test.js._

- [ ] Build a test that shows the `View` component can render zero articles without errors. Make sure the mock service called made when View mounts.
- [ ] Build a test that shows the `View` component can render three articles without errors. Make sure the mock service called made when View mounts.

## Important Notes:

- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not change your `package.json` file except to install additional libraries.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### API Documentation

- **[POST]** \* to `http://localhost:5000/api/login`: returns a the current authenication information of the user. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda', password: 'School' }` for a successful login.

- **[POST]** \* to `http://localhost:5000/api/logout`: returns the expired authentication information of the user.

- **[GET]** to `http://localhost:5000/api/articles`: returns the all articles currently available. **This endpoint can only be accessed by an authenticated user.**

- **[GET]** to `http://localhost:5000/api/articles/:id`: returns a single article with the id. **This endpoint can only be accessed by an authenticated user.**

- **[POST]** to `http://localhost:5000/api/articles`: creates a article object. Returns all available articles. Pass the article as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

- **[PUT]** to `http://localhost:5000/api/articles/:id`: updates the article using the `id` passed as part of the URL. Returns all available articles. Send the updated article object as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

- **[DELETE]** to `http://localhost:5000/api/articles/:id`: removes the article with the `id` referenced. Returns all available articles. **This endpoint can only be accessed by an authenticated user.**

#### Article Data Structure

```
{
    id: 'aMqwd', //unique article id
    headline: "headline", //title of article
    createdOn: '2021-08-09T18:02:38-04:00
', //timestamp of when article was added
    summary: "summary", //short summary statement of article
      body: ""  //paragraph of article text
}
```

## Submission format

- [ ] Submit via Codegrade by commiting and pushing any new changes to **your main branch.**
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback. For more information on how to access and read your feedback, check [here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)
- [ ] New commits will be evaluated by Codegrade if pushed before the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.

2. What steps can you take in your web apps to keep your data secure?

3. Describe how web servers work.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
