/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Collections = () => {
  const { products, currency, search } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ category: null, productType: null });

  const toggleFilters = () => setShowFilters((prev) => !prev);

  const handleFilterChange = (name, option) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: option,
    }));
  };

  useEffect(() => {
    let updatedProducts = products;
    if (filters.category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.productType) {
      updatedProducts = updatedProducts.filter(
        (product) => product.subCategory === filters.productType
      );
    }

    if (search) {
      updatedProducts = updatedProducts.filter(
        (product) => product.name.toLowerCase().split(' ').includes(search.trim().toLowerCase())
      );
    }
    setFilteredProducts(updatedProducts);
  }, [filters, products, search]);

  const FilterGroup = ({ title, options, name }) => (
    <ul className="border border-gray-200 rounded-lg divide-y divide-gray-200">
      <p className="px-3 py-2 font-medium text-gray-600 bg-gray-100">{title}</p>
      {options.map((option, index) => (
        <li key={option} className="flex items-center px-3 py-2">
          <label htmlFor={`${name}-${index}`} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name={name}
              id={`${name}-${index}`}
              checked={filters[name] === option}
              onChange={() => handleFilterChange(name, option)}
              className="mr-2 accent-yellow-400"
            />
            <span className="text-sm text-gray-600">{option}</span>
          </label>
        </li>
      ))}
    </ul>
  );

  const handleSortBy = (e) => {
    const { value } = e.target;
    const sortOrder = Number(value);

    setFilteredProducts((prevProducts) => {
      const sortedProducts = [...prevProducts];
      if (sortOrder === 1) {
        return sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOrder === 2) {
        return sortedProducts.sort((a, b) => b.price - a.price);
      }
      return products;
    });
  };

  return (
    <>
      {/* Filter Toggle (Mobile View) */}
      <div className="flex items-center px-3 gap-3 mb-4 sm:hidden">
        <p className="uppercase mb-0 text-lg font-semibold text-gray-700">Filters</p>
        <img
          onClick={toggleFilters}
          src={assets.dropdown_icon}
          alt="Toggle Filters"
          className={`h-4 transform transition-transform duration-300 ${showFilters ? "rotate-90" : "rotate-0"
            }`}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-8 pt-1 pb-8">
        {/* Left Section (Filters) */}
        <aside
          className={`flex flex-col min-w-[200px] max-h-[500px] border-[1px] border-yellow-100 p-4 rounded-lg bg-yellow-50 shadow-md transition-transform duration-300 ${showFilters ? "block" : "hidden"
            } sm:block`}
        >
          <div className="flex flex-col gap-3">
            <p className="uppercase hidden sm:block text-lg font-semibold text-gray-700">
              Filters
            </p>
            <FilterGroup
              title="Category"
              options={["Men", "Women", "Kids"]}
              name="category"
            />
            <FilterGroup
              title="Product Type"
              options={["Topwear", "Bottomwear", "Winterwear"]}
              name="productType"
            />
          </div>
        </aside>

        {/* Right Section (Product Grid) */}
        <main className="flex-1 bg-yellow-50 py-8 px-5 rounded-lg">
          {/* Header */}
          <div className="flex flex-col xl:pl-[40%] sm:flex-row sm:justify-between sm:items-center relative mb-6 gap-4 sm:gap-0">
            <div className="text-center">
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

            {/* Sorting Dropdown */}
            <div className="text-center sm:text-right sm:ml-auto">
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none w-full sm:w-auto"
                defaultValue=""
                onChange={handleSortBy}
              >
                <option value="3">Sort by</option>
                <option value="1">Price: Low to High</option>
                <option value="2">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
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
                    <h3 className="text-md font-semibold text-gray-700 mb-2 text-center inline-block leading-tight">
                      {name}
                    </h3>
                    <p className="text-yellow-500 font-medium text-base">
                      {currency}
                      {price.toFixed(2)}
                    </p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-screen">
              <p className="text-center text-gray-500 text-lg">No Product Available</p>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Collections;
