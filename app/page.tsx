import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import FeaturedProducts from "../sections/FeaturedProducts";
import WhyChooseUs from "../sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
    </main>
  );
}