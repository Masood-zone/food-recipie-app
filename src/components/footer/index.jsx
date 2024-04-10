import React from "react";
import { assets } from "../../assets/data";
import { NAVBAR_LINKS } from "../navbar/data";
import MainLogo from "../logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const SOCIAL_ICONS = [
    {
      id: 1,
      url: "https://www.facebook.com",
      icon: assets.facebook_icon,
    },
    {
      id: 2,
      url: "https://x.com/sheldon557?s=11",
      icon: assets.twitter_icon,
    },
    {
      id: 3,
      url: "https://www.linkedin.com",
      icon: assets.linkedin_icon,
    },
  ];
  return (
    <footer
      className="bg-footer-bg text-footer-color flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-24"
      id="contact-us"
    >
      {/*Footer content */}
      <div className="w-full grid grid-cols-3 gap-20">
        {/*First section */}
        <div className="flex flex-col items-start gap-5">
          <MainLogo icon />
          <p>
            Our dedicated team members with their zeal and increadible
            tolerance, has made it possible for us to bring you this platform,
            be sure to reach out to us incase you need anything, Thank you.
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_ICONS.map((icon, index) => (
              <a href={icon.url} target="_blank" key={icon.id}>
                <img
                  src={icon.icon}
                  alt={`social-icon-${index}`}
                  className="w-10 mr-[15px]"
                />
              </a>
            ))}
          </div>
        </div>
        {/*Second section */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-2xl">Meals</h2>
          <ul className="">
            {NAVBAR_LINKS.map((link) => (
              <li key={link.id} className="list-none mb-[10px] cursor-pointer">
                <a href={link.path} className="underline">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/*Third section */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-2xl">Contact Us</h2>
          <ul className="">
            <li className="list-none mb-[10px] cursor-pointer">
              <a href="mailto:johnmaconzy557@gmail.com" className="underline">
                <span className="pr-5">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                johnmaconzy557@gmail.com
              </a>
            </li>
            <li className="list-none mb-[10px] cursor-pointer">
              <a href="tel:+23357561439" className="underline">
                <span className="pr-5">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                +233 55 756 1439
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*Copyright */}
      <hr className="w-full h-[2px] my-5 mx-0 bg-gray-400 border-none" />
      <p className="">
        Copyright&copy; 2024 &copy;Meals.com - All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
