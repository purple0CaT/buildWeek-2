import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleFeed from "./SingleFeed";
import { useState, useEffect } from "react";
import PostFeed from "./Post";
import FeedLeftBar from "./FeedLeftBar";
import FeedRightBar from "./FeedRightBar";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [checkSort, markSort] = useState(false);
  const token = process.env.REACT_APP_TOKENACCESS;
  const url = "https://striveschool-api.herokuapp.com/api/posts/";

  const onNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const onDeletePost = (postId) => {
    setPosts(posts.filter((post) => post._id !== postId));
  };
  const fetchPosts = async () => {
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response.ok) {
        let data = await response.json();

        setPosts(data);
        console.log(posts);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col md="3">
            <FeedLeftBar />
          </Col>
          <Col md="6">
            <PostFeed onNewPostFunction={onNewPost} />
            {posts
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .slice(0, 100)
              .map(
                (post) =>
                  post.user && (
                    <SingleFeed
                      onDeletePostFunction={onDeletePost}
                      post={post}
                      key={post._id}
                    />
                  )
              )}
          </Col>
          <Col md="3">
            <FeedRightBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Feed;
