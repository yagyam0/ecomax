import React from "react";

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-slate-50">
            <div className="flex gap-2">
                <div
                    className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0s" }}
                ></div>
                <div
                    className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                    className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                ></div>
            </div>
        </div>
    );
};

export default Loader;
