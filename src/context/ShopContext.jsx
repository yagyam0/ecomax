/* eslint-disable react/prop-types */
import React, { createContext, useLayoutEffect, useRef, useState } from 'react'
import { products } from '../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';


const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState('');
    const wasSearchOpen = useRef(false);

    const handleVisibility = () => {
        const isCurrentlyVisible = showSearch;
        if (!isCurrentlyVisible) {
            navigate('/collections');
        }
        wasSearchOpen.current = !isCurrentlyVisible;
        setShowSearch(!isCurrentlyVisible);
        if(search) setSearch('');
    };

    useLayoutEffect(() => {
        const isCollectionsPage = pathname === '/collections';
        if (isCollectionsPage && wasSearchOpen.current) {
            setShowSearch(true);
        } else if (!isCollectionsPage && showSearch) {
            setShowSearch(false);
        }
    }, [pathname]);

    const value = {
        products,
        currency: '$',
        deliveryFee: 10,
        search,
        setSearch,
        showSearch,
        handleVisibility,
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopContextProvider, ShopContext };