import React from 'react';
import { Toaster } from "react-hot-toast";

const Toast = () => {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerStyle={{ zIndex: 9999 }}
        />
    );
};

export default Toast;