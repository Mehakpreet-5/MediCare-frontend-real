
import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { useRouter } from 'next/router';
function Appointments() {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        date: '',
        time: '',
        message: '',
        doctor: {
            name: 'Dr. John Doe',
            specialization: 'General Medicine',
            experience: 10,
            availability: 'Mon-Fri',
        },
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/bookings');
            const data = await response.json();
            setBookings(data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), // Make sure formData has the correct structure
            });
    
            // Log the response for debugging
            const data = await response.json();
            console.log(data); // Check what the server returns
    
            if (response.ok) {
                fetchBookings(); // Refresh bookings after submission
            } else {
                console.error('Failed to create booking:', data.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    
    const handleCancel = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/bookings/${id}`, {
                method: 'DELETE',
            });
            fetchBookings(); // Refresh bookings after deletion
        } catch (error) {
            console.error('Error cancelling booking:', error);
        }
    };

    const handleJoinMeeting = (meetingId) => {
        router.push(`/meet/${meetingId}`);
        console.log(`Navigating to meeting with ID: ${meetingId}`);
    };
    return (
        <div className="flex flex-col lg:flex-row bg-orange-100 bg-opacity-70">
            <div className={`fixed lg:sticky top-0 h-screen w-64 z-10 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
                <Sidebar />
            </div>
            <div className="lg:hidden fixed top-4 left-4 z-20">
                <button onClick={toggleSidebar} className="px-4 py-2 bg-gray-700 text-white rounded focus:outline-none">
                    {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
                </button>
            </div>
            <div className="flex-grow p-4 ml-20 ">
                <h1 className="text-6xl mr-20 text-orange-400 font-serif mt-6 mb-10 text-center">Appointments</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 pt-7 gap-4 w-full max-w-lg">
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"
                    />
                    <input
                        type="text"
                        name="phoneNumber"
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"
                    />
                    <input
                        type="date"
                        name="date"
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"
                    />
                    <input
                        type="time"
                        name="time"
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"
                    />
                    <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row sm:items-start">
                        <textarea
                            name="message"
                            onChange={handleChange}
                            placeholder="Message"
                            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full sm:flex-1"
                        ></textarea>
                        <button
                            type="submit"
                            className="md:mt-6 sm:mt-0 sm:ml-4 px-4 py-2 bg-orange-300 text-gray-700 rounded hover:bg-orange-400 focus:outline-none"
                        >
                            Book
                        </button>
                    </div>
                </form>

                <h2 className="text-3xl font-serif text-orange-400 mt-16">Existing Appointments</h2>
                <ul className="mt-4 space-y-4 w-96">
                    {bookings.map((booking) => (
                        <li key={booking._id} className="p-4 textg border bg-white bg-opacity-20 rounded shadow-md">
                            <p>Name: {booking.name}</p>
                            <p>Phone: {booking.phoneNumber}</p>
                            <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
                            <p>Time: {booking.time}</p>
                            <p>Message: {booking.message}</p>
                            <p>Meeting ID: {booking.meetingID}</p>
                            <p>Doctor: {booking.doctor.name} ({booking.doctor.specialization})</p>
                            <div className='mt-3 ml-3 space-x-24'>
                                <button
                                    onClick={() => handleJoinMeeting(booking.meetingID)}
                                    className="bg-cyan-600 text-white p-1 px-3 rounded hover:underline"
                                >
                                    Join
                                </button>
                                <button
                                    onClick={() => handleCancel(booking._id)}
                                    className=" px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                                >
                                    Cancel Appointment
                                </button>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Appointments;