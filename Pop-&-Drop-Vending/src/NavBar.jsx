import React from "react";

function NavBar() {    
    return (
        <nav className="p-2 font-serif bg-gray-800 shadow-2xl fixed top-0 left-0 right-0 z-50">
            <div>
                <ul className="flex justify-end items-center">
                    <li className="flex p-4 mr-auto items-center text-amber-400 font-bold">Pop & Drop Vending</li>
                    <li className="flex p-4 items-center text-amber-400 font-bold transition hover:bg-white hover:scale-105 rounded"><a href="#about">ABOUT</a></li>
                    <li className="flex p-4 items-center text-amber-400 font-bold transition hover:bg-white hover:scale-105 rounded"><a href="#offer">SERVICES
                    </a></li>
                    <li className="flex p-4 items-center text-amber-400 font-bold transition hover:bg-white hover:scale-105 rounded"><a href="#locations">LOCATIONS</a></li>
                    
                    <li className="flex p-4 items-center text-amber-400 font-bold transition hover:bg-white hover:scale-105 rounded border-2 border-white"> <a href="#form">CONTACT US</a></li>
                </ul>
            </div>    
        </nav>
        
    )
}

export default NavBar;