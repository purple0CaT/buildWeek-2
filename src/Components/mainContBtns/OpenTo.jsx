import React from "react";
import "./contBtns.css";
import { Dropdown, Butoon, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OpenTo({ personAcc }) {
  return (
    <>
      {!personAcc && (
        <>
          <div className="dropdownCard d-flex flex-column align-items-center justify-content-between">
            <Link
              to="/"
              className="d-flex flex-column justify-content-center text-left linkCard"
            >
              <small className="font-weight-bold">Finding a new job</small>
              <small className="text-muted">
                Show recruiters and others that you’re Open to work
              </small>
            </Link>
            <Link
              to="/"
              className="d-flex flex-column justify-content-center text-left linkCard"
            >
              <small className="font-weight-bold">Hiring</small>
              <small className="text-muted">
                Share that you’re hiring and attract qualified candidates
              </small>
            </Link>
            <Link
              to="/"
              className="d-flex flex-column justify-content-center text-left linkCard "
            >
              <small className="font-weight-bold">Providing services</small>
              <small className="text-muted">
                Showcase services you offer so new clients can discover you
              </small>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
