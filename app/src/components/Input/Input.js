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

  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    prescriptions:[]
  };

  handleCheckboxChange = changeEvent => {
    console.log('check')
    const { name } = changeEvent.target.checked;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);


  addToCalendar(event) {
    event.preventDefault();
    this.setState(prevState=>({prescriptions: [..."i"]}))
    console.log(this.state)

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };


  render() {
    return (
      <div id='input'>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Enter the Name of your Prescription</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="Prescription"
            aria-label="Prescription"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <form onSubmit={this.addToCalendar.bind(this)}>
          {this.createCheckboxes()}
          <Button type='submit'>Add</Button>
        </form>
      </div>
    )
  }
}

export default Input