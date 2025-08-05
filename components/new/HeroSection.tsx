"use client";
import { useEffect } from "react";
import { UserIcon, FileTextIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function HeroSection() {
  const handleScroll = () => {
    const target = document.getElementById("despre");
    if (target) {
      target.classList.remove("hidden", "opacity-0");
      target.classList.add("block", "opacity-100");
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const target = document.getElementById("despre");
    if (!target) return;

    const isMobile = window.innerWidth < 768;

    const handleScroll = () => {
      if (
        isMobile &&
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 10 &&
        target.classList.contains("hidden")
      ) {
        target.classList.remove("hidden", "opacity-0");
        target.classList.add("block", "opacity-100");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">
              Respiră Terapie
              <br />
              pentru
              <br />
              Bunăstarea Ta
            </h1>
            <div className="hero-button-container">
              <button className="hero-button">
                Începe cu o ședință gratuită
              </button>
            </div>
          </div>
          <div className="hero-cards">
            <ServiceCard
              icon={<UserIcon className="w-14 h-14" />}
              title="Terapie Individuală"
              href="/terapie-individuala"
            />
            <ServiceCard
              icon={<FileTextIcon className="w-14 h-14" />}
              title="Evaluare Psihologică"
              href="/evaluare-psihologica"
            />
          </div>
        </div>
      </section>

      {/* Un singur indicator sticky care dispare când secțiunea e vizibilă */}
      <div
        id="scroll-indicator"
        className="sticky bottom-0 w-full bg-[#C0E3D3] py-6 px-6 text-center z-50 shadow-inner flex flex-col items-center transition-opacity duration-700"
      >
        <p className="text-green-900 font-semibold text-lg mb-2 text-center">
          <span className="font-extrabold">Află despre noi</span>
          <br className="hidden md:block" />
          <span className="hidden md:inline">
            Click pentru a citi mai departe
          </span>
        </p>

        <button onClick={handleScroll} className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <div className="scroll-bg-extension"></div>
    </>
  );
}
