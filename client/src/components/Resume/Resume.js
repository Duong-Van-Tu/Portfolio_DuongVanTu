import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
          </div>
          <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
      </div>
      <div className="resume-sub-heading">
        <span>{props.subHeading ? props.subHeading : ""}</span>
      </div>
      <div className="resume-heading-description">
        <span>{props.description ? props.description : ""}</span>
      </div>
      </div>
    );
  };

  const resumeBullets = [
    { laebel: "Education", logoSrc: "education.svg" },
    // { laebel: "Work History", logoSrc: "work-history.svg" },
    { laebel: "Programming Skills", logoSrc: "programming-skills.svg" },
    { laebel: "Projects", logoSrc: "projects.svg" },
    { laebel: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 74 },
    { skill: "ReactJS", ratingPercentage: 80 },
    { skill: "ExpressJS", ratingPercentage: 75 },
    { skill: "NodeJS", ratingPercentage: 80 },
    { skill: "MongoDB", ratingPercentage: 80 },
    { skill: "Core Java", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 70 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Restaurant management website",
      duration: { fromDate: "1/2021", toDate: "6/2021" },
      description:
        "Complete restaurant management website theme on MongoDB platform.",
      subHeading: "Technologies Used: ReactJS, NodeJS",
    },
    {
      title: "Website for management of PPN Logistics Co., Ltd",
      duration: { fromDate: "10/2021", toDate: "12/2022" },
      description:
        "Company introduction, customer care, customer management PPN freight forwarding company limited.",
      subHeading: "Technologies Used: ReactJS, NodeJS",
    },
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Industrial University of Ho Chi Minh City"}
        subHeading={"Bachelor of science Information Technology"}
        fromDate={"2017"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Dong Loc High School, Can Loc, Ha Tinh"}
        subHeading={"Student"}
        fromDate={"2014"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"Gia Hanh middle school, Can Loc, Ha Tinh"}
        subHeading={"Student"}
        fromDate={"2010"}
        toDate={"2014"}
      />
    </div>,
    // <div className="resume-screen-container" key="work-experience">
    //   <div className="experience-container">
    //   <ResumeHeading
    //     heading={"Ehizeex Technoloy"}
    //     subHeading={"FULL STACK DEVELOPER INTERN"}
    //     fromDate={"2022"}
    //     toDate={"present"}
    //   />
    //   <div className="experience-description">
    //     <span className="resume-description-text">
    //       Currently working as MERN stack web and mobile developer and also an
    //       online instructor on udemy.
    //     </span>
    //   </div>

    //   <div className="experience-description">
    //     <span className="resume-description-text">
    //       - Developed an ecommerce website for client with the dashboard for
    //       managing the products, managing reviews, users, payment etc. .
    //     </span>
    //     <br />
    //     <span className="resume-description-text">
    //      - Integrated the web app with backend services to create new user
    //       onboarding application with dynamic form content.
    //     </span>
    //     <br />
    //     <span className="resume-description-text">
    //       - I stretch my mental capacity to develope UI as per the given
    //       designs.
    //     </span>
    //     <br />
    //   </div>
    //   </div>
      
    // </div>,
    <div className="resume-screen-container programming-skills-container"
        key="programing-skills">
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
    </div>,
    <div className="resume-screen-container" key={"projects"}>
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading={"Teaching"}
        description={
          "Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
        }
      />
      <ResumeHeading
        heading={"Music"}
        description={
          "Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
        }
      />
      <ResumeHeading
        heading={"Competitive Gaming"}
        description={
          "I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
        }
      />
    </div>
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="bullet logo"
        />
        <span className="bullet-label">{bullet.laebel}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
