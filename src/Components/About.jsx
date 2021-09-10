import { useState } from "react";
import "../about.css"
import {Modal, Button, Form} from 'react-bootstrap'

 const About = () => {

  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     


    return (
      <div className="about-container mt-3">
        <div  className="text-left ml-4 mr-4 mt-4 d-flex">
          <p>
            <h5 style={{fontWeight:"480"}}>About</h5>
          </p>
          <i className="bi bi-pencil ml-auto" style={{fontSize:"1.3rem"}} onClick={handleShow}></i>
          </div>
          <div className="text-left ml-4 mr-4 mb-4">
          <p style={{fontSize:"15px"}}>
            This is some sample text about me.
          </p>
          </div>
          <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton >
          <Modal.Title>Edit about</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <div>German</div>
            <div className="ml-5">English</div>
          </div>
          <hr/>
          <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control style={{height:"250px", border:" 1.5px solid black"}} as="textarea" rows={3} placeholder="This is some sample text about me in order to clone Linked in."/>
              </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id="modal-button">Save</Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  
}
export default About