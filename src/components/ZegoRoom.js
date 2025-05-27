// components/ZegoRoom.js
'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const ZegoRoom = () => {
    const { query, isReady } = useRouter();
    const meetingRef = useRef(null);

    useEffect(() => {
        if (!isReady || !query.id) return;

        const appID = 1952300290;
        const serverSecret = "e247163a3f02fbae0a09293e5fdd1507";
        const roomID = query.id;
        const userID = String(Math.floor(Math.random() * 10000000));
        const userName = "User_" + userID;

        const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            userID,
            userName
        );

        const zc = ZegoUIKitPrebuilt.create(token);

        zc.joinRoom({
            container: meetingRef.current,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `${window.location.origin}/room/${roomID}`,
                },
            ],
        });
    }, [isReady, query.id]);

    return <div ref={meetingRef} className="w-full h-screen" />;
};

export default ZegoRoom;
