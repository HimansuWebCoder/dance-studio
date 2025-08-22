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
          <h3 className="text-xl font-semibold text-[#456882] font-montserrat">Call Us</h3>
          <p className="mt-2 font-poppins text-[#547792]">+91 9078230458</p>
          <p className="mt-2 font-poppins text-[#547792]">+91 8455815913</p>
          <p className="mt-2 font-poppins text-[#547792]">Or</p>
          <p className="mt-2 font-poppins text-[#547792]">+91 9078230458</p>
        </div>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <Mail className="w-10 h-10 mx-auto text-pink-500 mb-3" />
          <h3 className="text-xl font-semibold text-[#456882] font-montserrat">Email Us</h3>
          <p className="text-[#547792] font-poppins mt-2">studiomrdance4@gmail.com</p>
        </div>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <MapPin className="w-10 h-10 mx-auto text-pink-500 mb-3" />
          <h3 className="text-xl font-semibold text-[#547792] font-poppins">Visit Us</h3>
          <p className="text-gray-600 mt-2">
            📍Sundarpada Hitech, Mm mart 3rd floor, Jatni Road, Bhubaneswar, Odisha, India
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
        <iframe
          title="Dance Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3164.157429919614!2d85.79626087523435!3d20.203428281247337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDEyJzEyLjMiTiA4NcKwNDcnNTUuOCJF!5e0!3m2!1sen!2sin!4v1755878663326!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
