import Home from '../pages/Home';
import { Lessons, Vocabulary } from '../layouts';

const publicRoutes = [
  {
    id: 0,
    path: '/',
    component: Home,
  },
  {
    id: 1,
    path: '/lessons',
    component: Lessons,
  },
  {
    id: 2,
    path: '/lesson/:lesson',
    component: Vocabulary,
    layout: null,
  },
];

export default publicRoutes;
