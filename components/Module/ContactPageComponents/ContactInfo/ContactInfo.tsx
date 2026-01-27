import { FiMapPin, FiPhoneCall, FiMail, FiWatch } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <section className="relative bg-[url('/assets/images/contact.png')] bg-center bg-cover bg-no-repeat min-h-[600px]">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-emerald-600 p-6 flex justify-center items-center">
          <h2 className="text-white text-xl font-semibold">
            Get in Touch With Us
          </h2>
        </div>

        {/* Info Blocks */}
        <div className="backdrop-blur-sm my-10 rounded-lg overflow-hidden">
          {/* Location */}
          <div className="text-emerald-700 p-8 border-b border-emerald-600">
            <h3 className="font-bold mb-4">Location</h3>
            <p className="flex items-start gap-2">
              <FiMapPin className="text-xl mt-1" />
              <span>Khayerhat Road, Daulatkhan, Bhola, Bangladesh</span>
            </p>
          </div>

          {/* Contact */}
          <div className="text-emerald-700 p-8 border-b border-emerald-600">
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="flex items-center gap-2 mb-2">
              <FiPhoneCall className="text-xl" />
              <span>+880 1314-001928</span>
            </p>
            <p className="flex items-center gap-2">
              <FiMail className="text-xl" />
              <span>talimulummahdbd@gmail.com</span>
            </p>
          </div>

          {/* Opening Hours */}
          <div className="text-emerald-700 p-8">
            <h3 className="font-bold mb-4">Opening Hours</h3>
            <div className="flex gap-3">
              <FiWatch className="text-xl mt-1" />
              <div className="flex flex-col gap-2">
                <span>Saturday – Wednesday: 9:00 AM – 4:00 PM</span>
                <span>Thursday: 9:00 AM – 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
