import React from 'react';
import { Link } from 'react-router-dom';
import ProjectTodo from './ProjectTodo';
import Modal from './mods/Modal';   
import '../styles/about-page.css'; 

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div> 
    <Modal />
            <ProjectTodo/>
      <h2 className="alt-header"> </h2>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default AboutPage;
