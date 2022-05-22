import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <div className="title">
              <h6>About Us</h6>
              <ul className="aboutUs">
                <li>
                  <a>DHRUV CROP PROTECTION CONSULTANCY OPC- PRIVATE LIMITED</a>
                </li>
                <li>
                  <p>
                    is one of the best consultants of Pesticides Regitration in
                    Greater Noida and in India as well.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="title">
              <h6> Our Services</h6>
              <ul className="service">
                <li>
                  <a>Domestic Registration</a>
                </li>
                <li>
                  <a>Generation of Data</a>
                </li>
                <li>
                  <a>Maintainence Services</a>
                </li>
                <li>
                  <a>Prepration of Documents</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="title">
              <h6>Get in Touch</h6>
              <ul className="getInTouch">
                <li>
                  <a>
                    F-03, GNS Plaza, Near Roddission Blu Hotel Gr. Noida-
                    201308, U.P,India
                  </a>
                </li>
                <li>
                  <a>+91 97166 33712</a>
                </li>
                <li>
                  <a>devkumarattri@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="title">
              <h6>Social</h6>
              <ul className="social_icon">
                <li>
                  <a className="fackbook">
                    <FaFacebookF />{" "}
                  </a>
                </li>
                <li>
                  <a className="twitter">
                    <FaTwitter />{" "}
                  </a>
                </li>
                <li>
                  <a className="youtube">
                    <FaYoutube />{" "}
                  </a>
                </li>
                <li>
                  <a className="linkdin">
                    <FaLinkedinIn />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>Dhruv Crop Protection 2017</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
