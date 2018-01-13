import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <div>
      <h3>The page you are looking for does not exist!</h3>
      <h4>Would you like to return <Link to="/">Home</Link> instead?</h4>
    </div>
  )
}