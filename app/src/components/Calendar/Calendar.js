import React from 'react';
import moment from 'moment'
import Table from 'react-bootstrap/Table'
import css from './style.css'

function Calendar(){
    const weekdayshort = moment.weekdaysShort();
    const weekdayshortname = weekdayshort.map(day => {
        return (
          <th key={day} className="week-day">
           {day}
          </th>
        );
     });
     return(
      <Table>
         {weekdayshortname}
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