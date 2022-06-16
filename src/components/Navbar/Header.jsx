import React from "react";

export default function Header(){
  return(
    <section className="header d-flex justify-content-between align-items-center">

      <form className="header__form d-flex">
        <input className="header__input" placeholder="Search transactions, insvoices or help" type="text" />
        <i className='header__seaicon bx bx-search'></i>
      </form>

      <div className="d-flex justify-content-between align-items-center">
        <button className="header__btnbell">
          <i className='bx bxs-bell' ></i>
          <span class="position-absolute top-0 start-51 translate-middle p-2 bg-warning border border-light rounded-circle">
        <span class="visually-hidden">New alerts</span>
      </span>
        </button>
        <div className="header__box d-flex justify-content-between align-items-center">
          <p className="header__name">User Name  <i className='header__icondw bx bxs-chevron-down'></i></p>
        </div>
        <div className="header__avabox">
          <img className="header__ava" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7NvxS8KHkHlLCkE-fGBMRgiXrSjgrNHWj5gxrOAVQ41-ZwwQ3Gu3n8z0hNiqAyfUbA8&usqp=CAU" alt="user" />
        </div>
      </div>
    </section>
  )
}