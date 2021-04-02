import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Footer from './components/footer/footer.component';
import Navbar from './components/navbar/navbar.component';

import HomePage from './pages/homepage/homepage.component';
import Tours from './pages/tours/tour.component';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/tours' component={Tours} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;


