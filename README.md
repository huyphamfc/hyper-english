![](./docs/images/banner.png)

Technology stack: &nbsp;
<a href='https://reactjs.org/'><img height='32px' src='./docs/images/tech-react.svg' /></a>&nbsp;
<a href='https://nodejs.org/en/'><img height='32px' src='./docs/images/tech-node.svg' /></a>
&nbsp;
<a href='https://expressjs.com/'><img height='32px' src='./docs/images/tech-express.png' /></a>
&nbsp;
<a href='https://www.mongodb.com/'><img height='32px' src='./docs/images/tech-mongodb.svg' /></a>
&nbsp;
<a href='https://www.typescriptlang.org/'><img height='32px' src='./docs/images/tech-typescript.svg' /></a>
&nbsp;

Dependencies:

- Client: &nbsp;
  <a href='https://sass-lang.com/'><img height='24px' src='./docs/images/tech-sass.svg' /></a>&nbsp;
  <a href='https://react-hook-form.com/'><img height='24px' src='./docs/images/tech-react-hook-form.png' /></a>&nbsp;
  <a href='https://reactrouter.com/en/main'><img height='24px' src='./docs/images/tech-react-router.svg' /></a>&nbsp;
  <a href='https://redux-toolkit.js.org/'><img height='24px' src='./docs/images/tech-redux.svg' /></a>&nbsp;

- Server: &nbsp;
  <a href='https://mongoosejs.com/'><img height='24px' src='./docs/images/tech-mongoose.png' /></a>&nbsp;
  <a href='https://jwt.io/'><img height='24px' src='./docs/images/tech-jwt.svg' /></a>&nbsp;

[Link Demo](https://fe-hyper-english.onrender.com/)

[Video Demo](https://youtu.be/_fTobI0fvnQ?list=UULFBAf2l7BzKyUej40_S2wB-w)

# HyperEnglish - Web Application

**HyperEnglish** is English vocabulary series that are suitable for students and teachers in Information Technology.

I use this project to get my first job as `Fresher FrontEnd Developer`.

&nbsp;

## 1. Quick Overview

![](./docs/images/overview.png)

&nbsp;

Project architect:

![](./docs/flowcharts/overview-architecture.svg)

&nbsp;

Project structure:

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
|   |   |   ├── Loading/
|   |   |   ├── DataConsuming/
|   |   │   └── index.ts
|   |   |
|   |   ├── hooks/
|   |   |   ├── useFetch.ts
|   |   |   ├── useAppSelector.ts
|   |   |   ├── useAppDispatch.ts
|   |   │   └── index.ts
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
|   |   │   └── index.ts
|   |   |
|   |   ├── models/
|   |   |   ├── about-item.ts
|   |   |   ├── lesson-item.ts
|   |   |   ├── mission-item.ts
|   |   |   ├── product-item.ts
|   |   |   ├── testimonial-item.ts
|   |   |   ├── vocabulary-item.ts
|   |   │   └── index.ts
|   |   |
|   |   ├── pages/
|   |   |   ├── Home/
|   |   |   ├── Lessons/
|   |   |   ├── PageNotFound/
|   |   │   └── index.ts
|   |   |
|   |   ├── routes/
|   |   │   └── index.ts
|   |   |
|   |   └── store/
|   |       ├── authSlice.ts
|   |       ├── store.ts
|   |       └── index.ts
|   |
│   ├── App.tsx
|   └── index.tsx
|
|
└── server/
    ├── public/
    ├── src/
    |   ├── config/
    |   |   ├── db.config.ts
    |   |   ├── env.config.ts
    |   |   └── index.ts
    |   |
    |   ├── controllers/
    |   |   ├── auth.controller.ts
    |   |   ├── about.controller.ts
    |   |   ├── lesson.controller.ts
    |   |   ├── mission.controller.ts
    |   |   ├── testimonial.controller.ts
    |   |   └── index.ts
    |   |
    |   ├── middleware/
    |   |   ├── global-error-handler.middleware.ts
    |   |   ├── unhandled-route-handler.middleware.ts
    |   |   └── index.ts
    |   |
    |   ├── models/
    |   |   ├── about.model.ts
    |   |   ├── lesson.model.ts
    |   |   ├── mission.model.ts
    |   |   ├── testimonial.model.ts
    |   |   ├── user.model.ts
    |   |   └── index.ts
    |   |
    |   ├── routers/
    |   |   ├── user.router.ts
    |   |   ├── about.router.ts
    |   |   ├── lesson.router.ts
    |   |   ├── mission.router.ts
    |   |   ├── testimonial.router.ts
    |   |   └── index.ts
    |   |
    |   └── utils/
    |       ├── AppError.ts
    |       ├── catchAsyncError.ts
    |       ├── sendCookie.ts
    |       ├── sendData.ts
    |       └── index.ts
    |
    ├── app.ts
    └── index.ts
```

&nbsp;

## 2. Building UI

To reuse variables (fonts, colors,...) and blocks of CSS properties, I use `SCSS` and `SCSS Modules` to style HTML elements.

&nbsp;

Row of boxes layout:

![](./docs/UI/row-of-boxes-layout.svg)

&nbsp;

Call to action layout:

![](./docs/UI/call-to-action-layout.svg)

&nbsp;

Z-pattern layout:

![](./docs/UI/z-pattern-layout.svg)

&nbsp;

Grid of boxes layout:

![](./docs/UI/grid-of-boxes-layout.svg)

&nbsp;
