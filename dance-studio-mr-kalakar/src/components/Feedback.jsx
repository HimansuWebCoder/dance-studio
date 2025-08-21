// function Feedback() {
// 	return (
//          <div></div>
// 		)
// }

// export default Feedback;

// export default function Feedback() {
//   const feedbacks = [
//     {
//       name: "Ananya Sharma",
//       role: "Student - Hip Hop",
//       feedback:
//         "The energy here is unmatched! I learned so much in just a few weeks and gained the confidence to perform on stage.",
//       image: "/images/student1.jpg",
//     },
//     {
//       name: "Ravi Patel",
//       role: "Parent",
//       feedback:
//         "This studio has the best instructors! My daughter absolutely loves her Odissi classes and looks forward to every session.",
//       image: "/images/student2.jpg",
//     },
//     {
//       name: "Sneha Kapoor",
//       role: "Professional Dancer",
//       feedback:
//         "Joining this studio was the best decision! The training is top-notch and the vibe is so inspiring.",
//       image: "/images/student3.jpg",
//     },
//   ];

//   return (
//     <section className="relative py-16 px-6 md:px-12 bg-gradient-to-br from-[#fce7f3] via-[#e0f2fe] to-[#f1f5f9] overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-purple-200/30 backdrop-blur-xl"></div>

//       <div className="relative max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-lg">
//           Hear From Our <span className="text-pink-600">Happy Dancers</span>
//         </h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Real stories from students and parents who found joy and growth in
//           every step.
//         </p>
//       </div>

//       {/* Feedback Cards */}
//       <div className="relative grid gap-8 md:grid-cols-3">
//         {feedbacks.map((f, idx) => (
//           <div
//             key={idx}
//             className="group p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-white/40 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
//           >
//             <div className="flex flex-col items-center text-center">
//               <img
//                 src={f.image}
//                 alt={f.name}
//                 className="w-20 h-20 rounded-full object-cover border-4 border-pink-200 shadow-md group-hover:scale-110 transition-transform duration-500"
//               />
//               <h3 className="mt-4 text-xl font-semibold text-gray-800">
//                 {f.name}
//               </h3>
//               <p className="text-sm text-pink-600">{f.role}</p>
//               <p className="mt-4 text-gray-700 italic leading-relaxed">
//                 “{f.feedback}”
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default function Feedback() {
//   const feedbacks = [
//     {
//       name: "Ananya Sharma",
//       role: "Student - Hip Hop",
//       feedback:
//         "The energy here is unmatched! I learned so much in just a few weeks and gained the confidence to perform on stage.",
//       image: "/images/student1.jpg",
//     },
//     {
//       name: "Ravi Patel",
//       role: "Parent",
//       feedback:
//         "This studio has the best instructors! My daughter absolutely loves her Odissi classes and looks forward to every session.",
//       image: "/images/student2.jpg",
//     },
//     {
//       name: "Sneha Kapoor",
//       role: "Professional Dancer",
//       feedback:
//         "Joining this studio was the best decision! The training is top-notch and the vibe is so inspiring.",
//       image: "/images/student3.jpg",
//     },
//   ];

//   return (
//     <section className="relative py-16 px-6 md:px-12 bg-gradient-to-br from-[#fce7f3] via-[#e0f2fe] to-[#f1f5f9] overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-purple-200/30 backdrop-blur-xl"></div>

//       <div className="relative max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-lg">
//           Hear From Our <span className="text-pink-600">Happy Dancers</span>
//         </h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Real stories from students and parents who found joy and growth in
//           every step.
//         </p>
//       </div>

//       {/* Feedback Cards */}
//       <div className="relative grid gap-8 md:grid-cols-4">
//         {/* Written Testimonials */}
//         {feedbacks.map((f, idx) => (
//           <div
//             key={idx}
//             className="group p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-white/40 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
//           >
//             <div className="flex flex-col items-center text-center">
//               <img
//                 src={f.image}
//                 alt={f.name}
//                 className="w-20 h-20 rounded-full object-cover border-4 border-pink-200 shadow-md group-hover:scale-110 transition-transform duration-500"
//               />
//               <h3 className="mt-4 text-xl font-semibold text-gray-800">
//                 {f.name}
//               </h3>
//               <p className="text-sm text-pink-600">{f.role}</p>
//               <p className="mt-4 text-gray-700 italic leading-relaxed">
//                 “{f.feedback}”
//               </p>
//             </div>
//           </div>
//         ))}

//         {/* 🎥 Video Testimonial */}
//         <div className="relative col-span-1 md:col-span-1 lg:col-span-1 p-4 rounded-2xl bg-gradient-to-tr from-pink-300 via-purple-200 to-indigo-300 shadow-xl hover:shadow-2xl transition-transform duration-500 hover:scale-105 overflow-hidden">
//           <div className="rounded-xl overflow-hidden border-4 border-white/40 shadow-lg">
//             <video
//               src="/videos/dance.mp4"
//               controls
//               poster="/images/video-thumbnail.jpg"
//               className="w-full h-64 object-cover"
//             />
//           </div>
//           <div className="text-center mt-4">
//             <h3 className="text-xl font-semibold text-white drop-shadow-md">
//               Video Testimonial
//             </h3>
//             <p className="text-sm text-white/90">
//               Watch our dancers share their journey
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider() {
  const testimonials = [
    {
      type: "text",
      name: "Ananya Sharma",
      role: "Student",
      content:
        "The dance studio completely changed my life. Teachers are so supportive and the atmosphere is magical.",
      img: "/images/dance.webp",
    },
    {
      type: "video",
      name: "Rahul Verma",
      role: "Performer",
      video: "/videos/dance.mp4",
      img: "/images/dance.webp",
    },
    {
      type: "text",
      name: "Priya Nair",
      role: "Parent",
      content:
        "My daughter loves her classes here! She has grown so much in confidence and grace.",
      img: "/images/dance.webp",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Students Say
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {t.type === "text" ? (
                <>
                  <p className="text-gray-600 mb-4">{t.content}</p>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </>
              ) : (
                <>
                  <div className="w-full aspect-video mb-4 rounded-xl overflow-hidden">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster={t.img}
                    >
                      <source src={t.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
