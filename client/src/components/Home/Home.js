import React from "react";
import "./Home.css";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Animations from "../../utilities/Animations"
import ScrollService from "../../utilities/ScrollService"
const Home = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="home-container fade-in" id={props.id || ""}>
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
};

export default Home;
