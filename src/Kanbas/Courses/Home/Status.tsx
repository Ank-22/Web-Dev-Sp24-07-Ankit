import {
  FaBan,
  FaCheckCircle,
  FaPlusCircle,
  FaRegCheckCircle,
  FaPlus,
  FaFileImport,
  FaCreativeCommonsSa,
  FaBullseye,
  FaChartBar,
  FaBullhorn,
  FaCalendarAlt,
  FaTimes,
  FaBell,
  FaCalendar,
} from "react-icons/fa";

import "../index.css"

function Status() {
  return (
    <div>
      <div className="col">
        <h6>
          <strong>Course Status</strong>
        </h6>
      </div>
      <button
        style={{
          backgroundColor: "lightgray",
          color: "black",
          borderColor: "gray",
        }}
        type="button"
        className="btn btn-primary"
      >
        <FaBan /> Unpublish
      </button>
      <button
        style={{ backgroundColor: "green" }}
        type="button"
        className="btn btn-secondary"
        disabled
      >
        <FaRegCheckCircle /> Published
      </button>
      <br />
      <br />
      <ul className="list-group" style={{ listStyle: "none" }}>
        <li
          style={{ marginBottom: "5px" }}
          className="list-group-item list-group-item-secondary"
        >
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <FaFileImport /> Import Existing Content
          </a>
        </li>
        <li
          style={{ marginBottom: "5px" }}
          className="list-group-item list-group-item-secondary"
        >
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <FaCreativeCommonsSa /> Import from Commons
          </a>
        </li>
        <li
          style={{ marginBottom: "5px" }}
          className="list-group-item list-group-item-secondary"
        >
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <FaBullseye /> Choose Home Page
          </a>
        </li>
        <li
          style={{ marginBottom: "5px" }}
          className="list-group-item list-group-item-secondary"
        >
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <FaChartBar /> View Course Stream
          </a>
        </li>
        <li
          style={{ marginBottom: "5px" }}
          className="list-group-item list-group-item-secondary"
        >
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <FaBullhorn /> New Announcement
          </a>
        </li>
        <li
          style={{ marginBottom: "5px" }}
          className="list-group-item list-group-item-secondary"
        >
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <FaChartBar /> New Analytics
          </a>
        </li>
        <li
          style={{ marginBottom: "5px" }}
          className="list-group-item list-group-item-secondary"
        >
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <FaBell /> View Course Notifications
          </a>
        </li>
      </ul>
      <br />
      <strong>To Do</strong>
      <hr />
      <div className="wd-flex">
        <div>
          <FaPlusCircle style={{ color: "red", marginLeft: "10px", marginRight: "10px" }} />
        </div>
        <div>
          <a style={{ color: "red", fontSize: "smaller" }}>
            Grade A1 - ENV + HTML
          </a>
          <br />
          <a style={{ fontSize: "x-small" }}>100 points- Sep 18 at 11:59pm</a>
        </div>
        <div>
          <FaTimes style={{ color: "grey", marginLeft: "50px", marginRight: "10px" }} />
        </div>
      </div>
      <br />
      <div style={{marginLeft:"2px", marginRight:"2px"}}>
        <div className="row">
          <div className="col">
            <h6>
              <strong>Coming Up</strong>
            </h6>
          </div>
          <div style={{ textAlign: "right" }} className="col">
            <a
              style={{
                fontSize: "small",
                color: "red",
                textDecoration: "none",
              }}
              href="#"
            >
              <FaCalendarAlt /> View Calendar
            </a>
          </div>
        </div>
      </div>
      <hr />
      <ul style={{ listStyle: "none", paddingLeft:"0rem"}}>
        <li>
          <a style={{ textDecoration: "none" }} href="#">
            <span style={{ color: "red" }}>
              <FaCalendarAlt /> Lecture
            </span>{" "}
            CS4550.12631.202410{" "}
            <span>
              <br />
              Sep 7 at 11:45am
            </span>
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="#">
            <span style={{ color: "red" }}>
              <FaCalendarAlt /> Lecture
            </span>{" "}
            CS4550.12631.202410{" "}
            <span>
              <br />
              Sep 11 at 11:45am
            </span>
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="#">
            <span style={{ color: "red" }}>
              <FaCalendarAlt /> Lecture
            </span> CS5610 06 SP23{" "}
            <span>
              <br />
              Sep 11 at 6pm
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Status;