import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import DetailPage from "./components/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    
    <div className="App">
      <Router>
        <Header />
        <Routes>
          
          <Route exact path="/Detail/:id" element={<DetailPage/>  } >
            
            
          </Route>
          <Route exact path="/login" element={<Login />}>
            
          </Route>
          <Route exact path="/" element={<Home />}>
            
          </Route>
        </Routes>
      </Router>
      
         </div>
  );
}


export default App;
