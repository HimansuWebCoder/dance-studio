import { Instagram } from "lucide-react";

export default function InstagramSection() {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400">
      {/* Overlay for glassy effect */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Follow Us on Instagram
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Get a sneak peek into our studio, daily dance vibes, behind-the-scenes, 
          and student highlights. Join our community and never miss a beat!
        </p>

        {/* Instagram handle + button */}
        <a
          href="https://instagram.com/yourstudio" // replace with your Instagram handle
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-white/20 transition-all duration-300"
        >
          <Instagram className="w-6 h-6" />
          @mr.kalakar
        </a>

        {/* Gallery Mockup */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instagram Video Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <video
              src="/videos/dance.mp4"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center">
              <Instagram className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Instagram Photo Cards */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="/images/dance1.jpg"
              alt="Dance Studio"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center">
              <Instagram className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="/images/dance2.jpg"
              alt="Dance Performance"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center">
              <Instagram className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
