import Pplphoto from "./Images/2pplPhoto.png";
import Navbar_main from "./Navbar_main";
import "./homePage.css";

export default function HomePage() {
  return (

    <div className="Header_div Home-div" style={{ backgroundImage: `url(${Pplphoto})`, backgroundSize: 'cover' }}>

      <div className="h_text-div">
        <div>
          <h1>
            Take your career to
            <br />
            the next level.
          </h1>
          <p>With indispensable courses</p>
          <div className="h_button-div">
            <button type="submit" className="btn-exam">
              Exams
            </button>
            <button type="submit" className="btn-courses">
              Our Courses
            </button>
          </div>
        </div>
      </div>
      <div className="h_img-div">
        <img src={Pplphoto} alt="ppl" />
      </div>
    </div>

  );
}
