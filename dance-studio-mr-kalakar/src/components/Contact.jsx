// function Contact() {
// 	return (
//          <div></div>
// 		)
// }

// export default Contact;

import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#FDEFF9] to-[#ECF9FF]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about our dance programs, studio hours, or private lessons? 
          Reach out to us anytime—we’d love to hear from you!
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <Phone className="w-10 h-10 mx-auto text-pink-500 mb-3" />
          <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
          <p className="text-gray-600 mt-2">+91 9078230458</p>
          <p className="text-gray-600 mt-2">+91 8455815913</p>
        </div>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <Mail className="w-10 h-10 mx-auto text-pink-500 mb-3" />
          <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
          <p className="text-gray-600 mt-2">studiomrdance4@gmail.com</p>
        </div>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <MapPin className="w-10 h-10 mx-auto text-pink-500 mb-3" />
          <h3 className="text-xl font-semibold text-gray-900">Visit Us</h3>
          <p className="text-gray-600 mt-2">
            📍Sundarpada Hitech, Mm mart 3rd floor, Jatni Road, Bhubaneswar, Odisha, India
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
        <iframe
          title="Dance Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.541185674336!2d85.81990781529377!3d20.29605888640109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d32f5ad8b5%3A0xf3e2c4c0f2c72dc5!2sBhubaneswar!5e0!3m2!1sen!2sin!4v1682269700000!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
