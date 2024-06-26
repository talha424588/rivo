import Navbar from "../navbar/Navbar";
import "./Header.css";
import header_image from "../../assets/header-image.png";
function Header() {
  return (
    <div className="parent-container">
      <Navbar />
      <div className="header">
        <div className="container">
          <div className="content-section">
            <h1>Discover and Find Your Own Fashion!</h1>
            <p>
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </p>
            <button>Explore Now</button>
          </div>
          <div className="image-section">
            <img src={header_image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
