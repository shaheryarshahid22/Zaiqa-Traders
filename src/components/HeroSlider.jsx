import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Share from "./Share";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    // ... your slides stay unchanged
    { image: "slides/slider_image_1.jpg", title: "Top Categories", subtitle: "Shop our most popular baking tools...", buttonText: "Top Categories", buttonColor: "bg-purple-300 hover:bg-purple-400" },
    { image: "slides/slider_image_2.jpg", title: "Premium Baking Tools", subtitle: "Discover high-quality bakeware...", buttonText: "Shop Now", buttonColor: "bg-purple-300 hover:bg-purple-400" },
    { image: "slides/slider_image_3.jpg", title: "Top Brands", subtitle: "Explore trusted brands...", buttonText: "Top Brands", buttonColor: "bg-purple-300 hover:bg-purple-400" },
    { image: "slides/slider_image_4.jpg", title: "All Products", subtitle: "Browse our complete collection...", buttonText: "All Products", buttonColor: "bg-purple-300 hover:bg-purple-400" },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % slides.length); setIsAutoPlaying(false); };
  const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); setIsAutoPlaying(false); };
  const goToSlide = (index) => { setCurrentSlide(index); setIsAutoPlaying(false); };
  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider Images & Content - unchanged */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${index === currentSlide ? "opacity-85" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Content overlay - unchanged */}
      <div className="relative z-10 flex items-center justify-center h-full pb-50">
        <div className="text-center px-6 max-w-4xl animate-fade-in">
          <h1 className="text-7xl font-bold text-gray-900 mt-70 mb-6 drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>
          <p className="text-2xl text-gray-800 mb-8 drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>
          <button className={`${slides[currentSlide].buttonColor} text-purple-800 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer`}>
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>

      {/* Navigation arrows - unchanged */}
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all">
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Bottom Controls - Black & Slightly Smaller Play/Pause */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-8">
        {/* Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-2 bg-black"
                  : "w-2 h-2 bg-black/30 hover:bg-black/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Separator line */}
        <div className="w-px h-8 bg-black/40" />

        {/* Play/Pause Button - Smaller & Black */}
        <button
          onClick={toggleAutoPlay}
          className="w-6 h-6 rounded-full border-2 border-black/50 hover:border-black transition-all duration-300 flex items-center justify-center"
          aria-label={isAutoPlaying ? "Pause" : "Play"}
        >
          {isAutoPlaying ? (
            // Pause: two black bars
            <div className="flex gap-1">
              <span className="w-1 h-3 bg-black rounded-full"></span>
              <span className="w-1 h-3 bg-black rounded-full"></span>
            </div>
          ) : (
            // Play: solid black dot
            <div className="w-3 h-3 bg-black rounded-full"></div>
          )}
        </button>
      </div>

      <Share />
    </section>
  );
}