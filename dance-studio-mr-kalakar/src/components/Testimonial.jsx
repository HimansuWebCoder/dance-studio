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
      img: "/images/user.png",
    },
    {
      type: "text",
      name: "Priyanka Sharma",
      role: "Student",
      content:
        "The dance studio completely changed my life. Teachers are so supportive and the atmosphere is magical.",
      img: "/images/user.png",
    },
    // {
    //   type: "video",
    //   name: "Rahul Verma",
    //   role: "Performer",
    //   video: "/videos/dance.mp4",
    //   img: "/images/user.png",
    // },
    {
      type: "text",
      name: "Priya Nair",
      role: "Parent",
      content:
        "My daughter loves her classes here! She has grown so much in confidence and grace.",
      img: "/images/user.png",
    },
  ];

  return (
    <div className="max-w-7xl md:px-0 px-4  pb-8 mx-auto">
      {/*<h2 className="text-3xl font-bold text-[#0D5EA6] font-montserrat text-center mb-8">
        What Our Students & Parents Say
      </h2>*/}
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
            <div className="bg-white rounded-2xl border border-[0.01rem] border-blue-200   p-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {t.type === "text" ? (
                <>
                  <p className="text-gray-600 mb-4 font-poppins">{t.content}</p>
                  <h3 className="font-semibold text-[#44444E] text-lg font-poppins">{t.name}</h3>
                  <p className="text-sm text-gray-500 font-poppins">{t.role}</p>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 aspect-video mb-4 rounded-xl overflow-hidden">
                  {/*<div className="w-full aspect-video mb-4 rounded-xl overflow-hidden">*/}
                    {/*<video
                      controls
                      className="w-full h-full object-cover"
                      poster={t.img}
                    >
                      <source src={t.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>*/}
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
