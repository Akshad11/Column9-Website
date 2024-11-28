import "./styles.css";
import Navbar_main from "./Navbar_main";
import HomePage from "./HomePage";
import EnrollPage from "./EnrollPage";
import Offer from "./Offers";
import ExamPage from "./ExamPage";
import ScrollView from "./components/ScrollView";

import Scroll1 from "./Images/scroll1.png";
import Scroll2 from "./Images/scroll2.png";
import Scroll3 from "./Images/scroll3.png";
import Scroll4 from "./Images/scroll4.png";
import Scroll5 from "./Images/scroll5.png";
import Scroll6 from "./Images/scroll6.png";
import Scroll7 from "./Images/scroll7.png";
import Scroll8 from "./Images/scroll8.png";
import offersImg from "./Images/offersImg.png";
import ExamImg from "./Images/Exampic.png";

import Intructors from "./Intructors";
import GetInTouch from "./GetInTouch";
import Footer from "./FooterPage";
import React from "react";

export default function App() {
  const Textdata = [
    "Game Development",
    "Marketing Strategy",
    "Data Analysis With Python",
    "Advanced UX Designs",
  ];
  const Imgdata = [Scroll1, Scroll2, Scroll3, Scroll4];
  const Textdata2 = [
    "NATURE of Science",
    "2022 Astro Report",
    "Data Analysis With Python",
    "Advanced UX Designs",
  ];
  const Imgdata2 = [Scroll5, Scroll6, Scroll7, Scroll8];

  return (
    <div className="App">
      <Navbar_main />
      <HomePage />
      <EnrollPage />
      <Offer
        title="What we offer"
        headText="Online Courses"
        subheadText="Our Course are the best among others"
        pText=" Lorem ipsum dolor sit at, consectetur adipielit. Facilisi
        fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at,
        consectetur adipielit. Facilisi fermentum, dignissim pharetra.
        Aliquam"
        btnText="Explore our courses"
        img={offersImg}
        isre={false}
      />

      <ScrollView
        title="Trending Courses"
        textList={Textdata}
        imgList={Imgdata}
      />

      <Offer
        title=""
        headText="Online Exams"
        subheadText="Our exams prepare you for job opportunity"
        pText=" Lorem ipsum dolor sit at, consectetur adipielit. Facilisi
        fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at,
        consectetur adipielit. Facilisi fermentum, dignissim pharetra.
        Aliquam"
        btnText="Explore exams"
        img={ExamImg}
        isre={true}
      />
      <ScrollView
        title="Test your ability here"
        textList={Textdata}
        imgList={Imgdata}
      />
      <Offer
        title=""
        headText="Publication"
        subheadText="Publications from the best Authors"
        pText="Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam "
        btnText="See  publications"
        img={Scroll5}
        isre={false}
      />
      <ScrollView
        title="Recent Publications"
        textList={Textdata2}
        imgList={Imgdata2}
      />
      <Intructors />
      <GetInTouch />
      <Footer />
    </div>
  );
}
