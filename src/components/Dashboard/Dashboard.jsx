import React, { Component } from "react";
import Date from "./Date/Date";
import AddDate from "./AddDate/AddDate";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import home from "../images/home.png";

/** Hashmap for matching month numbers to month names */
const monthList = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'December',
  11: 'November',
  12: 'December',
}

class Dashboard extends Component {
  
  constructor() {
    super();
    this.state = {
      dateList: [],
      finished: false,
    };
    this.displayDates = this.displayDates.bind(this);
    this.createNewDate = this.createNewDate.bind(this);
  }

  /** Fetch the trips from the API and set state */
  componentDidMount() {
    fetch('/api/trips')
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({
          dateList: jsonResponse,
          finished: true,
        })
      });
  }

  /**
   * Helper function for displaying date boxes
   * Currently, only displays the date of the trip
   * TODO: Also make it display the name of the trip (?)
   */
  displayDates() {
    const { dateList, finished } = this.state;
    if (finished) {
      const boxArray = [];
      for (let i = 0; i < dateList.length; i += 1) {
        const month = parseInt(dateList[i].month, 10)
        const date = monthList[month] + ' ' + dateList[i].day
        boxArray.push(<Date title={date} id={dateList[i].id} name = {dateList[i].name} />);
      }
      return boxArray;
    }
  }

  createNewDate() {
    const { dateList } = this.state;
    const date = "December 1";
    console.log(date);
    dateList.push(<Date title={date} />);
    this.setState({ dateList });
    fetch('/api/addtrip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date })
    }).then(
      response => {
        if (response.ok) {
          return;
        }
        throw new Error('Request failed!');
      },
      networkError => console.log(networkError.message)
    );
  }

  render() {
    const { dateList } = this.state;
    return (
      <div className="dashboard-container">
        <NavLink to="/">
          <img
            src={home}
            className="logo"
            alt="Home Logo"
            height="42"
            width="42"
          />
        </NavLink>
        <div className="boxes-container">
          <button className="add-button" onClick={this.createNewDate}>
            <AddDate />
          </button>
          {this.displayDates(dateList)}
        </div>
      </div>
    );
  }
}

export default Dashboard;
