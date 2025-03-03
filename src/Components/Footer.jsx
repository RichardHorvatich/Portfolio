import React from "react";
import insta from '../assets/insta.jpg'

const Footer = () => {
    return (
        
            <footer className="bg-[#030305] flex bottom-0 z-20 mx-auto w-full items-center justify-between border-t border-gray-400  text-white p-8">
                <div className="container mx-auto text-center">
                    <p className="text-white ">&copy; Richard Horvatich</p>
                    <div>
                        <img src={insta} className="h-16 w-16 mx-auto flex flex-row justify-between items-center " alt="instagram icon" />
                    </div>
                </div>
            </footer>
        
    );
}

export default Footer;
