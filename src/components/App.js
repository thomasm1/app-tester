/* eslint-disable import/no-named-as-default */
import React from 'react';
// import b from  'bootstrap';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Footer from './mods/Footer';
  // import Carousel from './mods/Carousel';
// import Navbar from './mods/Navbar';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue',
  backgroundColor:'aliceblue', padding:'8px' };
    const bg = { backgroundColor: 'transparent',
  padding: '10px',
  opacity: .75,
margin: '10px',
width:'130%' };
const nav = { padding:'10px', margin:'0 20px 40px',fontSize:'2rem',

}
    return (
      <div style={bg} >
      
        <div style={nav}>
         
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Calculator</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink> 
        
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />  
          
          <Route component={NotFoundPage} />
        </Switch> 
        <hr /> 
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
