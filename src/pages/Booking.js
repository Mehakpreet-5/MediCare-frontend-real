
// import style from '../app/globals.css';
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import Image from 'next/image';
// import Navbar from '@/components/Navbar';

// function Booking() {
//     const [name, setName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [message, setMessage] = useState('');
//     const router = useRouter();
//     const { doctorImg, doctorName, specialization, experience, availability } = router.query;

//     // Function to generate a random meeting ID
//     const generateMeetingID = () => {
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         let meetingID = '';
//         for (let i = 0; i < 10; i++) {
//             meetingID += characters.charAt(Math.floor(Math.random() * characters.length));
//         }
//         return meetingID;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const numericExperience = Number(experience.replace(/\D/g, ''));
//         const meetingIDGenerated = generateMeetingID(); // Generate meeting ID on form submit
//         console.log('Generated Meeting ID:', meetingIDGenerated);

//         const bookingData = {
//             name,
//             phoneNumber,
//             date,
//             time,
//             message,
//             meetingID: meetingIDGenerated, // Include the meeting ID in the booking data
//             doctor: {
//                 name: doctorName,
//                 specialization,
//                 experience: numericExperience,
//                 availability,
//             },
//         };

//         try {
//             const response = await fetch('/api/appoint', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(bookingData),
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 // Redirect to the confirmation page with the meeting ID and booking data
//                 router.push({
//                     pathname: '/confirmation', // Navigate to confirmation page
//                     query: {
//                         meetingID: meetingIDGenerated,
//                         name,
//                         phoneNumber,
//                         date,
//                         time,
//                         doctorName,
//                         specialization,
//                         experience,
//                     },
//                 });
//             } else {
//                 console.error(`Error: ${result.message}`);
//             }
//         } catch (error) {
//             console.error('Error submitting booking:', error);
//         }
//     };

//     return (
//         <div className='bg-gray-100 min-h-screen pb-40'>
//             <Navbar />
//             <div className='relative greenn h-80 '>
//                 <h2 className='text-5xl text-center pt-10 font-serif text-orange-200'> Book Appointment</h2>

//                 {doctorName && (
//                     <div className="flex flex-col lg:flex-row justify-between items-center bg-white mx-auto lg:ml-32 lg:mr-48 lg:mt-14 p-6 rounded-lg shadow-lg w-11/12 lg:w-5/6 h-auto lg:h-96">
//                         <div className='flex items-center mb-6 lg:mb-0 p-4 rounded-lg'>
//                             <Image src={doctorImg}
//                                 alt={doctorName}
//                                 width={100}
//                                 height={100}
//                                 className="w-32 lg:w-52 h-40 lg:h-56 rounded-md object-cover border-2 border-yellow-500"
//                             />
//                             <div className="ml-6 space-y-1 text-xl">
//                                 <h2 className="text-2xl lg:text-3xl font-bold">{doctorName}</h2>
//                                 <p>Specialization: {specialization}</p>
//                                 <p>Experience: {experience} years</p>
//                                 <p>Availability: {availability}</p>
//                             </div>
//                         </div>

//                         <div className='overflow-hidden h-auto lg:mt-28 greenn text-gray-300 p-4 rounded-lg w-full lg:w-2/5 '>
//                             <form className="p-2" onSubmit={handleSubmit}>
//                                 <h1 className='text-2xl lg:text-4xl font-bold text-center lg:text-left'>Form</h1>
//                                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2'>
//                                     <div>
//                                         <label htmlFor="name" className="block mb-2">Name:</label>
//                                         <input type="text" id="name" className="border p-2 text-gray-800 rounded w-full" required value={name} onChange={(e) => setName(e.target.value)} />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="number" className="block mb-2">Phone Number:</label>
//                                         <input type="tel" id="number" className="border p-2 text-gray-800 rounded w-full" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="date" className="block mb-2">Select Date:</label>
//                                         <input type="date" id="date" className="border p-2 text-gray-800 rounded w-full" required value={date} onChange={(e) => setDate(e.target.value)} />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="time" className="block mb-2">Select Time:</label>
//                                         <input type="time" id="time" className="border text-gray-800 p-2 rounded w-full" required value={time} onChange={(e) => setTime(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label htmlFor="message" className="block mb-2 mt-4">Message:</label>
//                                     <textarea id="message" rows="3" className="border p-2 text-gray-800 rounded w-full h-24" placeholder="Any additional information" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
//                                 </div>
//                                 <button type="submit" className="mt-4 w-full lg:w-auto lg:ml-36 bg-orange-300 bg-opacity-75 textg py-2 px-4 rounded hover:bg-orange-300 transition">
//                                     Confirm Booking
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Booking;


import style from '../app/globals.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import fD7 from '../app/assests/drPics/Screenshot_32.png';

function Booking() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const { doctorImg, doctorName, specialization, experience, availability } = router.query;
    const imageUrl = doctorImg || fD7;
    // Function to generate a random meeting ID
    const generateMeetingID = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let meetingID = '';
        for (let i = 0; i < 10; i++) {
            meetingID += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return meetingID;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const numericExperience = Number(experience.replace(/\D/g, ''));
        const meetingIDGenerated = generateMeetingID(); // Generate meeting ID on form submit
        console.log('Generated Meeting ID:', meetingIDGenerated);

        const bookingData = {
            name,
            phoneNumber,
            date,
            time,
            message,
            meetingID: meetingIDGenerated, // Include the meeting ID in the booking data
            doctor: {
                name: doctorName,
                specialization,
                experience: numericExperience,
                availability,
            },
        };

        try {
            const response = await fetch('/api/appoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            const result = await response.json();
            if (response.ok) {
                // Redirect to the confirmation page with the meeting ID and booking data
                router.push({
                    pathname: '/confirmation', // Navigate to confirmation page
                    query: {
                        meetingID: meetingIDGenerated,
                        name,
                        phoneNumber,
                        date,
                        time,
                        doctorName,
                        specialization,
                        experience,
                    },
                });
            } else {
                console.error(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    };

    return (
        <div className='bg-gray-100 min-h-screen pb-40'>
            <Navbar />
            <div className='relative greenn h-80 '>
                <h2 className='text-5xl text-center pt-10 font-serif text-orange-200'> Book Appointment</h2>

                {doctorName && (
                    <div className="flex flex-col lg:flex-row justify-between items-center bg-white mx-auto lg:ml-32 lg:mr-48 lg:mt-14 p-6 rounded-lg shadow-lg w-11/12 lg:w-5/6 h-auto lg:h-96">
                        <div className='flex items-center mb-6 lg:mb-0 p-4 rounded-lg'>
                            <Image 
                                src={imageUrl} // Default image
                                alt={doctorName || 'Doctor'}
                              
                                className="w-32 lg:w-52 h-40 lg:h-56 lg:ml-10 rounded-md object-cover mr-3 shadow-xl"
                            />
                            <div className="ml-6 space-y-1 text-xl">
                                <h2 className="text-2xl lg:text-3xl font-bold">{doctorName}</h2>
                                <p>Specialization: {specialization}</p>
                                <p>Experience: {experience} years</p>
                                <p>Availability: {availability}</p>
                            </div>
                        </div>

                        <div className='overflow-hidden h-auto lg:mt-28 greenn text-gray-300 p-4 rounded-lg w-full lg:w-2/5 '>
                            <form className="p-2" onSubmit={handleSubmit}>
                                <h1 className='text-2xl lg:text-4xl font-bold text-center lg:text-left'>Form</h1>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2'>
                                    <div>
                                        <label htmlFor="name" className="block mb-2">Name:</label>
                                        <input type="text" id="name" className="border p-2 text-gray-800 rounded w-full" required value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor="number" className="block mb-2">Phone Number:</label>
                                        <input type="tel" id="number" className="border p-2 text-gray-800 rounded w-full" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor="date" className="block mb-2">Select Date:</label>
                                        <input type="date" id="date" className="border p-2 text-gray-800 rounded w-full" required value={date} onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block mb-2">Select Time:</label>
                                        <input type="time" id="time" className="border text-gray-800 p-2 rounded w-full" required value={time} onChange={(e) => setTime(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 mt-4">Message:</label>
                                    <textarea id="message" rows="3" className="border p-2 text-gray-800 rounded w-full h-24" placeholder="Any additional information" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                                <button type="submit" className="mt-4 w-full lg:w-auto lg:ml-36 bg-orange-300 bg-opacity-75 textg py-2 px-4 rounded hover:bg-orange-300 transition">
                                    Confirm Booking
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Booking;
