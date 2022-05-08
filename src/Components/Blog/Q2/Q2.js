import React from "react";
import { Table } from "react-bootstrap";

const Q2 = () => {
  return (
    <div>
      <div className="container">
        <h2 className="text-center">Difference between SQL and NoSQL</h2>
        <div className="row">
          <div className="col-md-6 col-12 mx-auto">
            <Table
              striped
              responsive
              bordered
              hover
              className="text-center p-5"
            >
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Relational database</td>
                  <td>Non-Relational database</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Static schema</td>
                  <td>Dynamic schema</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Not suitable for hierarchical data storage</td>
                  <td>suitable for hierarchical data storage</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Complex query</td>
                  <td>Easier query</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Vertically scalable</td>
                  <td>Horizontally scalable</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q2;
