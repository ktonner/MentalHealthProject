import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Checkbox from '../Checkbox'
import css from './style.css'

//these are all the checkbox options and will not change
const OPTIONS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Every day"]

class Input extends React.Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    prescription:[]
  };

  handleCheckboxChange = event => {
    console.log('check')
    console.log(event.target)
    const name  = event.target.id
    const status  = event.target.checked;
    console.log(status)

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        name: status
      }
    }));
    console.log(this.state)
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      type="checkbox"
      isSelected={this.state.checkboxes[option]}
      onChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  addPrescription = (value) => {
    this.setState((state, value) => {
      return {
        prescription: [...value]
      };
    });
    console.log(this.state)
  };

  addToCalendar(event) {
    event.preventDefault();
    // this.setState(prevState=>({prescriptions: [..."i"]}))
    console.log(event.target)
    //this selects the div with all the checkboxes
    let form = event.target
    console.log(form.children)
    console.log(form.children[0].value)

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
    console.log(this.state)
  };


  render() {
    return (
      <div id='input'>
        <form onSubmit={this.addToCalendar.bind(this)}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Enter the Name of your Prescription</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="Prescription"
            ref={this.inputRef} 
            onSubmit={(e)=>this.addPrescription(e.target.value)}
            aria-label="Prescription"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
          {this.createCheckboxes()}
          <Button type='submit'>Add</Button>
        </form>
      </div>
    )
  }
}

export default Input