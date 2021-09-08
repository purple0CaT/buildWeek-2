import React from "react";
import "../css/FeedRBar.css";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import FeedRightBar2 from "./FeedRightBar2";
import PromotFooter from "./PromotFooter";

export default function FeedRightBar() {
  const [ShowMore, setShowMore] = useState(false);
  return (
    <>
      <div className="sideCard py-1 d-flex flex-column">
        <div className="px-2 d-flex justify-content-between pt-2 align-items-baseline">
          <h6>Linkedln News</h6>
          <BsFillInfoSquareFill size="0.8rem" className="text-muted" />
        </div>
        <div className={!ShowMore && "RSideBContent"}>
          <Link to="/" className="sideCardPick p-1 d-flex">
            <GoPrimitiveDot className="mx-1 pt-1 text-muted" size="1rem" />
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">Some news!</small>
              <small className="text-muted">2d ago 12,000 readers</small>
            </div>
          </Link>
          <Link to="/" className="sideCardPick p-1 d-flex">
            <GoPrimitiveDot className="mx-1 pt-1 text-muted" size="1rem" />
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">Some news!</small>
              <small className="text-muted">2d ago 12,000 readers</small>
            </div>
          </Link>
          <Link to="/" className="sideCardPick p-1 d-flex">
            <GoPrimitiveDot className="mx-1 pt-1 text-muted" size="1rem" />
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">Some news!</small>
              <small className="text-muted">2d ago 12,000 readers</small>
            </div>
          </Link>
          <Link to="/" className="sideCardPick p-1 d-flex">
            <GoPrimitiveDot className="mx-1 pt-1 text-muted" size="1rem" />
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">Some news!</small>
              <small className="text-muted">2d ago 12,000 readers</small>
            </div>
          </Link>
          <Link to="/" className="sideCardPick p-1 d-flex">
            <GoPrimitiveDot className="mx-1 pt-1 text-muted" size="1rem" />
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">Some news!</small>
              <small className="text-muted">2d ago 12,000 readers</small>
            </div>
          </Link>
          <Link to="/" className="sideCardPick p-1 d-flex">
            <GoPrimitiveDot className="mx-1 pt-1 text-muted" size="1rem" />
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">Some news!</small>
              <small className="text-muted">2d ago 12,000 readers</small>
            </div>
          </Link>
          <Link to="/" className="sideCardPick p-1 d-flex">
            <GoPrimitiveDot className="mx-1 pt-1 text-muted" size="1rem" />
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">Some news!</small>
              <small className="text-muted">2d ago 12,000 readers</small>
            </div>
          </Link>
          <Link to="/" className="sideCardPick p-1 d-flex">
            <GoPrimitiveDot className="mx-1 pt-1 text-muted" size="1rem" />
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">Some news!</small>
              <small className="text-muted">2d ago 12,000 readers</small>
            </div>
          </Link>
          <Link to="/" className="sideCardPick p-1 d-flex">
            <GoPrimitiveDot className="mx-1 pt-1 text-muted" size="1rem" />
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">Some news!</small>
              <small className="text-muted">2d ago 12,000 readers</small>
            </div>
          </Link>
        </div>
        {/* BUTTTON SHOW MORE */}
        <div className="py-2">
          <div
            className="RshowMore mx-4 py-1"
            onClick={() => setShowMore(!ShowMore)}
          >
            <h6 className="d-block text-muted m-0">
              Show more
              {ShowMore ? (
                <IoIosArrowUp className="ml-1" />
              ) : (
                <IoIosArrowDown className="ml-1" />
              )}
            </h6>
          </div>
        </div>
      </div>
      <FeedRightBar2 />
      <PromotFooter />
    </>
  );
}
