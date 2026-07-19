import React from 'react'
import ExpandAbout from './ExpandAbout';

function About() {
    return (
        <>
        <div id="about" className="py-20 px-6 bg-gray-100">
            <div className="max-w-3xl mx-auto ">
                <h2 className="text-3xl font-bold font-serif text-center mb-6">
                About Us
                </h2>

                <p className="text-gray-700 font-serif text-center leading-relaxed mb-10">
                Pop & Drop Vending provides modern, fully serviced snack and beverage
                solutions for workplaces and communities. We handle installation,
                restocking, and maintenance so businesses can offer convenient vending
                with zero hassle.
                </p>

                <section className="space-y-2">
               <ExpandAbout title="Locally owned &amp; operated">
                    We're a local Orlando business dedicated to building lasting relationships
                    and delivering exceptional service to our community — not a faceless national chain.
                </ExpandAbout>
                <ExpandAbout title="Free installation, zero hassle">
                    We handle every aspect of machine placement and setup from start to finish.
                    You don't lift a finger — we bring the machine, install it, and it's ready to go.
                </ExpandAbout>
                <ExpandAbout title="Fair prices. No surprises.">
                    We're committed to offering fair, affordable pricing with no hidden fees.
                    What we quote is what you pay — always.
                </ExpandAbout>
                <ExpandAbout title="We handle restocking &amp; maintenance">
                    Our team regularly restocks and maintains every machine. If something breaks,
                    we fix it — fast. You'll never deal with an empty or broken machine.
                </ExpandAbout>
                <ExpandAbout title="What products do you carry?">
                    We stock a curated mix of snacks, beverages, and healthy options. We can also
                    customize the product selection based on your location's preferences.
                </ExpandAbout>
                <ExpandAbout title="How long does installation take?">
                    Most installations are completed within 1–2 business days of signing off.
                    We work around your schedule to minimize any disruption.
                </ExpandAbout>

                </section>
            </div>
        </div>

        </>
    )
}

export default About;