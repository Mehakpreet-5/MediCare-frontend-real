

import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import style from '../app/globals.css';
const Confirmation = () => {
    const router = useRouter();
    const { meetingID, name, phoneNumber, date, time, doctorName, specialization, experience } = router.query;

    return (
        <div className="bg-gray-100 min-h-screen pb-40 yell">
            <Navbar />
            <div className="text-center mt-20 justify-center">
                <h2 className="text-5xl lg:text-6xl lg:mb-6 font-serif text-center font-bold orangg-text">Booking Confirmation</h2>
                {meetingID && (
                    <div className="mt-3 ">
                        <p className="text-lg lg:text-xl font-serif mb-4 ">Thank you, {name}, for booking an appointment!</p>
                        <table className="text-left mt-8  w-1/4 mx-auto text-lg lg:text-2xl">
                            <tbody>
                                <tr>
                                    <td className="py-2 font-semibold">Meeting ID:</td>
                                    <td className="text-blue-600 font-bold">{meetingID}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-semibold">Doctor:</td>
                                    <td>{doctorName}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-semibold">Specialization:</td>
                                    <td>{specialization}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-semibold">Experience:</td>
                                    <td>{experience} years</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-semibold">Date:</td>
                                    <td>{date}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-semibold">Time:</td>
                                    <td>{time}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-semibold">Phone Number:</td>
                                    <td>{phoneNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Confirmation;