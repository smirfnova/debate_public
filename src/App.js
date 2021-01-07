import logo from './logo.svg';
import './App.css';
import {
  Redirect, HashRouter, Route, Switch
} from 'react-router-dom';
import { Paper } from '@material-ui/core';
import React from "react";



import About from './components/About';
import Advanced from './components/Advanced';
import TopBar from './components/TopBar';
import Topic from './components/Topic';




function App(props) {
  return (
    <HashRouter>  
      <div className = "page"> 
        <div style= {{backgroundColor: "black"}} className = "app_container">
        <Paper style= {{backgroundColor: "#F2F4F3", height: "100vh", overflow: "auto"}}className = "paper_container">
        <TopBar/>
    
        <Route path = "/advanced">       
        <Advanced />
        </Route>
    
        <Route path= "/about">
          <About/>
        </Route>
    
        <Route exact path = "/">
          <Topic/>
        </Route>
              
    
              
        </Paper>
    
          
        </div>
      </div>

    </HashRouter>


  );
}

export default App;
