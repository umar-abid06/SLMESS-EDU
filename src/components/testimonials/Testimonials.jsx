import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" />
      <img src={back_icon} alt="" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user-1" />
                <div>
                  <h3>Tooba Shahid</h3>
                  <span>SLMESS, Karachi</span>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi expedita nulla ipsum deserunt totam suscipit autem
                    modi facilis sit. Laudantium quam cum, velit sed minus non
                    aliquid dolores atque in?
                  </p>
                </div>
              </div>
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
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi expedita nulla ipsum deserunt totam suscipit autem
                    modi facilis sit. Laudantium quam cum, velit sed minus non
                    aliquid dolores atque in?
                  </p>
                </div>
              </div>
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
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi expedita nulla ipsum deserunt totam suscipit autem
                    modi facilis sit. Laudantium quam cum, velit sed minus non
                    aliquid dolores atque in?
                  </p>
                </div>
              </div>
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
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi expedita nulla ipsum deserunt totam suscipit autem
                    modi facilis sit. Laudantium quam cum, velit sed minus non
                    aliquid dolores atque in?
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
