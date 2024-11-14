// import { useRouter } from "next/router";

// function PatientBook() {
//     const router = useRouter();
//     const { name, phoneNumber, date, time, message, doctor } = router.query;

//     return (
//         <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//             <h1 className="text-3xl font-bold mb-4">Appointment Confirmed!</h1>
//             {doctor && (
//                 <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 lg:w-1/2">
//                     <h2 className="text-2xl font-semibold mb-2">Doctor Details:</h2>
//                     <p>Name: {doctor.name}</p>
//                     <p>Specialization: {doctor.specialization}</p>
//                     <p>Experience: {doctor.experience} years</p>
//                     <p>Availability: {doctor.availability}</p>
//                     <h2 className="text-2xl font-semibold mt-4 mb-2">Patient Details:</h2>
//                     <p>Name: {name}</p>
//                     <p>Phone Number: {phoneNumber}</p>
//                     <p>Date: {date}</p>
//                     <p>Time: {time}</p>
//                     <p>Message: {message}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default PatientBook;


import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar'; // Assuming you have a Navbar component

function PatientBooking() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch booked appointments on component mount
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch('/api/appointments'); // Update this endpoint based on your API
                if (!response.ok) {
                    throw new Error('Failed to fetch appointments');
                }
                const data = await response.json();
                setAppointments(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="bg-gray-100 min-h-screen pb-40">
            <Navbar />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-4">Your Booked Appointments</h1>
                {appointments.length === 0 ? (
                    <p className="text-center text-lg">No appointments booked yet.</p>
                ) : (
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {appointments.map((appointment) => (
                                    <tr key={appointment.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appointment.doctor.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appointment.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appointment.time}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appointment.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PatientBooking;
