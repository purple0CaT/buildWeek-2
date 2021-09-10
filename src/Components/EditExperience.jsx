import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useRef } from "react";
import "../experience.css"
import "../css/editModal.css";


import { DropdownDate, DropdownComponent } from "react-dropdown-date";


export default function EditExperience({userId, expId}) {
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

const [startDate, setStartDate] = useState(null)
const [selectedStartDate, setSelectedStartDate] = useState("2021-09-08")
const [endDate, setEndDate] = useState(null)
const [selectedEndDate, setSelectedEndDate] = useState("2021-09-09")


  //   REFRESH
  useEffect(() => {
    fetchExp();

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
    startDate: "",
    endDate: null,
    description: "",
    area: "",
    file: null
  });
  // Data set
  const dataSet = (valname, valdata) => {
    setEditingInfo({ ...EditingInfo, [valname]: valdata });
  };
  // DATA SEND
  const sendData = (e) => {
    e.preventDefault();
    editData();
    handleClose();
    imageUpload();
  };
  const deleteData = (e) => {
    e.preventDefault();
    deleteFunction();
    handleClose();
  }

  //Recieving Data
  const url = "https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences/" + expId;
  const fetchExp = async () => {
    try {
      let response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        // console.log("THIS IS EDIT-EXPERIENCE", data )
        
  
        // let newData = await data[0]
        // console.log("NEW DATA", newData)
        setEditingInfo(data)
        
      } else {
        console.log("Error");
      }
    } catch (erorr) {}
  }

  const editData = async () => {
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
        // renewData();
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteFunction = async (e) => {
    try {
      let response = await fetch(url, {
        method: "DELETE",
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

  const imageUpload = async () => {
    
    let formData = new FormData();
    let file = EditingInfo.file;
    formData.append("experience", file);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/6135e0aa7be6c10015f9db9c/experiences/" +expId+ "/picture",
        {
          method: "POST",
          body: formData,
          // mode: "no-cors",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTBhYTdiZTZjMTAwMTVmOWRiOWMiLCJpYXQiOjE2MzA5MjA4NzQsImV4cCI6MTYzMjEzMDQ3NH0.q5C0SILXauX7HfPrCSoz6sHV9dLLY4aLIoO6gnpApKA",
          },
        }
      );
      let data = await response.json();
      if (response.ok) {
        console.log(response);
        console.log(data);
        alert("Image upload successful")
        // setLoading(false);
        // setSuccess(true);
        // setTimeout(() => {
        //   setSuccess(false);
        // }, 1500);
        // setTimeout(() => {
        //   handleClose();
        // }, 2000);
        // setTimeout(() => {
        //   renewData();
        // }, 2000);
      } else {
        console.log(response);
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
            <i class="bi bi-pencil lighter-color ml-auto"
            style={{fontSize:"1.3rem"}} 
            onClick={handleShow}>       
            </i>
        </div>
      </div>
      <Modal className="modalEditInfo" show={show} onHide={handleClose}>      
            <Modal.Header className="font-weight-light" closeButton>
              <Modal.Title className="font-weight-light">
                Edit Experience
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
                  <Form.Group controlId="formHeadLine">
                      <Form.Label>Start date * </Form.Label>     
                    </Form.Group>
                      <DropdownDate classes="d-flex"
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
                          selectedStartDate // 'yyyy-mm-dd' format only
                        }
                        onDateChange={(startDate) => {
                          // optional
                          // console.log(date);
                          setStartDate({startDate})
                          setSelectedStartDate(formatDate(startDate))
                          dataSet("startDate", selectedStartDate)
                          // this.setState({ date: date, selectedDate: formatDate(date) });
                        }}
                      />
                  </Col>
                  <Col xs="6">
                  <Form.Group controlId="formHeadLine">
                      <Form.Label>End date * </Form.Label>     
                    </Form.Group>
                      <DropdownDate classes="d-flex"
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
                          selectedEndDate // 'yyyy-mm-dd' format only
                        }
                        onDateChange={(endDate) => {
                          // optional
                          // console.log(date);
                          setEndDate({endDate})
                          setSelectedEndDate(formatDate(endDate))
                          dataSet("endDate", selectedEndDate)
                          // this.setState({ date: date, selectedDate: formatDate(date) });
                        }}
                      />
                  </Col>
                  <Col xs="6">               
                  </Col>
                  <Col xs="12" className="mt-3">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} 
                    value={EditingInfo.description}
                    onChange={(e) => dataSet("description", e.target.value)}
                    />
                  </Form.Group>
                  </Col>
                  <Col xs="12">
                  <Form.Group controlId="formSurname">
                    <Form.Label>Add Image</Form.Label>                  
                    <Form.File id="fileUpload" onChange={(e) => dataSet("file", e.target.files[0])} />
                  </Form.Group>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="light" className="mr-auto"
                onClick={(e) => deleteData(e)}>
                Delete
                </Button>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Modal.Footer>
            </Form>       
      </Modal>
    </>
  );
}
