import React from 'react';
import Row from 'react-bootstrap/Row'
import Input from '../components/Input'
import css from './Prescriptions.css'
import Calendar from '../components/Calendar/Calendar'

function Prescriptions () {
    return(
        <div>
        <Row>
        <Input/>
        </Row>
        <Row>
        <br/>
        <Calendar/>
        </Row>
        </div>

    )
}

export default Prescriptions