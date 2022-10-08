import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieSlice from '../features/movie/movieSlice'
import userSlice from '../features/user/userSlice';
import userReducer from '../features/user/userSlice'



export const Store = configureStore({
  reducer: {
    movie: movieSlice,
    user: userSlice,
  },
});
