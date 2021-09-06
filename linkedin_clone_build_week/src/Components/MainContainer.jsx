import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ImPencil } from "react-icons/im";
import "../css/maincontainer.css";

export default function MainContainer() {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const personId = "";
  const [PersonInfo, setPersonInfo] = useState([]);
  //   UPDATE INFO
  useEffect(() => {
    fetchPerson();
  }, []);
  //   FETCHING
  const fetchPerson = async () => {
    console.log(process.env.REACT_APP_API_TOKEN);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile",
        {
          method: "GET",
          headers: {
            Authorisation:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTBhYTdiZTZjMTAwMTVmOWRiOWMiLCJpYXQiOjE2MzA5MjA4NzQsImV4cCI6MTYzMjEzMDQ3NH0.q5C0SILXauX7HfPrCSoz6sHV9dLLY4aLIoO6gnpApKA",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
      } else {
        console.log("Error");
      }
    } catch (erorr) {}
  };
  //   JSX
  return (
    <>
      <div className="w-100 mt-5 person-info">
        <Row>
          <Col xs="12" className="bg-image">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E16AQEsq53uWSPplg/profile-displaybackgroundimage-shrink_350_1400/0/1629185220320?e=1636588800&v=beta&t=brJaUskUvjk3_S4toz1F95-TPuzMELixFB8b4R9hsyo"
              alt=""
            />
            <div className="edit-cover d-flex align-items-center justify-content-center">
              <ImPencil size="1rem" />
            </div>
          </Col>
          <div>
            <img
              className="avatar"
              src="https://media-exp1.licdn.com/dms/image/C4E16AQEsq53uWSPplg/profile-displaybackgroundimage-shrink_350_1400/0/1629185220320?e=1636588800&v=beta&t=brJaUskUvjk3_S4toz1F95-TPuzMELixFB8b4R9hsyo"
              alt=""
            />
          </div>
          <Col xs="12 d-flex">
            {/* LEFT SIDE */}
            <Col xs="8 d-flex flex-column align-items-start name-box">
              {" "}
              <h2>Name </h2>
              <p className="text-left m-0">
                💻 trainee Full Stack Developer | 📸 Photographer | 🚁 Drone
                Pilot | ⛰ Traveller
              </p>
              <div className="d-flex  align-items-center">
                <small className="text-muted mr-1">
                  Bootle, England, United Kingdom
                </small>{" "}
                ·{" "}
                <small className="ml-1 font-weight-bold">
                  <a href="">Contact info</a>
                </small>{" "}
              </div>
              <div className='mt-3'>
                  <Button>Open to</Button>
                  <Button variant='outline-secondary'>Add section</Button>
                  <Button variant='outline-secondary'>More</Button>
              </div>
            </Col>
            {/* RIGHT SIDE */}
            <Col xs="4" className="d-flex flex-column p-4">
              {" "}
              <div className='d-flex justify-content-end'>
                <ImPencil size="1.2rem" className="text-muted" />
              </div>
              <a href='' className='d-flex align-items-center'> 
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1639008000&v=beta&t=38emh8r8X3fw7Ah3ky91KyaVJT_6wSkxl1MqF2QRf5E" alt="" style={{height: '2rem'}}/><small className='font-weight-bold ml-2'>Strive School</small>
              </a>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}
