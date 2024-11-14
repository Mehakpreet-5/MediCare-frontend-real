// // pages/api/login.js
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const users = []; // This should be replaced with a database in a production environment

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     // Find the user
//     const user = users.find(user => user.email === email);
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Check password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Generate a token
//     const token = jwt.sign({ email: user.email }, 'your_secret_key', {
//       expiresIn: '1h',
//     });

//     res.status(200).json({ message: 'Login successful', token });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// pages/api/login.js
import dbConnect from '@/db'; // adjust path if necessary
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Validate email and password presence
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'User not found.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials.' });
      }

      // Handle successful login (e.g., generate token, send user data)
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
