import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col' 
import Row from 'react-bootstrap/Row'
import Input from '../components/Input'
import css from './Prescriptions.css'
import Calendar from '../components/Calendar/Calendar'

function Prescriptions () {
    return(
        <Container>
        <Row>
        <Col>
        <Input/>
        </Col>
        </Row>
        <br/>
        <Row>
        <Calendar/>
        </Row>
        </Container>

    )
}

export default Prescriptions