/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';

const LatestCollection = ({ primaryText, secondaryText, productsToShow, filterBy }) => {
    const { products, currency } = useContext(ShopContext);

    const filteredProducts = filterBy
        ? products.filter(filterBy)
        : products;

    return (
        <div className="text-center my-10 py-8 bg-slate-50 rounded-lg shadow-md px-6">
            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl uppercase text-yellow-400 font-bold">
                        <span className="text-gray-500">{primaryText}</span> <span>{secondaryText}</span>
                    </h1>
                    <div className="w-12 md:w-16 h-[2px] bg-gray-800"></div>
                </div>
                <p className="w-2/4 text-gray-500 text-sm md:text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas esse,
                    molestiae officia.
                </p>
            </div>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 cursor-pointer gap-6">
                {filteredProducts.slice(0, productsToShow).map((product) => {
                    const { _id, name, image, price } = product;
                    return (
                        <Link
                            key={_id}
                            to={`/Product/${_id}`}
                            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <img
                                className="w-full h-50 object-contain rounded-md mb-4"
                                src={image?.[0]}
                                alt={name}
                            />
                            <h3 className="text-md font-semibold text-gray-700 mb-2">
                                {name}
                            </h3>
                            <p className="text-yellow-500 font-medium text-base">
                                {currency}{price.toFixed(2)}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default LatestCollection;
