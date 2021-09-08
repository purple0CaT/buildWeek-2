import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeedLeftBar from "./FeedLeftBar";
import FeedRightBar from "./FeedRightBar";

function Feed() {
  return (
    <>
      <Container>
        <br />
        <br />
        <Row>
          <Col md="3">
            <FeedLeftBar />{" "}
          </Col>
          <Col md="6">Feedbacks</Col>
          <Col md="4">
            <FeedRightBar />{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Feed;
