import "../css/FeedRBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function FeedRightBar2() {
  return (
    <div className="sideCard py-1 d-flex flex-column mt-1">
      <div className="px-2 d-flex justify-content-between pt-2 align-items-baseline">
        <h6>Linkedln News</h6>
        <BsFillInfoSquareFill size="0.8rem" className="text-muted" />
      </div>
      <div className="px-3">
        <Link to="/" className="sideCardPick p-1 d-flex">
          <div className="flex-column d-flex">
            <small className="font-weight-bold m-0">1. Some news!</small>
            <small className="text-muted mx-2">2d ago 12,000 readers</small>
          </div>
        </Link>
        <Link to="/" className="sideCardPick p-1 d-flex">
          <div className="flex-column d-flex">
            <small className="font-weight-bold m-0">2. Some news!</small>
            <small className="text-muted mx-2">2d ago 12,000 readers</small>
          </div>
        </Link>
        <Link to="/" className="sideCardPick p-1 d-flex">
          <div className="flex-column d-flex">
            <small className="font-weight-bold m-0">3. Some news!</small>
            <small className="text-muted mx-2">2d ago 12,000 readers</small>
          </div>
        </Link>
      </div>

      {/* BUTTTON SHOW MORE */}
      <div className="py-1">
        <div className="RshowMore2 p-3">
          <h6 className="d-block text-muted font-weight-bold m-0">
            Show more on LinkedIn Learning
            <AiOutlineArrowRight />
          </h6>
        </div>
      </div>
    </div>
  );
}