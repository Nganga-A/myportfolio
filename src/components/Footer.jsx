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
      href: 'mailto:ngangaabed@example.com',
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={24} />,
      href: '/public/Abed_Nganga_Resume.pdf',
      download: true,
    },
  ];

  return (
    <footer className="bg-black font-small pt-4 text-white">
      <div className="container mx-auto text-center md:text-left">
        <div className="md:flex">
          <div className="md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center items-center">
            <h5 className="text-lg font-bold mb-3">Connect with Me</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(({ id, icon, href, download }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  download={download}
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">

              <a
                href="/public/Abed_Nganga_Resume.pdf"
                download="Abed_Nganga_Resume.pdf"
                className="text-white hover:text-orange-400 ml-2"
              >Download My Resume
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
