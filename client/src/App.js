import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Header';
import Spacer from './components/Spacer';
import Footer from './components/Footer';
import Search from './pages/Search';
import Saved from './pages/Saved';
// import Savedpage from './pages/Saved';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = (props) => {

  return (
    <Router>
      <>
        <Header />
        <Spacer />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/savedbooks' component={Saved} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
