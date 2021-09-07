import React from "react";
import { Modal, Button, Row, Col, Form, Carousel } from "react-bootstrap";
import { useState } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

export default function EditSecondModal({ onPrevClick, email }) {
  const [SecondDialInfo, setSecondDialInfo] = useState();
  // APPLY
  const senData = () => {
    console.log(1);
  };
  return (
    <>
      <Modal.Header className="font-weight-light" closeButton>
        <Modal.Title
        style={{cursor: 'pointer'}}
          className="font-weight-light"
          onClick={() => onPrevClick()}
        >
          <RiArrowLeftLine size="1.8rem" />
          Edit contact info
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={(e) => senData(e)}>
        <Modal.Body className="p-4">
          <Row>
            <Col xs="12">
              <Form.Group controlId="formName">
                <Form.Label>Profile URL</Form.Label>{" "}
                <Form.Text>
                  <Link
                    to="/"
                    className="contact-info font-weight-bold d-block"
                  >
                    linkedin.com/in/purplekot
                    <BsBoxArrowUpRight
                      className="ml-1 font-weight-bold"
                      size="1rem"
                    />
                  </Link>
                </Form.Text>
              </Form.Group>
            </Col>
            <Col xs="8">
              <Form.Group controlId="websiteUrl">
                <Form.Label>Website URL</Form.Label>
                <Form.Control
                  type="text"
                  value={""}
                  // onChange={(e) => dataSet("education", e.target.value)}
                  placeholder="... websiteUrl"
                />
              </Form.Group>
            </Col>
            <Col xs="4">
              <Form.Group controlId="websiteUrl">
                <Form.Label></Form.Label>
                <Form.Control as="select" defaultValue="Locations...">
                  <option>Personal</option>
                  <option>Company</option>
                  <option>Blog</option>
                  <option>RSS Feed</option>
                  <option>Portfolio</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs="8">
              <Form.Group controlId="websiteUrl">
                <Form.Label>Website URL</Form.Label>
                <Form.Control
                  type="text"
                  value={""}
                  // onChange={(e) => dataSet("education", e.target.value)}
                  placeholder="... websiteUrl"
                />
              </Form.Group>
            </Col>
            <Col xs="4">
              <Form.Group controlId="websiteUrl">
                <Form.Label></Form.Label>
                <Form.Control as="select" defaultValue="Locations...">
                  <option>Personal</option>
                  <option>Company</option>
                  <option>Blog</option>
                  <option>RSS Feed</option>
                  <option>Portfolio</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs="8">
              <Form.Group controlId="PhoneNumb">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  value={""}
                  // onChange={(e) => dataSet("education", e.target.value)}
                  placeholder="...Phone"
                />
              </Form.Group>
            </Col>
            <Col xs="4">
              <Form.Group controlId="phoneNumbType">
                <Form.Label></Form.Label>
                <Form.Control as="select" defaultValue="Locations...">
                  <option>Home</option>
                  <option>Work</option>
                  <option>Mobile</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs="12">
              <Form.Group controlId="websiteUrl">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  type="text"
                  value={""}
                  // onChange={(e) => dataSet("education", e.target.value)}
                  placeholder="... Address"
                />
              </Form.Group>
            </Col>
            <Col xs="12">
              <Form.Group controlId="formName" className="d-flex flex-column">
                <Form.Label>Email address</Form.Label>{" "}
                <Form.Label>
                  <Link to="/" className="">
                    {email}
                    <BsBoxArrowUpRight
                      className="ml-1 font-weight-bold"
                      size="1rem"
                    />
                  </Link>
                </Form.Label>
                <Form.Label className="contact-info">
                  + Add instant messenger
                </Form.Label>
              </Form.Group>
            </Col>
            <Col xs="6">
              {" "}
              <Form.Group controlId="formGridState">
                <Form.Label>Birthday</Form.Label>
                <Form.Control as="select" defaultValue="birthday...">
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs="6">
              <Form.Group controlId="formGridState">
                <Form.Label>Birthday</Form.Label>
                <Form.Control as="select" defaultValue="birthday...">
                  <option>1</option>
                </Form.Control>
                <Form.Text className="addFormerBtn font-weight-bold float-right">
                  <AiFillEye />{" "}
                  <p
                    style={{
                      fontSize: "0.8rem",
                      display: "inline-block",
                    }}
                  >
                    {" "}
                    Birthday visible to: All LinkedIn members
                  </p>
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Apply
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
}
