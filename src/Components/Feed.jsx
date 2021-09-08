import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleFeed from "./SingleFeed";
import { useState, useEffect } from "react";
import FeedLeftBar from "./FeedLeftBar";
import FeedRightBar from "./FeedRightBar";

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
          <Col md="3">
            <FeedLeftBar />
          </Col>
          <Col md="6">
            {posts
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .map(
                (post) => post.user && <SingleFeed post={post} key={post._id} />
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
