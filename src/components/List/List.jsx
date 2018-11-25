import React, { Component } from 'react';
import Item from '../Item/Item';
import './List.css';
import { NavLink } from 'react-router-dom';
import home from '../images/home.png';

const ingredients = ['apple', 'orange', 'pear', 'bread'];
const enterKey = 13;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ingredients,
            curr_item: ''
        };
        this.handleItem = this.handleItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleItem(event) {
        this.setState({
          curr_item: event.target.value
        });
        this.addItem(event);
      }

    addItem(event) {
        if(this.state.curr_item !== '' && (event.keyCode === enterKey || event.which === enterKey)){
            this.setState({
            curr_item: "",
            items: this.state.items.concat(this.state.curr_item)
            });
        }
    }
    render() {
        const { items, curr_item }= this.state;
        return (
        <div className="App">
            <NavLink to="/">
             <img src={home} className="logo" alt="Home Logo" height="42" width="42"></img>
            </NavLink>
            <h1 className="date">October 16, 2018</h1>
            <input
                  onKeyPress={this.addItem}
                  className="inputText"
                  placeholder="Add item"
                  onChange={this.handleItem}
                  value= {curr_item}
                />
            <ul className="display">
                    {items.map(item => (
                    <Item text={item} />
                    ))}
                </ul>
        </div>
        );
    }
    }

export default App;
