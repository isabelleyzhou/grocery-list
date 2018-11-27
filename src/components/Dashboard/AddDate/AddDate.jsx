import React, { Component } from "react";
import "./AddDate.css";
import plus from "./plsImage.png";

class AddDate extends Component {
  render() {
    return (
      <div className="date-box">
        <div className="grey-top" />
        <img src={plus} className="plus-img" alt="plus" />
        <p className="add-new">Add new grocery list</p>
      </div>
    );
  }
}

export default AddDate;
