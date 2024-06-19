import React from 'react';
import Navbar from './Navbar';
import Taxnav from './Taxnav';
import { Link } from 'react-router-dom';

function Tax() {
  return (
    <div>
      <Navbar />
      <Taxnav />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SN</th>
            <th scope="col">Date</th>
            <th scope="col">TFN</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>19/06/2024</td>
            <td>123456789</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Link to="#" className="mr-2">Edit</Link>
              <Link to="#">Delete</Link>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>19/06/2024</td>
            <td>123456789</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <Link to="#" className="mr-2">Edit</Link>
              <Link to="#">Delete</Link>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>19/06/2024</td>
            <td>123456789</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <Link to="#" className="mr-2">Edit</Link>
              <Link to="#">Delete</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tax;