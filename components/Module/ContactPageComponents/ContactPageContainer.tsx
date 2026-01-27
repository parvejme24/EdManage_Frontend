import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import Map from "./Map/Map";
import Link from "next/link";

export default function ContactPageContainer() {
  return (
    <div>
      <div className="px-5 lg:px-0">
        <div className="container mx-auto max-w-7xl p-5 bg-[#F2F2F2] my-6">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>{" "}
          / Contact
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-5 lg:px-0 my-10 grid grid-cols-1 md:grid-cols-3">
        <div>
          <ContactInfo />
        </div>
        <div className="md:col-span-2 h-[500px] md:h-auto">
          <Map />
        </div>
      </div>
    </div>
  );
}
