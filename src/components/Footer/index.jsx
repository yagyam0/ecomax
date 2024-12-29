import React from 'react';

const Footer = () => {
    return (
        <footer className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] border-t border-yellow-200 bg-gray-50">
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
                        <li
                            key={item}
                            className="text-sm text-gray-600 hover:text-yellow-400 cursor-pointer transition-colors duration-300"
                        >
                            {item}
                        </li>
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
        </footer>
    );
};

export default Footer;
