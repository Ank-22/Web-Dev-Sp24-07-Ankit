import { FaChevronDown, FaFileExport, FaFileImport, FaFilter} from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import React from "react";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  // List of assignment IDs that should have an input field
  const editableAssignments = ["A101", "A104", "A403", "A502", "A506", "A505", "A601", "A603", "A606"];

  return (
    <div className="flex-fill">
      {/* ... other UI components ... */}
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {as.map((assignment) => (
                <th key={assignment._id}>
                  {assignment.title} Out of 100
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((u) => u._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (g) => g.student === enrollment.user && g.assignment === assignment._id
                    );
                    return (
                      <td style={{textAlign:"center"}} key={assignment._id}>
                        {editableAssignments.includes(assignment._id) ? (
                          <input
                          type="number"
                          className="form-control"
                          defaultValue={grade?.grade || ""}
                          min="0"
                          max="100"
                          value={"97"}
                          style={{width:"60px", margin:"auto", display:"block"}}
                          // Add onChange handler as needed
                        />
                        ) : (
                          grade?.grade || ""
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;