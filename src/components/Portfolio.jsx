import React from "react";
import currency from "../assets/portfolio/currency.png";
import shortify from "../assets/portfolio/shortify.png";
import portfolio from "../assets/portfolio/portfolio.png";
import tastydishes from "../assets/portfolio/tastydishes.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: currency,
      href_demo:'https://currency-converter-nganga-a.vercel.app/',
      href_code: 'https://github.com/Nganga-A/Currency_Converter'
    },
    {
      id: 2,
      src: tastydishes,
      href_demo:'https://deluxe-dodol-c29f43.netlify.app/',
      href_code:'https://github.com/Nganga-A/Tasty_Dishes'
    },
    {
      id: 3,
      src: shortify,
      href_demo:'https://url-shortify-gzik.onrender.com',
      href_code: 'https://github.com/Nganga-A/URL-Shortner'
    },
    {
      id: 4,
      src: portfolio,
      href_demo:'https://portfolio-nganga-a.vercel.app/',
      href_code:'https://github.com/Nganga-A/myportfolio'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-auto pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href_demo,href_code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a
                  href={href_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-400"
                >
                  Demo
                </a>
                <a
                  href={href_code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-400"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;