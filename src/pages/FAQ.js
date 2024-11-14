
// "use client"
// import React, { useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Link from 'next/link';
// import style from '../app/globals.css'
// import Footer from '@/components/Footer';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const faqsData = [
//   {
//     question: "What services do you offer?",
//     answer: "We provide a wide range of medical services, including check-ups, consultations, diagnostic tests, and vaccinations."
//   },
//   {
//     question: "How to book an appointment?",
//     answer: "You can book an appointment through our website or by calling our clinic."
//   },
//   {
//     question: "What are your working hours?",
//     answer: "We are open from 8 AM to 5 PM, Monday to Friday."
//   },
//   {
//     question: "Do you accept insurance plans?",
//     answer: "Yes, we accept various insurance plans. Please check with our office for details."
//   },
//   {
//     question: "How can I see my medical records?",
//     answer: "You can access your medical records through our patient portal or request them at the clinic."
//   },
//   {
//     question: "Are you accepting new patients?",
//     answer: "Yes, we are currently accepting new patients."
//   },
//   {
//     question: "What should I bring for my first appointment?",
//     answer: "Please bring a valid ID, your insurance card, and any relevant medical history."
//   },
//   {
//     question: "What should I do in case of an emergency?",
//     answer: "In case of an emergency, please call 911 or visit the nearest hospital."
//   },
//   {
//     question: "Do you offer telemedicine consultations?",
//     answer: "Yes, we offer telemedicine consultations for certain conditions. Please call to check eligibility."
//   },
//   {
//     question: "Can I request prescription refills online?",
//     answer: "Yes, you can request prescription refills through our online portal."
//   }
// ];

// const Faqs = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//      // Initialize AOS
//      useEffect(() => {
//       AOS.init({ duration: 1000 });
//     }, []);
//   return (
//     <div className="bg-orange-50 bg-opacity-80 min-h-screen ">
//       <Navbar />
//       <div className='h-56 greenn text-center ' >
//         <h2 className='text-5xl pt-16 font-serif text-orange-200' data-aos="fade-down"  data-aos-delay="" data-aos-easing="ease-in-out" data-aos-duration="300">FAQ's</h2>
//         <h3 className='text-orange-200 text-center mt-3 text-lg space-x-1' data-aos="fade-down"  data-aos-delay="" data-aos-easing="ease-in-out" data-aos-duration="300">
//           <Link href='/' className='text-orange-200'>Home</Link>
//           <span className='text-white'> / </span>
//           <span className='text-orange-200'>Pages</span>
//           <span className='text-white'> / </span>
//           <span className='text-white'>FAQ</span>
//         </h3>
//       </div>
//       <div className="container mx-auto px-4 mt-20 ml-72  mb-40 w-8/12 "  data-aos="fade-up"  data-aos-delay="600" data-aos-easing="ease-in-out" data-aos-duration="300">
//         <dl className="space-y-6 grid grid-cols-1 md:grid-cols-2">
//           {faqsData.map((faq, index) => (
//             <div key={index} className="border-b pb-4 ">
//               <dt className="text-lg font-medium leading-6 text-gray-800 cursor-pointer" onClick={() => toggleFAQ(index)}>
//                 <span className="mr-2">{activeIndex === index ? '−' : '+'}</span>
//                 {faq.question}
//               </dt>
//               {activeIndex === index && (
//                 <dd className="mt-2 text-gray-600 w-96">{faq.answer}</dd>
//               )}
//             </div>
//           ))}
//         </dl>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Faqs;


"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import style from '../app/globals.css';
import Link from 'next/link';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqsData = [
  {
    question: "What services do you offer?",
    answer: "We provide a wide range of medical services, including check-ups, consultations, diagnostic tests, and vaccinations."
  },
  {
    question: "How to book an appointment?",
    answer: "You can book an appointment through our website or by calling our clinic."
  },
  {
    question: "What are your working hours?",
    answer: "We are open from 8 AM to 5 PM, Monday to Friday."
  },
  {
    question: "Do you accept insurance plans?",
    answer: "Yes, we accept various insurance plans. Please check with our office for details."
  },
  {
    question: "How can I see my medical records?",
    answer: "You can access your medical records through our patient portal or request them at the clinic."
  },
  {
    question: "Are you accepting new patients?",
    answer: "Yes, we are currently accepting new patients."
  },
  {
    question: "What should I bring for my first appointment?",
    answer: "Please bring a valid ID, your insurance card, and any relevant medical history."
  },
  {
    question: "What should I do in case of an emergency?",
    answer: "In case of an emergency, please call 911 or visit the nearest hospital."
  },
  {
    question: "Do you offer telemedicine consultations?",
    answer: "Yes, we offer telemedicine consultations for certain conditions. Please call to check eligibility."
  },
  {
    question: "Can I request prescription refills online?",
    answer: "Yes, you can request prescription refills through our online portal."
  }
];


const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-orange-50 bg-opacity-80 min-h-screen">
      <Navbar />

      <div className="h-56 greenn flex flex-col items-center justify-center text-center shadow-md">
        <h2 className="text-6xl font-serif font-semibold text-orange-200" data-aos="fade-down">
          FAQ's
        </h2>
        <h3 className='text-orange-200 text-center mt-3 text-lg space-x-1' data-aos="fade-down"  data-aos-delay="" data-aos-easing="ease-in-out" data-aos-duration="300">
         <Link href='/' className='text-orange-200'>Home</Link>
           <span className='text-white'> / </span>
          <span className='text-orange-200'>Pages</span>
           <span className='text-white'> / </span>
           <span className='text-white'>FAQ</span>
         </h3>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-32 mt-16  mb-40" data-aos="fade-up">
        <dl className="grid gap-8 md:grid-cols-2 lg:gap-12 w-11/12 ml-10">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-white bg-opacity-50 border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <dt
                className="flex justify-between items-center text-lg font-semibold text-gray-800 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`text-2xl transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45 text-orange-500" : "rotate-0 text-gray-400"
                  }`}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </dt>
              {activeIndex === index && (
                <dd className="mt-3 text-gray-600 leading-relaxed transition-all duration-500 ease-in-out">
                  {faq.answer}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>

      <Footer />
    </div>
  );
};

export default Faqs;