import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import CaptureMomentCard from "../components/capture-moment-card";
import BookingProcessContainer from "../components/booking-process-container";
import CaptivatingMomentsContainer from "../components/captivating-moments-container";
import HappyCustomersCardFormFilterCo from "../components/happy-customers-card-form-filter-co";
import LocationForm from "../components/location-form";
import CaptureMemoriesContainer from "../components/capture-memories-container";
import NewsletterForm1 from "../components/newsletter-form1";
import ContactForm1 from "../components/contact-form1";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <CaptureMomentCard />
      <BookingProcessContainer />
      <CaptivatingMomentsContainer />
      <HappyCustomersCardFormFilterCo />
      <LocationForm />
      <CaptureMemoriesContainer />
      <NewsletterForm1 />
      <ContactForm1 />
      <Footer />
    </div>
  );
};

export default Home;
