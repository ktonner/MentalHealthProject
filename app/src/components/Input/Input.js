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
    prescriptions: []
  };

  handleCheckboxChange = event => {
    console.log('check')
    console.log(event.target)
    const name = event.target.id
    const status = event.target.checked;
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


  addToCalendar(event) {
    event.preventDefault();
    //this selects the div with all the checkboxes
    let form = event.target
    //selects just the text input component
    let input = form.children[0].children[1]
    let prescriptions = this.state.prescriptions
    console.log(input.value)
    //No blank inputs
    if (input.value != "") {
      let newP = prescriptions.push(input.value)

      this.setState(
        state => {
          return {
            prescriptions: newP
          }
        });
      console.log(this.state)
    }
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };


  render() {
    return (
      <div id='input'>
        <Form onSubmit={this.addToCalendar.bind(this)}>
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
          {this.createCheckboxes()}
          <Button type='submit'>Add</Button>
        </Form>
      </div>
    )
  }
}

export default Input