import React from 'react';
import PropTypes from 'prop-types';
import pulpFiction from '../assets/images/pulpFiction.jpg';

function Ticket(props){
  return (
    <div>
      <img src={pulpFiction} />
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;