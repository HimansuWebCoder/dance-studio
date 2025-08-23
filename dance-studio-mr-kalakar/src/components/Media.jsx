// function Media() {
// 	return (
//          <div></div>
// 		)
// }

// export default Media;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Media() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const gallery = [
    { id: 1, type: "image", src: "/images/gallery1.jpeg" },
    { id: 2, type: "image", src: "/images/gallery2.jpeg" },
    { id: 3, type: "image", src: "/images/gallery3.jpeg" },
    { id: 4, type: "image", src: "/images/gallery4.jpeg" },
    { id: 5, type: "image", src: "/images/gallery5.jpeg" },
    // { id: 3, type: "video", src: "/videos/dance.mp4" },
    // { id: 4, type: "image", src: "/images/dance.webp" },
    // { id: 5, type: "video", src: "/videos/dance.mp4" },
    { id: 6, type: "image", src: "/images/gallery6.jpeg" },
    { id: 6, type: "image", src: "/images/gallery7.jpeg" },
    { id: 6, type: "image", src: "/images/gallery8.jpeg" },
    { id: 6, type: "image", src: "/images/achievement1.jpeg" },
  ];

  return (
    <section className="relative max-w-full py-12 px-4 md:px-12 bg-gradient-to-r from-blue-600 via-purple-400 via-pink-500 via-pink-600 to-blue-600">
      {/*<div className="text-center mb-8">*/}
        {/*<h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Media <span className="text-white text-shadow-lg">Gallery</span>
        </h2>*/}
        {/*<p className="text-white/80 text-xl mt-2">Explore our dance moments & vibes</p>*/}
      {/*</div>*/}

      {/* Gallery Grid */}
      <div className="grid grid-cols-3  sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {gallery.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg bg-white/10 border border-white/20"
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt="Gallery"
                className="w-full h-40 md:h-64  object-[15%_30%]  object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <video
                src={item.src}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-50 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold tracking-wide">
                {item.type === "image" ? "View Photo" : "Watch Video"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt="Preview"
                  className="w-full h-fit md:h-150 object-[15%_20%] object-cover rounded-xl shadow-2xl"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full h-fit md:h-150 object-cover rounded-xl shadow-2xl"
                />
              )}
              <button
                className="absolute top-5 right-5 bg-red-600 text-white px-3 py-1 rounded-full  text-xl font-bold aspect-[1/1] hover:bg-red-700"
                onClick={() => setSelectedMedia(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
