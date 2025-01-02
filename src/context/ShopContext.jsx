/* eslint-disable react/prop-types */
import React, { createContext, useLayoutEffect, useRef, useState } from 'react';
import { products } from '../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState('');
    const wasSearchOpen = useRef(false);
    const [cartItems, setCartItems] = useState([]);

    useLayoutEffect(() => {
        const isCollectionsPage = pathname === '/collections';
        if (isCollectionsPage && wasSearchOpen.current) {
            setShowSearch(true);
        } else if (!isCollectionsPage && showSearch) {
            setShowSearch(false);
        }
    }, [pathname]);


    const handleVisibility = () => {
        const isCurrentlyVisible = showSearch;
        if (!isCurrentlyVisible) {
            navigate('/collections');
        }
        wasSearchOpen.current = !isCurrentlyVisible;
        setShowSearch(!isCurrentlyVisible);
        if (search) setSearch('');
    };

    const handleAddToCart = (item, size) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find(
                (product) => product._id === item._id && product.sizePrefrence === size
            );

            if (existingProduct) {
                return prevItems.map((product) =>
                    product._id === item._id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            }
            return [
                ...prevItems,
                {
                    ...item,
                    quantity: 1,
                    sizePrefrence: size,
                },
            ];
        });
    };

    const handleRemoveCartItems = (id, removeEntireItem = false) => {
        setCartItems((prevItems) =>
            removeEntireItem
                ? prevItems.filter((product) => product._id !== id)
                : prevItems.map((product) =>
                    product._id === id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                )
        );
    };

    const value = {
        products,
        currency: '$',
        deliveryFee: 10,
        search,
        setSearch,
        showSearch,
        handleVisibility,
        cartItems,
        handleAddToCart,
        handleRemoveCartItems,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export { ShopContextProvider, ShopContext };
