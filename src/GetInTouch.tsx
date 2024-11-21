import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./getInTouch.css"

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeadset, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function GetInTouch() {
  return (
    <div className='getin-div'>
      <h1>Get In Touch</h1>
      <p>
        Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum,
        dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur
        adipielit. Facilisi fermentum, dignissim pharetra. Aliquam
      </p>
      <div className='get_Top-div'>
        <div className='get_icon-div'>
          <div className="border-div">
            <div className='get_wrapper-div'>
              <div className="icon-div"><FontAwesomeIcon icon={faEnvelope} fontSize='30px' /></div>
              <div className='wrap_text-div'>
                <h3>info@column9.com</h3>
                <p>lorem ispum lorem ispumlorem ispum </p>
              </div>
            </div>
            <div className='get_wrapper-div'>
              <div className="icon-div"><FontAwesomeIcon icon={faPhone} fontSize='30px' /></div>
              <div className='wrap_text-div'>
                <h3>+234 80XXXXXXX</h3>
                <p>lorem ispum lorem ispumlorem ispum </p>
              </div>
            </div>
            <div className='get_wrapper-div'>
              <div className="icon-div"><FontAwesomeIcon icon={faHeadset} fontSize='30px' /></div>
              <div className='wrap_text-div'>
                <h3>Support center</h3>
                <p>lorem ispum lorem ispumlorem ispum </p>
              </div>
            </div>
            <div className='Icon_wrapper-div'>
              <FontAwesomeIcon
                className="f_icons"
                icon={faFacebook}
                fontSize='40px'
                style={{ color: "#223658" }}
              />
              <FontAwesomeIcon
                className="f_icons"
                icon={faTwitter}
                fontSize='40px'
                style={{ color: "#223658" }}
              />
              <FontAwesomeIcon
                className="f_icons"
                icon={faLinkedin}
                fontSize='40px'
                style={{ color: "#223658" }}
              />
              <FontAwesomeIcon
                className="f_icons"
                icon={faInstagram}
                fontSize='40px'
                style={{ color: "#223658" }}
              />
            </div>
          </div>

        </div>
        <div className='get_input-div'>

          <input placeholder='Name' />
          <input placeholder='Email' />
          <input placeholder='Subject' />
          <input style={{ height: '140px' }} placeholder='Input Text' />
          <button type='submit'>Send</button>
        </div>
      </div>
    </div>
  );
}
