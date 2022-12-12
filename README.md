# HyperEnglish Web Application

A project for the portfolio to get a job.

**HyperEnglish** is English vocabulary series that are suitable for students and teachers in Information Technology.

**Technology stack**:&nbsp;
[![](https://img.shields.io/badge/-React-%2361dafb)]()
[![](https://img.shields.io/badge/-Node-%2343853d)]()
[![](https://img.shields.io/badge/-Express-%23000d)]()
[![](https://img.shields.io/badge/-MongoDB-%2300ED64)]()

**Dependencies**:

Client:&nbsp;
[![](https://img.shields.io/badge/-SASS-%23bf4080)]()
[![](https://img.shields.io/badge/-React%20Slick-%235b5e6d)]()
[![](https://img.shields.io/badge/-React%20Hook%20Form-%23ec5990)]()
[![](https://img.shields.io/badge/-React%20Router-%23bd1825)]()
[![](https://img.shields.io/badge/-Redux%20Toolkit-%23764abc)]()

Server:&nbsp;
[![](https://img.shields.io/badge/-Mongoose-%23800)]()
[![](https://img.shields.io/badge/-Bcrypt-%2337b24d)]()
[![](https://img.shields.io/badge/-JWT-%23d63aff)]()
[![](https://img.shields.io/badge/-Cookie%20Parser-%23000)]()

[**Link Demo**](https://fe-hyper-english.onrender.com/)

[**Video Demo**](https://youtu.be/DV2zjr31XlI)

![](./docs/images/overview.png)

&nbsp;

**Folder structure**:

```text
root/
├── client/
│   ├── public/
│   ├── src/
|   |   ├── assets/
|   |   |   ├── scss/
|   |   |   └── ....
|   |   |
|   |   ├── components/
|   |   |   ├── GlobalStyles/
|   |   |   ├── Button/
|   |   |   ├── PageNotFound/
|   |   │   └── index.js
|   |   |
|   |   ├── hooks/
|   |   |   ├── useFetch.js
|   |   │   └── index.js
|   |   |
|   |   ├── layouts/
|   |   |   ├── About/
|   |   |   ├── Application/
|   |   |   ├── Auth/
|   |   |   ├── Features/
|   |   |   ├── Footer/
|   |   |   ├── Header/
|   |   |   ├── HeroSection/
|   |   |   ├── Lessons/
|   |   |   ├── Missions/
|   |   |   ├── Products/
|   |   |   ├── Testimonials/
|   |   |   ├── Vocabulary/
|   |   │   └── index.js
|   |   |
|   |   ├── pages/
|   |   |   ├── Home/
|   |   |   ├── Lessons/
|   |   │   └── index.js
|   |   |
|   |   ├── routes/
|   |   │   └── index.js
|   |   |
|   |   └── store/
|   |       ├── authSlice.js
|   |       ├── store.js
|   |       └── index.js
|   |
│   ├── App.js
|   └── index.js
|
|
└── server/
    ├── public/
    ├── src/
    |   ├── controllers/
    |   |   ├── authController.js
    |   |   ├── globalErrorController.js
    |   |   ├── vocabularyController.js
    |   |   └── ....
    |   |
    |   ├── models/
    |   |   ├── UserModel.js
    |   |   ├── VocabularyModel.js
    |   |   └── ....
    |   |
    |   ├── routers/
    |   |   ├── userRouter.js
    |   |   |── vocabularyRouter.js
    |   |   └── ....
    |   |
    |   └── utils/
    |       ├── AppError.js
    |       ├── catchError.js
    |       └── ....
    |
    ├── app.js
    └── index.js
```

&nbsp;

**Project architecture**:

![](./docs/images/architecture.svg)

&nbsp;

## 1. Client

### 1.1. React DOM tree

![](./docs/images/react-dom-tree.svg)

&nbsp;

### 1.2. Fetch data from the server

Create a custom hook to fetch data:

```js
function useFetch(param, options = {}) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/${param}`, options)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [param]);

  return data;
}
```

&nbsp;

![](./docs/images/about-flow-chart.png)

![](./docs/images/missions-flow-chart.png)

![](./docs/images/products-flow-chart.png)

![](./docs/images/testimonials-flow-chart.png)

![](./docs/images/vocabulary-flow-chart.png)

&nbsp;

### 1.3. Scroll to top of the web page

Implement scrolling to the top of the page by using `Window.scrollTo()` method that a particular set of coordinates in the document.

![](./docs/images/window-scroll.svg)

&nbsp;

**Show/hide BackToTop button**

**Solution 1**: create a scroll event to track the position of window relative to the horizontal axis of the document and then show or hide the `BackToTop` button. &rarr; the scroll event listener triggers whenever the user scrolls the page, which **affects the application performance**.

```js
window.addEventListener('scroll', () => {
  if (window.scrollY > value) {
    // show BackToTop button
    return;
  }

  // hide BackToTop button
});
```

**Solution 2**: use **IntersectionObserver** API to track asynchronously the target element intersects the viewport(window) or not and then show or hide the `BackToTop` button. &rarr; **improve the application performance**.

```js
const handleIntersect = () => {
  // toggle BackToTop button
};

const options = { root, rootMargin, threshold };

const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(target element)
```

&nbsp;

![](./docs/images/intersection-observer.svg)

&nbsp;

### 1.4. Form Validation

Before submitting data to the server, we need to make sure all form fields are filled out and in the correct format. This is called client-side form validation. It **reduces server** tasks (server-side form validation) and **saves resources** that the client and server must transform info to each other more times when the form is invalid.

Using React Hook Form with Yup library to validate the form.

![](./docs/images/form-validation.svg)

&nbsp;

### 1.5. Authentication

The authentication state works with many components (UI layer) &rarr; use **Redux** to easy to maintain and scale.

![](./docs/images/state-mgt.svg)

&nbsp;

Workflow:

![](./docs/images/state-mgt.svg)

&nbsp;

## 2. Server

To maintain and scale up the project in the future, we should organize and divide code into different components based on **MVC architectural pattern**.

![](./docs/images/mvc.svg)

&nbsp;

### 2.1. Design models

&nbsp;

![](./docs/images/models.svg)

&nbsp;

&copy; [huyphamfc](https://github.com/huyphamfc)
