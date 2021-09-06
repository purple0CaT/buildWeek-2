import React, { Component } from "react";
import "../dashboard.css";
import { Row, Col } from "react-bootstrap";

class Dashboard extends Component {
  render() {
    return (
      <div className="dash-container">
        <div className="text-left ml-4 mr-4 mt-4">
          <p>
            <h5>Your Dashboard</h5>
          </p>
          <p className="font-italic">Private to you</p>
          <Row id="dash-stats" className="ml-0 mr-2 py-0 px-0">
            <Col className="border-right">
              <p
                style={{ color: "#69A1D9", fontSize: "30px" }}
                className="mb-0"
              >
                5
              </p>
              <p>Who viewed your profile</p>
            </Col>
            <Col className="border-right">
              <p
                style={{ color: "#69A1D9", fontSize: "30px" }}
                className="mb-0"
              >
                0
              </p>
              <p>Article views</p>
            </Col>
            <Col>
              <p
                style={{ color: "#69A1D9", fontSize: "30px" }}
                className="mb-0"
              >
                2
              </p>
              <p>Search appearances</p>
            </Col>
          </Row>
          <div id="dash-box" className="ml-0 mt-3 mb-4">
            <div className="d-flex mb-0 mt-2 align-items-center">
              <i className="bi bi-volume-up icons"></i>
              <p className="d-flex mb-0 align-items-center">
                <span className="font-weight-bold mr-1">Creator mode: </span>
                <span className="lighter-color">Off</span>
              </p>
            </div>
            <div className="dash-text mb-0 py-0">
              <p className="mb-0 lighter-color">
                Grow your audience and get discovered by highlighting content on
                your profile.
              </p>
            </div>
            <hr className="horizontal-line" />
            <div className="d-flex mb-0">
              <i className="bi bi-people-fill icons"></i>
              <p className="d-flex mb-0 align-items-center">
                <span className="font-weight-bold">My Network</span>
              </p>
            </div>
            <div className="dash-text mb-0 py-0">
              <p className="mb-0 lighter-color">
                Manage your connections, events, interests.
              </p>
            </div>
            <hr className="horizontal-line" />
            <div className="d-flex mb-0">
              <i className="bi bi-cash icons"></i>
              <p className="d-flex mb-0 align-items-center">
                <span className="font-weight-bold">Salary insights</span>
              </p>
            </div>
            <div className="dash-text mb-0 py-0">
              <p className="mb-0 lighter-color">
                See how your salary compares to others in the community.
              </p>
            </div>
            <hr className="horizontal-line" />
            <div className="d-flex mb-0">
              <i className="bi bi-bookmark-fill icons"></i>
              <p className="d-flex mb-0 align-items-center">
                <span className="font-weight-bold">My items</span>
              </p>
            </div>
            <div className="dash-text mb-0 py-0">
              <p className="mb-0 lighter-color mb-2">
                Keep track of your jobs, courses and articles.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
