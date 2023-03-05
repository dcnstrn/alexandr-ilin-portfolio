import React from "react";
import profileImg from "../../assets/profile-img1.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import "./home.css";
import CV from '../../assets/Ilin-CV.pdf'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>ALEXANDR</span> ILIN
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>Web Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img
                src={profileImg}
                alt="profile img"
                className="home__profile"
              />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                2 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Yers of <b>Experience</b>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">20</span>

              <span className="text-sm text-cs">
                Completed <b>Projects</b>
              </span>
            </p>

            <img src={shapeOne} alt="shape" className="shape shape__1" />
            <img src={shapeTwo} alt="shape" className="shape shape__2" />
            <img src={shapeTwo} alt="shape" className="shape shape__3" />
          </div>

          <p className="home__text">
            From Ukraine, Kyiv. I Have rich experience in web and mobile
            application development, also I am good at wordpress. Living in
            Frankfurt now.
          </p>

          <div className="home__socials">
            <a href="#" className="home__social-link">
              <RiInstagramFill />
            </a>
            <a href="#" className="home__social-link">
              <RiLinkedinBoxFill />
            </a>
            <a href="#" className="home__social-link">
              <RiGithubFill />
            </a>
          </div>

          <div className="home__btns">
            <a download="" href={CV} className="btn text-cs">
              Download CV
            </a>

            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
