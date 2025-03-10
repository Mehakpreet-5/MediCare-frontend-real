

// import { useEffect, useState } from 'react';
// import Navbar from '@/components/Navbar'; // Assuming you have a Navbar component

// function PatientBooking() {
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     // Fetch booked appointments on component mount
//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 const response = await fetch('/api/appointments'); // Update this endpoint based on your API
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch appointments');
//                 }
//                 const data = await response.json();
//                 setAppointments(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAppointments();
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div className="bg-gray-100 min-h-screen pb-40">
//             <Navbar />
//             <div className="container mx-auto p-6">
//                 <h1 className="text-3xl font-bold text-center mb-4">Your Booked Appointments</h1>
//                 {appointments.length === 0 ? (
//                     <p className="text-center text-lg">No appointments booked yet.</p>
//                 ) : (
//                     <div className="bg-white shadow-md rounded-lg p-4">
//                         <table className="min-w-full divide-y divide-gray-200">
//                             <thead>
//                                 <tr>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="bg-white divide-y divide-gray-200">
//                                 {appointments.map((appointment) => (
//                                     <tr key={appointment.id}>
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appointment.doctor.name}</td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appointment.date}</td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appointment.time}</td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appointment.message}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default PatientBooking;



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