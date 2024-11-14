// import dbConnect from '../../../db';
// import User from '@/models/User';

// export default async function handler(req, res) {
//   const { method } = req;

//   // Connect to the database
//   await dbConnect();

//   switch (method) {
//     // Get all users
//     case 'GET':
//       try {
//         const users = await User.find({}); // Get all users from the database
//         res.status(200).json({ success: true, data: users });
//       } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//       }
//       break;

//     // Create a new user
//     case 'POST':
//       try {
//         const { username, email, password } = req.body;

//         // Simple validation
//         if (!username || !email || !password) {
//           return res.status(400).json({
//             success: false,
//             message: 'Please provide all the required fields',
//           });
//         }

//         const newUser = new User(req.body);
//         await newUser.save();
//         res.status(201).json({ success: true, data: newUser });
//       } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//       }
//       break;

//     // Handle other HTTP methods
//     default:
//       res.status(405).json({ success: false, message: 'Method not allowed' });
//       break;
//   }
// }


import dbConnect from '../../../db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  const { method } = req;

  // Connect to the database
  await dbConnect();

  switch (method) {
    // Get all users
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    // Create a new user
    case 'POST':
      try {
        const { username, email, password } = req.body;

        // Simple validation
        if (!username || !email || !password) {
          return res.status(400).json({
            success: false,
            message: 'Please provide all the required fields',
          });
        }

        // Check for duplicate email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({
            success: false,
            message: 'Email is already in use',
          });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = new User({ ...req.body, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    // Handle other HTTP methods
    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
