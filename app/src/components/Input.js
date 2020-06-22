import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


function Input(){
  return(
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
  </div>
  )
}

export default Input