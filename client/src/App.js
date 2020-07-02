import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Header';
import Spacer from './components/Spacer';
import Footer from './components/Footer';
import Search from './pages/Search';
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
          <Route exact path='/' component={Search}
          // render={(props) => (
          // <Login setUserData={setUserData} userData={userData} />
          // )} 
          />
          {/* <Route exact path='/signup' component={SignUp} /> */}

          <Route exact path="/Search" component={Search}
          // render={(props) => (
          //   userData.username === "" ? <Redirect to='/' /> :
          //     <Dashboard setUserData={setUserData} 
          />
          {/* )} */}
          {/* /> */}
          {/* <Route exact path="/Saved" component={Savedpage} */}
          {/* // render={(props) => ( */}
          {/* //   userData.username === "" ? <Redirect to='/' /> :
          //     <NewPet setUserData={setUserData} />
          // )}
          // /> */}


        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
