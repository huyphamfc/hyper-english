import Home from '../pages/Home';
import { PageNotFound } from '../components';
import { Lessons, Vocabulary } from '../layouts';

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
    path: '/lessons',
    component: Lessons,
  },
  {
    id: 3,
    path: '/lesson/:lesson',
    component: Vocabulary,
    layout: null,
  },
];

export default publicRoutes;
