"use client";

import Link from "next/link";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareYoutube,
} from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-[#307B74]">
      {/* Main Footer Section */}
      <div className="container mx-auto max-w-7xl px-5 py-24 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#FCFCFC] mb-5">About Us</h2>
          <p className="text-gray-200">
            This madrasa provides Islamic education including Quran, Hadith, and
            Fiqh, along with general subjects like Bangla, English, Mathematics,
            and Science. Ethical teaching and character building are emphasized.
            Hostel and food facilities are available for students.
          </p>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#FCFCFC] mb-5">
            Contact Info
          </h2>
          <ul className="space-y-4 text-[#FCFCFC]">
            <li className="text-md flex items-center gap-3">
              <FiMapPin className="text-xl" />
              <span>Khayerhat Road Head, Daulatkhan, Bhola.</span>
            </li>
            <li className="text-md flex items-center gap-3">
              <FiPhoneCall className="text-xl" /> <span>+880 1314-001928</span>
            </li>
            <li className="text-md flex items-center gap-3">
              <FiMail className="text-xl" />
              <span>talimulummahdbd@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social Media Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#FCFCFC] mb-5">Newsletter</h2>
          <div className="flex items-center">
            <Input placeholder="Enter name" type="text" className="h-12" />
            <Button className="bg-amber-600 hover:bg-amber-700 duration-300 -ml-[68px]">
              Send
            </Button>
          </div>

          <ul className="flex items-center gap-3 text-3xl mt-4 text-white">
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100063198760981"
                target="_blank"
              >
                <FaSquareFacebook />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                <FaSquareInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@TalimulUmmahDBD"
                target="_blank"
              >
                <FaSquareYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t-4 border-[#D8D8D8]">
        <div className="container mx-auto max-w-7xl px-5 lg:px-0 py-10">
          <p className="text-[#FCFCFC]">
            &copy; {currentYear} Talimul Ummah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
