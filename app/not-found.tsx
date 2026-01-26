"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import BG1 from "@/public/assets/images/bg/bg1.png";

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${BG1.src})` }}
    >
      <div className="text-center border rounded-3xl p-10 md:p-20 bg-white/80 shadow-xl">
        {/* 404 */}
        <h2 className="text-[#307B74] text-[150px] md:text-[200px] lg:text-[300px] font-bold leading-none -mt-10">
          4<span className="text-amber-500">0</span>4
        </h2>

        {/* Message */}
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-700 mt-5">
          Sorry, the page was not found.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link href="/">
            <Button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-md cursor-pointer">
              Go Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
