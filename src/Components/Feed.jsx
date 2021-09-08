import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Feed() {
  return (
    <>
      <Container>
        <Row style={{ marginTop: 100 }}>
          <Col md="2">Side Bar</Col>
          <Col md="7">Feedbacks</Col>
          <Col md="3">Another Side Bar</Col>
        </Row>
      </Container>
    </>
  );
}

export default Feed;
