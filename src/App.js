import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Footer from './components/footer/footer.component';
import Navbar from './components/navbar/navbar.component';
import AboutPage from './pages/about/about.component';
import FaQs from './pages/faq/faq.component';
import HomePage from './pages/homepage/homepage.component';
import Tours from './pages/tours/tour.component';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/tours' component={Tours} />
        <Route exact path='/faqs' component={FaQs} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;


