import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const FooterPage = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin size={24} />,
      href: 'https://www.linkedin.com/in/abed-nganga-673965245/',
    },
    {
      id: 2,
      icon: <FaGithub size={24} />,
      href: 'https://github.com/Nganga-A',
    },
    {
      id: 3,
      icon: <FaEnvelope size={24} />,
      href: 'mailto:ngangaabed@gmail.com',
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={24} />,
      href: '/Abed _Nganga__Resume.pdf',
      download: 'Abed_Nganga__Resume.pdf',
    },
  ];

  return (
    <footer className="bg-black font-small pt-4 text-white">
      <div className="container mx-auto text-center md:text-left">
        <div className="md:flex space-y-4 md:space-y-0">
          <div className="md:w-1/3 md:mb-0 flex-1 flex flex-col justify-center items-center">
            <h5 className="text-lg">Connect with Me</h5>
          </div>
          <div className="md:w-1/3 mb-4 md:mb-0 flex-1 flex justify-center items-center space-x-4">
            {socialLinks.map(({ id, icon, href, download }) => (
              <a
                key={id}
                href={href}
                target={download ? "" : "_blank"} 
                download={download}
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400"
              >
                {icon}
              </a>
            ))}
          </div>
          <div className="md:w-1/3 mb-4 md:mb-0 flex-1 flex flex-col justify-center items-center">
            <a
              href="/Abed _Nganga__Resume.pdf"
              download="Abed_Nganga__Resume.pdf"
              className="text-white hover:text-orange-400 ml-2"
            >
              <h5 className="text-lg"> Download My Resume</h5>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black text-center py-3">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>


  );
};

export default FooterPage;
