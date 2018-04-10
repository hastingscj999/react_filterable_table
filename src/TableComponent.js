import React from 'react';

const TableComponent = (list) => {
  const row = list.map(item => (
    <tr key={item.id}>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
      <td>{item.gender}</td>
      <td>{item.ip_address}</td>
    </tr>
  ));

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
          {row}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
