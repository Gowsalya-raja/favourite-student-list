import React, { useContext, useState } from "react";
import { StudentContext, students } from "../context/StudentContext";

function StudentList() {

    const { favourites, addFavourite } = useContext(StudentContext);

    const [search, setSearch] = useState("");

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.id.toString().includes(search)
    );

    return (
        <div className="page-container">

            <div className="page-heading">

                <div>
                    <h1>Student List</h1>
                    <p>Manage students and add your favourite students.</p>
                </div>

                <div className="total-count">
                    {students.length} Students
                </div>

            </div>

            {/* Search Bar */}
            <div className="search-box">

                <span>🔍</span>

                <input
                    type="text"
                    placeholder="Search students by name or roll number..."
                    value={search}
                    onChange={(evt) => setSearch(evt.target.value)}
                />

            </div>

            <h2 className="section-title">All Students</h2>

            <div className="student-grid">

                {filteredStudents.length > 0 ? (

                    filteredStudents.map((student) => {

                        const isFavourite = favourites.some(
                            (item) => item.id === student.id
                        );

                        return (

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
                                    className={
                                        isFavourite ? "added-btn" : "add-btn"
                                    }
                                    onClick={() => addFavourite(student)}
                                    disabled={isFavourite}
                                >
                                    {isFavourite
                                        ? "♥ Added to Favourite"
                                        : "♡ Add to Favourite"}
                                </button>

                            </div>

                        );

                    })

                ) : (

                    <p className="empty-message">
                        No students found.
                    </p>

                )}

            </div>

        </div>
    );
}

export default StudentList;
