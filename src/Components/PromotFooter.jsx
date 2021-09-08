import React from "react";
import "../css/FeedRBar.css";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function PromotFooter() {
  return (
    <>
      <div className="sideCard mt-2 sticky p-2">
        <div className="d-flex justify-content-between mb-1">
          <h6>Promoted</h6>
          <Link to="/">
            <BsThreeDots className="text-dark" />
          </Link>
        </div>
        {/* CARDS */}
        <Link to="/" className="d-flex text-dark">
          <img
            src="https://www.expatica.com/app/uploads/sites/10/2014/05/best-place-to-live-in-uk.jpg"
            alt=""
            style={{ height: "3rem", width: "3rem", objectFit: "cover" }}
          />
          <div className="d-flex flex-column justify-content-center mx-1 promotedCard">
            <p className="m-0">Web App Development</p>
            <small>Earn a Web App Development</small>
          </div>
          <div>
            <MdKeyboardArrowRight size="2rem" />
          </div>
        </Link>
      </div>
    </>
  );
}
