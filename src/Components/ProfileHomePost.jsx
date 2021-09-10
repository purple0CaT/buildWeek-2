import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import PostForm from "./ProfilePostForm"
import Posts from "./ProfilePosts"
import {Modal, Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
import  "../css/AllProfilePosts.css"
import "../activity.css"
import "../experience.css"

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
          <div className="activity-container mt-3">
            <div  className="text-left ml-4 mr-4 mt-4 d-flex" style={{height:"40px"}}>
              <p className="mb-0 py-0">
                <h5 style={{fontWeight:"480"}}>Activity</h5>
              </p>
              <Button id="but1" onClick={handleShow}>
                Start a post
              </Button>
              </div>
              <Link>
              <div  className="text-left ml-4 mr-4 d-flex followers">
                9 followers
              </div>
              </Link>
              <div className="text-left ml-4 mr-4 mt-2">
              <p style={{fontSize:"15px"}} >Posts you created, shared, or commented on in the last 90 days are displayed here.</p>
              </div>
              <hr className="mb-2"/>
              <div className="lighter-color-activity text-center  mt-1 mb-2">
                See all activity
              </div>
          </div>

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
      
    </>
  )
}

export default ProfileHomePost

    
