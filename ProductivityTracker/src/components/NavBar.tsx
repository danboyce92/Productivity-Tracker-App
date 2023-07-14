
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
    <div>
      <div id="nav-grid">
      <div id="logo">Productivity App</div>
      </div>
      <div id="nav-bar">
        <ul id="nav-list">
          <li id="nav-list-item" className={o ? 'text-[#FFF689]' : ''} onClick={changeO}>Activities</li>
          <li id="nav-list-item" className={e ? 'text-[#FFF689]' : ''} onClick={changeE}>Activities Input</li>
          <li id="nav-list-item" className={s ? 'text-[#FFF689]' : ''} onClick={changeS}>Activities Edit</li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar;