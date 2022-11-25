import Home from '../pages/Home';
import { PageNotFound } from '../components';
import { Authentication, Lessons, Vocabulary } from '../layouts';

const publicRoutes = [
  {
    id: 0,
    path: '*',
    component: PageNotFound,
    layout: null,
  },
  {
    id: 1,
    path: '/',
    component: Home,
  },
  {
    id: 2,
    path: '/authentication/*',
    component: Authentication,
    layout: null,
  },
  {
    id: 3,
    path: '/lessons',
    component: Lessons,
  },
  {
    id: 4,
    path: '/lesson/:lesson',
    component: Vocabulary,
    layout: null,
  },
];

export default publicRoutes;
