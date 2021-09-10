import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ImPencil } from "react-icons/im";
import "../css/maincontainer.css";
import EditInfo from "./EditInfo";
import { Link, withRouter } from "react-router-dom";
import EditBgImg from "./EditBgImg";
import Skeleton from "@material-ui/lab/Skeleton";

function MainContainer({ match }) {
  const token = process.env.REACT_APP_TOKENACCESS;

  const personId = "";
  const [PersonInfo, setPersonInfo] = useState([]);
  //   !
  //   UPDATE INFO
  useEffect(() => {
    fetchPerson();
  }, []);
  useEffect(() => {
    fetchPerson();
  }, [match.params]);
  //   !
  //   FETCHING
  const fetchPerson = async () => {
    try {
      let response = await fetch(
        match.params.id
          ? "https://striveschool-api.herokuapp.com/api/profile/" +
              match.params.id
          : "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setPersonInfo({ data });
      } else {
        console.log("Error");
      }
    } catch (erorr) {}
  };
  //   !
  //   JSX
  return (
    <>
      <div className="w-100 mt-5 person-info">
        <Row>
          {/* BG IMAGE */}
          <Col xs="12" className="bg-image">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E16AQEsq53uWSPplg/profile-displaybackgroundimage-shrink_350_1400/0/1629185220320?e=1636588800&v=beta&t=brJaUskUvjk3_S4toz1F95-TPuzMELixFB8b4R9hsyo"
              alt=""
            />
            {PersonInfo.data && (
              <EditBgImg
                imgSrc={PersonInfo.data.image}
                renewData={() => fetchPerson()}
								valueAvatar={true}
              />
            )}
            {/* AVATAR */}
            {!PersonInfo.data ? (
              <Skeleton
                animation="wave"
                className="avatar position-absolute"
                variant="circle"
                height={165}
                style={{ aspectRatio: "1/1" }}
              />
            ) : (
              <EditBgImg
                imgSrc={PersonInfo.data.image}
                renewData={() => fetchPerson()}
								valueAvatar={false}
              />
            )}
          </Col>
          <Col xs="12 d-flex flex-wrap">
            {/* LEFT SIDE */}
            <Col
              xs="12"
              md="8"
              className="d-flex flex-column align-items-start name-box"
            >
              {" "}
              {PersonInfo.data ? (
                <>
                  <h2>
                    {PersonInfo.data.name} {PersonInfo.data.surname}{" "}
                  </h2>
                  <p className="text-left m-0">{PersonInfo.data.title}</p>
                  <div className="d-flex  align-items-center">
                    <small className="text-muted mr-1">
                      {PersonInfo.data.area}
                    </small>{" "}
                    ·{" "}
                    <small className="ml-1 contact-info font-weight-bold">
                      <a href="">Contact info</a>
                    </small>{" "}
                  </div>
                </>
              ) : (
                <>
                  <Skeleton
                    className="rounded"
                    variant="rect"
                    width={200}
                    height={30}
                    style={{ borderRadius: "20px !important" }}
                  />
                  <br />
                  <Skeleton
                    className="rounded"
                    variant="rect"
                    width={70}
                    height={20}
                  />
                  <Skeleton
                    className="mt-2 rounded"
                    variant="rect"
                    width={150}
                    height={10}
                  />
                  <Skeleton
                    className="mt-2 rounded"
                    variant="rect"
                    width={100}
                    height={10}
                  />
                </>
              )}
              <div className="mt-3">
                <Button className="font-weight-bold">Open to</Button>
                <Button
                  className="font-weight-bold"
                  variant="outline-secondary"
                >
                  Add section
                </Button>
                <Button
                  className="font-weight-bold"
                  variant="outline-secondary"
                >
                  More
                </Button>
              </div>
            </Col>
            {/* RIGHT SIDE */}
            <Col xs="12" md="4" className="d-flex flex-column p-4">
              {" "}
              <div className="d-flex justify-content-end my-2">
                {PersonInfo.data ? (
                  <EditInfo
                    personId={PersonInfo.data._id}
                    name={PersonInfo.data.name}
                    surname={PersonInfo.data.surname}
                    area={PersonInfo.data.area}
                    title={PersonInfo.data.title}
                    imgSrc={PersonInfo.data.image}
                    bio={PersonInfo.data.bio}
                    username={PersonInfo.data.username}
                    email={PersonInfo.data.email}
                    renewData={fetchPerson}
                  />
                ) : (
                  <Skeleton
                    className="mt-2 rounded-circle"
                    variant="rect"
                    width={25}
                    height={25}
                  />
                )}
              </div>
              {PersonInfo.data ? (
                <a href="" className="d-flex align-items-center">
                  <img
                    style={{ height: "2rem" }}
                    src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1639008000&v=beta&t=38emh8r8X3fw7Ah3ky91KyaVJT_6wSkxl1MqF2QRf5E"
                    alt=""
                  />
                  <small className="font-weight-bold ml-2">Strive School</small>
                </a>
              ) : (
                <Skeleton
                  className="mt-2 rounded"
                  variant="rect"
                  width={80}
                  height={35}
                />
              )}
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default withRouter(MainContainer);
