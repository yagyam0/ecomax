import React from 'react';
import { assets } from '../../assets/assets';

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center border-[1px] border-b-yellow-300 bg-yellow-50">
            {/* Hero Left Side */}
            <div className="w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-16 px-6 sm:px-12 text-center">
                <div className="text-gray-800 space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-10 md:w-12 h-[2px] bg-gray-800"></div>
                        <p className="font-medium text-sm md:text-base uppercase tracking-wide">
                            Latest Arrivals at your doorsteps
                        </p>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
                        Stay in Trends Everytime
                    </h1>
                    <div className="flex items-center gap-3 mt-4">
                        <p className="font-semibold text-sm md:text-base cursor-pointer transition duration-300 hover:text-yellow-500">
                            Shop with us Now
                        </p>
                        <div className="w-10 md:w-12 h-[2px] bg-gray-800"></div>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}
            <div className="w-full sm:w-1/2">
                <img
                    className="w-full h-auto object-cover transition duration-300 hover:scale-105"
                    src={assets.hero_img}
                    alt="Featured"
                />
            </div>
        </div>
    );
};

export default Hero;
