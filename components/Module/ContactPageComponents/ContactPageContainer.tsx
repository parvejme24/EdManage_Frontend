import ContactInfo from "./ContactInfo/ContactInfo";
import Map from "./Map/Map";
import PageHeader from "@/components/SharedComponents/PageHeader/PageHeader";

export default function ContactPageContainer() {
  return (
    <div>
      <PageHeader children={"Contact"} />
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
