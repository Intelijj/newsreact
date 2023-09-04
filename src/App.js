import './App.css';

import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './Components/Navbar';
import News  from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


export default class App extends Component {
  state={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({progress:progress}) 

  }
  render() {
    return (
      <div>
      <Router>
      <LoadingBar
      height={3}
        color='#bf8dfc'
        progress={this.state.progress}
       
      />
       <Navbar></Navbar>
       
        <Routes>
        <Route  exact path="/" element={ <News setprogress={this.setprogress} key="general"  pageSize={15} country="in" category="general" />}>
           
           </Route> 
          <Route  exact path="/science" element={ <News setprogress={this.setprogress} key="science"  pageSize={15} country="in" category="science" />}>
           
          </Route> 
          <Route  exact path="/sports" element={ <News setprogress={this.setprogress} key="sports"  pageSize={15} country="in" category="sports" />}>
           
          </Route> 
          <Route  exact path="/health" element={ <News setprogress={this.setprogress} key="health"  pageSize={15} country="in"  category="health" />}>
           
          </Route> 
          <Route  exact path="/technology" element={ <News setprogress={this.setprogress} key="technology"  pageSize={15} country="in" category="technology" />}>
           
          </Route> 
          
          
        </Routes>

  
      </Router>
      </div>
      
    )
  }
}

