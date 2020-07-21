import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

class Checkbox extends React.Component {
    render(props) {
        return (
            <div>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={this.props.label}
                            label={this.props.label}
                            onChange={this.props.onChange}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export default Checkbox