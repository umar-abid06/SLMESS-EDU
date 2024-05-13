import React, { useEffect, useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
  const sliderRef = useRef();
  let translateX = 0;

  useEffect(() => {
    const intervalId = setInterval(slideForward, 5000);

    return () => {
      // Cleanup function to clear the interval when component unmounts
      clearInterval(intervalId);
    };
  }, []);

  const slideForward = () => {
    if (translateX > -50) {
      translateX -= 25;
    } else {
      // Reset translateX to 0 if it reaches -50%
      translateX = 0;
    }
    sliderRef.current.style.transform = `translateX(${translateX}%)`;
  };
  const slideBackward = () => {
    if (translateX < 0) {
      translateX += 25;
    }
    sliderRef.current.style.transform = `translateX(${translateX}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={sliderRef}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user-1" />
                <div>
                  <h3>Tooba Shahid</h3>
                  <span>SLMESS, Karachi</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                expedita nulla ipsum deserunt totam suscipit autem modi facilis
                sit. Laudantium quam cum, velit sed minus non aliquid dolores
                atque in?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user-2" />
                <div>
                  <h3>Rafi Memon</h3>
                  <span>SLMESS, Karachi</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                expedita nulla ipsum deserunt totam suscipit autem modi facilis
                sit. Laudantium quam cum, velit sed minus non aliquid dolores
                atque in?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user-3" />
                <div>
                  <h3>Hira Bano</h3>
                  <span>SLMESS, Karachi</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                expedita nulla ipsum deserunt totam suscipit autem modi facilis
                sit. Laudantium quam cum, velit sed minus non aliquid dolores
                atque in?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user-4" />
                <div>
                  <h3>Adeel Sheikh</h3>
                  <span>SLMESS, Karachi</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                expedita nulla ipsum deserunt totam suscipit autem modi facilis
                sit. Laudantium quam cum, velit sed minus non aliquid dolores
                atque in?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
