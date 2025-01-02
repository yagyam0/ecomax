import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-yellow-200">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr]">
                {/* Brand Section */}
                <div className="flex flex-col gap-4 py-8 px-6 sm:border-r sm:border-gray-200">
                    <h1 className="text-yellow-400 text-3xl font-bold">ECOMAX</h1>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam qui maxime animi repellat praesentium rerum consequatur quis iusto accusamus similique!
                    </p>
                </div>

                {/* Company Links */}
                <div className="flex flex-col gap-4 py-8 px-6 sm:border-r sm:border-gray-200">
                    <p className="uppercase text-lg font-semibold text-gray-800 tracking-wide">Company</p>
                    <ul className="space-y-2">
                        {["Home", "Collections", "About", "Contact"].map((item) => (
                            <Link key={item} to={item === 'Home' ? '/' : `/${item}`} className="block text-sm text-gray-600 hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                                {item}
                            </Link>
                        ))}
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-4 py-8 px-6">
                    <p className="uppercase text-lg font-semibold text-gray-800 tracking-wide">Get In Touch</p>
                    <ul className="space-y-2">
                        {[
                            "+91 8103689021",
                            "ecomxsupport@gmail.com",
                            "High Street, Indore",
                        ].map((item) => (
                            <li
                                key={item}
                                className="text-sm text-gray-600 hover:text-yellow-400 cursor-pointer transition-colors duration-300"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="bg-slate-50">
                <div className="w-full">
                    <hr className="border-gray-300" />
                    <p className="py-5 text-sm text-center text-gray-600 leading-relaxed">
                        &copy; 2024 Cloud Club - All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
