// components/WebcamStream.js
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faVideoSlash, faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

const WebcamStream = () => {
  const videoRef = useRef(null);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    getUserMedia();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const toggleVideo = () => {
    setIsVideoOn((prev) => {
      const newStatus = !prev;
      if (stream) {
        const videoTrack = stream.getVideoTracks()[0];
        videoTrack.enabled = newStatus;
      }
      return newStatus;
    });
  };

  const toggleMic = () => {
    setIsMicOn((prev) => {
      const newStatus = !prev;
      if (stream) {
        const audioTrack = stream.getAudioTracks()[0];
        audioTrack.enabled = newStatus;
      }
      return newStatus;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h2>Webcam Stream</h2>
      <video ref={videoRef} autoPlay playsInline style={{ width: '400px', height: '300px', borderRadius: '8px' }} />
      <div className="flex space-x-4 mt-4">
        <button onClick={toggleVideo} className="p-2 rounded bg-gray-200 hover:bg-gray-300">
          <FontAwesomeIcon icon={isVideoOn ? faVideo : faVideoSlash} />
        </button>
        <button onClick={toggleMic} className="p-2 rounded bg-gray-200 hover:bg-gray-300">
          <FontAwesomeIcon icon={isMicOn ? faMicrophone : faMicrophoneSlash} />
        </button>
      </div>
    </div>
  );
};

export default WebcamStream; // Ensure it's exported correctly
