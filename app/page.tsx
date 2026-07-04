import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import FeaturedProducts from "../sections/FeaturedProducts";
import WhyChooseUs from "../sections/WhyChooseUs";
import DealOfTheDay from "../sections/DealOfTheDay";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <DealOfTheDay />
      <FeaturedProducts />
      <WhyChooseUs />
    </main>
  );
}