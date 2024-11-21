import logo from "./Images/Logo.png";
import loginIcon from "./Images/LoginIcon.png";
import "./navbar_mains.css";

export default function Navbar_main() {
  return (
    <div className="Navbar_div">
      <img src={logo} alt="Logo Image" className="applogo" />
      <ul className="unlist">
        <li className="nav_list">Home</li>
        <li className="nav_list">Courses</li>
        <li className="nav_list">Instuctors</li>
        <li className="nav_list">Schedules</li>
        <li className="nav_list">Contact Us</li>
      </ul>
      <input className="Nav_input_box" />
      <img className="Nav_input_LoginIcon" src={loginIcon} alt="LoginIcon" />
    </div>
  );
}
