import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle";

import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaRegClock,
  FaBars,
  FaCreativeCommonsSa,
  FaGlasses
} from "react-icons/fa";
import { Fa6, FaDisplay, FaQuestion } from "react-icons/fa6";

function MinNav() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaRegClock className="fs-2" /> },
    { label: "Studio", icon: <FaDisplay className="fs-2" /> },
    { label: "Commons", icon: <FaCreativeCommonsSa className="fs-2" /> },
    { label: "Help", icon: <FaQuestion className="fs-2" /> },
  ];

  const { pathname } = useLocation();
  const split = pathname.split("/");
  const section = split[split.length - 1];
  return (
<>
<div
      className="d-md-none"
      style={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
      }}
    >
      <div className="wd-flex-nav">
        <div className="dropdown flex-fill">
          <button
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="collapse"
            data-bs-target="#dropdownMenuButton1"
            aria-expanded="false"
            aria-controls="dropdownMenuButton1"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid white",
            }}
            className="btn btn-primary"
          >
            <FaBars /> {/* Hamburger Icon */}
          </button>
        </div>
        <div>
          <h2>{section}</h2>
        </div>
        <div className="flex-fill" style={{textAlign:"right", fontSize:"2rem"}}>
            <FaGlasses />
        </div>
      </div>
    </div>
     <div
     className="collapse collapse-horizontal"
     id="dropdownMenuButton1"
     style={{ color: "black", backgroundColor:"white" }}
   >
     <ul>
       {links.map((link, index) => (
         <li
           key={index}
           className={pathname.includes(link.label) ? "wd-active" : ""}
         >
           <Link
             to={`/Kanbas/${link.label}`}
             style={{
                textDecoration:"none",
               color:
                 !pathname.includes(link.label) && link.label === "Account"
                   ? "black"
                   : "red",
             }}
           >
             {link.icon} {link.label}
           </Link>
         </li>
       ))}
     </ul>
   </div>
</>
  );
}

export default MinNav;
