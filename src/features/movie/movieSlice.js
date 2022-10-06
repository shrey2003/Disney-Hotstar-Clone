import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    movies: null,

}
const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers: {
        setMovies: (state,action) =>{
            state.movies = action.payload.movies;

        }
    }

})

export const{setMovies} = movieSlice.actions;

export const selectMovies =(state)=> state.movie.movies;

export default movieSlice.reducer;