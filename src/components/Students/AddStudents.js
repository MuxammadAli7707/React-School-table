import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../Navbar/Header";
import { StudentContext } from "../Store/StudentStore";

export default function AddStudents() {
  const {data, dispatch, setName, setNumber, setActiv, setGroupNum, setHisob} = useContext(StudentContext)
  const addTeacher = (e) => {
    e.preventDefault()

    dispatch({type: 'Add', payload:{
      id: data.length,
      name: e.target[0].value,
      number: e.target[1].value,
      groupNum: e.target[2].value,
      activ: e.target[3].value,
      hisob: e.target[4].value,
    }})
  }

  return(
    <div className="d-flex">
      <Navbar />
      <main>
        <Header />
        <section className="addteacher">
          <h1 className="addteacher__title">O'quvchini qo'shish</h1>
          <div className="addteacher__main d-flex">
            <div className="addteacher__left">
              <p className="addteacher__imgname">O'quvchining rasmi</p>
              <div className="addteacher__imgbox">
                <img className="addteacher__img" src="https://www.online-tech-tips.com/wp-content/uploads/2019/12/upload-video-to-youtube-1.png" alt="upploadimg" />
              </div>
            </div>

            <div className="addteacher__box">
              <form onSubmit={addTeacher} className="addteacher__form" action="">
                <label className="addteacher__label pt-0" htmlFor="">
                  <input onChange={(e) => setName(e.target.value)} className="addteacher__input pt-0" type="text" placeholder="Ismi" />
                  <span className="addteacher__name">O'quvchining ismini kiriting</span>
                </label>
                <label className="addteacher__label" htmlFor="">
                  <input onChange={(e) => setNumber(e.target.value)} className="addteacher__input" type="number" placeholder="Telefon raqam" />
                  <span className="addteacher__name">O'quvchining telefon raqami</span>
                </label>
                <label className="addteacher__label" htmlFor="">
                  <input onChange={(e) => setGroupNum(e.target.value)} className="addteacher__input" type="number" placeholder="O'quvchining guruhi" />
                  <span className="addteacher__name">O'quvchining o'qiydigan guruhi</span>
                </label>
                <label className="addteacher__label" htmlFor="">
                  <select onChange={(e) => setActiv(e.target.value)} className="addteacher__input" name="" id="">
                    <option value="Aktiv">Aktiv</option>
                    <option value="Muzlatilgan">Muzlatilgan</option>
                  </select>
                  <span className="addteacher__name">O'quvchining  holatini tanlang</span>
                </label>
                <label className="addteacher__label mb-5" htmlFor="">
                  <input onChange={(e) => setHisob(e.target.value)} className="addteacher__input" type="number" placeholder="O'quvchining hisob holati" />
                  <span className="addteacher__name">O'quvchining hisobi</span>
                </label>

                <div className="addteacher__btnbox d-flex pt-5">
                  <Link to="/teacher">
                    <button className="addteacher__cbtn" type="button">Bekor qilish</button>
                  </Link>
                  {/* <Link to="/teacher"> */}
                    <button className="addteacher__addbtn" type="submit">Qo'shish</button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}