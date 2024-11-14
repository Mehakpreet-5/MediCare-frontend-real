// // pages/api/socket.js
// import createSocketServer from '../../socket'; // Adjust the path as necessary

// let io;

// export default function handler(req, res) {
//     if (!io) {
//         io = createSocketServer(req, res); // Create a new Socket.IO server instance
//     }
//     res.end(); // Respond with an empty response
// }


// pages/api/socket.js
import { Server } from 'socket.io';

export const config = {
  api: {
    bodyParser: false,
  },
};

const socketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already set up');
    res.end();
    return;
  }

  const io = new Server(res.socket.server);

  io.on('connection', (socket) => {
    console.log('New socket connected:', socket.id);

    socket.on('message', (data) => {
      console.log('Message received:', data);
      // Emit the message to all connected clients
      io.emit('message', data);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
    });
  });

  res.socket.server.io = io;
  console.log('Setting up socket');
  res.end();
};

export default socketHandler;
