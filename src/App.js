import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from './Pages/Saved/Saved';
import Home from './Pages/Home/Home';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import './App.css';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
      </Wrapper>
    </div>
  </Router>
);

export default App;
