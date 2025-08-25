"use client";
import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Link, Gift } from "lucide-react";

export default function Page() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [showCaption, setShowCaption] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [showCoupon, setShowCoupon] = useState(false);

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

  const handleContinue = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setMuted(false);
    }
    setShowOverlay(false);
    setShowCoupon(true);
  };

  return (
    <div className="m-0 p-0 h-screen w-screen overflow-hidden relative">
      {showOverlay && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 text-white text-center px-6">
          <Gift size={60}/>
          <h1 className="text-3xl font-bold mt-4 mb-2">Dekh lo secret</h1>
          <p className="mb-6">Continue and watch at your own risk.</p>
          <button
            onClick={handleContinue}
            className="px-6 py-3 rounded-full bg-white text-black font-bold shadow-lg hover:scale-105 transition transform"
          >
            Continue
          </button>
        </div>
      )}

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

      {/* Coupon banner */}
      {showCoupon && (
        <div className="absolute top-[20%] left-0 w-full flex justify-center z-10">
          <div className="bg-yellow-400 text-black text-center mx-6 font-bold px-6 py-2 rounded-lg shadow-lg">
            Use Code <span className="text-red-600">SMXAC000243</span> on Smaaash for 10% off!
          </div>
        </div>
      )}

      {/* Bottom link */}
      <div className="absolute bottom-14 inset-x-0 flex justify-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdmkkEQnobhO_Pf2JuDt2BTOil26vgl2M8DJYGm4RPwyt70kQ/viewform?usp=send_form"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 text-4xl rounded-full bg-white text-black font-bold shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl animate-[wiggle_1s_ease-in-out_infinite]"
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
      <style jsx global>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
    </div>
  );
}