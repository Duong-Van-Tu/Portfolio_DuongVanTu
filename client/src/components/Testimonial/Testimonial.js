import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
const Testimonial = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const datas = [
    {
      comment:
        "I patronized Ehizeex and when He delivered, I honestly fell in love with the project He is a very honest guy and he delivers ontime",
      rating: 4.5,
      name: "Daisy Dominic",
      positions: "CEO InansGlobal",
      image: "../../assets/Testimonial/lady.png",
    },
    {
      comment:
        "I patronized Ehizeex and when He delivered, I honestly fell in love with the project He is a very honest guy and he delivers ontime",
      rating: 4.5,
      name: "Daisy Dominic",
      positions: "CEO InansGlobal",
      image: "../../assets/Testimonial/man.png",
    },
    {
      comment:
        "I patronized Ehizeex and when He delivered, I honestly fell in love with the project He is a very honest guy and he delivers ontime",
      rating: 4.5,
      name: "Daisy Dominic",
      positions: "CEO InansGlobal",
      image: "../../assets/Testimonial/mike.png",
    },
  ];
  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section fadeIn" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {datas.map((item, index) => (
                <div className="col-lg-12" key={index}>
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left"></i>I patronized Ehizeex
                        and when He delivered, I honestly fell in love with the
                        project He is a very honest guy and he delivers ontime.
                        <i className="fa fa-quote-right"></i>
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star-half-o"></i>
                        </li>
                        <li>
                          <i className="fa fa-star-half-o"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                      <img
                        src={require("../../assets/Testimonial/lady.png")}
                        alt="avatar"
                      />
                      <h5>Daisy Dominic</h5>
                      <p>CEO InansGlobal</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={require("../../assets/shape-bg.png")} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
