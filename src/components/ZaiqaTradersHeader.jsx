// src/ZaiqaTradersHeader.jsx
import React, { useState, useEffect, useRef } from "react";
import HeroSlider from "./HeroSlider";
import Sample from "./Sample";
import TopCategoriesGrid from "./TopCategoriesGrid";
import ProductCard from "./ProductCard";
import WhyChooseUs from "./WhyChooseUs";
import TopBrands from "./TopBrands";
import Footer from "./Footer";

export default function ZaiqaTradersHeader() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [shareOpen, setShareOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    {
      name: "Bakeware & Baking Tools",
      hasDropdown: true,
      items: [
        "Baking Pans", "Mixing Bowls", "Measuring Tools", "Spatulas",
        "Whisks", "Rolling Pins", "Baking Sheets", "Molds",
      ],
    },
    {
      name: "Cake Decorating Supplies",
      hasDropdown: true,
      items: [
        "Cake Stands", "Cake Toppers", "Fondant Tools", "Icing Tools",
        "Decoration Tools", "Cutters", "Stencils", "Food & Gel Colors",
      ],
    },
    {
      name: "Ingredients",
      hasDropdown: true,
      items: [
        "Flour", "Sugar", "Baking Powder", "Yeast",
        "Vanilla Extract", "Cocoa Powder", "Food Colors", "Essences",
      ],
    },
    {
      name: "Packaging & Presentation",
      hasDropdown: true,
      items: [
        "Cake Boxes", "Cupcake Boxes", "Gift Bags", "Ribbons",
        "Labels", "Disposable Plates", "Serving Trays", "Bakery Bags",
      ],
    },
  ];

  const bottomMenuItems = [
    {
      name: "Chocolates",
      hasDropdown: true,
      items: [
        "Dark Chocolate", "Milk Chocolate", "White Chocolate", "Chocolate Chips",
        "Compound Chocolate", "Cocoa Butter", "Chocolate Molds",
      ],
    },
    {
      name: "Top Brands",
      hasDropdown: true,
      items: [
        "Wilton", "Americolor", "Satin Ice", "Callebaut",
        "PME", "FunCakes", "Rainbow Dust", "Cake Mate",
      ],
    },
    { name: "Discounts & Deals", hasDropdown: false, items: [] },
  ];

  const slides = [
    {
      image: "/slider_image_1.jpg",
      title: "Top Categories",
      subtitle: "Shop our most popular baking tools, ingredients, and packaging. All in one place!",
      buttonText: "Top Categories",
      buttonColor: "bg-purple-300 hover:bg-purple-400",
    },
    {
      image: "/slider_image_2.jpg",
      title: "Premium Baking Tools",
      subtitle: "Discover high-quality bakeware and tools for professional results",
      buttonText: "Shop Now",
      buttonColor: "bg-purple-300 hover:bg-purple-400",
    },
    {
      image: "/slider_image_3.jpg",
      title: "Top Brands",
      subtitle: "Explore trusted brands loved by bakers worldwide",
      buttonText: "Top Brands",
      buttonColor: "bg-purple-300 hover:bg-purple-400",
    },
    {
      image: "/slider_image_4.jpg",
      title: "All Products",
      subtitle: "Browse our complete collection of baking supplies and ingredients",
      buttonText: "All Products",
      buttonColor: "bg-purple-300 hover:bg-purple-400",
    },
  ];

  const products = [
    { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: '/p1_image_1.jpg', image2: '/p1_image_2.jpg', sale: true },
    { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: '/p2_image_1.jpg', image2: '/p2_image_2.jpg', sale: false },
    { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: '/p3_image_1.jpg', image2: '/p3_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: '/p4_image_1.jpg', image2: '/p4_image_2.jpg', sale: false },
    { name: 'Chocolate Chips', price: 'Rs.510.00', image1: '/p5_image_1.jpg', image2: '/p5_image_2.jpg', sale: false },
    { name: 'Dezaan Dutch Processed Dark Cocoa Powder', price: 'Rs.1,890.00', image1: '/p6_image_1.jpg', image2: '/p6_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 70% 70-30-38', price: 'Rs.3,640.00', image1: '/p7_image_1.jpg', image2: '/p7_image_2.jpg', sale: false },
    { name: 'Round Cake Pan GI', price: 'Rs.250.00', image1: '/p8_image_1.jpg', image2: '/p8_image_2.jpg', sale: false },
    { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: '/p9_image_1.jpg', image2: '/p9_image_2.jpg', sale: true },
    { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: '/p10_image_1.jpg', image2: '/p10_image_2.jpg', sale: false },
    { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: '/p11_image_1.jpg', image2: '/p11_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: '/p12_image_1.jpg', image2: '/p12_image_2.jpg', sale: false },
  ];

  const freshArrivals = [
    { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: '/fa1_image_1.jpg', image2: '/fa1_image_2.jpg', sale: true },
    { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: '/fa2_image_1.jpg', image2: '/fa2_image_2.jpg', sale: false },
    { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: '/fa3_image_1.jpg', image2: '/fa3_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: '/fa4_image_1.jpg', image2: '/fa4_image_2.jpg', sale: false },
    { name: 'Chocolate Chips', price: 'Rs.510.00', image1: '/fa5_image_1.jpg', image2: '/fa5_image_2.jpg', sale: false },
    { name: 'Dezaan Dutch Processed Dark Cocoa Powder', price: 'Rs.1,890.00', image1: '/fa6_image_1.jpg', image2: '/fa6_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 70% 70-30-38', price: 'Rs.3,640.00', image1: '/fa7_image_1.jpg', image2: '/fa7_image_2.jpg', sale: false },
    { name: 'Round Cake Pan GI', price: 'Rs.250.00', image1: '/fa8_image_1.jpg', image2: '/fa8_image_2.jpg', sale: false },
    { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: '/fa9_image_1.jpg', image2: '/fa9_image_2.jpg', sale: true },
    { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: '/fa10_image_1.jpg', image2: '/fa10_image_2.jpg', sale: false },
    { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: '/fa11_image_1.jpg', image2: '/fa11_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: '/fa12_image_1.jpg', image2: '/fa12_image_2.jpg', sale: false },
  ];

  // Auto-play slider
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
    <div className="min-h-screen bg-gray-10">
      {/* Full-screen Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Slider Background + Controls */}
        <HeroSlider
          slides={slides}
          currentSlide={currentSlide}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          goToSlide={goToSlide}
          isAutoPlaying={isAutoPlaying}
          toggleAutoPlay={toggleAutoPlay}
          shareOpen={shareOpen}
          setShareOpen={setShareOpen}
        />

        {/* Navbar — Exactly centered on top of slider (Original Design) */}
       <header
          ref={navbarRef}
          className="absolute inset-x-0 top-0 z-20 mx-auto"
          style={{ maxWidth: "1400px" }}
        >
          <Sample
            menuItems={menuItems}
            bottomMenuItems={bottomMenuItems}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
          />
        </header>
      </section>

      {/* Rest of the page */}
      <TopCategoriesGrid />

      {/* Handpicked Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Handpicked Bakery Essentials
          </h2>
          <p className="text-lg text-gray-600">
            From mixers to molds, find the best bakery supplies in Pakistan. Perfect for home bakers and professionals alike.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {/* Fresh Arrivals */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Freshly Arrived Bakery Essentials
          </h2>
          <p className="text-lg text-gray-600">
            Explore the latest bakery supplies, from mixers to molds. Perfect for home bakers and professionals seeking fresh trends and tools in Pakistan!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {freshArrivals.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <WhyChooseUs />
      <TopBrands />
      <Footer />
    </div>
  );
}