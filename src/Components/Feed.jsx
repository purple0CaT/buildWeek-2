import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleFeed from "./SingleFeed";
import { useState, useEffect } from "react";
import PostFeed from "./Post";
function Feed() {
  const [posts, getPosts] = useState([]);
  const [checkSort, markSort] = useState(false);
  const token = process.env.REACT_APP_TOKENACCESS;
  const url = "https://striveschool-api.herokuapp.com/api/posts/";

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

        getPosts(data);
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
      <Container>
        <Row style={{ marginTop: 100 }}>
          <Col md="2">Side Bar</Col>
          <Col md="6">
            <PostFeed />
            {posts
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .map(
                (post) => post.user && <SingleFeed post={post} key={post._id} />
              )}
          </Col>
          <Col md="4">Another Side Bar</Col>
        </Row>
      </Container>
    </>
  );
}

export default Feed;
