import { useState, useEffect, React } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";
import Privacy from "./Privacy";
import TextareaAutosize from "react-textarea-autosize";
import { BsCardImage, BsThreeDots, BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillPlaySquare } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { GiFlowerStar } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";

const ModalItem = ({ onNewPostFunction }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(new Array(6).join("\n"));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = process.env.REACT_APP_TOKENACCESS;
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const addPost = async () => {
    const post = {
      text,
    };
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      if (response.ok) {
        const newPosts = await response.json();
        // the comment has been sent succesfully!!
        console.log("Posts", newPosts);
        onNewPostFunction(newPosts);
        alert("Comment was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <button id="modal-btn" onClick={handleShow}>
        Start a post
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
              <Privacy />
            </div>
          </div>

          <TextareaAutosize
            cacheMeasurements
            id="input"
            placeholder="What do you want to talk about?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            cols="62"
          />
          <button className="hashtag" onClick={() => setText(text + "#")}>
            Add hashtag
          </button>
        </Modal.Body>
        <Modal.Footer id="modal-footer">
          <div className="icons-footer">
            <BsCardImage size={25} />
            <AiFillPlaySquare size={25} />
            <HiDocumentText size={25} />
            <BsFillBriefcaseFill size={25} />
            <GiFlowerStar size={25} />
            <ImStatsBars size={25} />
            <BsThreeDots size={25} />
          </div>
          <Privacy />
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              addPost();
            }}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalItem;