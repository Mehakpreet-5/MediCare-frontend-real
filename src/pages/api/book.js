
// import dbConnect from '../../db';
// import Booking from '../../models/Booking';

// export default async function handler(req, res) {
//     await dbConnect();

//     if (req.method === 'GET') {
//         try {
//             // const bookings = await Booking.find({});
//             const bookings = await Booking.find({}).select('name phoneNumber date time message meetingID doctor');
// console.log('Bookings:', bookings);
//             res.status(200).json(bookings);
//         } catch (error) {
//             res.status(500).json({ message: 'Error fetching bookings', error });
//         }
//     } else if (req.method === 'POST') {
//         try {
//             const bookingData = req.body;

//             // Ensure that a meetingID is generated and included
//             const meetingID = generateMeetingID();
//             const booking = new Booking({ ...bookingData, meetingID });
//             await booking.save();

//             res.status(201).json({ message: 'Booking confirmed!', booking });
//         } catch (error) {
//             res.status(500).json({ message: 'Error saving booking', error });
//         }
//     } else {
//         res.setHeader('Allow', ['GET', 'POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }

// // Function to generate a unique meeting ID
// function generateMeetingID() {
//     return Math.random().toString(36).substr(2, 9); // Simple ID generation
// }

import dbConnect from '../../db.js';
import Booking from '../../models/Booking';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        try {
            const bookings = await Booking.find({}).select('name phoneNumber date time message meetingID doctor');
            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching bookings', error });
        }
    } else if (req.method === 'POST') {
        try {
            const bookingData = req.body;
            const meetingID = generateMeetingID();
            const booking = new Booking({ ...bookingData, meetingID });
            await booking.save();
            res.status(201).json({ message: 'Booking confirmed!', booking });
        } catch (error) {
            res.status(500).json({ message: 'Error saving booking', error });
        }
    } else if (req.method === 'DELETE') {
        try {
            const { id } = req.query;
            await Booking.findByIdAndDelete(id);
            res.status(200).json({ message: 'Booking cancelled successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error cancelling booking', error });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function generateMeetingID() {
    return Math.random().toString(36).substr(2, 9);
}
