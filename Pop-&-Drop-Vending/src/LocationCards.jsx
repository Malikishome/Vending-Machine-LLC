import React from "react";

function LocationCards({title, description, image}) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="bg-white p-6 rounded shadow">
                <img src="{image}" alt=" " />
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    )
}

export default LocationCards;