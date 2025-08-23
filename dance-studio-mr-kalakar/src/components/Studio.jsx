import { useState } from "react";

export default function Studio() {
  const [activeMedia, setActiveMedia] = useState("image"); // default show image

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-4 flex justify-center items-center flex-col ">

      {/* Main Display */}
      <div className="flex flex-col md:flex-row w-full  p-0 rounded-2xl justify-center items-center h-[400px] md:h-[500px] gap-6 mb-10">
        {/* Image Card */}
        {activeMedia === "image" && (
          <div className="flex-1 rounded-2xl w-full  h-full overflow-hidden shadow-lg">
            <img
              src="/images/studio.png"
              alt="Studio"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        )}



        {/* Video Card */}
        {activeMedia === "video" && (
          <div className="flex-1 rounded-2xl w-full h-[400px] overflow-hidden shadow-lg">
            {/*<video
              src="/videos/dance.mp4"
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              playsInline
            />*/}
          </div>
        )}
      </div>

      {/* Thumbnail Buttons */}
      {/*<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">*/}
      <div className="flex justify-center items-center w-full">
        {/* Image Thumbnail */}
        <div
          className={`cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border-2 ${
            activeMedia === "image" ? "border-blue-600" : "border-transparent"
          }`}
          onClick={() => setActiveMedia("image")}
        >
          <img
            src="/images/studio.png"
            alt="Studio Image"
            className="w-62 h-40 object-cover"
          />
        </div>

        {/* Video Thumbnail */}
        <div
          className={`cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border-2 ${
            activeMedia === "video" ? "border-blue-600" : "border-transparent"
          }`}
          onClick={() => setActiveMedia("video")}
        >
          <video
            src="/videos/dance.mp4"
            className="w-62 h-40 object-cover"
            muted
            loop
            playsInline
          />
        </div>

      </div>
    </div>
  );
}
