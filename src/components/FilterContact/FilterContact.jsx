import React, { Component } from 'react';
import './FilterContactStyle.css';
export class Filter extends Component {
  handleFilterChange = e => {
    this.props.setFilter(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <div className='filter-container'>
        <p>Find Contacts by Name</p>
            <input
                className='filter-contact'
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}