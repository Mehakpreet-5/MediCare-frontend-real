// // import React from 'react'
// import style from '../../app/globals.css'
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser,faUserDoctor,faCalendarCheck  } from '@fortawesome/free-solid-svg-icons';
// import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
// function sidebar() {
//     return (
//         <div className="h-screen w-60 bg-cyan-100 ">
//             <h1 className='text-2xl font-bold pt-5 text-center'>Admin <br/> Dashboard</h1>
//             <div className='space-y-6 ml-10 pt-24'>
               
//                 <div className='h-24 w-28 bg-black bg-opacity-10 hover:bg-slate-300 cursor-pointer transition-all'>
//                 <Link href="/admin/users"> 
//                 <FontAwesomeIcon icon={faUser} className='h-14 w-20 ml-3 mt-2'/>
//                 <h1 className=' ml-7'>Users</h1> </Link> </div> 
              
//                 <div className='h-20 w-28 bg-black bg-opacity-10 hover:bg-slate-300 cursor-pointer transition-all'>
//                 <Link href="/admin/Doctors"> 
//                 <FontAwesomeIcon icon={faUserDoctor} className='h-14 w-20 ml-3' />
//                  <h1 className='ml-7'>Doctors</h1> </Link> </div>
               
//                 <div className='h-20 w-28 bg-black bg-opacity-10 hover:bg-slate-300 cursor-pointer transition-all'>
//                 <Link href="/admin/Appointments">
//                 <FontAwesomeIcon icon={faCalendarCheck } className='h-14 w-20 ml-3'/> 
//                 <h1 className=' ml-2'>Appointments</h1> </Link> </div>
             
//                 <div className='h-20 w-28 bg-black bg-opacity-10  hover:bg-slate-300 cursor-pointer transition-all'>
//                 <Link href="/admin/Chat">
//                 <FontAwesomeIcon icon={ faRocketchat} className='h-14 w-16 ml-6' />
//                  <h1 className=' ml-9'>Chat</h1> </Link> </div>
//             </div>
//         </div>
//     )
// }

// export default sidebar

import style from '../../app/globals.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserDoctor, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';

function Sidebar() {
    const router = useRouter();

    // Define the sidebar links
    const links = [
        { href: "/admin/users", label: "Users", icon: faUser },
        { href: "/admin/doctors", label: "Doctors", icon: faUserDoctor },
        { href: "/admin/appointments", label: "Appointments", icon: faCalendarCheck },
        { href: "/admin/chat", label: "Chat", icon: faRocketchat },
    ];

    return (
        <div className="h-screen w-60 greenn shadow-lg">
            <h1 className='text-3xl text-orange-300 font-bold pt-10 text-center font-serif'>Admin <br /> Dashboard</h1>
            <div className='space-y-4 ml-4 pt-12'>
                {links.map(({ href, label, icon }) => (
                    <div key={href} className={`flex items-center h-16 w-48 rounded-lg transition-all duration-300 
                        ${router.pathname === href ? 'bg-white bg-opacity-45' : 'bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-40 '}
                        cursor-pointer`}>
                        <Link href={href} aria-label={label} className="flex  items-center w-full px-4">
                            <FontAwesomeIcon icon={icon} className='h-10 w-10 mr-3 text-orange-300 ' />
                            <h1 className='text-lg text-gray-200 '>{label}</h1>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
