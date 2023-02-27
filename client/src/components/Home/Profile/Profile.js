import React from "react";
import Typical from "react-typical";
import "./Profile.css";

import ScrollService from "../../../utilities/ScrollService";
const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
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
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                Hello, I'M{" "}
                <span className="highlighted-text">Duong Van Tu</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Ethusiastic dev🔴",
                      1000,
                      "Full Stack Developer✈️",
                      1000,
                      "Mern Stack Dev🚤",
                      1000,
                      "Cross Platform🚀",
                      1000,
                      "React Dev💻",
                      1000,
                    ]}
                  ></Typical>
                </h1>
                <span className="profile-role-tagline">
                  Knack of building applications with front and back end
                  operations.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a
                href="DuongVanTu _devWeb.pdf"
                download="CV DuongVanTu _devWeb.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
