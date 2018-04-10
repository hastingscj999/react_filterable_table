import React, { Component } from 'react';

class FilterListComponent extends Component {
  constructor(props){
    super(props);
    this.refreshFilters = this.refreshFilters.bind(this);
  }

  refreshFilters(e){
    this.props.methods.removeFilter(e.target.nextSibling.nextSibling);
  }

  filterItem = (data) => {
    return data.map((item, index) => (
      <div className="filterItem" key={index}>
        <span className="closeButton" onClick={(e) => this.refreshFilters(e)}>x</span>
        <span>&nbsp;{item}</span>
      </div>
    ));
  }

  render() {
    const {
      material
    } = this.props;

     return (
       <div>
         <div id="filterListHeading">Currently applied filters:</div>
          <div id="filterList">
            {this.filterItem(material.appliedFilters)}
          </div>
        </div>
     );
  }
}

// add proptypes

export default FilterListComponent;
