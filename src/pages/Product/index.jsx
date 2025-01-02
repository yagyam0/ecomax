import React, { useContext, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { assets } from '../../assets/assets';
import LatestCollection from '../../components/LatestCollection';
import toast from 'react-hot-toast';

const Product = () => {
  const { productId } = useParams();
  const { products, handleAddToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState({});
  const [image, setImage] = useState(null);
  const [activeTab, setActiveTab] = useState('desc');
  const [selectedSize, setSelectedSize] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  const fetchProductById = async () => {
    const findProduct = products.find(product => product._id === productId);
    setProductData(findProduct);
  }

  useLayoutEffect(() => {
    fetchProductById();
  }, [productId]);

  const handleChangeSize = (size) => {
    setSelectedSize(size);
  }

  const handleCart = async () => {
    if (!selectedSize) return;
    handleAddToCart(productData, selectedSize);
    toast.success('Product Added to cart successfully !');
    setSelectedSize(null);
  }

  return (
    <>
      <div className="border-t-2 py-8 px-4 grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-8 transition-opacity ease-in duration-500 opacity-100">
        {/* Left part: Product images */}
        <div className="flex flex-col-reverse flex-wrap custom:flex-col-reverse lg:flex-row gap-4">
          <div className="flex gap-2 items-center flex-wrap space-y-2 xl:flex-col xl:space-y-2 custom:flex-row custom:space-y-0">
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
            className="flex-1 max-h-[500px] rounded-lg object-cover"
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
            ${productData?.price?.toFixed(2)}
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
                onClick={() => handleChangeSize(size)}
                className={`px-2 py-1 border border-gray-300 rounded text-gray-700 text-sm cursor-pointer ${selectedSize === size ? 'bg-yellow-200 border-yellow-400' : ''} hover:bg-yellow-200`}
              >
                {size}
              </span>
            ))}
          </div>
          <div className='flex gap-4'>
            <button
              onClick={handleCart}
              className="px-5 py-3 mt-4 text-white bg-gray-800 rounded-md hover:bg-black focus:outline-none"
            >
              Buy Now
            </button>
            <button
              className="px-5 py-3 mt-4 text-black bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none"
              onClick={handleCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Description part */}
      <div className="py-6">
        <div className="flex border-b-[1px] border-gray-300">
          <span
            onClick={() => handleTabChange('desc')}
            className={`px-4 py-3 cursor-pointer text-sm transition-all ease-in-out duration-300 ${activeTab === 'desc'
              ? 'font-bold text-gray-800 border-b-2 border-yellow-400'
              : 'font-medium border-b-2 border-transparent text-gray-600 hover:text-gray-800'
              }`}
          >
            Description
          </span>
          <span
            onClick={() => handleTabChange('review')}
            className={`px-4 py-3 cursor-pointer text-sm ease-in-out transition-all duration-300 ${activeTab === 'review'
              ? 'font-bold text-gray-800 border-b-2 border-yellow-400'
              : 'font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-800'
              }`}
          >
            Reviews
          </span>
        </div>
        <div className="w-full mt-4">
          <div className="px-6 py-6 border-[1px] rounded-lg bg-gray-50 text-sm text-gray-800 border-gray-200 shadow-sm">
            {activeTab === 'desc' && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nulla ea quibusdam reiciendis nam, consectetur neque
                veritatis recusandae perferendis quam sunt iure quaerat maiores quasi vero praesentium cupiditate accusamus atque deleniti
                ipsa corrupti. Reprehenderit aut eos earum eaque ad et fuga officiis quam id, possimus amet, unde deleniti iste modi?
              </p>
            )}
            {activeTab === 'review' && (
              <p>
                No reviews yet. Be the first to leave a review!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {Object.keys(productData).length && (
        <LatestCollection
          primaryText="Similar"
          secondaryText="Products"
          productsToShow={5}
          filterBy={({ _id, category, subCategory }) => _id !== productId && category === productData.category && subCategory === productData.subCategory}
        />
      )}
    </>
  )
}

export default Product;