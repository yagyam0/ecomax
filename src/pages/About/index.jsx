import React from 'react';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 px-4 py-8">
        {/* Header */}
        <div className="mx-auto mb-4">
          <div className="w-16 h-[3px] bg-yellow-400 mx-auto mb-2 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 blur-md opacity-40 rounded-full"></div>
          </div>
          <h1 className="uppercase text-2xl font-bold text-gray-700 relative">
            About
            <span className="absolute inset-0 blur-sm opacity-30 text-yellow-400 pointer-events-none">
              About
            </span>
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center sm:justify-center gap-12 sm:flex-row">
          {/* Left Side */}
          <img
            className="object-cover w-full md:max-w-[500px] md:max-h-[450px] rounded-lg shadow-md"
            src={assets.about_img}
            alt="About App"
          />
          {/* Right Side */}
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p className="text-gray-600 text-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla beatae. Iusto vitae quia corrupti
              iste exercitationem et ab cumque nihil nostrum minus nam labore, magnam dicta eveniet, illo accusantium!
            </p>
            <div>
              <h2 className="text-lg font-semibold uppercase text-gray-800 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, reprehenderit?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt unde hic fuga ut ipsam quibusdam,
                magni quisquam impedit dolorum magnam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
