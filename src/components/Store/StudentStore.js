import { createContext, useReducer, useState } from "react";
import studentObj from "../Data/students";


export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  
  const [name, setName] = useState();
  const [arr, setArr] = useState(studentObj);

  const reducer = (state, action) => {
    switch (action.type) {
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

  const [data, dispatch] = useReducer(reducer, arr);
  // console.log(studentObj);

  const value = {
    data,
    dispatch,
    handlerSubmit,
  };

  // console.log(value);

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
};