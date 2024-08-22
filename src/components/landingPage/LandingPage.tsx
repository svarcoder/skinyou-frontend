import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Apointment from "./Appointment";
import Pricing from "./Pricing";
import Team from "./Team";
import Search from "./Search";
import Testimonials from "./Testimonial";
import Blog from "./Blog";
import Services2 from "./Services2";
import Message from "./Message";

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services2 />
      {/* <Services /> */}
      {/* <Apointment /> */}
      {/* <Pricing /> */}
      {/* <Team /> */}
      {/* <Search /> */}
      <Blog />
      <Testimonials />
      {/* <Message /> */}
    </>
  );
};

export default LandingPage;
