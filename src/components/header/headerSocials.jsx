import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const headerSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/jay-godwin-rabago-ab5043234/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://discord.com" target="_blank" rel="noreferrer">
        <BsDiscord />
      </a>
    </div>
  );
};

export default headerSocials;
