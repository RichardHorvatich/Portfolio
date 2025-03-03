import React from "react";
import Icon from "./Icon";
import Nav from "./Nav";



const Header = () => {
    return (
        <header className="bg-black background text-center  text-3xl sticky top-0 z-10 mx-auto flex flex-wrap w-full items-center justify-between p-6  font-sans opacity-85">
                <Icon />  
                
                
                
                <Nav /> 
            
        </header>
    );
};

export default Header;
 
