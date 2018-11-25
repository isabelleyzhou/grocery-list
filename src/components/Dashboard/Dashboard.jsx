import React, { Component } from 'react';
import Date from './Date/Date';
import AddDate from './AddDate/AddDate';
import './Dashboard.css';

const dateList= ['November 12', 'November 13', 'November 14'];

function displayDates(dateList) {
  const boxArray = [];
  for (let i = 0; i < dateList.length; i += 1) {
    boxArray.push(
      <Date
        title={dateList[i]}
      />
    );
  }
  return boxArray;
}

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      dateList: dateList
    };
  }
  render() {
    const { dateList } = this.state;
    return (
      <div className="dashboard-container">
        <div className="boxes-container">
          <AddDate
          />
          {displayDates(dateList)}
        </div>
      </div>
    );
  }
}

export default Dashboard;
