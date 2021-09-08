import "../css/FeedLeftBar.css";
import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgUserAdd } from "react-icons/cg";
import { IoBookmarkSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

export default function FeedLeftBar() {
  const [MyProfile, setMyProfile] = useState();
  //   Refresh
  useEffect(() => {
    fetchPerson();
  }, []);
  // Fetching function
  const url = "https://striveschool-api.herokuapp.com/api/profile/me";
  const token = process.env.REACT_APP_TOKENACCESS;
  //   Fetch
  const fetchPerson = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response.ok) {
        let data = await response.json();
        setMyProfile({ data });
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {MyProfile && (
        <div className="feedPersonInfo">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E16AQEsq53uWSPplg/profile-displaybackgroundimage-shrink_350_1400/0/1629185220320?e=1636588800&v=beta&t=brJaUskUvjk3_S4toz1F95-TPuzMELixFB8b4R9hsyo"
            alt=""
            style={{ width: "100%", height: "4rem", objectFit: "cover" }}
          />
          <Link
            to="/home/"
            className="d-flex flex-column align-items-center position-relative text-dark font-weight-bold"
          >
            <img
              src={MyProfile.data.image}
              alt=""
              className="feed-profile-image"
            />
            <br />
            <br />
            <h5 className="m-0">
              {MyProfile.data.name} {MyProfile.data.surname}
            </h5>
          </Link>
          <div className="text-muted px-3 pb-3 pt-2">
            <p
              className="text-muted m-0 text-center"
              style={{ fontSize: "0.8rem" }}
            >
              {MyProfile.data.bio}p
            </p>
          </div>
          <div className="py-2 growNetwork">
            <Link
              to="/"
              className="leftSidePick d-flex justify-content-between px-3 py-1"
            >
              <div className="d-flex flex-column">
                <small className="font-weight-bold text-muted">
                  Connections
                </small>
                <small className="font-weight-bold">Grow your network</small>
              </div>

              <CgUserAdd size="1.2rem" />
            </Link>
          </div>
          <div className="px-3 py-2 feedLeftItem">
            <span className="text-muted">Acces exclusive tools & insights</span>
            <div>
              {" "}
              <span className="font-weight-bold premiumForFree">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Gold_square.svg"
                  style={{ width: "1rem", height: "1rem" }}
                  alt=""
                />{" "}
                Try Premium for free
              </span>
            </div>
          </div>
          <div className="px-3 py-2 myItems">
            <IoBookmarkSharp size="1rem" className="mr-2 text-muted" />
            <span className="font-weight-bold">My items</span>
          </div>
        </div>
      )}
      <div className="d-flex flex-wrap mt-2 feedPersonInfo sticky">
        <Col xs="10" className=" d-flex flex-column py-1">
          <Link>
            <small className=" font-weight-bold">Groups</small>
          </Link>
          <Link>
            <small className=" font-weight-bold">Events</small>{" "}
          </Link>
          <Link>
            {" "}
            <small className=" font-weight-bold">Followed Hashtags</small>{" "}
          </Link>
        </Col>
        <Col xs="2" className="d-flex align-items-center">
          <Link to="/" className="addGourpsEvents">
            <AiOutlinePlus size="1.2rem" />
          </Link>
        </Col>
        <div className="discoverMore text-center px-2 pt-2">
          <Link to="/" className="d-flex justify-content-center">
            <h6 className="d-block">Discover more</h6>
          </Link>
        </div>
      </div>
    </>
  );
}
