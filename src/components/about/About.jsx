import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about_img" className="about_img" />
        <img
          src={play_icon}
          alt="play_icon"
          className="play_icon"
          onClick={() => setPlayState(true)}
        />
      </div>
      <div className="about-right">
        <h3>About Our Institution</h3>
        <h2>Nurturing Tomorrow's Leaders Today!</h2>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et a
          recusandae itaque, praesentium esse deserunt cumque. Laboriosam, est
          laborum. Quo quidem nemo totam rerum fuga ullam suscipit recusandae
          omnis ducimus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et a
          recusandae itaque, praesentium esse deserunt cumque. Laboriosam, est
          laborum. Quo quidem nemo totam rerum fuga ullam suscipit recusandae
          omnis ducimus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et a
          recusandae itaque, praesentium esse deserunt cumque. Laboriosam, est
          laborum. Quo quidem nemo totam rerum fuga ullam suscipit recusandae
          omnis ducimus!
        </p>
      </div>
    </div>
  );
};

export default About;
