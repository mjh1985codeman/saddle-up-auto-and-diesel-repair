import React from "react";
import { Container, Table, Card } from "react-bootstrap";
const Hours = () => {
  return (
    <>
      <div className="hours-comp">
        <Container>
          <h2>Hours of Operation:</h2>
          <Table className="hours-tab-color">
            <thead>
              <tr>
                <th>Day</th>
                <th>Open</th>
                <th>Close</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tuesday - Friday</td>
                <td>8:00am</td>
                <td>5:00pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>8:00am</td>
                <td>6:00pm</td>
              </tr>
            </tbody>
          </Table>
          <Card className="text-center hours-tab-color">
            <Card.Body>**Closed On Sunday and Monday**</Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Hours;
