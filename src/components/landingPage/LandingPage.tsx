import React, { useEffect, useState } from "react";
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
import { fetchInstagramPosts } from "../../services/instagramService";
import Instagram from "./Instagram";
interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
}

const LandingPage: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const accessToken = "";

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchInstagramPosts();
      setPosts(fetchedPosts);
    };

    getPosts();
  }, []);

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
      <Instagram />
      <Blog />
      <Testimonials />
      {/* <Message /> */}
    </>
  );
};

export default LandingPage;
