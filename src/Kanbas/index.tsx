import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import MinNav from "./Navigation/minNav";
import db from "./Database";
import { useState } from "react";

function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", image:"defualt.jpeg"
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div>
      <MinNav />
      <div className="d-flex">
      <div className="d-none d-md-block position-fixed bottom-0">
      <KanbasNavigation />
      </div>
      <div style={{ flexGrow: 1}} className={"wd-ml-md-5 wd-min"}>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />

          <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
        </Routes>
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </div>
    </div>
);}
export default Kanbas;