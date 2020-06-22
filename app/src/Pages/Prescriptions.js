import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import Input from '../components/Input'
import css from './Prescriptions.css'

function Prescriptions () {
    return(

        <Container>
        <Row>
        <Col className="mx-auto">
        <Input/>
        </Col>
        </Row>
        </Container>

    )
}

export default Prescriptions