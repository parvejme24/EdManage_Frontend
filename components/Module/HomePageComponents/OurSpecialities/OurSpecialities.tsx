import {
  FaChalkboardTeacher,
  FaHome,
  FaLaptop,
  FaPenNib,
  FaLightbulb,
  FaBookReader,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type SpecialtyItem = {
  icon: IconType;
  title: string;
  description: string;
};

const specialties: SpecialtyItem[] = [
  {
    icon: FaChalkboardTeacher,
    title: "Qualified & Experienced Teachers",
    description:
      "Our institution is supported by highly qualified and experienced teachers who are fully committed to students’ academic and moral development. Through modern teaching methods and strong ethical values, they help students grow into confident and responsible individuals.",
  },
  {
    icon: FaHome,
    title: "Safe & Clean Residential Facilities",
    description:
      "We provide secure, clean, and well-maintained residential facilities for students. Comfortable accommodation and healthy meals ensure a supportive environment where students can focus on learning and personal development.",
  },
  {
    icon: FaLaptop,
    title: "Interactive Multimedia Classrooms",
    description:
      "EdManage supports multimedia-based classrooms where lessons are delivered through digital tools and visual presentations. This interactive learning approach increases student engagement and makes complex topics easier to understand.",
  },
  {
    icon: FaPenNib,
    title: "Handwriting & Skill Development Training",
    description:
      "Special training programs are arranged to improve handwriting and presentation skills in English, Arabic, and native languages. These skills help students perform better academically and build self-confidence.",
  },
  {
    icon: FaLightbulb,
    title: "Uninterrupted Power & Learning Support",
    description:
      "To ensure uninterrupted learning, standby power systems are in place. Students can study at any time without disruption and fully benefit from technology-driven education.",
  },
  {
    icon: FaBookReader,
    title: "Spoken English & Arabic Focus",
    description:
      "Dedicated classes for spoken English and Arabic help students enhance communication skills. Arabic language training also supports a deeper understanding of religious and classical studies.",
  },
];

export default function OurSpecialty() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-5 lg:px-0">
        <h3 className="text-2xl font-semibold pb-5">Our Key Strengths</h3>

        <p className="text-[#6E6E6E] max-w-4xl">
          EdManage is designed to support institutions that combine academic
          excellence with character development. Alongside core subjects such as
          language, mathematics, and science, the platform encourages structured
          learning, ethical values, and student-centered growth in a modern
          educational environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {specialties.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#F2F2F2] border-2 border-[#D3D3D3] rounded-xl p-6 space-y-3 hover:shadow-2xl transition duration-300"
            >
              <div className="bg-[#E1E7E7] border-2 border-[#307B74] inline-flex p-3 rounded-full">
                <Icon size={30} className="text-[#307B74]" />
              </div>

              <h3 className="text-[#307B74] font-semibold text-xl">{title}</h3>

              <p className="text-[#6E6E6E] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
