import React, { createContext, useState } from "react";

// Create Context
export const StudentContext = createContext();

// Student Data
export const students = [
  {
    id: 101,
    name: "Arun Kumar",
    department: "Computer Science"
  },
  {
    id: 102,
    name: "Manoj",
    department: "Information Technology"
  },
  {
    id: 103,
    name: "Rahul",
    department: "Computer Science"
  },
  {
    id: 104,
    name: "Divya",
    department: "Electronics"
  },
  {
    id: 105,
    name: "Karthik M",
    department: "Mechanical"
  },
  {
    id: 106,
    name: "Vijay",
    department: "Mechanical"
  }
];


function StudentProvider({ children }) {

  const [favourites, setFavourites] = useState([]);


  const addFavourite = (student) => {

    const alreadyExists = favourites.some(
      (item) => item.id === student.id
    );

    if (!alreadyExists) {
      setFavourites([...favourites, student]);
    }

  };


  const removeFavourite = (id) => {

    const updatedFavourites = favourites.filter(
      (student) => student.id !== id
    );

    setFavourites(updatedFavourites);

  };

  return (
    <StudentContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite
      }}
    >
      {children}
    </StudentContext.Provider>
  );

}

export default StudentProvider;
