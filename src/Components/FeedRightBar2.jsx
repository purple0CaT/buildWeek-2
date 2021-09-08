import "../css/FeedRBar.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export default function FeedRightBar2() {
  const [InfoSecond, setInfoSecond] = useState();
  return (
    <div className="position-relative">
      <div className="sideCard py-1 d-flex flex-column mt-1">
        <div className="px-2 d-flex justify-content-between pt-2 align-items-baseline">
          <h6>Linkedln News</h6>
          {InfoSecond && (
            <div className="infoDialog">
              <div>
                {" "}
                <p>
                  These are the day’s trending courses on LinkedIn Learning.
                </p>
              </div>
              <div>
                <GrClose
                  className="infoDialogClose"
                  onClick={() => setInfoSecond(!InfoSecond)}
                />
              </div>
            </div>
          )}
          <div className="infoIcon" onClick={() => setInfoSecond(!InfoSecond)}>
            <BsFillInfoSquareFill size="0.8rem" className="text-muted" />
          </div>
        </div>
        <div>
          <Link to="/" className="sideCardPick px-3 py-2 d-flex">
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">1. Some news!</small>
              <small className="text-muted mx-2">2d ago 12,000 readers</small>
            </div>
          </Link>
          <Link to="/" className="sideCardPick px-3 py-2 d-flex">
            <div className="flex-column d-flex">
              <small className="font-weight-bold m-0">2. Some news!</small>
              <small className="text-muted mx-2">2d ago 12,000 readers</small>
            </div>
          </Link>
          <Link to="/" className="sideCardPick px-3 py-2 d-flex">
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
    </div>
  );
}
