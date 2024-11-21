import "./intructors.css";

import face1 from "./Images/face1.png";
import face2 from "./Images/face2.png";
import face3 from "./Images/face3.png";
import face4 from "./Images/face4.png";

export default function Intructors() {
  const Intructorsdata = [{}];
  return (
    <div className="Intructors-div">
      <h1>Notable Intructors</h1>
      <div className="Int_top-div">
        <div className="Int_scroll-div">
          <img src={face1} alt="face" />
          <h3>DATA ANALYST</h3>
          <h2>Prof. W.J Khatam</h2>
        </div>
        <div className="Int_scroll-div">
          <img src={face2} alt="face" />
          <h3>UX DESIGNER</h3>
          <h2>Prof. Kaif Kofi O</h2>
        </div>
        <div className="Int_scroll-div">
          <img src={face3} alt="face" />
          <h3>SOFTWERE DEV.</h3>
          <h2>Prof. Maryam J</h2>
        </div>
        <div className="Int_scroll-div">
          <img src={face4} alt="face" />
          <h3>PSYCOLOGIST</h3>
          <h2>Mr. Oluwole B.O</h2>
        </div>
      </div>
    </div>
  );
}
