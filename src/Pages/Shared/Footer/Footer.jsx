import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";

const Footer = () => {

  return (
      <footer className="footer footer-center p-10 bg-gray-800 text-white">
        <div className="grid grid-flow-col gap-4 -mb-3">
          <Link to="/" className="link link-hover flex gap-4 items-center"><img className="w-16" src={logo} alt="Logo" /> <span className="text-4xl font-semibold">Used Cars Mart</span></Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link to="/">
              <FaTwitter
                className="text-3xl"
              />
            </Link>
            <Link to="/">
              <FaYoutube
                className="text-3xl"
              />
            </Link>
            <Link to="/">
              <FaFacebookSquare
                className="text-3xl"
              />
            </Link>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by Used Cars Mart</p>
        </div>
      </footer>
  );
}

export default Footer;
