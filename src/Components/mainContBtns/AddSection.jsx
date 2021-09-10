import React from "react";
import "./contBtns.css";
import { Dropdown, Butoon, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
export default function AddSection({ name, personAcc, intro, about }) {
  const [InfoCheck, setInfoCheck] = useState({
    intro: false,
    about: false,
    featured: false,
    background: false,
  });
  return (
    <>
      {!personAcc && (
        <div className="dropdownCard d-flex flex-column align-items-center justify-content-between">
          {/* ! */}
          <div
            className="d-flex flex-column justify-content-center text-left w-100 linkCard border-bottom"
            onClick={() =>
              setInfoCheck({
                about: false,
                featured: false,
                background: false,
                intro: !InfoCheck.intro,
              })
            }
          >
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="font-weight-li">Intro</h6>
              <IoIosArrowDown />
            </div>
            {InfoCheck.intro && (
              <div className="d-flex align-items-center">
                <AiOutlineCheck size="2rem" className="text-muted p-1" />{" "}
                <p className="p-2 m-0 text-muted">
                  {name}, this is looking good <br /> This section is complete.
                </p>
              </div>
            )}
          </div>
          {/* CARD */}
          <div
            className="d-flex flex-column justify-content-center text-left w-100 linkCard border-bottom"
            onClick={() =>
              setInfoCheck({
                intro: false,
                featured: false,
                background: false,
                about: !InfoCheck.about,
              })
            }
          >
            <div className="d-flex justify-content-between align-items-center ">
              <h6 className="font-weight-li">About</h6>
              <IoIosArrowDown />
            </div>
            {InfoCheck.about && (
              <div className="d-flex align-items-center">
                <AiOutlineCheck size="2rem" className="text-muted p-1" />{" "}
                <p className="p-2 m-0 text-muted">
                  {name}, this is looking good <br /> This section is complete.
                </p>
              </div>
            )}
          </div>
          <div
            className="d-flex flex-column justify-content-center text-left w-100 linkCard border-bottom"
            onClick={() =>
              setInfoCheck({
                intro: false,
                about: false,
                background: false,
                featured: !InfoCheck.featured,
              })
            }
          >
            <div className="d-flex justify-content-between align-items-center ">
              <h6 className="font-weight-li">Featured</h6>
              <IoIosArrowDown />
            </div>
            {InfoCheck.featured && (
              <div className="d-flex align-items-center">
                <AiOutlineCheck size="2rem" className="text-muted p-1" />{" "}
                <p className="p-2 m-0 text-muted">
                  {name}, this is looking good <br /> This section is complete.
                </p>
              </div>
            )}
          </div>
          <div
            className="d-flex flex-column justify-content-center text-left w-100 linkCard "
            onClick={() =>
              setInfoCheck({
                intro: false,
                about: false,
                featured: false,
                background: !InfoCheck.background,
              })
            }
          >
            <div className="d-flex justify-content-between align-items-center ">
              <h6 className="font-weight-li">Background</h6>
              <IoIosArrowDown />
            </div>
            {InfoCheck.background && (
              <div className="d-flex align-items-center">
                <AiOutlineCheck size="2rem" className="text-muted p-1" />{" "}
                <p className="p-2 m-0 text-muted">
                  {name}, this is looking good <br /> This section is complete.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
