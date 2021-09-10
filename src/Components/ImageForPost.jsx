import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsCardImage } from "react-icons/bs";

const ImageForPost = ({
  addPostFunction,
  postId,
  fetchPosts,
  title,
  renewData,
}) => {
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
  // FETCH ===== <<<<
  const ImgUpload = async (e) => {
    e.preventDefault();
    console.log(0, "Sending!", 0);
    setLoading(true);
    const url =
      title === "post-img"
        ? "https://striveschool-api.herokuapp.com/api/posts/" + postId._id
        : "https://striveschool-api.herokuapp.com/api/profile/6135e0aa7be6c10015f9db9c/picture";
    const token = process.env.REACT_APP_TOKENACCESS;

    let formData = new FormData();
    let file = ImageUpld.file;
    formData.append(title === "post-img" ? "post" : "profile", file);
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
          title === "post-img" ? fetchPosts() : renewData();
        }, 2000);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
