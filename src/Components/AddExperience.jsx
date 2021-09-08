import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { AiFillEye } from "react-icons/ai";
import "../css/editModal.css";


import { DropdownDate, DropdownComponent } from "react-dropdown-date";


export default function AddExperience({userId}) {
  // CONSTANT
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const token = process.env.REACT_APP_TOKENACCESS;

// Date

const formatDate = (date) => {
  // formats a JS date to 'yyyy-mm-dd'
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const [date, setDate] = useState(null)
const [selectedDate, setSelectedDate] = useState("2021-09-08")

  //   REFRESH
  useEffect(() => {
   
  }, []);
  
  // EXPERIENCE Model:
// {
//     "_id": "5d925e677360c41e0046d1f5",  //server generated
//     "role": "CTO",
//     "company": "Strive School",
//     "startDate": "2019-06-16",
//     "endDate": "2019-06-16", //could be null
//     "description": "Doing stuff here and there",
//     "area": "Berlin",
//     "username": "admin",  //server generated
//     "createdAt": "2019-09-30T19:58:31.019Z",  //server generated
//     "updatedAt": "2019-09-30T19:58:31.019Z",  //server generated
//     "__v": 0  //server generated
//     "image": ... //server generated on upload
// }   

  //   EDITING INFO
  const [EditingInfo, setEditingInfo] = useState({
    role: "",
    company: "",
    startDate: "2019-06-16",
    endDate: null,
    description: "",
    area: "",
  
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

  //   POSTING DATA
  //   URL
  const url = "https://striveschool-api.herokuapp.com/api/profile/"+ userId +"/experiences";

  const postData = async () => {
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(EditingInfo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      });
      if (response.ok) {
        let data = await response.json();
        // renewData();
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
      
      <div className=" d-flex justify-content-center align-items-center edit-info-pencil">
        <div className="d-flex">
      <i class="bi bi-plus-lg lighter-color ml-auto"
      style={{fontSize:"1.5rem"}} 
      onClick={handleShow}>       
      </i>

        </div>
      </div>
      <Modal className="modalEditInfo" show={show} onHide={handleClose}>      
            <Modal.Header className="font-weight-light" closeButton>
              <Modal.Title className="font-weight-light">
                Add Experience
              </Modal.Title>
            </Modal.Header>
            <Form onSubmit={(e) => sendData(e)}>
              <Modal.Body className="p-4">
                <Row>
                <Col xs="12">
                    <Form.Group controlId="formHeadLine">
                      <Form.Label>Title *</Form.Label>
                      <Form.Control
                        type="text"
                        value={EditingInfo.role}
                        onChange={(e) => dataSet("role", e.target.value)}
                        placeholder="Ex: Retail sales manager"
                      />
                    </Form.Group>
                  </Col>               
                  <Col xs="12">
                    <Form.Group controlId="formGridState">
                      <Form.Label>Employment type</Form.Label>
                      <Form.Control as="select" defaultValue="Hero...">
                        <option>-</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Self-employed</option>
                        <option>Freelance</option>
                        <option>Contract</option>
                        <option>Internship</option>
                        <option>Apprenticeship</option>                      
                      </Form.Control>
                      <Form.Text className="text-muted">
                      Country-specific employment types.{" "}
                        <div>
                        <a className="contact-info font-weight-bold">
                          Learn more
                        </a>
                        </div>
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col xs="12">
                    <Form.Group controlId="formHeadLine">
                      <Form.Label>Company *</Form.Label>
                      <Form.Control
                        type="text"
                        value={EditingInfo.company}
                        onChange={(e) => dataSet("company", e.target.value)}
                        placeholder="Ex: Microsoft"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12">
                    <Form.Group controlId="formCurent">
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        type="text"
                        value={EditingInfo.area}
                        onChange={(e) => dataSet("area", e.target.value)}
                        placeholder="Ex: London, United Kingdom"
                      />                  
                    </Form.Group>
                  </Col>
                  <Col xs="12">
                    <Form.Group controlId="checkCompany">
                      <Form.Check
                        className="checkbox-edit"
                        type="checkbox"
                        label="I`m currently working in this role"
                        variant="success"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="6">
                  <div className="d-flex">
                  <Form.Group controlId="formHeadLine">
                      <Form.Label>Start date * </Form.Label>     
                    </Form.Group>
                      {/* <DropdownDate
                        startDate={
                          // optional, if not provided 1900-01-01 is startDate
                          "2012-01-01" // 'yyyy-mm-dd' format only
                        }
                        endDate={
                          // optional, if not provided current date is endDate
                          "2021-09-08" // 'yyyy-mm-dd' format only
                        }
                        selectedDate={
                          // optional
                          selectedDate // 'yyyy-mm-dd' format only
                        }
                        onDateChange={(date) => {
                          // optional
                          console.log(date);
                          setDate({date})
                          setSelectedDate(formatDate(date))
                          // this.setState({ date: date, selectedDate: formatDate(date) });
                        }}
                      /> */}
                </div>
                  </Col>
                  <Col xs="6">               
                  </Col>
                  <Col xs="12">
                    <Form.Group controlId="checkEducation">
                      <Form.Check
                        className="checkbox-edit"
                        type="checkbox"
                        label="Update my industry"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12">
                    <Form.Group controlId="checkEducation">
                      <Form.Check
                        className="checkbox-edit"
                        type="checkbox"
                        label="Update my headline"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Headline *</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                  </Form.Group>
                  </Col>
                  <Col xs="12">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} 
                    value={EditingInfo.description}
                    onChange={(e) => dataSet("description", e.target.value)}
                    
                    />
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
