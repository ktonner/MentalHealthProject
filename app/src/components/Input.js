import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'



function Input(){

  const handleAdd = () => {
    var days = []
    days.push(this.selectedCheckboxes)
    console.log(days)
  }

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
    {['radio'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Every Day`}
      />
    </div>
  ))}
</Form>
  <Button onClick={handleAdd()}>Add</Button>
  </div>
  )
}

export default Input