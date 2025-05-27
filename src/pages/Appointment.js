

// import style from '../app/globals.css';
// import { useEffect, useState } from 'react';
// import Navbar from '@/components/Navbar';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import SubmitImg from '../app/assests/ssss.png';
// import doctorbgg from '../app/assests/766.png';
// import icon2 from '../app/assests/5.png';
// import Footer from '@/components/Footer';

// const Appointments = () => {
//   const router = useRouter();
//   const [appointments, setAppointments] = useState([]);
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [filteredAppointments, setFilteredAppointments] = useState([]);
//   const [showAppointments, setShowAppointments] = useState(false);
//   const [cancelMessage, setCancelMessage] = useState(''); // State for cancel message

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await fetch('/api/book'); // Ensure this is the correct endpoint
//         const data = await response.json();
//         if (response.ok) {
//           const appointmentsWithIds = data.map(appointment => ({
//             ...appointment,
//             meetingId: appointment.meetingID
//           }));
//           setAppointments(appointmentsWithIds);
//         } else {
//           console.error('Failed to fetch appointments:', data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   const handleMobileSubmit = (e) => {
//     e.preventDefault();
//     const matchedAppointments = appointments.filter(appointment => appointment.phoneNumber === mobileNumber);
//     setFilteredAppointments(matchedAppointments);
//     setShowAppointments(true);
//   };

//   const handleJoinMeeting = (meetingId) => {
//     router.push(`/meet/${meetingId}`);
//     console.log(`Navigating to meeting with ID: ${meetingId}`);
//   };

//   const handleCancel = async (id) => {
//     try {
//       await fetch(`/api/book?id=${id}`, {
//         method: 'DELETE',
//       });

//       // Remove the canceled appointment from the filtered appointments
//       setFilteredAppointments(filteredAppointments.filter(appointment => appointment._id !== id));
//       setCancelMessage('Appointment has been canceled successfully.'); // Set the cancel message

//       // Optionally, set showAppointments to false if no appointments remain
//       if (filteredAppointments.length === 1) {
//         setShowAppointments(false);
//       }
//     } catch (error) {
//       console.error('Error cancelling booking:', error);
//       setCancelMessage('Error cancelling the appointment.'); // Show error message if cancellation fails
//     }
//   };

//   return (
//     <>
//       <div className='greenn min-h-screen relative'>
//         <Navbar className='fixed top-0 w-full bg-white shadow-md' />

//         <div className="pt-0  mr-28  ">
//           <div className='relative pb-44 mr-24 mt-6  w-full h-screen flex justify-end items-center'
//             data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1100">

//             <div className=' hidden sm:block md:block absolute  h-[28rem] w-[28rem]  orangg rounded-full z-0 right-0'></div>

//             <div className=' hidden sm:block md:block absolute h-[27rem] w-[27rem] mr-2 rounded-full overflow-hidden shadow-lg '>
//               <Image src={doctorbgg} alt="Description of the image" className="h-full w-full object-cover" />
//             </div>

//             <div className=' hidden sm:block md:block absolute mt-72 mr-72 h-[14.5rem] w-[14.5rem]  orangg rounded-full clip-half z-0 right-0'></div>

//             <div className=' hidden sm:block md:block absolute mt-72 mb-2 ml-5 mr-72 h-[14rem] w-[14rem] rounded-full overflow-hidden shadow-lg '>
//               <Image src={doctorbgg} alt="Doctor" className="h-full w-full object-cover" />
//             </div>
//           </div>

//           <Image src={icon2} alt="Description of the image" className="absolute inset-0 w-36 h-32 opacity-50 md:ml-16 mt-28" data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="2000" />

//           <div className='mt-48 ml-20 md:ml-52 py-10 absolute inset-0'
//             data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1100">

//             {!showAppointments ? (
//               <form onSubmit={handleMobileSubmit} className="mb-8 w-3/4">
//                 <h1 className="mb-5 fontt text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif orangg-text">
//                   Check Appointment
//                 </h1>
//                 <h1 className="mb-8 fontt text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-gray-300">
//                   Enter Your Number
//                 </h1>
//                 <div className="bg-white bg-opacity-20 p-3 rounded-lg shadow-lg flex space-x-3 w-96">
//                   <input
//                     type="tel"
//                     value={mobileNumber}
//                     onChange={(e) => setMobileNumber(e.target.value)}
//                     placeholder="Mobile Number"
//                     className="border border-gray-300 rounded-l-lg p-3 w-full sm:w-80 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>

//                 <div className="relative mt-7 ">
//                   <Image src={SubmitImg} alt="Submit" className="h-11 md:h-11 w-48 ml-24 object-cover" />
//                   <button
//                     className="absolute inset-0 md:mr-96 md:pr-60 ml-14 md:ml-7 text-white font-bold text-lg md:text-xl"
//                     type="submit"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               <>
//                 <h2 className='md:text-5xl text-4xl font-serif orangg-text mb-8'>Your Appointments</h2>
//                 {filteredAppointments.length > 0 ? (
//                   <div className="overflow-x-auto mr-10 md:mr-0 md:pr-4">
//                   <table className='md:w-96 bg-white bg-opacity-70 rounded-lg shadow-sm shadow-gray-400'
//                     data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="700">
//                     <thead>
//                       <tr className=' bg-orange-500 bg-opacity-60  text-gray-800'>
//                         <th className='py-2 px-7 ml-4 '>Doctor Name</th>
//                         <th className='py-2 px-4 hidden sm:block'>Specialization</th>
//                         <th className='py-2 px-4 '>Date</th>
//                         <th className='py-2 px-4 '>Time</th>
//                         <th className='py-2 px-4 '>Meet</th> 
//                           <th className='py-2 px-4 '>Action</th>                      </tr>
//                     </thead>
//                     <tbody>
//                       {filteredAppointments.map((appointment, index) => (
//                         <tr key={index} className='hover:bg-gray-100 hover:bg-op'>
//                           <td className='py-2 px-4 mr-10 ml-5 '>{appointment.doctor.name}</td>
//                           <td className='py-2 px-4 hidden sm:block'>{appointment.doctor.specialization}</td>
//                           <td className='py-2 px-4 '>{new Date(appointment.date).toLocaleDateString()}</td>
//                           <td className='py-2 px-4 '>{appointment.time}</td>
//                           <td className='py-2 px-4 '>
//                             <button
//                               onClick={() => handleJoinMeeting(appointment.meetingId)}
//                               className="text-blue-500 hover:underline"
//                             >
//                               Join
//                             </button>
//                           </td>
//                           <td>
//                             <button
//                               onClick={() => handleCancel(appointment._id)}
//                               className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
//                             >
//                               Cancel
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   </div>
//                 ) : (
//                   <p className='text-lg text-gray-200'>No appointments found for this mobile number.</p>
//                 )}
//               </>
//             )}

//             {cancelMessage && ( // Show cancel message if it exists
//               <p className='mt-4 text-lg text-red-500'>{cancelMessage}</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Appointments;




import style from '../app/globals.css';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SubmitImg from '../app/assests/ssss.png';
import doctorbgg from '../app/assests/766.png';
import icon2 from '../app/assests/5.png';
import Footer from '@/components/Footer';

const Appointments = () => {
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);
  const [mobileNumber, setMobileNumber] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [showAppointments, setShowAppointments] = useState(false);
  const [cancelMessage, setCancelMessage] = useState(''); // State for cancel message

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('https://medicare-backend-ve06.onrender.com/api/bookings');// Ensure this is the correct endpoint
        const data = await response.json();
        if (response.ok) {
          const appointmentsWithIds = data.map(appointment => ({
            ...appointment,
            meetingId: appointment.meetingID
          }));
          setAppointments(appointmentsWithIds);
        } else {
          console.error('Failed to fetch appointments:', data.message);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    const matchedAppointments = appointments.filter(appointment => appointment.phoneNumber === mobileNumber);
    setFilteredAppointments(matchedAppointments);
    setShowAppointments(true);
  };

  const handleJoinMeeting = (meetingId) => {
    router.push(`/meet/${meetingId}`);
    console.log(`Navigating to meeting with ID: ${meetingId}`);
  };

  const handleCancel = async (id) => {
    try {
      await fetch(`https://medicare-backend-ve06.onrender.com/api/bookings?id=${id}`, {
        method: 'DELETE',
      });

      // Remove the canceled appointment from the filtered appointments
      setFilteredAppointments(filteredAppointments.filter(appointment => appointment._id !== id));
      setCancelMessage('Appointment has been canceled successfully.'); // Set the cancel message

      // Optionally, set showAppointments to false if no appointments remain
      if (filteredAppointments.length === 1) {
        setShowAppointments(false);
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
      setCancelMessage('Error cancelling the appointment.'); // Show error message if cancellation fails
    }
  };

  return (
    <>
      <div className='greenn min-h-screen relative'>
        <Navbar className='fixed top-0 w-full bg-white shadow-md' />

        <div className="pt-0  mr-28  ">
          <div className='relative pb-44 mr-24 lg:mr-72 mt-6  w-full h-screen flex justify-end items-center'
            data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1100">

            <div className=' hidden sm:block md:block absolute  h-[28rem] w-[28rem] lg:h-[30rem] lg:w-[32rem] orangg rounded-full z-0 right-0'></div>

            <div className=' hidden sm:block md:block absolute h-[27rem] w-[27rem] lg:h-[29.2rem] lg:w-[31rem] mr-2 rounded-full overflow-hidden shadow-lg '>
              <Image src={doctorbgg} alt="Description of the image" className="h-full w-full object-cover" />
            </div>

            <div className=' hidden sm:block md:block absolute mt-72 mr-72 lg:mr-80 lg:mt-80 h-[14.5rem] w-[14.5rem] lg:h-[16rem] lg:w-[16rem]  orangg rounded-full clip-half z-0 right-0'></div>

            <div className=' hidden sm:block md:block absolute mt-72 lg:mt-80 mb-2 ml-5 mr-72 lg:mr-80 h-[14rem] w-[14rem]  lg:h-[14.6rem] lg:w-[15.2rem] rounded-full overflow-hidden shadow-lg '>
              <Image src={doctorbgg} alt="Doctor" className="h-full w-full object-cover" />
            </div>
          </div>

          <Image src={icon2} alt="Description of the image" className="absolute inset-0 w-28 lg:w-48 lg:h-48 opacity-50 md:ml-7 mt-24 lg:mt-28" data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="2000" />

          <div className='mt-20 lg:ml-5 ml-5 md:ml-52 py-10 absolute inset-0'
            data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1100">

            {!showAppointments ? (
              <form onSubmit={handleMobileSubmit} className="mb-8 ml-16 lg:ml-44 mt-14 lg:mt-28 lg:w-3/4">
                <h1 className="mb-5 fontt text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-serif orangg-text">
                  Check Appointment
                </h1>
                <h1 className="mb-8 fontt text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-gray-300">
                  Enter Your Number
                </h1>
                <div className="bg-white bg-opacity-20 p-3 lg:ml-2 rounded-lg shadow-lg flex space-x-3 w-80 lg:w-96">
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Mobile Number"
                    className="border border-gray-300 rounded-l-lg p-3 w-72 md:w-96  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="relative mt-7 ">
                  <Image src={SubmitImg} alt="Submit" className="h-11 lg:w-52 md:h-11 w-48  ml-16 lg:ml-20 object-cover" />
                  <button
                    className="absolute inset-0 mr-20 md:mr-96 md:pr-0 text-center  lg:w-80 ml-1 md:ml-6 text-white font-bold text-lg md:text-xl lg:text-2xl"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h2 className='md:text-6xl lg:ml-48 lg:mt-28 text-4xl font-serif orangg-text mb-8'>Your Appointments</h2>
                {filteredAppointments.length > 0 ? (
                  <div className="overflow-x-auto mr-10 md:mr-0 md:pr-4 lg:ml-48">
                  <table className='md:w-96 bg-white bg-opacity-70 rounded-lg shadow-sm shadow-gray-400'
                    data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="700">
                    <thead>
                      <tr className=' bg-orange-500 lg:text-2xl bg-opacity-60  text-gray-800'>
                        <th className='py-2 px-7 ml-4 '>Doctor Name</th>
                        <th className='py-2 px-4 lg:mt-4 hidden sm:block'>Specialization</th>
                        <th className='py-2 px-4 '>Date</th>
                        <th className='py-2 px-4 '>Time</th>
                        <th className='py-2 px-4 '>Meet</th> 
                          <th className='py-2 px-4 '>Action</th>                      </tr>
                    </thead>
                    <tbody>
                      {filteredAppointments.map((appointment) => (
                        <tr key={appointment._id} className='hover:bg-gray-100 hover:bg-op lg:text-xl '>
                          <td className='py-2 px-4 mr-10 ml-5 '>{appointment.doctor.name}</td>
                          <td className='py-2 px-4 lg:mt-3 hidden sm:block'>{appointment.doctor.specialization}</td>
                          <td className='py-2 px-4 '>{new Date(appointment.date).toLocaleDateString()}</td>
                          <td className='py-2 px-4 '>{appointment.time}</td>
                          <td className='py-2 px-4 '>
                            <button
                              onClick={() => handleJoinMeeting(appointment.meetingId)}
                              className="text-blue-500 hover:underline"
                            >
                              Join
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => handleCancel(appointment._id)}
                              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                            >
                              Cancel
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                ) : (
                  <p className='text-lg lg:ml-48 lg:text-2xl text-gray-200'>No appointments found for this mobile number.</p>
                )}
              </>
            )}

            {cancelMessage && ( // Show cancel message if it exists
              <p className='mt-4 text-lg text-red-500'>{cancelMessage}</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Appointments;