import ExamImg from "./Images/Exampic.png";
import "./examPage.css";

export default function ExamPage() {
  return (
    <div className="Exam_div">
      <div className="Exam_top-div">
        <div className="Ex_text-div">
          <div>
            <h2>Online Exams</h2>
            <h3>Our exams prepare you for job opportunity</h3>
            <p>
              Lorem ipsum dolor sit at, consectetur adipielit. Facilisi
              fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at,
              consectetur adipielit. Facilisi fermentum, dignissim pharetra.
              Aliquam
            </p>
            <button type="submit">Explore exams</button>
          </div>
        </div>
        <div className="Ex_img-div">
          <img src={ExamImg} alt="Image" />
        </div>
      </div>
    </div>
  );
}
