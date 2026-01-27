import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl px-5 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              About EdManage
            </h3>

            <p className="text-[#6E6E6E] leading-relaxed">
              EdManage is a comprehensive education management platform designed
              to support institutions that combine academic excellence with
              character development. Alongside core subjects such as language,
              mathematics, and science, EdManage helps institutions organize
              teaching, manage students, and streamline daily academic
              operations.
            </p>

            <p className="text-[#6E6E6E] leading-relaxed">
              With experienced educators, structured learning processes, and
              digital tools, EdManage empowers schools and educational
              institutions to deliver quality education while nurturing ethical
              values, discipline, and personal growth.
            </p>

            {/* Actions */}
            <div className="flex gap-5 pt-8">
              <Button
                asChild
                variant="outline"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-700 hover:text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>

              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/h9BtIWekM7s"
              title="Educational Overview Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
