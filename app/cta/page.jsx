export default function Page() {
  return (
    <div className="m-0 p-0 h-screen w-screen overflow-hidden relative">
      {/* Background video */}
      <video
        autoPlay
        muted
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
          className="px-8 py-4 text-4xl rounded-full bg-white text-black font-bold shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl"
        >
            Click Here !
        </a>
      </div>
    </div>
  );
}