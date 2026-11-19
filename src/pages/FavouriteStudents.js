
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {

  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <div className="page-container">

      {/* Page Heading */}
      <div className="page-heading">

        <div>
          <h1>Favourite Students</h1>
          <p>Your personally selected favourite students.</p>
        </div>

        <div className="total-count">
          {favourites.length} Students
        </div>

      </div>

      {/* Favourite Summary */}
      <div className="favourite-summary">

        <p>Your Collection</p>

        <h2>{favourites.length} Students</h2>

        <span>Students added to your favourite list</span>

      </div>

      <h2 className="section-title">My Favourites</h2>

      {/* Conditional Rendering */}
      {favourites.length === 0 ? (

        <div className="empty-state">

          <div className="empty-icon">♡</div>

          <h3>No favourite students added yet</h3>

          <p>
            Go to the student list and add your favourite students.
          </p>

          <Link to="/" className="back-btn">
            Explore Students
          </Link>

        </div>

      ) : (

        <div className="student-grid">

          {favourites.map((student) => (

            <div className="student-card" key={student.id}>

              <div className="student-info">

                <div className="avatar">
                  {student.name.charAt(0)}
                </div>

                <div>
                  <h3>{student.name}</h3>

                  <p>Roll No: {student.id}</p>

                  <p>{student.department}</p>
                </div>

              </div>

              <button
                className="remove-btn"
                onClick={() => removeFavourite(student.id)}
              >
                ♥ Remove Favourite
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default FavouriteStudents;
