import React from 'react'
import useScrollEffect from "./useScrollEffect";

const reason = [
    {
        id: 1,
        title: 'Fully Serviced Machines 🧑‍🔧',
        desc: 'All our machines are fully serviced and ready for use. We provide weekly restocking to ensure your machines are always stocked and ready to serve your customers.',
    }, 
    {
        id: 2,
        title: 'Cashless & Modern 💳📱',
        desc: 'We offer modern vending machines with cashless payment options, making it easy for customers to make purchases without cash.',
    },
    {
        id: 3,
        title: 'Flexible Placement',
        desc: 'We offer flexible placement options for our machines, allowing you to choose the best location for your business.',
    },
    {
        id: 4,
        title: 'Reliable & Professional',
        desc: 'We are a reliable and professional company, providing exceptional service to our customers.',
    },
    {
        id: 5,
        title: 'No Cost to Your Business 💰',
        desc: 'We handle installation, maintenance, and restocking at no cost to you. You get added convenience for your space without upfront fees or long-term contracts.',
    },
    {
        id: 6,
        title: 'Customer-Focused',
        desc: 'We value our customers and are committed to providing them with the best service possible.',
    }
    
];
function WhyChooseUs (){
    const [ref, visible] = useScrollEffect();

    return (
        <>
            <section id='offer' ref={ref} className={`scroll-mt-24 py-20 mx-auto m-36 font-serif text-center flex flex-col justify-center items-center transition duration-1000 ease-in ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
                <h1 className='text-2xl font-bold mb-4 underline'>Services That We Offer</h1>
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reason.map((reason) => (
                        <div key={reason.id} className="w-96 bg-base-100 shadow rounded-xl transition transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 hover:rounded-2xl duration-300">
                            <div className="bg-white p-6">
                                <h2 className="font-bold text-2xl">{reason.title}</h2>
                                <p className="text-gray-600 mt-4">{reason.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs;