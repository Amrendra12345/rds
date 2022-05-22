import { BsTelephone, BsEnvelope, BsAlarm } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="topHeader">
      <div className="container-fluid">
        <div className="topMenu">
          <div className="contactNo">
              <ul>
                 <li><a><BsTelephone />&nbsp; +91 9716633712</a></li>
                 <li><a><BsEnvelope />&nbsp; shaikhmiran@gmail.com</a></li>
                 <li><a><BsAlarm />&nbsp; Mon - Sat 09:00AM - 07:00PM</a></li>
              </ul>
          </div>
          <div className="social_icon">
              <ul>
                <li><a><FaFacebookF /></a></li>
                <li><a><FaTwitter /></a></li>
                <li><a><FaYoutube /></a></li>
                <li><a><FaLinkedinIn /></a></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
