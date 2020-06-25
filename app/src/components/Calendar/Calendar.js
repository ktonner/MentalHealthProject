import React from 'react';
import moment from 'moment'
import Table from 'react-bootstrap/Table'
import css from './style.css'

function Calendar(){
    const weekdays = moment.weekdays();
    const weekdaysname = weekdays.map(day => {
        return (
          <th key={day} className="week-day">
           {day}
          </th>
        );
     });
     return(
      <Table>
         {weekdaysname}
         <tr>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
         </tr>
      </Table>
     )
}

export default Calendar