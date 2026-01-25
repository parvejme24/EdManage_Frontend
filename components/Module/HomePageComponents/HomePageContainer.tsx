import React from "react";
import Banner from "./Banner/Banner";
import OurSpecialities from "./OurSpecialities/OurSpecialities";
import AboutUs from "./AboutUs/AboutUs";
import OurPrincipal from "./OurPrincipal/OurPrincipal";
import OurTeachers from "./OurTeachers/OurTeachers";
import NoticeBaord from "./NoticeBoard/NoticeBaord";
import OurAdvisor from "./OurAdvisor/OurAdvisor";
import WhatParentsSay from "./WhatParentsSay/WhatParentsSay";

export default function HomePageContainer() {
  return (
    <div>
      <Banner />
      <OurSpecialities />
      <AboutUs />
      <OurPrincipal />
      <OurTeachers />
      <NoticeBaord />
      <OurAdvisor />
      <WhatParentsSay />
    </div>
  );
}
