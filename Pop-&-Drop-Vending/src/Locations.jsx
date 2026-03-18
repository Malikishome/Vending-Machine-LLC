import React from "react";
import useScrollEffect from "./useScrollEffect";

const spots = [ // Add the pics for each of the locations
    {
        id: 1,
        name: 'Offices',
        image: '/officeCard.jpg',
    }, 
    {
        id: 2,
        name: 'Gyms',
        image: '/gymCard.jpg',
    },
    {
        id: 3,
        name: 'Apartments',
        image: '/aptCard.jpg',
    }, 
    {
        id: 4,
        name: 'Schools',
        image: '/schoolCard.jpg',
    },
    {
        id: 5,
        name: 'Warehouses',
        image: '/WarehouseCard.jpg',
    },
    {
        id: 6,
        name: 'Hospitals',
        image: '/hospitalsCard.jpg',
    }
]
function Locations() {
    const [ref, visible] = useScrollEffect();

    return (
        <>
        <section id="locations" ref={ref} className={`flex flex-col items-center justify-center scroll-mt-24 py-20 mx-auto transition duration-1000 ease-in ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <h1 className="text-4xl font-bold mb-4">Locations</h1>
            <p className="text-xl mb-4">
                We have locations in Orlando, Florida and the surrounding areas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spots.map((spot) => (
                        <div key={spot.id} className="card w-96 h-50 text-white bg-base-100 shadow flex justify-center items-center overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl hover:scale-105 hover:text-amber-400 duration-300 rounded-xl">
                            <div className="h-48 relative">
                                <img src={spot.image} className="w-full h-full object-cover" alt={spot.name} />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                                    <h2 className="font-bold text-2xl">{spot.name}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
        </>
    );
}

export default Locations;