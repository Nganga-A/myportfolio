import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import django from "../assets/django.png";
import flask from "../assets/flask.png";
import jest from "../assets/jest.png";
import jwt from "../assets/jwt.png";
import nodejs from "../assets/nodejs.png";
import postman from "../assets/postaman.png"
import postgre from "../assets/postgre.png"
import pytest from "../assets/pytest.png";
import python from "../assets/python.png";


const Experience = () => {
    const techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: reactImage,
        title: "React",
        style: "shadow-blue-600",
      },
      {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
      },
      {
        id: 6,
        src: nextjs,
        title: "Next JS",
        style: "shadow-white",
      },
      {
        id: 7,
        src: graphql,
        title: "GraphQL",
        style: "shadow-pink-400",
      },
      {
        id: 8,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
      {
        id: 9,
        src: bootstrap,
        title: "Bootstrap",
        style: "shadow-purple-500",
      },
      {
        id: 10,
        src: python,
        title: "Python",
        style: "shadow-yellow-600",
      },
      {
        id: 11,
        src: flask,
        title: "Flask",
        style: "shadow-gray-500",
      },
      {
        id: 12,
        src: django,
        title: "Django",
        style: "shadow-green-600",
      },
      {
        id: 13,
        src: postman,
        title: "Postman",
        style: "shadow-orange-400",
      },
      {
        id: 14,
        src: postgre,
        title: "PostgreSQL",
        style: "shadow-blue-500",
      },
      {
        id: 15,
        src: nodejs,
        title: "Node.js",
        style: "shadow-green-700",
      },
      {
        id: 16,
        src: pytest,
        title: "Pytest",
        style: "shadow-red-600",
      },
      {
        id: 17,
        src: jest,
        title: "Jest",
        style: "shadow-pink-500",
      },
      {
        id: 18,
        src: jwt,
        title: "JWT",
        style: "shadow-purple-600",
      },
    
    ];

  return (
    <div
    name="experience"
    className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-15">
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div className='mt-20 pb-8'>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Experience
        </p>
        <p className="py-6">These are the technologies I've worked with</p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-2 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="" className="w-20 h-30 mx-auto" />
            <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;