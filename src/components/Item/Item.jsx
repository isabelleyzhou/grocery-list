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
    <div>
      <li>{text}</li>
     <label class="container">Completed
        <input type="checkbox"/>
        <span class="checkmark"></span>
     </label> 
    </div>
  
    );
  }
}

export default Item;
