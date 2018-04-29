import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>TMM</h1>
 
      <ol>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
        <li>
      <h4>TMM</h4></li>   <li>
      <h4>TMM</h4></li>
      </ol>
    </div>
  );
};

export default HomePage;
