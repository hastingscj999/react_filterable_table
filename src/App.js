import React, { Component } from 'react';
import './App.css';
import List from './mock_data.json';
import InputComponent from './InputComponent.js';
import TableComponent from './TableComponent.js';
import FilterListComponent from './FilterListComponent.js';

class App extends Component {
  constructor(props){
    super(props);
    this.filterList = [];
    this.state = {
      inputs: {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        ip_address: '',
        gender: '',
      },
      appliedFilters: this.filterList
    }
    this.methods = {
      addFilter: (item) => {
        this.filterList.push(item.nodeValue);
        this.setState({
          appliedFilters: this.filterList
        });
        const key = item.nodeValue.trim().replace(' ', '_').toLowerCase();
        const target = document.getElementById(key);
        target.checked = true;
        target.nextSibling.nextSibling.style.visibility = 'visible';
      },
      removeFilter: (item) => {
        const candidate = this.filterList.indexOf(item.nodeValue);
        const key = item.nodeValue.trim().replace(' ', '_').toLowerCase();
        let inputsCopy = this.state.inputs;
        inputsCopy[key] = '';
        this.setState({
          appliedFilters: this.filterList,
          inputs: inputsCopy
        });
        const target = document.getElementById(key);
        target.checked = false;
        target.nextSibling.nextSibling.style.visibility = 'hidden';

        this.filterList.splice(candidate, 1);
      },
      updateValues: (prop, item) => {
        prop = prop.trim().replace(' ', '_').toLowerCase();
        let inputsCopy = this.state.inputs
        if(inputsCopy.hasOwnProperty(prop)){
          inputsCopy[prop] = item;
        }
        this.setState({
          inputs: inputsCopy
        });
        sessionStorage.setItem('myState', JSON.stringify(this.state));
      }
    }
  };

  componentDidMount(){
    if(sessionStorage.myState){
        let sessionState = sessionStorage.getItem('myState');
        sessionState = JSON.parse(sessionState);
        console.log('ss', sessionState);
        this.setState({
          inputs: sessionState.inputs,
          appliedFilters: sessionState.appliedFilters
        });
        this.filterList = sessionState.appliedFilters
    } else {
      console.log('no state set yet');
    }
  }


  areInputsPopulated(){
    const comparator = Object.values(this.state.inputs);
    let arbiter = false;
    for (let x in comparator) {
      comparator[x].length > 0 ? arbiter = true : null
    }
    return arbiter;
  }

  filterTable(list){
     if(this.areInputsPopulated()){
       return list.filter((item) => {
        const comparator = this.state.inputs;
        if(
          (item.first_name === comparator.first_name || comparator.first_name === '') &&
          (item.last_name === comparator.last_name || comparator.last_name === '') &&
          (item.email === comparator.email || comparator.email === '') &&
          (item.gender === comparator.gender || comparator.gender === '') &&
          (item.ip_address === comparator.ip_address || comparator.ip_address === '')
        ) {
          return true;
        }
        // const comparator = Object.values(this.state.inputs);
        // const target = Object.values(item);
        // for (let x in comparator) {
        //     if(target.indexOf(comparator[x]) >-1) {
        //       return true;
        //     }
        // }
       });
     } else {
       return list;
     }
  }

  render() {
     return(
       <div id="wrapper">
        <InputComponent material={this.state} methods={this.methods} />
        <FilterListComponent filters={this.filterList} material={this.state} methods={this.methods} />
        <TableComponent list={this.filterTable(List)} />
       </div>
    )
  };
}

export default App;
