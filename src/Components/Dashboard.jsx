import React, { Component } from "react";
import "../dashboard.css";
import { Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'

class Dashboard extends Component {
  render() {
    return (
      <div className="dash-container mt-3">
        <div className="text-left ml-4 mr-4 mt-4">
          <p>
            <h5 style={{fontWeight:"480"}}>Your Dashboard</h5>
          </p>
          <p className="font-italic">Private to you</p>
          <Row id="dash-stats" className="ml-0 mr-2 py-0 px-0">
            <Col className="border-right">
              <Link>
              <p
                style={{ color: "#1c72c7", fontSize: "30px", fontWeight:"300"}}
                className="mb-0 mt-1"
              >
                45
              </p>
              <p>Who viewed your profile</p>
              </Link>
            </Col>
            <Col className="border-right">
            <Link>
              <p
                style={{ color: "#1c72c7", fontSize: "30px",fontWeight:"300"}}
                className="mb-0 mt-1"
              >
                14
              </p>
              <p>Article views</p>
              </Link>
            </Col>
            <Col>
            <Link>
              <p
                style={{ color: "#1c72c7", fontSize: "30px", fontWeight:"300"}}
                className="mb-0 mt-1"
              >
                21
              </p>
              <p>Search appearances</p>
              </Link>
            </Col>
          </Row>
          <div id="dash-box" className="ml-0 mt-3 mb-4">
            <div className="d-flex mb-0 mt-3 align-items-center dashboard-text">
              <i className="bi bi-volume-up icons"></i>
              <Link>
              <p className="d-flex mb-0 align-items-center">
                <span style={{fontWeight:"550"}} className="mr-1">Creator mode: </span>
                <span className="lighter-color">Off</span>
              </p>
              </Link>
            </div>
            <div className="dash-text mb-0 py-0">
            <Link>
              <p className="my-0 lighter-color ">
                Grow your audience and get discovered by highlighting content on
                your profile.
              </p>
              </Link>
            </div>
          
            <hr className="horizontal-line" />
            <div className="d-flex align-items-center mb-0 dashboard-text mt-3">
              <i className="bi bi-people-fill icons"></i>
              <Link>
              <p className="d-flex mb-0 align-items-center">
                <span style={{fontWeight:"550"}} >My Network</span>
              </p>
              </Link>
            </div>
            <div className="dash-text mb-0 py-0">
            <Link>
              <p className="mb-0 lighter-color">
                Manage your connections, events, interests.
              </p>
              </Link>
            </div>
            <hr className="horizontal-line" />
            <div className="d-flex align-items-center mb-0 dashboard-text mt-3">
              <i className="bi bi-cash icons"></i>
              <Link>
              <p className="d-flex mb-0 align-items-center">
                <span style={{fontWeight:"550"}}>Salary insights</span>
              </p>
              </Link>
            </div>
            <div className="dash-text mb-0 py-0">
            <Link>
              <p className="mb-0 lighter-color">
                See how your salary compares to others in the community.
              </p>
              </Link>
            </div>
            <hr className="horizontal-line" />
            <div className="d-flex align-items-center mb-0 dashboard-text mt-3">
              <i className="bi bi-bookmark-fill icons"></i>
              <Link>
              <p className="d-flex mb-0 align-items-center">
                <span style={{fontWeight:"550"}}>My items</span>
              </p>
              </Link>
            </div>
            <div className="dash-text mb-0 py-0">
            <Link>
              <p className="mb-0 lighter-color mb-2">
                Keep track of your jobs, courses and articles.
              </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
