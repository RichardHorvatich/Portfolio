import React from "react";

import R1 from "../assets/R1.png"

const Icon = () => {
    return (
        <div className="flex items-center">
            <img src={R1} alt="Icon" className="h-13 w-16" />
            <h1 className="ml-4 text-white font-extrabold text-lg">Richard Horvatich</h1>
        </div>
    );
};

export default Icon;


