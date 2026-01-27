"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import BG2 from "@/public/assets/images/bg/bg2.png";
import V1 from "@/public/assets/icons/v1.png";
import V2 from "@/public/assets/icons/v2.png";
import BannerImage from "@/public/assets/images/banner.png";

export default function Banner() {
  return (
    <section
      className="bg-no-repeat bg-cover -mt-[100px]"
      style={{ backgroundImage: `url(${BG2.src})` }}
    >
      <div className="container mx-auto max-w-7xl px-5 pt-[210px] md:pt-[250px] lg:pt-[300px] lg:px-0">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-5 lg:pb-28">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Smart Education Management.
              </h2>

              <Image
                src={V2}
                alt="decorative line"
                className="ml-28"
                draggable={false}
              />
            </div>

            <p className="text-emerald-700 leading-relaxed">
              EdManage is a modern education management platform designed to
              streamline academic operations and enhance learning experiences.
              From managing classrooms and teachers to tracking students and
              performance, EdManage brings everything together in one powerful
              system.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-10 mt-10">
              <Stat value="20+" label="Classrooms" />
              <Stat value="30+" label="Teachers" />
              <Stat value="400+" label="Students" />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-5 mt-14">
              <Button
                asChild
                variant="outline"
                className="border-emerald-600 text-emerald-600"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>

              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <Image src={BannerImage} alt="banner image" priority />
          </div>

          {/* Floating Decoration */}
          <Image
            src={V1}
            alt="decorative shape"
            className="absolute right-20 top-20 hidden lg:block"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Small Reusable Component ---------- */
type StatProps = {
  value: string;
  label: string;
};

function Stat({ value, label }: StatProps) {
  return (
    <div className="text-2xl text-center">
      <p className="font-bold">{value}</p>
      <p className="text-base">{label}</p>
    </div>
  );
}
