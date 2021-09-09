import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsCardImage } from "react-icons/bs";

const ImageForPost = ({ addPostFunction }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BsCardImage onClick={handleShow} size={25} className="mr-2" />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload a photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input type="file" id="image-file" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageForPost;
