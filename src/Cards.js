import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./cards.css";
function Cards(props) {
  return (
    <div className="card m-4">
      <Row>
        <Col md={3}>
          <div className="cards">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img
                variant="top"
                src={props.src}
                className="card-img-top"
              />
              <Card.Body className="card_body">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className="card_text">{props.txt}</Card.Text>

                <a
                  className="btn btn-success"
                  href={props.link}
                  target="_blank"
                >
                  Go to GitHub
                </a>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
