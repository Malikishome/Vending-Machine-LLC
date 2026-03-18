import React, { useState } from "react";

function ExpandAbout({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <div className="border-b border-gray-400">

        {/* This is the button that will open the content */}
        <button className='font-semibold flex w-full justify-between items-center text-left py-3' onClick={() => setIsOpen(isOpen => !isOpen)}>

            <span className="font-semibold text-lg">{title}</span>

            {/*This is for the + and - button*/}
            <span className={`text-2xl transition-transform duration-300 ease-in-out
                ${isOpen ? "rotate-45" : ""}`}
                >+
            </span>
            </button>
            {/*This is for what is hidden*/}
        {isOpen && (
        <div className="pb-4 text-gray-500 font-serif">
            {children}
        </div>
        )}


       </div>
    );
}

export default ExpandAbout;