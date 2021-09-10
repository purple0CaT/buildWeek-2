import React, { useState } from "react"
import  "../css/AllProfilePosts.css"
import { MdInsertPhoto } from "react-icons/md"
import { BiCalendar } from "react-icons/bi"
import { ImPlay } from "react-icons/im"
import { FaIndent } from "react-icons/fa"
import { Modal, Button } from "react-bootstrap"
import { useRef } from "react"

const PostForm = ({fetchPosts, meProfile}) => {
  const token = process.env.REACT_APP_TOKENACCESS;
  const [enteredPost, setEnteredPost] = useState({ text: "",})
  const [postImage, setPostImage] = useState(null)

  const handlerPost = (e) => { setEnteredPost({ text: e.target.value })}

//const filesInput = useRef()

  const submitPost = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(enteredPost),
        }
      )
      //  if (response.ok) {
      //     setEnteredPost({ text: "" })
      //     const post = await response.json()
      //     const formData = new FormData()
      //     formData.append("post", postImage)

      //     try {
      //       const response = await fetch(
      //         `https://striveschool-api.herokuapp.com/api/posts/ ${post._id}`,
      //         {
      //           method: "POST",
      //           body: formData,
      //           headers: {
      //             Authorization: "Bearer " + token,
      //           },
      //         }
      //       )

      //       if (response.ok) {
      //         fetchPosts()
      //         alert('your post was saved correctly!')
      //       } else {
      //         alert('your post was NOT saved correctly!')
      //         console.log("error")
      //       }
      //     } catch (error) {
      //       console.log(error)
      //     }
      //   } else {
      //     console.log("there was an error ")
      //   }
       if(response.ok){
          alert('your post was saved correctly!')
        }
       else {
               alert('your post was NOT saved correctly!')
           }
          } catch (error) {
          console.log(error)
      }
  }

  return (
    <div className="post-form border d-flex">
              <div className="post-center">
                <div className="d-flex">
                  {meProfile && (
                    <img
                      className="post-profile-img mr-2"
                      src={meProfile.image}
                      alt=""
                    />
                  )}
                  <form onSubmit={submitPost} className="w-100">
                    <div className="d-flex align-items-center">
                      <input
                        className="post-input mr-2"
                        value={enteredPost.text}
                        placeholder="Put here your activities"
                        type="text"
                        name=""
                        id=""
                       onChange={(e)=>handlerPost(e)}
                        //onChange={handlerPost}
                      />
                    </div>
                        {/* <Button
                        variant="outline-primary"
                        onClick={() => {
                          filesInput.current.click()
                        }}
                      >
                        Image
                      </Button>
                      <input
                        ref={filesInput}
                        hidden
                        type="file"
                        onChange={(e) => setPostImage(e.target.files[0])}
                      /> */}
                       <Button id="d-button" variant="primary" type="submit">
                        Post
                        </Button> 
                  </form>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <div className="post-icons">
                    <MdInsertPhoto style={{ fontSize: "1.4rem", color: "#70b5f9" }} />
                    <span>Photo</span>
                  </div>
                  <div className="post-icons ">
                    <span>
                      <ImPlay style={{ fontSize: "1.4rem", color: "#7fc15e" }} />
                    </span>
                    <span>Video</span>
                  </div>

                  <div className="post-icons">
                    <BiCalendar style={{ fontSize: "1.4rem", color: "#e7a33e" }} />
                    <span>Event</span>
                  </div>

                  <div className="post-icons">
                    <FaIndent style={{ fontSize: "1.4rem", color: "#fc9295" }} />
                    <span>Write article</span>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default PostForm

