import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ImPencil } from "react-icons/im";
import { AiFillEye } from "react-icons/ai";

import "../css/editModal.css";

export default function EditInfo({
  name,
  surname,
  title,
  area,
  personId,
  imgSrc,
  bio,
  username,
  email,
  renewData,
}) {
  // CONSTANT
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [FormerName, setFormerName] = useState();
  const token = process.env.REACT_APP_TOKENACCESS;

  //   REFRESH
  useEffect(() => {
    fetchCountries();
  }, []);
  //   COUNTRIES
  const [Countries, setCountries] = useState({});
  //   EDITING INFO
  const [EditingInfo, setEditingInfo] = useState({
    name: name,
    surname: surname,
    email: email,
    bio: bio,
    title: title,
    area: area,
    username: username,
    image: imgSrc,
  });
  // Data set
  const dataSet = (valname, valdata) => {
    setEditingInfo({ ...EditingInfo, [valname]: valdata });
  };
  // DATA SEND
  const sendData = (e) => {
    e.preventDefault();
    postData();
    handleClose();
  };
  //   FETCHING COUNTRIES
  const fetchCountries = async () => {
    try {
      let response = await fetch("https://restcountries.eu/rest/v2/all");
      if (response.ok) {
        let dataCount = await response.json();
        setCountries({ data: dataCount });
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  //   POSTING DATA
  //   URL
  const url = "https://striveschool-api.herokuapp.com/api/profile/";

  const postData = async () => {
    try {
      let response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(EditingInfo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      });
      if (response.ok) {
        let data = await response.json();
        renewData();
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // JSX !
  return (
    <>
      <ImPencil
        size="1.2rem"
        className="text-muted"
        onClick={handleShow}
        style={{ cursor: "pointer" }}
      />

      <Modal className="modalEditInfo" show={show} onHide={handleClose}>
        <Modal.Header className="font-weight-light" closeButton>
          <Modal.Title className="font-weight-light">Edit intro</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => sendData(e)}>
          <Modal.Body className="p-4">
            <Row>
              <Col xs="6">
                <Form.Group controlId="formName">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    value={EditingInfo.name}
                    onChange={(e) => dataSet("name", e.target.value)}
                    placeholder="Enter name"
                  />
                  {!FormerName && (
                    <Form.Text
                      className="addFormerBtn font-weight-bold pl-3"
                      onClick={() => setFormerName(true)}
                    >
                      Add former name
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col xs="6">
                <Form.Group controlId="formSurname">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    type="text"
                    value={EditingInfo.surname}
                    onChange={(e) => dataSet("surname", e.target.value)}
                    placeholder="Enter name"
                  />
                </Form.Group>
              </Col>
              {/* FORMER NAME */}
              <Col xs="12">
                {FormerName && (
                  <Form.Group controlId="formFormer">
                    <Form.Label>Former Name *</Form.Label>
                    <Form.Control type="text" placeholder="...former name" />
                  </Form.Group>
                )}
              </Col>
              <Col xs="12 mt-4">
                <h6 className="text-muted ml-3">+ Record name pronunciation</h6>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  Name pronunciation can only be added using our mobile app.
                </p>
              </Col>
              <Col xs="12">
                <Form.Group controlId="formGridState">
                  <Form.Label>Pronouns</Form.Label>
                  <Form.Control as="select" defaultValue="Pronouns...">
                    <option>Pronouns...</option>
                    <option>She/Her</option>
                    <option>He/Him</option>
                    <option>They/Them</option>
                    <option>Custom</option>
                  </Form.Control>
                  <Form.Text className="text-muted">
                    Let others know how to refer to you.{" "}
                    <a className="contact-info font-weight-bold">Learn more</a>
                  </Form.Text>
                  <Form.Text className="addFormerBtn font-weight-bold">
                    <AiFillEye />{" "}
                    <p style={{ fontSize: "0.9rem", display: "inline-block" }}>
                      {" "}
                      Visible to: All LinkedIn members
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group controlId="formHeadLine">
                  <Form.Label>Headline *</Form.Label>
                  <Form.Control
                    type="text"
                    value={EditingInfo.title}
                    onChange={(e) => dataSet("surname", e.target.value)}
                    placeholder="... text"
                  />
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group controlId="formCurent">
                  <Form.Label>Curent position</Form.Label>
                  <Form.Control
                    type="text"
                    value={EditingInfo.title}
                    onChange={(e) => dataSet("title", e.target.value)}
                    placeholder="... curent position"
                  />
                  <Form.Text className="addFormerBtn font-weight-bold pl-3">
                    Add new postition
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group controlId="checkCompany">
                  <Form.Check
                    className="checkbox-edit"
                    type="checkbox"
                    label="Show current company in my intro"
                    variant="success"
                  />
                </Form.Group>
              </Col>
              {/* EDUCATION */}
              <Col xs="12">
                <Form.Group controlId="formHeadLine">
                  <Form.Label>Education</Form.Label>
                  <Form.Control
                    type="text"
                    value={EditingInfo.education}
                    // onChange={(e) => dataSet("education", e.target.value)}
                    placeholder="... text"
                  />
                  <Form.Text className="addFormerBtn font-weight-bold pl-3">
                    Add new education
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group controlId="checkEducation">
                  <Form.Check
                    className="checkbox-edit"
                    type="checkbox"
                    label="Show education in my intro"
                  />
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group controlId="formCountry">
                  <Form.Label>Country/Region *</Form.Label>
                  <Form.Control
                    type="text"
                    value={EditingInfo.area}
                    onChange={(e) => dataSet("area", e.target.value)}
                    placeholder="...Country"
                  />
                </Form.Group>
              </Col>
              <Col xs="6">
                <Form.Group controlId="formPostal">
                  <Form.Label>Postal code</Form.Label>
                  <Form.Control
                    type="text"
                    value={EditingInfo.postal}
                    // onChange={(e) => dataSet("education", e.target.value)}
                    placeholder="...postal"
                  />
                </Form.Group>
              </Col>
              <Col xs="6">
                <Form.Group controlId="formCountry">
                  <Form.Label>Locations within this area</Form.Label>
                  <Form.Control as="select" defaultValue="Locations...">
                    <option>Locations...</option>
                    {Countries.data ? (
                      Countries.data.map((count) => (
                        <option key={count.name + count.numericCode}>
                          {count.name}
                        </option>
                      ))
                    ) : (
                      <option>Locations...</option>
                    )}
                  </Form.Control>
                </Form.Group>
              </Col>
              {/* INDUSTRY */}
              <Col xs="12">
                <Form.Group controlId="formIndustry">
                  <Form.Label>Industry *</Form.Label>

                  <Form.Control
                    as="select"
                    defaultValue="Industry..."
                    value={EditingInfo.industry}
                  >
                    <option>Industry...</option>
                    <option>Industry...</option>
                    <option>Industry...</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group controlId="formcontactInfo">
                  <Form.Label>Contact info</Form.Label>
                  <div className="contact-info-change d-flex justify-content-between align-items-end">
                    <p className="mb-0">Some text</p>
                    <div className="edit-pencil-contact">
                      <ImPencil />
                    </div>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
