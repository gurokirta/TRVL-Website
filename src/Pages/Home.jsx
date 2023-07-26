import "../App.css";
import { Cards } from "../components/Cards";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};
