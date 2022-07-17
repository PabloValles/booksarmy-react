import { useState } from "react";
import Users from "./components/Users";
import reactLogo from "./assets/react.svg";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Booksarmy</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card bg-info">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              b5
            </div>
          </div>
        </Col>
        <Col>
          <Users />
          <Button>Cargar usuarios</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
