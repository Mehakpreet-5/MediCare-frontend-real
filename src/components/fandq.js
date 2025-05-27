

import React, { useState } from 'react';
import Image from 'next/image';
import teamd from '../app/assests/1hh.webp';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'Are telemedicine consultations available?',
            answer: 'Yes, we offer telemedicine consultations for your convenience.',
        },
        {
            question: 'Do you accept health insurance?',
            answer: 'We accept most major health insurance plans.',
        },
        {
            question: 'How much does a consultation cost?',
            answer: 'The cost of a consultation varies depending on the type of consultation and your insurance plan. Please contact us for a personalized quote.',
        },
    ];

    return (
        <div className="flex flex-col items-center lg:flex-row lg:items-start h-full mt-16 px-6 lg:px-16 mb-20">
            {/* Image Section */}
            <div className="relative lg:ml-24 flex-shrink-0 w-full lg:w-1/2 flex justify-center ">
                <Image
                    src={teamd}
                    alt="Team"
                    className="w-full sm:w-full lg:w-5/6 px-0 lg:px-8 py-4 object-cover"
                />
                <div className="absolute -bottom-5 pl-2 lg:pl-0 left-20 lg:right-24 transform flex ">
                    <div className="h-24 lg:h-28  w-28 lg:w-32 greenn text-white text-4xl font-medium flex flex-col items-center justify-center">
                        <h1>100+<span className="block text-lg">Doctors</span></h1>
                    </div>
                    <div className="h-24 lg:h-28  w-28 lg:w-32 bg-orange-300 text-white text-4xl font-medium flex flex-col items-center justify-center">
                        <h1>12+<span className="block text-lg">Hospitals</span></h1>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-full lg:w-1/2  textg  pt-16 lg:pt-32 text-gray-800">
                <h4 className="text-lg sm:text-xl text-orange-400 font-semibold">FAQS</h4>
                <h1 className="text-4xl sm:text-5xl textg font-semibold mt-2 mb-6  lg:text-left">
                    Consultations with <br /> Qualified doctors.
                </h1>
                <div className="space-y-6 pt-5">
                    {faqs.map((faq, index) => (
                        <div key={index} className="cursor-pointer" onClick={() => toggleAnswer(index)}>
                            <h2 className="text-lg sm:text-2xl font-medium flex items-center">
                                <span className="text-3xl font-bold mr-4 text-orange-400">
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                                {faq.question}
                            </h2>
                            {activeIndex === index && (
                                <p className="mt-2 ml-8 w-3/4 text-gray-600 text-base sm:text-lg">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
