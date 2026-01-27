"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: 1,
    question: "What is the mission of EdManage?",
    answer:
      "The mission of EdManage is to ensure the balanced development of students' physical, mental, and moral abilities, and to prepare them as responsible citizens capable of leadership in professional and national life.",
  },
  {
    id: 2,
    question: "How are values taught to students?",
    answer:
      "Students are taught based on moral, ethical, and educational principles. Character development is emphasized to help them become ideal and responsible citizens.",
  },
  {
    id: 3,
    question: "What is the curriculum like?",
    answer:
      "The curriculum includes Islamic studies, modern science, mathematics, English, and other essential subjects to ensure holistic knowledge and skill development.",
  },
  {
    id: 4,
    question: "What is the learning environment like?",
    answer:
      "The environment at EdManage is peaceful and student-friendly, providing an orderly and conducive space for learning.",
  },
  {
    id: 5,
    question: "How can one apply for admission?",
    answer:
      "Admission requires filling out the application form within the designated period, followed by evaluation through a selection test.",
  },
  {
    id: 6,
    question: "What qualifications do the teachers have?",
    answer:
      "Our teachers are highly qualified with degrees from recognized institutions and receive training in both modern and traditional educational methods.",
  },
  {
    id: 7,
    question: "How is enrollment done for the Memorization (Hifz) program?",
    answer:
      "Enrollment in the Hifz program requires proficiency in Quran recitation and knowledge of basic Islamic teachings.",
  },
  {
    id: 8,
    question: "What extracurricular activities are offered?",
    answer:
      "Students are encouraged to participate in debates, cultural competitions, sports, and quizzes to foster personal growth and leadership skills.",
  },
  {
    id: 9,
    question: "Is there residential facility available?",
    answer:
      "Yes, EdManage provides safe and comfortable residential facilities for students.",
  },
  {
    id: 10,
    question: "Is there a separate system for female students?",
    answer:
      "Yes, there is a separate and secure environment for female students to pursue their studies.",
  },
  {
    id: 11,
    question: "Which subjects are taught?",
    answer:
      "Subjects include Quran, Hadith, Arabic, Islamic jurisprudence, science, mathematics, English, and computer skills.",
  },
  {
    id: 12,
    question: "How are students evaluated?",
    answer:
      "Students are evaluated through regular semester-based exams and annual examinations.",
  },
  {
    id: 13,
    question: "Are scholarships available?",
    answer:
      "Yes, financial aid and merit-based scholarships are available for deserving students.",
  },
  {
    id: 14,
    question: "What opportunities are available after graduation?",
    answer:
      "Graduates can pursue higher education, research, teaching, and other professional careers.",
  },
  {
    id: 15,
    question: "How can one make a donation?",
    answer:
      "Donations can be made directly at the office or via the designated bank accounts.",
  },
];

export default function Faq() {
  return (
    <section className="container  mx-auto max-w-7xl px-5 lg:px-0 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        FAQ - EdManage
      </h2>

      <Accordion type="single" collapsible className="mt-6 space-y-3">
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger className="text-gray-800 font-medium text-lg md:text-xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
