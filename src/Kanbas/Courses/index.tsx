import { courses, assignments } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignment";
import AssignmentEditor from "./Assignment/Editor";
import { FaGlasses } from "react-icons/fa";
import "./index.css";
import Grades from "./Grades";
import 'bootstrap/dist/css/bootstrap.min.css';

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const page = window.location.href;
  const listurl = page.split("/");
  console.log(listurl.length);
  let breadcrumb = listurl[listurl.length - 1];
  const lastSECOND = listurl[listurl.length - 2];
  if(lastSECOND == "Assignments"){
    const assignmentName = assignments.find((assignment) => assignment._id=== listurl[listurl.length-1]);
    breadcrumb = lastSECOND + "  >  " + assignmentName?.title;
  }
  return (
    <div style={{width:"99%"}}>
      <div className="row d-none d-md-block">
        <div className="col" style={{ paddingLeft: "30px" }}>
          <h1 style={{ color: "red", fontSize: "20px", paddingTop: "20px" }} ><HiMiniBars3 /> Course: {course?.name} <span style={{ color: "black" }}>&gt; {breadcrumb}</span></h1>
        </div>
        <div className="col" style={{paddingTop: "10px"}}>
          <span style={{ textAlign: "right", float: "inline-end" }}>
            <button
              style={{ backgroundColor: "lightgray", color: "black", borderColor: "gray" }}
              type="button"
              className="btn btn-outline-secondary"
            >
              <FaGlasses/> Student View
            </button>
          </span>
         
        </div>
        </div>

        <hr style={{marginTop:"10px"}} className="d-none d-md-block"/>  
      <div className="wd-flex-body">
      <div className="d-none d-md-block">
      <CourseNavigation />
      </div>
        <div
          className="flex-fill ms-3 me-3">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />

            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;