// react library
import React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className='landing'>
    <h1>svideo</h1>
    <input type='text' placeholder='Search' />
    <Link to="/search">or Browse All</Link>
  </div>
);

export default Landing;
