import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { changeToO, changeToE, changeToS } from "../store";

const NavBar = () => {
  const dispatch = useAppDispatch();

  const { o, e, s } = useAppSelector((state) => {
  return {
  o: state.tabColor.o,
  e: state.tabColor.e,
  s: state.tabColor.s
}
  });

  const changeO = () => {
    if  (e) {
      changeE();
    }
    if  (s) {
      changeS();
    }
    dispatch(changeToO());
  }
  const changeE = () => {
    if  (o) {
      changeO();
    }
    if  (s) {
      changeS();
    }
    dispatch(changeToE());
  }
  const changeS = () => {
    if  (o) {
      changeO();
    }
    if (e) {
      changeE();
    }
    dispatch(changeToS());
  }

  return (
    <div id="nav-grid">
      <div id="logo">Productivity App</div>
        <label className="hamburger-menu">
          <input type="checkbox" />
        </label>
      
      <div className='sidebar' id="nav-bar">
        <ul id="nav-list">
          <li id="nav-list-item" className={o ? 'text-[#FFF689]' : ''} onClick={changeO}><Link to="/">Activities</Link></li>
          <li id="nav-list-item" className={e ? 'text-[#FFF689]' : ''} onClick={changeE}><Link to="input">Activities Input</Link></li>
          <li id="nav-list-item" className={s ? 'text-[#FFF689]' : ''} onClick={changeS}><Link to="edit">Activities Edit</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;