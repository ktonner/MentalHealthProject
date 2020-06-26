import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

class Checkbox extends React.Component {
    render(){
        return(
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        )
    }
}

export default Checkbox