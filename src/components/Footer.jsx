import React from "react";
import { Link } from "react-router-dom";

import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import instagramIcon from "../images/icon-instagram.svg";
import pinterestIcon from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex flex-col lg:w-1/3">
          <h3 className="font-semibold mb-8 text-2xl text-center lg:text-left">
            loopstudios
          </h3>
          <div className="flex flex-col text-center lg:flex-row lg:justify-between ">
            <Link to="#" className="my-2 font-normal">
              About
            </Link>
            <Link to="#" className="my-2 font-normal">
              Careers
            </Link>
            <Link to="#" className="my-2 font-normal">
              Events
            </Link>
            <Link to="#" className="my-2 font-normal">
              Products
            </Link>
            <Link to="#" className="my-2 font-normal mb-8">
              Support
            </Link>
          </div>
        </div>

        <div className="lg:flex lg:flex-col">
          {/* This is the social media div */}
          <div className="flex justify-center lg:justify-end">
            <img src={facebookIcon} className="mx-3" alt="facebookIcon" />
            <img src={twitterIcon} className="mx-3" alt="twitterIcon" />
            <img src={pinterestIcon} className="mx-3" alt="pinterestIcon" />
            <img src={instagramIcon} className="mx-3" alt="instagramIcon" />
          </div>
          <div className="mt-4">
            <p className="text-darkGray font-semibold text-md text-center">
              &copy; 2021 Loopstudios. All rigths reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
