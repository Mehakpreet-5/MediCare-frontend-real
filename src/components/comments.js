
// 'use client';
// import React, { useEffect, useState } from 'react';

// const Comments = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const commentData = [
//         { id: 1, name: 'John Doe', comment: 'This is an amazing product! Highly recommend it.', rating: 5 },
//         { id: 2, name: 'Jane Smith', comment: 'Great quality and excellent customer service!', rating: 4 },
//         { id: 3, name: 'Emily Johnson', comment: 'I had a fantastic experience, will buy again.', rating: 5 },
//         { id: 4, name: 'Chris Evans', comment: 'The delivery was fast and the product exceeded expectations.', rating: 4 },
//         { id: 5, name: 'Alice Brown', comment: 'A delightful experience overall, will definitely return.', rating: 5 },
//         { id: 6, name: 'Bob White', comment: 'Exceptional service and a great product selection.', rating: 4 },
//         { id: 7, name: 'Charlie Black', comment: 'I will recommend this to all my friends!', rating: 5 },
//         { id: 8, name: 'Diana Green', comment: 'The best purchase I’ve made this year!', rating: 5 },
//     ];


//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(commentData.length / 3));
//         }, 5000); // Change comments every 5 seconds

//         return () => clearInterval(interval);
//     }, [commentData.length]);

//     // Calculate the starting index for the current set of comments to display
//     const startIndex = currentIndex * 3;

//     const renderStars = (rating) => {
//         return [...Array(5)].map((_, index) => (
//             <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
//                 ★
//             </span>
//         ));
//     };
//     return (
//         <div className='relative mb-36'>
//             <div className='absolute inset-0 greenn h-80 shadow-lg' />

//             <div className='relative z-10 lg:w-7/12 p-9 px-7 pt-20 mx-auto'>
//             <div data-aos="zoom-in"  data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
//                 <h3 className='text-2xl lg:text-3xl font-serif  text-orange-300 mb-3' >Testimonial</h3>
//                 <h1 className="text-3xl lg:text-5xl font-serif  text-white mb-6">What Patients Say About Us.</h1> </div>
//                 <div className="overflow-hidden mt-12 " data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="900">
//                     <div
//                         className={`flex transition-transform duration-500`}
//                         style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} // Show next comments
//                     >
//                         {/* Render three comments at a time */}
//                         {commentData.map((comment) => (
//                             <div
//                                 key={comment.id}
//                                 className=" min-w-[250px]  lg:min-w-[300px] yelll px-7 h-56 mr-3  shadow-lg rounded-lg border border-orange-300 mx-2 flex flex-col justify-center transition-transform duration-300 transform hover:scale-105"
//                             >
//                                 <h2 className="text-3xl lg:text-4xl font-semibold textg">{comment.name}</h2>
//                                 <div className="flex lg:text-2xl mt-1 mb-2">{renderStars(comment.rating)}</div> {/* Display rating here */}
//                                 <p className="text-gray-600 lg:text-lg mt-2">{comment.comment}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="flex justify-center space-x-2 mt-4">
//                     {Array.from({ length: Math.ceil(commentData.length / 3) }).map((_, index) => (
//                         <div
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 
//                                 ${index === currentIndex ? 'bg-orange-500 transform scale-125' : 'bg-gray-400 hover:bg-orange-300'}`}
//                             aria-label={`Show comments set ${index + 1}`} // Accessibility
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Comments;

// 'use client';
// import React, { useEffect, useState, useRef } from 'react';

// const Comments = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const commentData = [
//         { id: 1, name: 'John Doe', comment: 'This is an amazing product! Highly recommend it.', rating: 5 },
//         { id: 2, name: 'Jane Smith', comment: 'Great quality and excellent customer service!', rating: 4 },
//         { id: 3, name: 'Emily Johnson', comment: 'I had a fantastic experience, will buy again.', rating: 5 },
//         { id: 4, name: 'Chris Evans', comment: 'The delivery was fast and the product exceeded expectations.', rating: 4 },
//         { id: 5, name: 'Alice Brown', comment: 'A delightful experience overall, will definitely return.', rating: 5 },
//         { id: 6, name: 'Bob White', comment: 'Exceptional service and a great product selection.', rating: 4 },
//         { id: 7, name: 'Charlie Black', comment: 'I will recommend this to all my friends!', rating: 5 },
//         { id: 8, name: 'Diana Green', comment: 'The best purchase I’ve made this year!', rating: 5 },
//     ];

//     const containerRef = useRef(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(commentData.length / 3));
//         }, 8000); // Change comments every 5 seconds

//         return () => clearInterval(interval);
//     }, [commentData.length]);

//     // Auto-scroll for small screens (one-by-one)
//     useEffect(() => {
//         const smallScreenInterval = window.innerWidth < 768 ? 3000 : null; // Faster rotation for small screens
//         if (smallScreenInterval) {
//             const interval = setInterval(() => {
//                 setCurrentIndex((prevIndex) => (prevIndex + 1) % commentData.length);
//             }, smallScreenInterval);
//             return () => clearInterval(interval);
//         }
//     }, []);

//     // Handle touch swipe (Mobile)
//     useEffect(() => {
//         const container = containerRef.current;
//         if (!container) return;

//         let startX = 0;
//         let endX = 0;

//         const handleTouchStart = (e) => {
//             startX = e.touches[0].clientX;
//         };

//         const handleTouchMove = (e) => {
//             endX = e.touches[0].clientX;
//         };

//         const handleTouchEnd = () => {
//             if (startX - endX > 50) {
//                 setCurrentIndex((prevIndex) => (prevIndex + 1) % commentData.length);
//             } else if (endX - startX > 50) {
//                 setCurrentIndex((prevIndex) => (prevIndex - 1 + commentData.length) % commentData.length);
//             }
//         };

//         container.addEventListener('touchstart', handleTouchStart);
//         container.addEventListener('touchmove', handleTouchMove);
//         container.addEventListener('touchend', handleTouchEnd);

//         return () => {
//             container.removeEventListener('touchstart', handleTouchStart);
//             container.removeEventListener('touchmove', handleTouchMove);
//             container.removeEventListener('touchend', handleTouchEnd);
//         };
//     }, []);

//     const renderStars = (rating) => {
//         return [...Array(5)].map((_, index) => (
//             <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
//                 ★
//             </span>
//         ));
//     };

//     return (
//         <div className='relative mb-36'>
//             <div className='absolute inset-0 greenn h-80 shadow-lg' />

//             <div className='relative z-10 lg:w-7/12 p-9 px-7 pt-20 mx-auto'>
//                 <div data-aos="zoom-in" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
//                     <h3 className='text-2xl lg:text-3xl font-serif text-orange-300 mb-3'>Testimonial</h3>
//                     <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">What Patients Say About Us.</h1>
//                 </div>

//                 {/* Large Screen (Show 3 comments at a time) */}
//                 <div className="hidden md:block overflow-hidden mt-12" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="900">
//                     <div
//                         className="flex transition-transform duration-500"
//                         style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
//                     >
//                         {commentData.map((comment) => (
//                             <div
//                                 key={comment.id}
//                                 className="min-w-[250px] lg:min-w-[300px] yelll px-7 h-56 mr-3 shadow-lg rounded-lg border border-orange-300 mx-2 flex flex-col justify-center transition-transform duration-300 transform hover:scale-105"
//                             >
//                                 <h2 className="text-3xl lg:text-4xl font-semibold textg">{comment.name}</h2>
//                                 <div className="flex lg:text-2xl mt-1 mb-2">{renderStars(comment.rating)}</div>
//                                 <p className="text-gray-600 lg:text-lg mt-2">{comment.comment}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Small Screen (Show 1 comment at a time) */}
//                 <div ref={containerRef} className="md:hidden overflow-hidden mt-12" data-aos="fade-up">
//                     <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                         {commentData.map((comment) => (
//                             <div
//                                 key={comment.id}
//                                 className="min-w-full px-5 py-6 yelll shadow-lg rounded-lg border border-orange-300 flex flex-col justify-center items-center transition-transform duration-300 transform hover:scale-105 text-center"
//                             >
//                                 <h2 className="text-2xl font-semibold textg">{comment.name}</h2>
//                                 <div className="flex text-lg mt-1 mb-2">{renderStars(comment.rating)}</div>
//                                 <p className="text-gray-600 text-base mt-2">{comment.comment}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Dots Navigation */}
//                 <div className="flex justify-center space-x-2 mt-4">
//                     {Array.from({ length: window.innerWidth < 768 ? commentData.length : Math.ceil(commentData.length / 3) }).map((_, index) => (
//                         <div
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 
//                                 ${index === currentIndex ? 'bg-orange-500 transform scale-125' : 'bg-gray-400 hover:bg-orange-300'}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Comments;


'use client';
import React, { useEffect, useState } from 'react';

const Comments = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const commentData = [
        { id: 1, name: 'John Doe', comment: 'This is an amazing product! Highly recommend it.', rating: 5 },
        { id: 2, name: 'Jane Smith', comment: 'Great quality and excellent customer service!', rating: 4 },
        { id: 3, name: 'Emily Johnson', comment: 'I had a fantastic experience, will buy again.', rating: 5 },
        { id: 4, name: 'Chris Evans', comment: 'The delivery was fast and the product exceeded expectations.', rating: 4 },
        { id: 5, name: 'Alice Brown', comment: 'A delightful experience overall, will definitely return.', rating: 5 },
        { id: 6, name: 'Bob White', comment: 'Exceptional service and a great product selection.', rating: 4 },
        { id: 7, name: 'Charlie Black', comment: 'I will recommend this to all my friends!', rating: 5 },
        { id: 8, name: 'Diana Green', comment: 'The best purchase I’ve made this year!', rating: 5 },
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % (isMobile ? commentData.length : Math.ceil(commentData.length / 3))
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [isMobile, commentData.length]);

    const startIndex = isMobile ? currentIndex : currentIndex * 3;

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
                ★
            </span>
        ));
    };

    return (
        <div className='relative mb-36'>
            <div className='absolute inset-0 greenn h-80 shadow-lg' />

            <div className='relative z-10 lg:w-7/12 p-9 px-7 pt-20 mx-auto'>
                <div data-aos="zoom-in" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
                    <h3 className='text-2xl lg:text-3xl font-serif text-orange-300 mb-3'>Testimonial</h3>
                    <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">What Patients Say About Us.</h1>
                </div>
                <div className="overflow-hidden mt-12" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="900">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * (100 / (isMobile ? 1 : 3))}%)` }}>
                        {commentData.map((comment) => (
                            <div key={comment.id} className="min-w-[285px] lg:min-w-[300px] yelll px-7 h-56 mr-3 shadow-lg rounded-lg border border-orange-300 mx-2 flex flex-col justify-center transition-transform duration-300 transform hover:scale-105">
                                <h2 className="text-3xl lg:text-4xl font-semibold textg">{comment.name}</h2>
                                <div className="flex lg:text-2xl mt-1 mb-2">{renderStars(comment.rating)}</div>
                                <p className="text-gray-600 lg:text-lg mt-2">{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center space-x-2 mt-4">
                    {Array.from({ length: isMobile ? commentData.length : Math.ceil(commentData.length / 3) }).map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 
                                ${index === currentIndex ? 'bg-orange-500 transform scale-125' : 'bg-gray-400 hover:bg-orange-300'}`}
                            aria-label={`Show comments set ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comments;
