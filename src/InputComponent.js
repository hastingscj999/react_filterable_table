import React, { Component } from 'react';

class InputComponent extends Component {

  constructor(props){
    super(props);
    this.toggleInput = this.toggleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleInput(e) {
    const showHide = e.target.nextSibling.nextSibling;
    if (e.target.checked) {
      showHide.style.visibility = 'visible';
      this.props.methods.addFilter(e.target.nextSibling);
    } else {
      showHide.value = '';
      this.props.methods.removeFilter(e.target.nextSibling);
      showHide.style.visibility = 'hidden';
    }
  }

  handleChange(e) {
    this.props.methods.updateValues(e.target.previousSibling.nodeValue, e.target.value);
  }


  render() {
     return (
        <form name='filterInputs'>
          <h2>Filter by:</h2>
          <p>
            <input type='checkbox' className='toggleInput' id='first_name' value='enableFirstName' onChange={this.toggleInput} /> First Name <input type='text' name='fn' className='inputToggle' value={this.props.material.inputs.first_name} onChange={this.handleChange} />
          </p>
          <p>
            <input type='checkbox'  id='last_name' className='toggleInput' value='enableLasttName' onChange={this.toggleInput} /> Last Name <input type='text' className='inputToggle' value={this.props.material.inputs.last_name} onChange={this.handleChange} />
          </p>
          <p>
            <input type='checkbox'  id='email'  className='toggleInput' value='enableEmailFilter' onChange={this.toggleInput}  /> Email <input type='text' className='inputToggle'value={this.props.material.inputs.email} onChange={this.handleChange}  />
          </p>
          <p>
            <input type='checkbox' id='ip_address' className='toggleInput' value='enableIPFilter' onChange={this.toggleInput} /> IP Address <input type='text'  className='inputToggle' value={this.props.material.inputs.ip_address} onChange={this.handleChange} />
          </p>
          <p>
            <input type='checkbox' id='gender' className='toggleInput' value='enableGenderFilter' onChange={this.toggleInput}  /> Gender <select name='pickGender' className='inputToggle' onChange={this.handleChange} ><option></option><option>Female</option><option>Male</option></select>
          </p>
        </form>
     )
  }
}

export default InputComponent;
