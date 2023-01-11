import { Home, LessonsPage, PageNotFound } from 'pages';
import { Vocabulary, Auth } from 'layouts';

const publicRoutes = [
  {
    id: 0,
    path: '*',
    component: PageNotFound,
  },
  {
    id: 1,
    path: '/',
    component: Home,
  },
  {
    id: 2,
    path: '/lessons',
    component: LessonsPage,
  },
  {
    id: 3,
    path: '/lessons/:lessonNumber',
    component: Vocabulary,
  },
  {
    id: 4,
    path: '/auth/*',
    component: Auth,
  },
];

export default publicRoutes;
