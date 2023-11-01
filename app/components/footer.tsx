import React from "react";
import { Envelope, Github, Linkedin, Medium, Twitter } from "../icons";

type FooterProps = {
  contactMeLinks: string[];
};

const Footer = ({ contactMeLinks }: FooterProps) => {
  return (
    <footer className="w-full bg-white shadow-footer mt-12 py-4 fixed bottom-0">
      <div className="flex items-center justify-center gap-1">
        <a href={contactMeLinks[0]} aria-label="Email" target="_blank">
          <Envelope className={`icons_contactme`} />
        </a>

        <a href={contactMeLinks[2]} aria-label="Linkedin" target="_blank">
          <Linkedin className={`icons_contactme`} />
        </a>
        <a href={contactMeLinks[4]} aria-label="Github" target="_blank">
          <Github className={`icons_contactme`} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
