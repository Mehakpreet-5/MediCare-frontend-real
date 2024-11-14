import dbConnect from '../../db.js'; // Adjust the path based on your project structure
import Booking from '../../models/Booking.js';

export default async function handler(req, res) {
    await dbConnect();

    console.log('Booking model:', Booking); // Log the Booking model
    
    if (req.method === 'POST') {
        try {
            const bookingData = req.body;
            const booking = new Booking(bookingData);
            await booking.save();
            res.status(201).json({ message: 'Booking confirmed!', booking });
        } catch (error) {
            res.status(500).json({ message: 'Error saving booking', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        console.error('Error saving booking:', error); // Log the error
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
