import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    // console.log("E-Mail API Res===> ", data);
    if (data.success) {
      setResult(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="msg-icon" />
        </h3>
        <p>
          Feel free to reach out to us through contact form. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Aliquam vel dolorum voluptatum
          corporis id! Sint reiciendis voluptate laudantium, corrupti placeat
          blanditiis quidem quae quasi nesciunt expedita hic sunt assumenda
          doloribus.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="mail-icon" /> contact@slmess.edu
          </li>
          <li>
            <img src={phone_icon} alt="phone-icon" /> +92-3192376145
          </li>
          <li>
            <img src={location_icon} alt="location-icon" />
            Street 4, Sector 11/D Orangi Town, <br />
            Karachi, Pakistan
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
