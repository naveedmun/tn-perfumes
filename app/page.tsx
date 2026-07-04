import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import FeaturedProducts from "../sections/FeaturedProducts";
import WhyChooseUs from "../sections/WhyChooseUs";
import DealOfTheDay from "../sections/DealOfTheDay";
import CustomerReviews from "../sections/CustomerReviews";
import Footer from "../components/footer";
import WhatsAppButton from "../components/WhatsAppButton";
import FeaturedBrands from "../sections/FeaturedBrands";


export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <DealOfTheDay />
      <FeaturedBrands />
      <FeaturedProducts />
      <WhyChooseUs />
      <CustomerReviews />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}