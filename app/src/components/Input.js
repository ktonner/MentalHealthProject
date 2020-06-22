import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'


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
  <Form>
  {['radio'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Every Day`}
      />
    </div>
  ))}
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Monday`}
      />
       <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Tuesday`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Wednesday`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Thursday`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Friday`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Saturday`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Sunday`}
      />
    </div>
  ))}
</Form>
  <Button>Add</Button>
  </div>
  )
}

export default Input