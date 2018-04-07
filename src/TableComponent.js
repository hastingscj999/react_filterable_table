import React, { Component } from 'react';
class TableComponent extends Component {

  RowItem(data) {
    // const base = data.data.filter((item) => item.gender = 'Female');
    const row = data.data.map((item) => (
      <tr key={item.id}>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
        <td>{item.gender}</td>
        <td>{item.ip_address}</td>
      </tr>
    ));
    return row;
  }

  render() {
     return (
       <div>
          <div id="filterRow">
          </div>
          <table id="results">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>IP Address</th>
              </tr>
            </thead>
            <tbody>
                <this.RowItem data={this.props.list} />
            </tbody>
          </table>
        </div>
     )
  };
}


export default TableComponent;
