import { useState } from "react";
import "./offers.css";

interface MyOffersProps {
  title: string;
  headText: string;
  subheadText: string;
  pText: string;
  btnText: string;
  img: any;
  isre: boolean;
}

export default function Offer({
  title,
  headText,
  subheadText,
  pText,
  btnText,
  img,
  isre,
}: MyOffersProps) {
  return (
    <div className="offer_div">
      <h1>{title}</h1>
      <div className={isre ? "offer_top-div offer_top-divre" : "offer_top-div"}>
        <div className="off_img-div off_imghide1">
          <img src={img} alt="Image" />
        </div>
        <div className={isre ? "off_text-div off_text-divre" : "off_text-div"}>
          <div className="off_text-divWrap">
            <h2>{headText}</h2>
            <h3>{subheadText}</h3>
            <div className="off_img-div off_imghide2">
              <img src={img} alt="Image" />
            </div>
            <p>{pText}</p>
            <button type="submit">{btnText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
