import { Row, Col, Card, Button } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import Learning from "./Learning";
import ViewedPeople from "./ViewedPeople";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
const Aside = () => {
  const [users, getUsers] = useState([]);
  const token = process.env.REACT_APP_TOKENACCESS;
  const url = "https://striveschool-api.herokuapp.com/api/profile/";

  const fetchUsers = async () => {
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response.ok) {
        let data = await response.json();
        getUsers({ data });
        console.log(users);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    console.log(users);
  }, []);

  return (
    <>
      <div className="aside-container">
        <Row className="aside-row">
          <div className="d-flex">
            <div>Edit public profile & URL </div>
            <div className="icon1">
              <AiFillQuestionCircle />
            </div>
          </div>
          <div className="d-flex">
            <div>Add profile in another language </div>
            <div className="icon2 ">
              <AiFillQuestionCircle />
            </div>
          </div>
        </Row>
        <Row className="mt-3">
          <Card className="aside-card w-100 justify-content-start">
            <Card.Body>
              <Card.Text className="badge">
                <small>
                  Ad <BsThreeDots />
                </small>
              </Card.Text>
              <Card.Title className="title">
                <small>Get the latest jobs and industry news</small>
              </Card.Title>
              <div className="d-flex imgs justify-content-center">
                <Card.Img
                  className="mr-3"
                  src="https://image.flaticon.com/icons/png/512/149/149071.png"
                  alt="user"
                ></Card.Img>
                <Card.Img
                  src="https://image.flaticon.com/icons/png/512/149/149071.png"
                  alt="user"
                ></Card.Img>
              </div>
              <Card.Text className="body-text text-center">
                Explore relevant opportunities with EPAM Systems
              </Card.Text>
              <Button variant="outline-primary">Follow</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className="mt-4">
          <Card id="viewed">
            <Card.Title>People also viewed</Card.Title>
            <ViewedPeople message="Message" data={users} />
          </Card>
        </Row>
        <Row className="mt-4">
          <Card id="may-know">
            <Card.Title>People you may know</Card.Title>
            <ViewedPeople message="Connect" data={users} />
          </Card>
        </Row>
        <Row className="mt-4 mb-5">
          <Card id="learning">
            <Card.Title>
              Add new skills with these courses, free for 24 hours
            </Card.Title>
            <Learning />
          </Card>
        </Row>
      </div>
    </>
  );
};

export default withRouter(Aside);
