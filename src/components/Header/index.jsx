/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev)
    };

    useEffect(() => {
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
                <NavItem to="/collections" label="Collections" />
                <NavItem to="/about" label="About" />
                <NavItem to="/contact" label="Contact" />
            </ul>

            {/* Icons and Sidebar Toggle */}
            <div className="flex items-center gap-6">
                <img src={assets.search_icon} alt="Search" className="w-6 cursor-pointer" />
                <div className="relative group">
                    <img
                        src={assets.profile_icon}
                        alt="Profile"
                        className="w-6 h-6 cursor-pointer transition-all duration-300"
                    />
                    <div className="hidden group-hover:block absolute right-0 pt-2">
                        <div className="flex flex-col gap-1 w-40 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 transition-all duration-300">
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
                    <p className="absolute -bottom-1 -right-1 w-4 h-4 text-center text-[9px] bg-black text-white rounded-full">
                        10
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
            <div className={`absolute top-0 right-0 bottom-0 bg-white transition-transform transform ${isSidebarOpen ? "translate-x-0 w-full" : "translate-x-full w-0 hidden"}`}>
                <div className="flex flex-col text-gray-600">
                    <div
                        onClick={toggleSidebar}
                        className="flex items-center cursor-pointer gap-4 p-3"
                    >
                        <img src={assets.dropdown_icon} alt="Close" className="h-4 rotate-180" />
                        <p className="text-md">Back</p>
                    </div>
                    <SidebarItem to="/" label="Home" />
                    <SidebarItem to="/collections" label="Collections" />
                    <SidebarItem to="/about" label="About" />
                    <SidebarItem to="/contact" label="Contact" />
                </div>
            </div>
        </header>
    );
};

export default Header;
