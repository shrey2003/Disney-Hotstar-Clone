import React,{useEffect} from 'react'
import dbConfig from '../features/counter/firebase'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import {useDispatch} from'react-redux';
import {setMovies} from '../features/movie/movieSlice'


const Home=() => {
  const dispatch=useDispatch();
  let movies =[];
  useEffect(() => {
    dbConfig.collection("Movies").onSnapshot((snapshot)=>{
      //console.log(snapshot);
     snapshot.docs.map(function (doc){
      //console.log(doc.data().type)
      switch (doc.data().type) {
        case "movies":
            movies = [...movies, { id: doc.id, ...doc.data() }];
            break;
      }
     });
      dispatch(setMovies({
        movies: movies,
      }));
    })
    
   
  }, [])
    


  return (
    <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
    </Container>
  )
}

export default Home


const Container = styled.main`
   min-height: calc(100vh - 70px);
   padding: 0 calc(3.5vw + 5px);
   position:relative;
   overflow-x:hidden;
   
  &:before{
         background: url("/images/home-background.png") center center / cover 
         no-repeat fixed;
         content:"";
         position:absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         z-index:-1;
        }
        `