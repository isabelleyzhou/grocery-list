import React, { Component } from "react";
import "./Date.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class Date extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    const date = title.split(" ");
    const month = date[0],
      number = date[1];
    return (
      <NavLink className="date-box" to="/list">
        <div className="header"> {month} </div>
        <div className="aqua" />
        <p className="title-p">{number}</p>
      </NavLink>
    );
  }
}

export default Date;
