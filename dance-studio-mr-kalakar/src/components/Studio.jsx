// function Studio() {
// 	return (
//          <div>
//          	<div className="flex">
//          		<div className="">
//          			<img src="./images/dance.webp" alt="" className="w-full h-full object-contain" />
//          		</div>
//          		<div className="w-full h-full p-4">
//          			<video
// 			        src="/videos/dance.mp4"
// 			        className="w-full h-full object-cover"
// 			        muted
// 			        loop
// 			        autoPlay
// 			        playsInline
//                      />
//          		</div>
//          	</div>
//          	<div>
//          		<div></div>
//          		<div></div>
//          		<div></div>
//          		<div></div>
//          	</div>
//          </div>
// 		)
// }

// export default Studio;

import { useState } from "react";

export default function Studio() {
  const [activeMedia, setActiveMedia] = useState("image"); // default show image

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex justify-center items-center flex-col ">

      {/* Main Display */}
      <div className="flex flex-col md:flex-row w-full justify-center items-center h-[400px] gap-6 mb-10">
        {/* Image Card */}
        {activeMedia === "image" && (
          <div className="flex-1 rounded-2xl border max-w-[800px] border-4 border-pink-400 h-full overflow-hidden shadow-lg">
            <img
              src="/images/achievement.jpeg"
              alt="Studio"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        )}



        {/* Video Card */}
        {activeMedia === "video" && (
          <div className="flex-1 rounded-2xl  max-w-[800px] h-[400px] overflow-hidden shadow-lg">
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
            activeMedia === "image" ? "border-pink-500" : "border-transparent"
          }`}
          onClick={() => setActiveMedia("image")}
        >
          <img
            src="/images/achievement.jpeg"
            alt="Studio Image"
            className="w-62 h-40 object-cover"
          />
        </div>

        {/* Video Thumbnail */}
        <div
          className={`cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border-2 ${
            activeMedia === "video" ? "border-pink-500" : "border-transparent"
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
