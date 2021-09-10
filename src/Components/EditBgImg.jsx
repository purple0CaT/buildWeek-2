import React from "react";
import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";
import { ImPencil } from "react-icons/im";
import { withRouter } from "react-router";

const EditBgImg = ({ imgSrc, renewData, valueAvatar, match }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Loaders
  const [Loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState(false);
  // NEW POST FETCHING ==================================== <<<<
  const [ImageUpld, setImageUpld] = useState({ file: null });
  const uploadF = (e) => {
    console.log(e.target.files[0]);
    setImageUpld({ file: e.target.files[0] });
  };
  // FETCH ===== <<<<
  const ImgUpload = async (e) => {
    e.preventDefault();
    console.log(0, "Sending!", 0);
    setLoading(true);

    let formData = new FormData();
    let file = ImageUpld.file;
    formData.append("profile", file);
    // ==
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/6135e0aa7be6c10015f9db9c/picture",
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
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1500);
        setTimeout(() => {
          handleClose();
        }, 2000);
        setTimeout(() => {
          renewData();
        }, 2000);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   JSX
  return (
    <>
      {" "}
      {valueAvatar ? (
        <div
          className="edit-cover d-flex align-items-center justify-content-center"
          onClick={handleShow}
        >
          <ImPencil size="1rem" />
        </div>
      ) : (
        <img
          className="avatar"
          src={imgSrc}
          alt=""
          onClick={!match.params.id && handleShow}
          style={{ cursor: "pointer" }}
        />
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit image</Modal.Title>
        </Modal.Header>
        <Form onSubmit={ImgUpload}>
          <Modal.Body>
            {" "}
            <Form.Group controlId="formSurname">
              <Form.Label>Edit image</Form.Label>
              <div className="d-flex justify-content-center">
                <img src={imgSrc} alt="" className="avatarEdit" />
              </div>
              <Form.File id="fileUpload" onChange={uploadF} required />
            </Form.Group>
            {/* input */}
          </Modal.Body>
          <Modal.Footer>
            {Success && <Alert variant="success">Success</Alert>}
            {Loading && <Spinner animation="grow" />}
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default withRouter(EditBgImg);
