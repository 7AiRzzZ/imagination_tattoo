import React from "react";

import Navbar from "../../components/layout/navbar";
import Acceuil from "./section/acceuil";
import Tattoo from "./section/tattoo";
import Creation from "./section/creation";
import Custom from "./section/customtattoo";
import FooterMobile from "../../components/layout/footer/mobile";

const Home = () => {
  return (
    <section>
      <Navbar />
      <Acceuil />
      <Tattoo />
      <Creation />
      <Custom />
      <FooterMobile />
    </section>
  );
};

export default Home;
