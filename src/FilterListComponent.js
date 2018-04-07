import React, { Component } from 'react';

class FilterListComponent extends Component {
  constructor(props){
    super(props);
    this.refreshFilters = this.refreshFilters.bind(this);
  }

  refreshFilters(e){
    this.props.material.removeFilter(e.target.nextSibling.nextSibling);
  }

  FilterItem = (data) => {
    return data.data.map((item) => (
      <div className='filterItem'><span className='closeButton' onClick={this.refreshFilters}>x</span> {item}</div>
    ), this);
  }

  render() {
     return (
       <div>
         <div id='filterListHeading'>Currently applied filters:</div>
          <div id='filterList'>
            <this.FilterItem data={this.props.material.appliedFilters} />
          </div>
        </div>
     )
  }
}

export default FilterListComponent;
