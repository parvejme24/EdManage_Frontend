import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import MissionObjectives from "./MissionObjectives/MissionObjectives";
import FAQ from "./FAQ/FAQ";
import PageHeader from "@/components/SharedComponents/PageHeader/PageHeader";

export default function AboutPageContainer() {
  return (
    <div>
      <PageHeader children={"About Us"} />
      <AboutUs />
      <MissionObjectives />
      <FAQ />
    </div>
  );
}
1;
