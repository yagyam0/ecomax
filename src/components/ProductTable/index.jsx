/* eslint-disable react/prop-types */
import React from "react";

const ProductTable = ({ products, handleAddToCart, handleRemoveCartItems }) => {
    console.log("🚀 ~ ProductTable ~ products:", products)
    const tableHeaders = ["Product", "Price", "Quantity", "Total", "Actions"];

    const handleIncreaseQuantity = (product) => {
        handleAddToCart(product, product.sizePrefrence);
    };

    const handleDecreaseQuantity = (product) => {
        if (product.quantity > 1) {
            handleRemoveCartItems(product._id, product.sizePrefrence, false); 
        } else {
            handleRemoveCartItems(product._id, product.sizePrefrence, true); 
        }
    };

    return (
        <div className="relative overflow-auto max-h-[800px]">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead className="sticky top-0">
                    <tr className="bg-gray-100 text-center text-gray-800">
                        {tableHeaders.map((header, index) => (
                            <th key={index} className="py-3 px-4 text-sm font-semibold">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id} className="border-t border-gray-200">
                            <td className="py-4 px-2 w-[400px] flex gap-4 items-center">
                                <img
                                    src={product.image?.[0]}
                                    alt={product.name}
                                    className="w-2/4 object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="font-medium text-gray-800">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{product.category}</p>
                                    <p className="text-sm mt-2 text-gray-500">
                                        <span className="font-medium text-gray-800">Size: </span>
                                        <span className="font-medium text-gray-800">{product.sizePrefrence}</span>
                                    </p>
                                </div>
                            </td>
                            <td className="py-4 px-4 text-gray-700 font-medium">
                                ${product.price.toFixed(2)}
                            </td>
                            <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleDecreaseQuantity(product)}
                                        className="w-8 h-8 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <span className="font-medium text-gray-800">
                                        {product.quantity}
                                    </span>
                                    <button
                                        onClick={() => handleIncreaseQuantity(product)}
                                        className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500"
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className="py-4 px-4 text-gray-700 text-center font-medium">
                                ${(product.price * product.quantity).toFixed(2)}
                            </td>
                            <td className="py-4 text-center px-4">
                                <button
                                    onClick={() => handleRemoveCartItems(product._id, product.sizePrefrence, true)}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;