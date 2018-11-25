import React, { Component } from 'react';
import Item from '../Item/Item';
import './List.css';

const ingredients= ['apple', 'orange', 'pear', 'bread'];
const enterKey = 13;

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: ingredients,
            currItem: ''
        };
        this.handleItem = this.handleItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleItem(event) {
        console.log('getting here');
        const { currItem} = this.state;
        this.setState({
            currItem: event.target.value
        });
        console.log(currItem);
    }

    addItem(e){
     const { currItem, items } = this.state;
     if (e && e.charCode === enterKey) {
        if (currItem !== '') {
          this.setState({
            currItem: ''
          });
          if (currItem.indexOf(',') !== 0) {
            this.setState({
              items: items.concat(currItem.split(','))
            });
          } else {
            this.setState({
              items: items.concat(currItem)
            });
          }
        }
 
     }
    }
    
    render() {
        const { items, handleItem, addItem }= this.state;
        return (
        <div className="App">
            <h1 className="date">Grocery List for Week 7/10-7/16</h1>
            <input
                  onKeyPress={addItem}
                  className="inputText"
                  placeholder="Add item"
                  onChange={handleItem}
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
