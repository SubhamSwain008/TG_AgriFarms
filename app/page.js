import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import AboutProduct from "@/components/AboutProduct";
import AboutUs from "@/components/AboutUs";
import FarmToFactory from "@/components/FarmToFactory";
import ProcessingFacility from "@/components/ProcessingFacility";
import InvestmentMerits from "@/components/InvestmentMerits";
import MarketSize from "@/components/MarketSize";
import B2BCustomers from "@/components/B2BCustomers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <AboutProduct />
      <AboutUs />
      <FarmToFactory />
      <ProcessingFacility />
      <InvestmentMerits />
      <MarketSize />
      <B2BCustomers />
      <Contact />
      <Footer />
    </>
  );
}
