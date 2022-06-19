import { createContext, useReducer, useState } from "react";
import studentObj from "../Data/students";


export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [activ, setActiv] = useState();
  const [groupNum, setGroupNum] = useState();
  const [hisob, setHisob] = useState();
  const [arr, setArr] = useState(studentObj);

  const values = []
  const reducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return[{
          id : arr.length + 1,
          name : action.payload.name,
          group : 8,
          number : action.payload.number,
          groupNum : action.payload.groupNum,
          payment: action.payload.hisob,
          status : action.payload.activ,
          img : "https://freepikpsd.com/file/2019/10/enseignant-png-3-Transparent-Images.png"
        }, ...state,]
      case "EDIT":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, active: false},
        ];
      case 'DEL':
        return state.filter(item => item.id !== action.payload.id)

      // case 'SEARCH':
      //   return state.map(item => {
      //     if(item.name.toLowerCase().includes(action.payload.name.toLowerCase())){
      //       state.push(item)
      //     }
      //     // action(values)
      //   })
      default:
        return state;
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", payload: { name } });
  };

  const [data, dispatch] = useReducer(reducer, arr);

  const value = {
    data,
    dispatch,
    handlerSubmit,
    setName,
    setNumber,
    setActiv,
    setGroupNum,
    setHisob
  };

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
};