import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Share from "./Share";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: "slides/slider_image_1.jpg",
      title: "Top Categories",
      subtitle: "Shop our most popular baking tools, ingredients, and packaging. All in one place!",
      buttonText: "Top Categories",
      buttonColor: "bg-purple-300 hover:bg-purple-400",
    },
    {
      image: "slides/slider_image_2.jpg",
      title: "Premium Baking Tools",
      subtitle: "Discover high-quality bakeware and tools for professional results",
      buttonText: "Shop Now",
      buttonColor: "bg-purple-300 hover:bg-purple-400",
    },
    {
      image: "slides/slider_image_3.jpg",
      title: "Top Brands",
      subtitle: "Explore trusted brands loved by bakers worldwide",
      buttonText: "Top Brands",
      buttonColor: "bg-purple-300 hover:bg-purple-400",
    },
    {
      image: "slides/slider_image_4.jpg",
      title: "All Products",
      subtitle: "Browse our complete collection of baking supplies and ingredients",
      buttonText: "All Products",
      buttonColor: "bg-purple-300 hover:bg-purple-400",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-85" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Slider Content */}
      <div className="relative z-10 flex items-center justify-center h-full pb-50">
        <div className="text-center px-6 max-w-4xl animate-fade-in">
          <h1 className="text-7xl font-bold text-gray-900 mt-70 mb-6 drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>
          <p className="text-2xl text-gray-800 mb-8 drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>
          <button
            className={`${slides[currentSlide].buttonColor} text-purple-800 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer`}
          >
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-10 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}

        {/* Play/Pause Button */}
        <button
          onClick={toggleAutoPlay}
          className="ml-4 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
        >
          {isAutoPlaying ? (
            <div className="w-2 h-2 flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-gray-500"></div>
                <div className="w-1 h-3 bg-gray-500"></div>
              </div>
            </div>
          ) : (
            <div className="w-2 h-2 flex items-center justify-center">
              <div className="w-0 h-2.5 border-l-8 border-l-gray-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          )}
        </button>
      </div>

      {/* Share Button */}
      <Share />
    </section>
  );
}
