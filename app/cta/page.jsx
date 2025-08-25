"use client";
import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Link } from "lucide-react";

export default function Page() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [showCaption, setShowCaption] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowCaption(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="m-0 p-0 h-screen w-screen overflow-hidden relative">
      {/* Background video */}
      <video
        id="bgVideo"
        ref={videoRef}
        muted
        autoPlay
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="https://res.cloudinary.com/dmtvg2mj4/video/upload/v1756129478/lv_0_20250825132111_kdwsis.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      {/* Top banner */}
      <div className="absolute top-0 left-0 w-full">
        <img src="./og.jpeg" alt="Banner" className="w-full object-contain" />
      </div>

      {/* Bottom link */}
      <div className="absolute bottom-14 inset-x-0 flex justify-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdmkkEQnobhO_Pf2JuDt2BTOil26vgl2M8DJYGm4RPwyt70kQ/viewform?usp=send_form"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 text-4xl rounded-full bg-white text-black font-bold shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl"
        >
            <Link size={30}/>Click Here !
        </a>
      </div>

      {/* Mute/Unmute button */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
        >
          {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          {showCaption && <span className="text-sm">Tap to unmute</span>}
        </button>
      </div>
    </div>
  );
}