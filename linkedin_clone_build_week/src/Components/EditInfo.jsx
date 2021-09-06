import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { ImPencil } from "react-icons/im";
import "../css/editModal.css";

export default function EditInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ImPencil
        size="1.2rem"
        className="text-muted"
        onClick={handleShow}
        style={{ cursor: "pointer" }}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="font-weight-light" closeButton>
          <Modal.Title className="font-weight-light">Edit intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
          <h2>HELLO!!!</h2>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
