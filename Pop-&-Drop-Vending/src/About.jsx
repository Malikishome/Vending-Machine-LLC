import React from 'react'
import ExpandAbout from './ExpandAbout';

function About() {
    return (
        <>
        <div id="about" className="py-20 px-6 bg-gray-100">
            <div className="max-w-3xl mx-auto ">
                <h1 className="text-3xl font-bold font-serif text-center mb-6">
                About Us
                </h1>

                <p className="text-gray-700 font-serif text-center leading-relaxed mb-10">
                Pop & Drop Vending provides modern, fully serviced snack and beverage
                solutions for workplaces and communities. We handle installation,
                restocking, and maintenance so businesses can offer convenient vending
                with zero hassle.
                </p>

                <section className="space-y-4">
                <ExpandAbout title="✅ Locally owned"></ExpandAbout>
                <ExpandAbout title='✅ Free installation'> You dont have to worry about a thing, We will handle everything about these machines</ExpandAbout>
                <ExpandAbout title="✅ No Crazy Prices"> We Know Price have been looking crazy so we try to offer nice prices like we are going back in the day</ExpandAbout>

                </section>
            </div>
        </div>

        </>
    )
}

export default About;