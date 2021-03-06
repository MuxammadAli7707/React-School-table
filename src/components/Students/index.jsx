import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../Navbar/Header";
import { StudentContext } from "../Store/StudentStore";
import StudentsItem from "./Students";


export default function Students() {
  const {data, dispatch} = useContext(StudentContext);

  // const searchHandler = (e) => {
  //   dispatch({type: 'SEARCH', payload: {name: e.target.value}})
  // }
  return(
    <div className="d-flex">
      <Navbar />
      <main>
        <Header/>
        <section className="students">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <h2 className="students__title">O'quvchilar</h2>
            <Link to='/addstudents'>
              <button className="students__addbtn" type="button">O'quvchi qo'shish </button>
            </Link>
          </div>
          <form className="students__form" action="">
            <input className="students__input" type="text" placeholder="Ismi bo'yicha izlash" />
            <i className='students__icons bx bx-search'></i>
          </form>
        </div>

        <p className="students__count">1-10 / {data.length} tadan</p>

        <StudentsItem />
      </section>
      </main>
    </div>
  )
}