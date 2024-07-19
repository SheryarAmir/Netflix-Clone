import React from "react";
import "./Home.css";
import Navbar from "../../Compounents/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TittleCart from "../../Compounents/TittleCart/TittleCart";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="Hero">
        <img src={hero_banner} alt="" className="banner-img" />

        <div className="herocaption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            iscovering his ties to a secret ancient order, a young man living in
            modern Istanbul embarks on a quest to save the city from an immortal
            enemy.
          </p>

          <div className="hero-btns">
            <button className="btn ">
              <img src={play_icon} alt="" /> Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" /> More Info
            </button>
          </div>
          <TittleCart />
        </div>
      </div>
      <div className="more-cards">
      <TittleCart  title={"Blockbuster Movies"}/>
      <TittleCart  title={"Only On Netflix"}/>
      <TittleCart  title={"Ucoming"}/>
      <TittleCart  title={" Top pick Movies for you "} />
      </div>
    </div>
  );
};

export default Home;
