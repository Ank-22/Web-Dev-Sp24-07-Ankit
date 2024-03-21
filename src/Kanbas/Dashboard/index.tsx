import React , { useState }  from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import minNav from "../Navigation/minNav";


function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/defualt.jpeg"
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
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
    <div className="p-4">
      <h1>Dashboard</h1>   
       <h5>Course</h5>
      <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
      <input value={course.number} className="form-control"onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>       
      <hr />
      <button onClick={addNewCourse} className="btn btn-primary m-1" style={{float:"inline-start"}}>
        Add
      </button>
      <button onClick={updateCourse}  className="btn btn-warning m-1" style={{float:"inline-start"}} >
        Update
      </button>
      <br/>
      <br/>
      <h2>Published Courses (7)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary m-1 "  style={{float:"inline-start"}}>
                    Go </Link>
                    <button onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }} className="btn btn-success m-1" style={{float:"inline-end"}}>
              Edit
            </button>

                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger m-1" style={{float:"inline-end"}}>
                      Delete
              </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;