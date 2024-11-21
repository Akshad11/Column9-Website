import "./enrollPage.css";

export default function EnrollPage() {
  return (
    <div className="enroll_div">
      <h1>Enrol for a couse now</h1>
      <div className="enroll_top-div">
        <div className="e_text-div">
          <div>
            <h2>
              Take your career to <br />
              the next level.
            </h2>
            <h5>With indispensable courses</h5>
            <p>
              Lorem ipsum dolor sit at, consectetur adipielit. Facilisi
              fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at,
              consectetur adipielit. Facilisi fermentum, dignissim pharetra.
              Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi
              fermentum, dignissim pharetra. Aliquam
            </p>
          </div>
        </div>
        <div className="e_top_div">
          <div className="e_form-div">
            <h4>Registration for enrolment</h4>
            <input placeholder="Full Name" id="fname" />
            <input placeholder="Email" id="email" />
            <input placeholder="Phone No" id="pnumber" />
            <input placeholder="courses" />
            <button type="submit">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
