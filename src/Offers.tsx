import "./offers.css";

interface MyOffersProps {
  title: string;
  headText: string;
  subheadText: string;
  pText: string;
  btnText: string;
  img: any;
}

export default function Offer({
  title,
  headText,
  subheadText,
  pText,
  btnText,
  img,
}: MyOffersProps) {
  return (
    <div className="offer_div">
      <h1>{title}</h1>
      <div className="offer_top-div">
        <div className="off_img-div">
          <img src={img} alt="Image" />
        </div>
        <div className="off_text-div">
          <div>
            <h2>{headText}</h2>
            <h3>{subheadText}</h3>
            <p>{pText}</p>
            <button type="submit">{btnText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
