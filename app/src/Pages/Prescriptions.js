import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col' 
import Row from 'react-bootstrap/Row'
import Input from '../components/Input/Input'
import css from './Prescriptions.css'
import Calendar from '../components/Calendar/Calendar'

function Prescriptions () {
    return(
        <Container>
        <Row>
        <h1>What prescriptions are you taking currently?</h1>
        </Row>
        <Row>
        <Col>
        <Input/>
        </Col>
        <Col>
        <Calendar/>
        </Col>
        </Row>
        </Container>

    )
}

export default Prescriptions