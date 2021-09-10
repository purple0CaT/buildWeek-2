import { useState, React } from "react";
import { RiGlobalFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { Modal, Button, FormControl } from "react-bootstrap";
const Privacy = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button id="privacy-btn" onClick={handleShow}>
        <RiGlobalFill /> Anyone <IoMdArrowDropdown />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <div className="profile-img">
              <img
                src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png"
                alt=""
              />
            </div>
            <div className="w-100">
              <div>Azizbek Tokhirjonov</div>
            </div>
          </div>
          <FormControl as="textarea" aria-label="With textarea" />
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

export default Privacy;
