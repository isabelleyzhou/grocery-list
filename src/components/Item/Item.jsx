import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Item.css';

class Item extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const { text } = this.props;
    return (
    <div className= "list">
      <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
     </label> 
      <li className="item-name" >{text}</li>
    </div>
  
    );
  }
}

export default Item;
