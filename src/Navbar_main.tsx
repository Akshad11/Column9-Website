import logo from "./Images/Logo.png";
import loginIcon from "./Images/LoginIcon.png";
import "./navbar_mains.css";
import {
  faBars,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Navbar_main() {
  const [isclicked, setisclicked] = useState(false);

  const changeClicked = () => {
    setisclicked(!isclicked);
  };

  return (
    <div className="Navbar_div">
      <FontAwesomeIcon
        className="Nav_icon_bars"
        size="xl"
        icon={isclicked ? faX : faBars}
        onClick={changeClicked}
      />
      <img src={logo} alt="Logo Image" className="applogo " />
      <ul
        className={isclicked ? "unlist nav_menushow" : "unlist  nav_menuhide "}
      >
        <li className="nav_list">Home</li>
        <li className="nav_list">Courses</li>
        <li className="nav_list">Instuctors</li>
        <li className="nav_list">Schedules</li>
        <li className="nav_list">Contact Us</li>
      </ul>
      <input className="Nav_input_box" />
      <FontAwesomeIcon
        className="Nav_icon_search"
        size="xl"
        icon={faMagnifyingGlass}
      />
      <img className="Nav_input_LoginIcon" src={loginIcon} alt="LoginIcon" />
    </div>
  );
}
