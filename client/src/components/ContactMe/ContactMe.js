import React, { useState } from "react";
import "./ContactMe.css";
import axios from "axios";
import imgBack from "../../assets/images/mailz.jpeg";
import load1 from "../../assets/images/load2.gif";
import Typical from "react-typical";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };

      setBool(true);
      const res = await axios.post("/contact", data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="main-container fade-in" id={props.id || ""}>
        <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
        <div className="central-form">
          <div className="col">
            <h2>
              <Typical
                loop={Infinity}
                steps={["Get In Touch 📧", 1000]}
              ></Typical>
            </h2>
            <a href="https://www.facebook.com/profile.php?id=100029994021905">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/tuduong213/">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/duong-tu-405283215/">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Duong-Van-Tu/">
                  <i className="fa fa-github-alt" aria-hidden="true"></i>
            </a>
          </div>
          <div className="back-form">
            <div className="img-back">
              <h4>Send Your Email Here!</h4>
              <img src={imgBack} alt="Back Img" />
            </div>
            <form onSubmit={submitForm}>
              <p>{banner}</p>
              <label htmlFor="name">Name</label>
              <input type="text" value={name} onChange={handleName} />

              <label htmlFor="email">Email</label>
              <input type="email" value={email} onChange={handleEmail} />

              <label htmlFor="message">Message</label>
              <textarea type="text" value={message} onChange={handleMessage} />
              <div className="send-btn">
                <button type="submit">
                  Send <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  {bool ? (
                    <b className="load">
                      <img src={load1} alt="Loading" />
                    </b>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default ContactMe;
