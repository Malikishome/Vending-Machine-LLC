import React from "react";

export default function FloatingInput({ label, type = "text", name }) {
    return (
        <div className="relative z-0 w-72">
            <input type={type}
                name={name}
                placeholder=" "
                className="peer w-full border border-gray-400 px-3 pt-6 pb-2 rounded-md outline-none focus:border-blue-500" />

                <label className="absolute left-3 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm">
                    {label}</label>
        </div>

    );
}

export default FloatingInput;