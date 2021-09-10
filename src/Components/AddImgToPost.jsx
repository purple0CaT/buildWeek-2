import React from "react";
import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";
import { ImPencil } from "react-icons/im";
import { BsCardImage } from "react-icons/bs";

export default function EditBgImg({
  imgSrc,
  renewData,
  valueAvatar,
  title,
  postId,
  fetchPosts,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const postImg = postId ? postId.image : "";
  // Loaders
  const [Loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState(false);
  // NEW POST FETCHING ==================================== <<<<
  const [ImageUpld, setImageUpld] = useState({ file: null });
  const uploadF = (e) => {
    console.log(e.target.files[0]);
    setImageUpld({ file: e.target.files[0] });
  };

  //   JSX
  return (
    <>
      <BsCardImage onClick={handleShow} size={25} className="mr-2" />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit image</Modal.Title>
        </Modal.Header>
        <Form onSubmit={ImgUpload}>
          <Modal.Body>
            <Form.Group controlId="formSurname">
              <Form.Label>Edit image</Form.Label>
              <div className="d-flex justify-content-center">
                <img src={postImg} alt="" className="avatarEdit" />
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
}
