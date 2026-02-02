import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";
import Newsletter from "@/components/Newsletter";

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

      <footer className="py-10 border-t border-border bg-background">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
