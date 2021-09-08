import React from "react";
import "../css/FeedRBar.css";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

export default function PromotFooter() {
  return (
    <div className="sticky">
      <div className="sideCard mt-2  p-2">
        <div className="d-flex justify-content-between mb-1">
          <h6>Promoted</h6>
          <Link to="/">
            <BsThreeDots className="text-dark" />
          </Link>
        </div>
        {/* CARDS */}
        <Link to="/" className="d-flex text-dark promotedCard my-2">
          <img
            src="https://www.expatica.com/app/uploads/sites/10/2014/05/best-place-to-live-in-uk.jpg"
            alt=""
            style={{ height: "3rem", width: "3rem", objectFit: "cover" }}
          />
          <div className="d-flex flex-column justify-content-center mx-1 ">
            <p className="m-0">Web App Development</p>
            <small style={{ color: "black" }}>Earn a Web App Development</small>
          </div>
          <div>
            <MdKeyboardArrowRight size="2rem" />
          </div>
        </Link>
        {/* CARDS */}
        <Link to="/" className="d-flex text-dark promotedCard my-2">
          <img
            src="https://www.expatica.com/app/uploads/sites/10/2014/05/best-place-to-live-in-uk.jpg"
            alt=""
            style={{ height: "3rem", width: "3rem", objectFit: "cover" }}
          />
          <div className="d-flex flex-column justify-content-center mx-1 ">
            <p className="m-0">Web App Development</p>
            <small style={{ color: "black" }}>Earn a Web App Development</small>
          </div>
          <div>
            <MdKeyboardArrowRight size="2rem" />
          </div>
        </Link>
        {/* CARDS */}
        <Link to="/" className="d-flex text-dark promotedCard my-2">
          <img
            src="https://www.expatica.com/app/uploads/sites/10/2014/05/best-place-to-live-in-uk.jpg"
            alt=""
            style={{ height: "3rem", width: "3rem", objectFit: "cover" }}
          />
          <div className="d-flex flex-column justify-content-center mx-1 ">
            <p className="m-0">Web App Development</p>
            <small style={{ color: "black" }}>Earn a Web App Development</small>
          </div>
          <div>
            <MdKeyboardArrowRight size="2rem" />
          </div>
        </Link>
      </div>
      {/* PROMOTED END */}
      {/* FOOTER STARTS*/}
      <div>
        <div className="d-flex flex-wrap py-2 px-4 text-center justify-content-around">
          <Link to="/" className="text-muted">
            <small>About</small>
          </Link>
          <Link to="/" className="text-muted">
            <small>Accessibility</small>
          </Link>
          <Link to="/" className="text-muted">
            <small>Help Center</small>
          </Link>
          <Link to="/" className="text-muted">
            <small>
              Privacy & Terms <RiArrowDownSLine />
            </small>
          </Link>
          <Link to="/" className="text-muted">
            <small>AD Choises</small>
          </Link>
          <Link to="/" className="text-muted">
            <small>Adversting</small>
          </Link>
          <Link to="/" className="text-muted">
            <small>
              Business Services
              <RiArrowDownSLine />
            </small>
          </Link>
          <Link to="/" className="text-muted">
            <small>Get the LinkedIn app</small>
          </Link>
          <Link to="/" className="text-muted">
            <small>More</small>
          </Link>
        </div>
        <div className="p-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="" style={{height: '1rem'}}/>
          <small>LinkedIn Corporation © 2021</small>
        </div>
      </div>
    </div>
  );
}
