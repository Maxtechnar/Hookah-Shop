import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Nav from './components/Nav/Nav';
import Section from './components/Section/Section';
import Information from './components/Information/Information';
import Delivery from './components/Delivery/Delivery';
import Pay from './components/Pay/Pay.jsx';
import Contact from './components/Contact/Contact';
import Hookah from './components/Hookah/Hookah';
import './App.css';
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <Nav />
        <div>
          <Route path="/Main" component={Section} />
          <Route path="/Main" component={Container} />
          <Route path="/Main" component={Information} />
        </div>
        <div>
          <Route path="/Delivery" component={Delivery} />
        </div>
        <div>
          <Route path="/Pay" component={Pay} />
        </div>
        <div>
          <Route path="/Contact" component={Contact} />
        </div>
        <div>
          <Route path="/Hookah" component={Hookah} />
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;