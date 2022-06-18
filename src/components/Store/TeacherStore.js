import { createContext, useReducer, useState } from "react";
import teacherObj from "../Data/TeacherObj";

export const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [name, setName] = useState();
  const [teacher, setTeacher] = useState(teacherObj);

  const reducer = (state, action) => {
    switch (action.type) {
      case "EDIT":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, active: false },
        ];
      default:
        return state;
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", payload: { name } });
    // console.log("ds");
  };

  const [teacherData, dispatch] = useReducer(reducer, teacher);
  
  const value = {
    teacherData,
    handlerSubmit,
  };

  // console.log(value);

  return (
    <TeacherContext.Provider value={value}>{children}</TeacherContext.Provider>
  );
};