import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import Input from '../components/Input'
import css from './Prescriptions.css'
import Calendar from '../components/Calendar/Calendar'

function Prescriptions () {
    return(

        <Row>
        <Col className="mx-auto">
        <Input/>
        <Calendar/>
        </Col>
        </Row>


    )
}

export default Prescriptions