import React from "react";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="#" className="footer__social-link">
            <RiInstagramFill />
          </a>
          <a href="#" className="footer__social-link">
            <RiLinkedinBoxFill />
          </a>
          <a href="#" className="footer__social-link">
            <RiGithubFill />
          </a>
        </div>
        <p className="footer__copyright text-cs">
          &copy; 2023 <span>Luique</span>. All Rights Reserved
        </p>
        <p className="footer__copyright text-cs">
          Developed by <span>Sasha Dev</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
