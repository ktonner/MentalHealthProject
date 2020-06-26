import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Checkbox from './Checkbox'



class Input extends React.Component {

  constructor() {
    super();
    this.state = { checkboxChecked: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleIsItChecked = this.handleIsItChecked.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  createCheckboxes() {
    const options = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    options.map((option) => {
      return (
        <Checkbox
          label={option}
          checked={this.state.checkboxChecked}
          onChange={this.handleChange}
          />
    )
    })
  }


  handleChange(evt) {
    this.setState({ checkboxChecked: evt.target.checked });
  }

  handleIsItChecked() {
    console.log(this.state.checkboxChecked ? 'Yes' : 'No');
  }

  handleToggle() {
    this.setState({ checkboxChecked: !this.state.checkboxChecked });
  }

  render() {
    return (
      <div>
        <h1>What prescriptions are you taking currently?</h1>
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
        <Form>
          {this.createCheckboxes}
        </Form>
        <Button>Add</Button>
      </div>
    )
  }
}

export default Input