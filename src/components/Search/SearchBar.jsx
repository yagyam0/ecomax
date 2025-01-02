import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { assets } from '../../assets/assets';

const SearchBar = () => {
    const { search, setSearch, showSearch, handleVisibility } = useContext(ShopContext);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    };

    return showSearch ? (
        <div className="flex justify-center mb-2 border-[1px] border-gray-100 items-center px-6 py-6 gap-4 bg-yellow-50 rounded-lg shadow-md">
            <div className="relative w-full sm:max-w-[50%]">
                <input
                    className="w-full border-2 border-yellow-400 rounded-full px-5 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent focus:outline-none transition duration-300 pr-12"
                    type="text"
                    name="search"
                    placeholder="Search Products..."
                    value={search}
                    onChange={handleChange}
                />
                <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 flex justify-center items-center bg-yellow-400 text-white rounded-full"
                    disabled
                    aria-label="Search"
                >
                    <img className="w-4 h-4" src={assets.search_icon} alt="Search" />
                </button>
            </div>
            <button
                className="w-8 h-8 flex justify-center items-center bg-transparent-400 text-white rounded-full hover:bg-yellow-400 transition duration-300"
                onClick={handleVisibility}
                aria-label="Close search bar"
            >
                <img className="w-4 h-4" src={assets.cross_icon} alt="Close" />
            </button>
        </div>
    ) : null;
};

export default SearchBar;
