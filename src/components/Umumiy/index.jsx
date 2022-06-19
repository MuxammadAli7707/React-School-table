import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../Navbar/Header";
import { StudentContext } from "../Store/StudentStore";
import { TeacherContext } from "../Store/TeacherStore";

export default function Umumiy() {
  const { data } = useContext(StudentContext);
  const { teacherData } = useContext(TeacherContext);
  return(
    <div className="d-flex">
      <Navbar />
      <main>
        <Header/>
        <section className="umumiy">
          <h2 className="umumiy__title">Umumiy ma'lumotlar</h2>

          <ul className="umumiy__list d-flex">
            <Link className="umumiy__link" to="/students">
            <li className="umumiy__item d-flex col-4">
              <div className="umumiy__box">
              <h3 className="umumiy__subtitle">O'quvchilar</h3>
                <p className="umumiy__count">{data.length} nafar</p>
                <p className="umumiy__nafar"><i class='umumiy__icondw bx bxs-downvote'></i>{data.length} nafar</p>
              </div>
              <div className="umumiy__static d-flex flex-column justify-content-end">
                <div className="d-flex justify-content-end">
                  <i className='umumiy__oicon bx bx-bar-chart'></i>
                  <i className='umumiy__oicon bx bx-bar-chart'></i>
                  <i className='umumiy__oicon bx bx-bar-chart'></i>
                </div>
              </div>
            </li>
            </Link>

            <Link className="umumiy__link" to="/teacher">
            <li className="umumiy__item d-flex col-4">
              <div className="umumiy__box">
              <h3 className="umumiy__subtitle">O'qituvchilar</h3>
                <p className="umumiy__count">{teacherData.length} nafar</p>
                <p className="umumiy__nafarup"><i class='umumiy__iconup bx bxs-upvote'></i>{teacherData.length} nafar</p>
              </div>
              <div className="umumiy__static d-flex flex-column justify-content-end">
                <div className="d-flex justify-content-end">
                  <i className='umumiy__bicon bx bx-bar-chart'></i>
                  <i className='umumiy__bicon bx bx-bar-chart'></i>
                  <i className='umumiy__bicon bx bx-bar-chart'></i>
                </div>
              </div>
            </li>
            </Link>

            <Link className="umumiy__link" to="/group">
            <li className="umumiy__item d-flex col-4">
              <div className="umumiy__box">
              <h3 className="umumiy__subtitle">Guruhlar</h3>
                <p className="umumiy__count">20 nafar</p>
                <p className="umumiy__nafar"><i class='umumiy__icondw bx bxs-downvote'></i> 1 nafar</p>
              </div>
              <div className="umumiy__static d-flex flex-column justify-content-end">
                <div className="d-flex justify-content-end">
                  <i className='umumiy__gicon bx bx-bar-chart'></i>
                  <i className='umumiy__gicon bx bx-bar-chart'></i>
                  <i className='umumiy__gicon bx bx-bar-chart'></i>
                </div>
              </div>
            </li>
            </Link>
          </ul>
        </section>
      </main>
    </div>
  )
}