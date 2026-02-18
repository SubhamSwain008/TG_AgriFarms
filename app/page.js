import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import AboutProduct from "@/components/AboutProduct";
import AboutUs from "@/components/AboutUs";
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
      <Contact />
      <Footer />
    </>
  );
}
