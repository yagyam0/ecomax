/* eslint-disable react/prop-types */
import React, { useContext, useLayoutEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { ShopContext } from "../../context/ShopContext";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { pathname } = useLocation();
    const { showSearch, cartItems, handleVisibility } = useContext(ShopContext);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev)
    };

    useLayoutEffect(() => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
    }, [pathname]);

    const NavItem = ({ to, label }) => (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) => `${isActive ? 'text-yellow-400 active' : ''} flex flex-col uppercase items-center gap-1`}
            >
                <p>{label}</p>
                <hr className="w-3/4 border-none h-[3px] bg-yellow-400 hidden" />
            </NavLink>
        </li>
    );

    const SidebarItem = ({ to, label }) => (
        <NavLink
            to={to}
            className="uppercase py-2 text-[15px] pl-6 border-b border-gray-200"
        >
            {label}
        </NavLink>
    );

    return (
        <header className="flex items-center justify-between py-5 font-medium">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1 text-2xl relative">
                <span className="text-yellow-400 text-[30px] font-bold">ECOMAX</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden sm:flex gap-6 text-[15px] text-gray-700">
                <NavItem to="/" label="Home" />
                <NavItem to="/Collections" label="Collections" />
                <NavItem to="/About" label="About" />
                <NavItem to="/Contact" label="Contact" />
            </ul>

            {/* Icons and Sidebar Toggle */}
            <div className="flex items-center gap-6">
                <img src={assets.search_icon} alt="Search" onClick={!showSearch ? handleVisibility : () => { }} className="w-6 cursor-pointer" />
                <div className="relative group">
                    <img
                        src={assets.profile_icon}
                        alt="Profile"
                        className="w-6 h-6 cursor-pointer transition-all duration-300"
                    />
                    <div className="hidden group-hover:block absolute right-0 pt-2">
                        <div className="flex relative z-10 flex-col gap-1 w-40 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 transition-all duration-300">
                            {["My Profile", "Orders", "Logout"].map((item) => (
                                <p
                                    key={item}
                                    className="cursor-pointer py-2 px-4 hover:bg-yellow-300 text-[14px] text-medium hover:text-black rounded transition-colors duration-300"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} alt="Cart" className="w-5" />
                    <p className={`absolute transition-all ease-out -bottom-1 -right-1 pt-[2px] w-4 h-4 text-center text-[9px] rounded-full ${cartItems.length ? 'text-black bg-yellow-500' : 'bg-black text-white'}`}>
                        {cartItems.length}
                    </p>
                </Link>
                <img
                    src={assets.menu_icon}
                    alt="Menu"
                    onClick={toggleSidebar}
                    className="w-5 cursor-pointer sm:hidden"
                />
            </div>

            {/* Sidebar */}
            <div
                className={`absolute z-50 top-0 right-0 bottom-0 bg-white shadow-md transition-transform transform ${isSidebarOpen ? "translate-x-0 w-full md:w-1/3" : "translate-x-full w-0 hidden"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
                    <button
                        onClick={toggleSidebar}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
                    >
                        <img
                            src={assets.dropdown_icon}
                            alt="Close"
                            className="h-5 transform rotate-180"
                        />
                        <span className="text-sm font-medium">Close</span>
                    </button>
                </div>

                {/* Sidebar Items */}
                <div className="flex flex-col text-gray-600 divide-y divide-gray-100">
                    <SidebarItem
                        to="/"
                        label="Home"
                        className="p-4 hover:bg-gray-50 hover:text-gray-800 transition"
                    />
                    <SidebarItem
                        to="/collections"
                        label="Collections"
                        className="p-4 hover:bg-gray-50 hover:text-gray-800 transition"
                    />
                    <SidebarItem
                        to="/about"
                        label="About"
                        className="p-4 hover:bg-gray-50 hover:text-gray-800 transition"
                    />
                    <SidebarItem
                        to="/contact"
                        label="Contact"
                        className="p-4 hover:bg-gray-50 hover:text-gray-800 transition"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
