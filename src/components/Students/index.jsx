import React from "react";
import Navbar from "../Navbar";
import Header from "../Navbar/Header";
import StudentsItem from "./Students";

export default function Students() {
  return(
    <div className="d-flex">
      <Navbar />
      <main>
        <Header/>
        <section className="students">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <h2 className="students__title">O'quvchilar</h2>
            <button className="students__addbtn" type="button">O'quvchi qo'shish </button>
          </div>
          <form className="students__form" action="">
            <input className="students__input" type="text" placeholder="Ismi bo'yicha izlash" />
            <i className='students__icons bx bx-search'></i>
          </form>
        </div>

        <p className="students__count">1-7 / 33 tadan</p>

        <StudentsItem />
      </section>
      </main>
    </div>
  )
}