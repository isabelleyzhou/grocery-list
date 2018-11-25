import React, { Component } from 'react';
import './Date.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Date extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title} = this.props;
    return (
      <NavLink className="date-box" to="/list">
        <div className= 'aqua'/>
        <p className="title-p">{title}</p>
      </NavLink>
    );
  }
}

export default Date;
