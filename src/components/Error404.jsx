import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Error404(props) {
  console.log(props);
  return (
    <div>
      <h3>The page {props.location.pathname} does not exist!</h3>
      <h4>Would you like to return <Link to="/">Home</Link> instead?</h4>
    </div>
  )
}

Error404.propTypes = {
  location: PropTypes.object
};