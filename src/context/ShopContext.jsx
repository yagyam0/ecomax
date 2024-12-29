/* eslint-disable react/prop-types */
import React, { createContext } from 'react'
import { products } from '../assets/assets';


const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const value = {
        products,
        currency: '$',
        deliveryFee: 10,
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopContextProvider, ShopContext };