import React from "react";
import { Modal, Button, Form, Carousel } from "react-bootstrap";
import { useState } from "react";
import { ImPencil } from "react-icons/im";

export default function EditBgImg({
  personId,
  imgSrc,
  nameSrc,
  surnameSrc,
  emailSrc,
  usernameSrc,
  titleSrc,
  bioSrc,
  areaSrc,
  renewData,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Image
  const [Img, setImg] = useState({
    name: nameSrc,
    surname: surnameSrc,
    email: emailSrc,
    username: usernameSrc,
    title: titleSrc,
    bio: bioSrc,
    area: areaSrc,
    image: imgSrc,
  });
  // NEW PUT
  const uploadF = (e) => {
    console.log(e.target.files);
  };
  // PUT
  //   URL
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const sendData = (e) => {
    e.preventDefault();
    postData();
    handleClose();
  };
  //   POSTING DATA
  const postData = async () => {
    try {
      let response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(Img),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTBhYTdiZTZjMTAwMTVmOWRiOWMiLCJpYXQiOjE2MzA5MjA4NzQsImV4cCI6MTYzMjEzMDQ3NH0.q5C0SILXauX7HfPrCSoz6sHV9dLLY4aLIoO6gnpApKA",
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
  //   JSX
  return (
    <>
      {" "}
      <div
        className="edit-cover d-flex align-items-center justify-content-center"
        onClick={handleShow}
      >
        <ImPencil size="1rem" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit image</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => sendData(e)}>
          <Modal.Body>
            {" "}
            <Form.Group controlId="formSurname">
              <Form.Label>Edit image</Form.Label>
              <Form.Control
                type="text"
                value={Img.image}
                onChange={(e) => setImg({ ...Img, image: e.target.value })}
                placeholder="... img src"
              />
            </Form.Group>
            <input type="file" name="fileUpload" onChange={uploadF} />
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
