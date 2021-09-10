import { useState, useEffect, React } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";
import Privacy from "./Privacy";
import TextareaAutosize from "react-textarea-autosize";
import { BsCardImage, BsThreeDots, BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillPlaySquare, AiFillEdit } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { GiFlowerStar } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";
import ImageForPost from "./ImageForPost";
import EditBgImg from "./AddImgToPost";

const ModalItem = ({
  onNewPost,
  postToUpdate,
  onUpdatePost,
  title,
  fetchPosts,
}) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(
    title === "update" ? postToUpdate.text : new Array(6).join("\n")
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = process.env.REACT_APP_TOKENACCESS;
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
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
  const ImgUpload = async (postId) => {
    console.log(0, "Sending!", 0);
    setLoading(true);
    const url =
      "https://striveschool-api.herokuapp.com/api/posts/" + postId._id;

    const token = process.env.REACT_APP_TOKENACCESS;

    let formData = new FormData();
    let file = ImageUpld.file;
    formData.append("post", file);
    // ==
    try {
      let response = await fetch(url, {
        method: "POST",
        body: formData,
        // mode: "no-cors",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
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
          fetchPosts();
        }, 2000);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
        const newPost = await response.json();

        // if image upload image here
        ImgUpload(newPost);
        // the comment has been sent succesfully!!
        console.log("Posts", newPost);
        onNewPost(newPost);
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async () => {
    const post = {
      ...postToUpdate,
      text,
    };
    console.log("look here: ", postToUpdate);
    try {
      const response = await fetch(url + postToUpdate._id, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      if (response.ok) {
        const updatedPost = await response.json();
        console.log("updated", updatedPost);
        onUpdatePost(updatedPost);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        id={title === "update" ? "update-btn" : "modal-btn"}
        onClick={handleShow}
      >
        {title === "update" ? <AiFillEdit /> : "Start a post"}
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
            
            {title === "post" ? <ImageForPost
              uploadF={uploadF}
              ImgUpload={ImgUpload}
              Loading={Loading}
              Success={Success}
            /> : <EditBgImg />}
            <AiFillPlaySquare size={25} />
            <HiDocumentText size={25} />
            <BsFillBriefcaseFill size={25} />
            <GiFlowerStar size={25} />
            <ImStatsBars size={25} />
            <BsThreeDots size={25} />
          </div>
          <Privacy />

          {title === "update" ? (
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                updatePost();
              }}
            >
              Edit
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                addPost();
              }}
            >
              Post
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalItem;
