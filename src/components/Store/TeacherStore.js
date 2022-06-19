import { createContext, useReducer, useState } from "react";
import teacherObj from "../Data/TeacherObj";

export const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const [activ, setActiv] = useState();
  const [group, setGroup] = useState();
  const [teacher, setTeacher] = useState(teacherObj);

  const reducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return[{
          id : teacher.length + 1,
          name : action.payload.name,
          group : action.payload.group,
          number : action.payload.number,
          groupNum : 1,
          status : action.payload.activ,
          payment : "100,000",
          img : "https://freepikpsd.com/file/2019/10/enseignant-png-3-Transparent-Images.png"
        }, ...state,]

      case "EDIT":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, active: false },
        ];
      case 'DEL':
        return state.filter(item => item.id !== action.payload.id)
      default:
        return state;
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", payload: { name } });
  };

  const [teacherData, dispatch] = useReducer(reducer, teacher);
  
  const value = {
    teacherData,
    handlerSubmit,
    dispatch,
    setName,
    setNumber,
    setActiv,
    setGroup
  };

  // console.log(value);

  return (
    <TeacherContext.Provider value={value}>{children}</TeacherContext.Provider>
  );
};