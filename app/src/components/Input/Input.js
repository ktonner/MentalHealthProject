import React from 'react';
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
    )
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

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
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);



  handleChange(evt) {
    this.setState({ checkboxChecked: evt.target.checked });
    this.setState({daysChecked:[].push(evt.target.label)})
    console.log(this.state.daysChecked)
    
  }

  handleIsItChecked() {
    console.log(this.state.checkboxChecked ? 'Yes' : 'No');
  }

  addToCalendar = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    Object.keys(this.state.checkboxes)
    .filter(checkbox => this.state.checkboxes[checkbox])
    .forEach(checkbox => {
      console.log(checkbox, "is selected.");
    });
  }


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
          <form>
        {this.createCheckboxes()}
        <Button type='submit'>Add</Button>
        </form>
        </div>
    )
  }
}

export default Input