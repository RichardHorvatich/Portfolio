import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const NavLinks = () => { 
    return (
    <div className="flex flex-col  md:flex-row mx-auto text-[#38ffff] font-extrabold text-lg justify-center items-center font-sans" >
    <NavLink className="hover:first-letter:underline pr-4" to="/Home" >Home</NavLink>
    <NavLink className="hover:first-letter:underline pr-4" to="/About">Projects</NavLink>
    <NavLink className="hover:first-letter:underline pr-4" to="/Schedule">Contact</NavLink> 
    
    </div>
    );
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <nav className="flex w-1/3 justify-end">
            <div></div>
            <div className=" hidden justify-between md:flex">
                <NavLinks />
            </div>
            <div className="md:hidden">
                <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
            </div>
        </nav>
        {isOpen && (
            <div className="flex basis-full flex-col items-center p-4">
                <NavLinks />
            </div>
        )}
        </>
    );
};

export default Nav;