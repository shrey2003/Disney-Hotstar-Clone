import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieSlice from '../features/movie/movieSlice'

export const Store = configureStore({
  reducer: {
    movie: movieSlice,
  },
});
