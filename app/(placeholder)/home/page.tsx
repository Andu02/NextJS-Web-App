import Navbar from "@/components/new/Navbar";
import HeroSection from "@/components/new/HeroSection";
import Footer from "@/components/new/Footer";
import "@/app/globals.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // asigură-te că acest fișier există

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        {/* Secțiunea “Cine suntem?” */}
        <section
          id="despre"
          className="hidden opacity-0 transition-opacity duration-700 ease-in-out bg-[#C0E3D3] text-green-900 py-20 px-6 text-center min-h-[80vh] flex flex-col items-center justify-center"
        >
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6">Cine suntem?</h2>
            <p className="text-lg leading-relaxed">
              Suntem o echipă de specialiști dedicați sănătății tale mintale.
              Oferim servicii de terapie individuală, evaluare psihologică și
              sprijin personalizat într-un spațiu sigur, empatic și profesional.
            </p>
          </div>

          {/* Carousel Testimonials */}
          <div className="w-full max-w-xl mx-auto overflow-hidden rounded-xl bg-white">
            <Carousel className="rounded-xl bg-white">
              <CarouselContent>
                {[1, 2, 3].map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="p-6 text-center text-green-900"
                  >
                    <p className="text-lg italic">
                      „Am simțit că cineva chiar mă ascultă. Mulțumesc din
                      suflet!”
                    </p>
                    <span className="mt-4 block font-semibold">
                      Client #{item}
                    </span>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
