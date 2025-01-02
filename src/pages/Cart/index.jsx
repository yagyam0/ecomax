import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ProductTable from '../../components/ProductTable';
import { assets, features } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import Highlights from '../../components/Highlights';
import Subscribe from '../../components/Subscribe';

const Cart = () => {
  const { cartItems, handleRemoveCartItems, handleAddToCart } = useContext(ShopContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      setTotalDiscount(((total * 15) / 100).toFixed(2));
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartItems]);

  const handleNavigate = () => {
    navigate('/collections');
  };

  return (
    <div className="py-10 px-6 bg-gray-50">
      {/* Heading */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-yellow-400 w-16 h-1 rounded-full mb-1"></div>
        <h1 className="uppercase text-xl font-bold text-gray-800 relative">
          Shopping Bag
          <span className="absolute inset-0 blur-md opacity-30 text-yellow-400 pointer-events-none">
            Shopping Bag
          </span>
        </h1>
      </div>

      {/* Product Table and Payment Options */}
      {cartItems.length ? (
        <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-6">
          {/* Product Table */}
          <div className="bg-white overflow-auto shadow-lg rounded-lg p-6">
            <ProductTable
              products={cartItems}
              handleAddToCart={handleAddToCart}
              handleRemoveCartItems={handleRemoveCartItems}
            />
          </div>

          {/* Payment Summary */}
          <aside className="bg-white max-h-[300px] shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center border-b pb-2">
              Cart Summary
            </h3>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-700 font-medium">Subtotal</span>
              <span className="text-gray-900 font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-700 font-medium">Sale Discount <span className='text-yellow-500 font-bold'>(15%)</span></span>
              <span className="text-green-600 font-semibold">- ${totalDiscount}</span>
            </div>
            <div className="flex justify-between items-center border-t pt-3">
              <span className="text-gray-800 font-bold text-lg">Total</span>
              <span className="text-yellow-500 font-semibold text-lg">${(totalPrice - totalDiscount).toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full bg-yellow-400 text-gray-800 font-semibold py-3 rounded-lg hover:bg-yellow-500 transition duration-300">
              Proceed to Checkout
            </button>
          </aside>
        </div>
      ) : (
        <div className="flex flex-col items-center py-5 justify-center gap-6 bg-gray-50">
          <img
            src={assets.cartIcon}
            className="w-[100px] md:w-[150px] mb-2 opacity-50 hover:opacity-100 transition duration-300"
            alt="cart-img"
          />
          <span className="text-gray-500 text-center sm:w-1/4 text-sm font-medium">
            Looks like your cart is empty. Please click the button below to explore our trending products.
          </span>
          <button
            onClick={handleNavigate}
            className="px-5 py-3 bg-yellow-400 text-sm text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Explore Products
          </button>
        </div>
      )}

      {/* Features Section */}
      <hr className='m-5' />
      <Subscribe />

      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center justify-around sm:flex-row gap-8">
          {features?.map((item) => (
            <Highlights key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cart;