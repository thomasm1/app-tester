/* eslint-disable import/no-named-as-default */
import React from 'react';
// import b from  'bootstrap';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import ProjectTodo from './ProjectTodo';
import LineChart from './LineChart';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue',
  backgroundColor:'aliceblue',padding:'8px' };
    const bg = { backgroundColor: 'lightsteelblue',
  padding: '10px',
margin: '10px',
width:'110%' };
const nav = { padding:'10px', margin:'0 20px 40px',fontSize:'2rem',

}
    return (
      <div style={bg} >
        <div style={nav}>
         
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <ProjectTodo/>
        <LineChart elementWidth={600} elementHeight={270} />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
