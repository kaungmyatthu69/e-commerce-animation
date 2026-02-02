import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col w-full">
        <Hero />
        <Trending />
        <Categories />
        <FeaturedProducts />
        <Benefits />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
