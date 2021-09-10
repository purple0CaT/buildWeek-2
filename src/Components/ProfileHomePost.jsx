import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import PostForm from "./ProfilePostForm"
import Posts from "./ProfilePosts"
import {Modal, Button} from "react-bootstrap"
import  "../css/AllProfilePosts.css"

const ProfileHomePost = () => {

  const token = process.env.REACT_APP_TOKENACCESS;
  const [meProfile, setMeProfile] = useState(null)

  /* Function to fetch profile */
  const fetchProfile = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      if (response.ok) {
        const myProfile = await response.json()
        console.log(myProfile)
        setMeProfile(myProfile)
      } else {
        console.log("there was a4n error")
      }
    } catch (error) {
      console.log("there was an error")
    }
  }
  useEffect(() => {
    fetchProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const [getPosts, setGetPosts] = useState([])
  /* Function to fetch posts */
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )

      if (response.ok) {
        const posts = await response.json()
        setGetPosts(posts)
      } else {
        console.log("there was an error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
      <div className="text-left ml-4 mr-4 mt-4 d-flex align-items-center">
        <h5>
          Activity
        </h5>
      <Button id="but1" onClick={handleShow}>
        Start a post
      </Button>

      <Modal id="mod-body-container" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body id="mod-body"> 
         <PostForm meProfile={meProfile} fetchPosts={fetchPosts} />
      {getPosts
        .reverse()
        .slice(0, 4)
        .map((post) => {
          return <Posts postProps={post} key={post._id} />
        })}
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  )
}

export default ProfileHomePost

    
