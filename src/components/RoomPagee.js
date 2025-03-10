import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const router = useRouter();
    const meetingRef = useRef(null);
    const { id } = router.query;

    useEffect(() => {
        if (typeof window !== "undefined" && router.isReady && id) {
            const appID = 1142151151;
            const serverSecret = "43503583b71f1c2a65eff5972c8aef53";
            const userID = Date.now().toString();

            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, userID, "User1");
            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: meetingRef.current,
                scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
                sharedLinks: [
                    {
                        name: "Copy Link",
                        url: `${window.location.origin}/meet/${id}`,
                    },
                ],
            });
        }
    }, [id, router.isReady]);

    const copyRoomId = () => {
        if (id) {
            navigator.clipboard.writeText(id);
            alert(`Room ID: ${id} copied to clipboard!`);
        } else {
            alert("Room ID is not available to copy!");
        }
    };

    return (
        <div className="relative w-full h-screen">
            <div ref={meetingRef} className="h-full"></div>
            {id && (
                <div className="absolute bottom-4 left-4 text-white">
                    <p>
                        Share this Room ID: <strong>{id}</strong>
                    </p>
                    <button onClick={copyRoomId} className="mt-2 p-2 bg-blue-500 text-white rounded">
                        Copy Room ID
                    </button>
                </div>
            )}
        </div>
    );
};

export default RoomPage;
