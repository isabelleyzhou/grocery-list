import React, { Component } from 'react';
import Item from '../Item/Item';
import './List.css';

const ingredients= ['apple', 'orange', 'pear', 'bread'];

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: ingredients
        };
        }
    render() {
        const { items }= this.state;
        return (
        <div className="App">
            <h1>Grocery List for Week 7/10-7/16</h1>
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
