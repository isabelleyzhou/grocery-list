import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddDate.css';
import plus from './plsImage.png';

class AddDate extends Component {
  render() {
    return (
      <div
        className="date-box"
      >
        <div className="grey-top" />
        <img src={plus} className="plus-img" alt="plus" />
        <p className="add-new">Add new lesson</p>
      </div>
    );
  }
}

export default AddDate;