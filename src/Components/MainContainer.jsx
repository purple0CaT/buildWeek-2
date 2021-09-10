import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ImPencil } from "react-icons/im";
import "../css/maincontainer.css";
import EditInfo from "./EditInfo";
import { Link, withRouter } from "react-router-dom";
import EditBgImg from "./EditBgImg";
import Skeleton from "@material-ui/lab/Skeleton";
import OpenTo from "./mainContBtns/OpenTo";
import AddSection from "./mainContBtns/AddSection";
import More from "./mainContBtns/More";

const MainContainer = ({ match }) => {
  const token = process.env.REACT_APP_TOKENACCESS;

  const personId = "";
  const [PersonInfo, setPersonInfo] = useState([]);
  //   !
  const [BtnsUpdate, setBtnsUpdate] = useState({
    openTo: false,
    addSection: false,
    more: false,
  });
  //   UPDATE INFO
  useEffect(() => {
    fetchPerson();
    fetchPersonExpir();
  }, []);
  useEffect(() => {
    fetchPerson();
    fetchPersonExpir();
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
  //   FETCHING EXPP
  const [PersonExpr, setPersonExpr] = useState({});
  const fetchPersonExpir = async () => {
    try {
      let response = await fetch(
        match.params.id
          ? "https://striveschool-api.herokuapp.com/api/profile/" +
              match.params.id +
              "/experiences"
          : "https://striveschool-api.herokuapp.com/api/profile/6135e0aa7be6c10015f9db9c/experiences",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setPersonExpr({ data });
      } else {
        console.log("Error");
      }
    } catch (erorr) {}
  };
  //   !
  //   JSX
  return (
    <div className="position-relative">
      <div className="w-100 person-info">
        <Row>
          {/* BG IMAGE */}
          <Col xs="12" className="bg-image">
            <div
              style={{
                overflow: "hidden",
                borderTopLeftRadius: "9px",
                borderTopRightRadius: "9px",
              }}
            >
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E16AQEsq53uWSPplg/profile-displaybackgroundimage-shrink_350_1400/0/1629185220320?e=1636588800&v=beta&t=brJaUskUvjk3_S4toz1F95-TPuzMELixFB8b4R9hsyo"
                alt=""
              />
            </div>
            {!match.params.id && PersonInfo.data && (
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
                    width={130}
                    height={18}
                  />
                  <Skeleton
                    className="mt-2 rounded"
                    variant="rect"
                    width={120}
                    height={10}
                  />
                </>
              )}
              <div className="mt-3 d-flex flex-wrap">
                {/* opento */}
                <div className="position-relative">
                  <Button
                    className="font-weight-bold position-relative"
                    style={{ backgroundColor: "#0a66c2" }}
                    onClick={() =>
                      setBtnsUpdate({
                        more: false,
                        addSection: false,
                        openTo: !BtnsUpdate.openTo,
                      })
                    }
                  >
                    {match.params.id ? "Connect" : "Open to"}
                  </Button>
                  {BtnsUpdate.openTo && <OpenTo personAcc={match.params.id} />}
                </div>
                {/* AddSec */}
                <div className="position-relative">
                  <Button
                    className="font-weight-bold position-relative"
                    variant="outline-secondary"
                    onClick={() =>
                      setBtnsUpdate({
                        more: false,
                        openTo: false,
                        addSection: !BtnsUpdate.addSection,
                      })
                    }
                  >
                    {match.params.id ? "Message" : "Add section"}
                  </Button>
                  {BtnsUpdate.addSection && (
                    <AddSection
                      name={PersonInfo.data.name}
                      personAcc={match.params.id}
                    />
                  )}
                </div>
                {/* more */}
                <div className="position-relative">
                  <Button
                    className="font-weight-bold position-relative"
                    variant="outline-secondary"
                    onClick={() =>
                      setBtnsUpdate({
                        more: !BtnsUpdate.more,
                        openTo: false,
                        addSection: false,
                      })
                    }
                  >
                    More
                  </Button>
                  {BtnsUpdate.more && <More personAcc={match.params.id} />}
                </div>
              </div>
            </Col>
            {/* RIGHT SIDE */}
            <Col xs="12" md="4" className="d-flex flex-column p-4">
              {" "}
              <div className="d-flex justify-content-end my-2">
                {!match.params.id && PersonInfo.data ? (
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
                  !match.params.id && (
                    <Skeleton
                      className="mt-2 rounded-circle"
                      variant="rect"
                      width={25}
                      height={25}
                    />
                  )
                )}
              </div>
              {PersonExpr.data ? (
                PersonExpr.data.slice(0, 3).map((person) => (
                  <a href="" className="d-flex align-items-center my-1">
                    <img src={person.image} alt="" style={{ height: "2rem" }} />
                    <small className="font-weight-bold ml-2">
                      {person.role}
                    </small>
                  </a>
                ))
              ) : (
                <Skeleton
                  className="mt-2 rounded"
                  variant="rect"
                  width={140}
                  height={25}
                />
              )}
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withRouter(MainContainer);
