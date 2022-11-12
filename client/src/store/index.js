import { configureStore } from '@reduxjs/toolkit';

import backToTopReducer from './BackToTop';

export default configureStore({
  reducer: {
    backToTop: backToTopReducer,
  },
});
