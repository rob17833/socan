import React from 'react';
import { Table, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Homepage extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Past Events</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">25 May</th>
            <td>Mark</td>
            <td>Thu 8:30 PM</td>
            <td><Button to='step2' tag={NavLink}>Select</Button></td>
          </tr>
          <tr>
            <th scope="row">02 July</th>
            <td>Jacob</td>
            <td>Sat 7 PM</td>
            <td><Button to='step2' tag={NavLink}>Select</Button></td>

          </tr>
          <tr>
            <th scope="row">17 August</th>
            <td>Larry</td>
            <td>Fri 6 PM</td>
            <td><Button to='step2' tag={NavLink}>Select</Button></td>

          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Homepage;