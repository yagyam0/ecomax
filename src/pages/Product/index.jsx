import React, { useContext, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { assets } from '../../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(null);
  console.log("🚀 ~ Product ~ productData:", productData)

  const fetchProductById = async () => {
    const findProduct = products.find(product => product._id === productId);
    setProductData(findProduct);
  }

  useLayoutEffect(() => {
    fetchProductById();
  }, [products]);

  return (
    <div className="border-t-2 py-8 px-4 grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-8 transition-opacity ease-in duration-500 opacity-100">
      {/* Left part: Product images */}
      <div className="flex flex-col-reverse justify-center xl:flex-row gap-4">
        <div className="flex gap-2 items-center flex-wrap xl:flex-col xl:space-y-2">
          {productData?.image?.map((image, index) => (
            <img
              key={index}
              className="w-[90px] h-[95px] shadow-lg border border-gray-200 rounded cursor-pointer hover:border-yellow-400"
              src={image}
              onMouseEnter={() => setImage(image)}
              alt={`product-thumbnail-${index}`}
            />
          ))}
        </div>
        <img
          className="flex-1 max-h-[500px] rounded-lg object-contain"
          src={image || productData?.image?.[0]}
          alt="product-primary-img"
        />
      </div>

      {/* Right part: Product details */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center gap-1">
          <h1 className="text-2xl font-semibold text-gray-800">{productData?.name}</h1>
          <div className='flex gap-1'>
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
          </div>
        </div>
        <p className="text-gray-600">{productData?.description}</p>
        <div className="text-2xl font-semibold text-yellow-600">
          ${productData?.price.toFixed(2)}
        </div>

        <div className="text-sm text-gray-500">
          <span className="font-medium">Category:</span> {productData?.category}
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-medium">Sub-Category:</span> {productData?.subCategory}
        </div>

        {/* Product Sizes */}
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-600">Sizes:</span>
          {productData?.sizes?.map((size, index) => (
            <span
              key={index}
              className="px-2 py-1 border border-gray-300 rounded text-gray-700 text-sm cursor-pointer hover:bg-yellow-50"
            >
              {size}
            </span>
          ))}
        </div>
        <div className='flex gap-4'>
          <button
            className="px-5 py-3 mt-4 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none"
          >
            Buy Now
          </button>
          <button
            className="px-5 py-3 mt-4 text-black bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product;