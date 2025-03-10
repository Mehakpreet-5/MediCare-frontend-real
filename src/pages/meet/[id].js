

// import React from 'react';
// import { useRouter } from 'next/router';
// import WebcamStream from '@/components/WebcamStream'; // Adjust the path based on your project structure

// const MeetingPage = () => {
//   const router = useRouter();
//   const { id } = router.query; // Get the meeting ID from the URL

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-2xl font-bold mb-4">Meeting ID: {id}</h1>
//       <WebcamStream meetingId={id} /> {/* Pass the meeting ID to the stream */}
//     </div>
//   );
// };

// export default MeetingPage;




// import React, { useRef, useEffect , useState} from 'react';

// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


// function RoomPage() {
//   const [roomID, setRoomID] = useState(""); // State to manage roomID
//     const meetingRef = useRef(null);

//     const myMeeting = async () => {
//         const appID = 1142151151;
//         const serverSecret = "43503583b71f1c2a65eff5972c8aef53";
//         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//             appID,
//             serverSecret,
//             roomID,
//             Date.now().toString(),
//             "User1"
//         );

//         const zc = ZegoUIKitPrebuilt.create(kitToken);
//         zc.joinRoom({
//             container: meetingRef.current,
//             scenario: {
//                 mode: ZegoUIKitPrebuilt.GroupCall,
//             },
//             sharedLinks: [
//                 {
//                     name: 'Copy Link',
//                     url: `${roomID}`
//                 }
//             ]
//         });
//     };

//     // Function to copy roomID to clipboard
//     const copyRoomId = () => {
//         navigator.clipboard.writeText(roomID);
//         alert(`Room ID: ${roomID} copied to clipboard!`);
//     };

//     useEffect(() => {
//         myMeeting();
//     }, []);  // This will run once when the component is mounted

//     return (
//         <div className="relative w-full h-screen">
//             <div ref={meetingRef} style={{ width: '100%', height: '100vh' }} className='join-bgg'></div>
//              </div>
//     );
// }

// export default RoomPage;


// import React, { useRef, useEffect, useState } from 'react';
// import { useRouter } from 'next/router'; 
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// function RoomPage() {
//     const router = useRouter();
//     const meetingRef = useRef(null);
//     // const [roomID, setRoomID] = useState(`room_${Date.now()}`); // Generate a unique room ID
//     const { roomID } = router.query; 
    
//     useEffect(() => {
//         const appID = 1142151151;
//         const serverSecret = "43503583b71f1c2a65eff5972c8aef53";
//         const userID = Date.now().toString(); // Unique user ID

//         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, "User1");
//         const zc = ZegoUIKitPrebuilt.create(kitToken);
//         zc.joinRoom({
//             container: meetingRef.current,
//             scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
//             sharedLinks: [{ name: 'Copy Link', url: roomID }]
//         });
//     }, [roomID]); // Run when roomID is available

//     const copyRoomId = () => {
//         navigator.clipboard.writeText(roomID);
//         alert(`Room ID: ${roomID} copied to clipboard!`);
//     };

//     return (
//         <div className="relative w-full h-screen">
//             <div ref={meetingRef} className='h-full'></div>
//             <button onClick={copyRoomId} className="absolute top-4 left-4 p-2 bg-blue-500 text-white rounded">Copy Room ID</button>
//             <div className="absolute bottom-4 left-4 text-white">
//                 <p>Share this Room ID: <strong>{roomID}</strong></p>
//             </div>
//         </div>
//     );
// }

// export default RoomPage;


// // mIN CODE start
// import React, { useRef, useEffect } from 'react';
// import { useRouter } from 'next/router'; 
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// function RoomPage() {
//     const router = useRouter();
//     const meetingRef = useRef(null);
//     const { id } = router.query; // Change here to access 'id' instead of 'roomID'

//     useEffect(() => {

//         if (!router.isReady || !id) return;
//         console.log('Router Query:', router.query); // Log the router query

//         const appID = 1445125281;
//         const serverSecret = "8a98ef3dc3c6de34f376d884dfba3f46";
//         const userID = Date.now().toString(); // Unique user ID

//         // Ensure id is defined before proceeding
//         if (!id) {
//             console.error('Room ID is not available');
//             return; // Early return if id is not defined
//         }

//         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, userID, "User1");
//         const zc = ZegoUIKitPrebuilt.create(kitToken);
//         zc.joinRoom({
//             container: meetingRef.current,
//             scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
//             sharedLinks: [{ name: 'Copy Link', url: `${window.location.origin}/room/${id}` }]
//         });

//     }, [id, router.isReady]); // Run when id changes

//     const copyRoomId = () => {
//         if (id) {
//             navigator.clipboard.writeText(id);
//             alert(`Room ID: ${id} copied to clipboard!`);
//         } else {
//             alert('Room ID is not available to copy!');
//         }
//     };

//     return (
//         <div className="relative w-full h-screen">
//             <div ref={meetingRef} className='h-full'></div>
//             {/* <button onClick={copyRoomId} className="absolute top-4 left-4 p-2 bg-blue-500 text-white rounded">Copy Room ID</button> */}
//             {id && ( // Only show this if id is available
//                 <div className="absolute bottom-4 left-4 text-white">
//                     <p>Share this Room ID: <strong>{id}</strong></p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default RoomPage;

// // end main codee

import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Import Zego dynamically (only on the client)
const ZegoUIKitPrebuilt = dynamic(
  () => import('@zegocloud/zego-uikit-prebuilt'),
  { ssr: false }
);

function RoomPage() {
    const router = useRouter();
    const meetingRef = useRef(null);
    const { id } = router.query;
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || !router.isReady || !id) return;
    
        const appID = 1445125281;
        const serverSecret = "8a98ef3dc3c6de34f376d884dfba3f46";
        const userID = Date.now().toString();
    
        const { ZegoUIKitPrebuilt } = require('@zegocloud/zego-uikit-prebuilt'); // Load only in the client
    
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, userID, "User1");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
    
        if (meetingRef.current) {
            zc.joinRoom({
                container: meetingRef.current,
                scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
                sharedLinks: [{ name: 'Copy Link', url: `${window.location.origin}/room/${id}` }]
            });
        }
    }, [id, router.isReady]);
    
    const copyRoomId = () => {
        if (id) {
            navigator.clipboard.writeText(id);
            alert(`Room ID: ${id} copied to clipboard!`);
        } else {
            alert('Room ID is not available to copy!');
        }
    };

    return (
        <div className="relative w-full h-screen">
            <div ref={meetingRef} className='h-full'></div>
            {id && (
                <div className="absolute bottom-4 left-4 text-white">
                    <p>Share this Room ID: <strong>{id}</strong></p>
                </div>
            )}
        </div>
    );
}

export default RoomPage;

// import React, { useEffect, useRef } from "react";
// import { useRouter } from "next/router";
// import dynamic from "next/dynamic";

// const ZegoUIKitPrebuilt = dynamic(() => import("@zegocloud/zego-uikit-prebuilt"), { ssr: false });

// const RoomPage = () => {
//     const router = useRouter();
//     const meetingRef = useRef(null);
//     const { id } = router.query;

//     useEffect(() => {
//         if (!router.isReady || !id) return;

//         const appID = 1142151151;
//         const serverSecret = "43503583b71f1c2a65eff5972c8aef53";
//         const userID = Date.now().toString();

//         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, userID, "User1");
//         const zc = ZegoUIKitPrebuilt.create(kitToken);

//         zc.joinRoom({
//             container: meetingRef.current,
//             scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
//         });
//     }, [id, router.isReady]);

//     return <div ref={meetingRef} className="w-full h-screen"></div>;
// };

// export default RoomPage;


// import React, { useRef, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// function RoomPage() {
//     const router = useRouter();
//     const meetingRef = useRef(null);
//     const { id } = router.query;
//     const [ZegoUIKitPrebuilt, setZegoUIKitPrebuilt] = useState(null);

//     useEffect(() => {
//         if (!router.isReady || !id) return;

//         (async () => {
//             const { ZegoUIKitPrebuilt } = await import('@zegocloud/zego-uikit-prebuilt');
//             setZegoUIKitPrebuilt(ZegoUIKitPrebuilt);

//             const appID = 1142151151;
//             const serverSecret = "43503583b71f1c2a65eff5972c8aef53";
//             const userID = Date.now().toString();

//             const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, userID, "User1");
//             const zc = ZegoUIKitPrebuilt.create(kitToken);

//             zc.joinRoom({
//                 container: meetingRef.current,
//                 scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
//                 sharedLinks: [{ name: 'Copy Link', url: `${window.location.origin}/room/${id}` }]
//             });
//         })();
//     }, [router.isReady, id]);

//     return (
//         <div className="relative w-full h-screen">
//             <div ref={meetingRef} className="h-full"></div>
//             {id && (
//                 <div className="absolute bottom-4 left-4 text-white">
//                     <p>Share this Room ID: <strong>{id}</strong></p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default RoomPage;
