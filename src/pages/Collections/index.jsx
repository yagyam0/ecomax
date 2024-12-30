import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';

const Collections = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row sm gap-8 px-4 py-8">
      {/* Left Section (Filters) */}
      <aside className="flex flex-col min-w-[200px] max-h-[500px] border-[1px] border-yellow-100 p-4 rounded-lg bg-yellow-50 shadow-md">
        <p className="uppercase text-lg font-semibold mb-4 text-gray-700">Filters</p>

        {/* Category Filters */}
        <ul className="mb-6 border border-gray-200 rounded-lg divide-y divide-gray-200">
          <p className="px-3 py-2 font-medium text-gray-600 bg-gray-100">Category</p>
          {["Men", "Women", "Kids"].map((category, index) => (
            <li key={category} className="flex items-center px-3 py-2">
              <label htmlFor={`category-${index}`} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  name="category"
                  className="mr-2 accent-yellow-400"
                />
                <span className="text-sm text-gray-600">{category}</span>
              </label>
            </li>
          ))}
        </ul>

        {/* Product Type Filters */}
        <ul className="border border-gray-200 rounded-lg divide-y divide-gray-200">
          <p className="px-3 py-2 font-medium text-gray-600 bg-gray-100">Product Type</p>
          {["Top Wear", "Bottom Wear", "Winter Wear"].map((type, index) => (
            <li key={type} className="flex items-center px-3 py-2">
              <label htmlFor={`type-${index}`} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id={`type-${index}`}
                  name="productType"
                  className="mr-2 accent-yellow-400"
                />
                <span className="text-sm text-gray-600">{type}</span>
              </label>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Section (Product Grid) */}
      <main className="flex-1 bg-yellow-50 py-8 px-5 rounded-lg">
        <div className="text-center mb-4">
          <div className="w-16 h-[3px] bg-yellow-400 mx-auto mb-2 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 blur-md opacity-40 rounded-full"></div>
          </div>
          <h1 className="uppercase text-2xl font-bold text-gray-700 relative">
            All Collections
            <span className="absolute inset-0 blur-sm opacity-30 text-yellow-400 pointer-events-none">
              All Collections
            </span>
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const { _id, name, image, price } = product;
            return (
              <Link
                key={_id}
                to={`/product/${_id}`}
                className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img
                  className="w-full h-50 object-contain rounded-md mb-4"
                  src={image?.[0]}
                  alt={name}
                />
                <h3 className="text-md font-semibold text-gray-700 mb-2">{name}</h3>
                <p className="text-yellow-500 font-medium text-base">
                  {currency}{price.toFixed(2)}
                </p>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Collections;
