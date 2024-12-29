/* eslint-disable react/prop-types */
import React from 'react';

const Highlights = ({ icon, title, subTitle }) => {
    return (
        <div className="flex flex-col items-center bg-white p-4 rounded-lg w-full sm:w-1/4 shadow hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                <img
                    src={icon || ''}
                    alt="feature-icon"
                    className="w-8 h-8 object-contain"
                />
            </div>
            <span className="text-lg text-gray-800 font-medium text-center mb-1">
                {title}
            </span>
            <span className="text-sm text-gray-500 text-center leading-tight">
                {subTitle}
            </span>
        </div>
    );
};

export default Highlights;
