// // pages/admin/index.js
// import dbConnect from '../../db';
// import Appointment from '../../models/appointment';
// import Sidebar from './sidebar';
// import style from '../../app/globals.css'
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import UsersPage from './users';
// const AdminDashboard = ({ appointments }) => {
//   const router = useRouter();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
    
//     // Redirect if the user is not an admin
//     if (!user || !user.isAdmin) {
//       router.push('/'); // Redirect to home page
//     }
//   }, [router]);

//   return (
//     <div className='flex flex-row'> 
//       <div> <Sidebar/> </div>
//       <div> 
//       <h1>Admin Dashboardd</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Doctor</th>
//             <th>Patient</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map((appointment) => (
//             <tr key={appointment._id}>
//               <td>{appointment.doctor}</td>
//               <td>{appointment.patient}</td>
//               <td>{new Date(appointment.date).toLocaleDateString()}</td>
//               <td>{appointment.time}</td>
//               <td>{appointment.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   await dbConnect();
  
//   const appointments = await Appointment.find({}).lean();
//   return {
//     props: { appointments: JSON.parse(JSON.stringify(appointments)) },
//   };
// }

// export default AdminDashboard;


// pages/admin/index.js
import dbConnect from '../../db';
import Appointment from '../../models/Appointment';
import Sidebar from './sidebar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AdminDashboard = ({ appointments }) => {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    // Redirect if the user is not an admin
    if (!user || !user.isAdmin) {
      router.push('/'); // Redirect to home page
    }
  }, [router]);

  return (
    <div className="flex flex-row bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-4 border-b">Doctor</th>
                <th className="py-3 px-4 border-b">Patient</th>
                <th className="py-3 px-4 border-b">Date</th>
                <th className="py-3 px-4 border-b">Time</th>
                <th className="py-3 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment._id} className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">{appointment.doctor}</td>
                    <td className="py-3 px-4 border-b">{appointment.patient}</td>
                    <td className="py-3 px-4 border-b">{new Date(appointment.date).toLocaleDateString()}</td>
                    <td className="py-3 px-4 border-b">{appointment.time}</td>
                    <td className="py-3 px-4 border-b">{appointment.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-3 px-4 text-center">No appointments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  await dbConnect();
  
  const appointments = await Appointment.find({}).lean();
  return {
    props: { appointments: JSON.parse(JSON.stringify(appointments)) },
  };
}

export default AdminDashboard;
