// ORIGINAL DESIGN
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Search,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Share2,
  Plus,
  Shield,
  Star,
  Truck
} from "lucide-react";

export default function OriginalZT() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [shareOpen, setShareOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close dropdown on outside click
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
        "Baking Pans",
        "Mixing Bowls",
        "Measuring Tools",
        "Spatulas",
        "Whisks",
        "Rolling Pins",
        "Baking Sheets",
        "Molds",
      ],
    },
    {
      name: "Cake Decorating Supplies",
      hasDropdown: true,
      items: [
        "Cake Stands",
        "Cake Toppers",
        "Fondant Tools",
        "Icing Tools",
        "Decoration Tools",
        "Cutters",
        "Stencils",
        "Food & Gel Colors",
      ],
    },
    {
      name: "Ingredients",
      hasDropdown: true,
      items: [
        "Flour",
        "Sugar",
        "Baking Powder",
        "Yeast",
        "Vanilla Extract",
        "Cocoa Powder",
        "Food Colors",
        "Essences",
      ],
    },
    {
      name: "Packaging & Presentation",
      hasDropdown: true,
      items: [
        "Cake Boxes",
        "Cupcake Boxes",
        "Gift Bags",
        "Ribbons",
        "Labels",
        "Disposable Plates",
        "Serving Trays",
        "Bakery Bags",
      ],
    },
  ];

  const bottomMenuItems = [
    {
      name: "Chocolates",
      hasDropdown: true,
      items: [
        "Dark Chocolate",
        "Milk Chocolate",
        "White Chocolate",
        "Chocolate Chips",
        "Compound Chocolate",
        "Cocoa Butter",
        "Chocolate Molds",
      ],
    },
    {
      name: "Top Brands",
      hasDropdown: true,
      items: [
        "Wilton",
        "Americolor",
        "Satin Ice",
        "Callebaut",
        "PME",
        "FunCakes",
        "Rainbow Dust",
        "Cake Mate",
      ],
    },
    {
      name: "Discounts & Deals",
      hasDropdown: false,
      items: [],
    },
  ];

  const slides = [
    {
      image: "/slider_image_1.jpg",
      title: "Top Categories",
      subtitle:
        "Shop our most popular baking tools, ingredients, and packaging. All in one place!",
      buttonText: "Top Categories",
      buttonColor: "bg-purple-300 hover:bg-purple-400",
    },
    {
      image: "/slider_image_2.jpg",
      title: "Premium Baking Tools",
      subtitle:
        "Discover high-quality bakeware and tools for professional results",
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
      subtitle:
        "Browse our complete collection of baking supplies and ingredients",
      buttonText: "All Products",
      buttonColor: "bg-purple-300 hover:bg-purple-400",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: '100% Authentic Brands',
      description: 'We stock only verified, original products from trusted global and local baking brands. No imitations, ever.'
    },
    {
      icon: Star,
      title: 'Premium Quality Ingredients',
      description: 'From couverture chocolate to top-grade flours, we bring you bakery-standard ingredients for flawless results.'
    },
    {
      icon: Truck,
      title: 'Fast & Reliable Nationwide Delivery',
      description: 'Wherever you bake in Pakistan, we deliver your supplies quickly, safely, and on time. Guaranteed!'
    }
  ]


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

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen bg-gray-10">
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Slider Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-85" : "opacity-0"
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

        {/* Navbar - Centered on Slider */}
        <header
          ref={navbarRef}
          className="relative z-20 mx-auto"
          style={{ maxWidth: "1400px" }}
        >
          <div
            className="bg-white backdrop-blur-sm shadow-2xl mx-6"
            style={{ borderRadius: "0 0 80px 80px" }}
          >
            <div className="px-8 py-6">
              {/* Top Navigation - Centered */}
              <div className="flex items-center justify-center mb-4 gap-12">
                {/* Logo */}
                <div className="flex items-center">
                  <img
                    src="/zaiqa_logo.png"
                    alt="Zaiqa Traders Logo"
                    className="w-20 h-20 object-contain"
                  />
                  <div className="ml-3">
                    <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      Zaiqa Traders™
                    </div>
                  </div>
                </div>

                {/* Main Menu - Centered */}
                <nav className="flex items-center space-x-6">
                  {menuItems.map((item, idx) => (
                    <div key={idx} className="relative">
                      <button
                        onClick={() =>
                          item.hasDropdown && toggleDropdown(item.name)
                        }
                        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm"
                      >
                        <span>{item.name}</span>
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""
                              }`}
                          />
                        )}
                      </button>

                      {item.hasDropdown && activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                          {item.items.map((subItem, subIdx) => (
                            <a
                              key={subIdx}
                              href="#"
                              onClick={() => setActiveDropdown(null)}
                              className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Cart & Search Icons */}
                <div className="flex items-center space-x-3">
                  <button className="p-2 hover:bg-purple-100 rounded-full transition-colors">
                    <Search className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="p-2 hover:bg-purple-100 rounded-full transition-colors relative">
                    <ShoppingCart className="w-5 h-5 text-gray-700" />
                    <span className="absolute -top-1 -right-1 bg-purple-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </span>
                  </button>
                </div>
              </div>

              {/* Bottom Menu - Centered */}
              <div className="flex items-center justify-center space-x-8 pt-2">
                {bottomMenuItems.map((item, idx) => (
                  <div key={idx} className="relative">
                    <button
                      onClick={() =>
                        item.hasDropdown && toggleDropdown(item.name)
                      }
                      className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm"
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                        />
                      )}
                    </button>

                    {item.hasDropdown && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        {item.items.map((subItem, subIdx) => (
                          <a
                            key={subIdx}
                            href="#"
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Slider Content */}
        <div className="relative z-10 flex items-center justify-center h-full pb-50">
          <div className="text-center px-6 max-w-4xl animate-fade-in">
            <h1 className="text-7xl font-bold text-gray-900 mb-6 drop-shadow-2xl">
              {slides[currentSlide].title}
            </h1>
            <p className="text-2xl text-gray-800 mb-8 drop-shadow-lg">
              {slides[currentSlide].subtitle}
            </p>
            <button
              className={`${slides[currentSlide].buttonColor} text-gray-800 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
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

        {/* Share Button - Left Side */}
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-30 mt-50">
          <div className="relative">
            {/* Share Options */}
            <div
              className={`absolute left-0 bottom-20 transition-all duration-300 ${shareOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >
              <div className="flex flex-col gap-3 mb-4">
                <a
                  href="https://www.facebook.com/sharer/sharer.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/intent/tweet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/?text="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Main Share Button */}
            <div className="relative">
              <div
                className="absolute -left-1 top-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-[7px] px-2 py-3 text-xs font-medium tracking-wider"
                style={{
                  writingMode: "vertical-rl",
                  transform: "translateY(-60%) rotate(180deg)",
                }}
              >
                SHARE
              </div>
              <button
                onClick={() => setShareOpen(!shareOpen)}
                className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all transform ${shareOpen
                  ? "bg-purple-600 rotate-45"
                  : "bg-gradient-to-r from-purple-300 to-purple-500 hover:bg-purple-600"
                  }`}
                style={{ marginLeft: "28px", marginTop: "-70px" }}
              >
                {shareOpen ? (
                  <Plus className="w-5.5 h-5.5 text-white" />
                ) : (
                  <Share2 className="w-4.5 h-4.5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

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
              className={`transition-all duration-300 rounded-full ${index === currentSlide
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
      </section>

      {/* Page Title Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-5xl font-bold text-black-800 text-center">
          Top Categories
        </h2>
      </div>

      {/* Top Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: "category1.jpg", title: "Bakeware" },
            { img: "category2.jpg", title: "Baking Tools" },
            { img: "category3.jpg", title: "Decoration Tools" },
            { img: "category4.jpg", title: "Cake Toppers" },
            { img: "category5.jpg", title: "Stencils" },
            { img: "category6.jpg", title: "Food & Gel Colors" },
            { img: "category7.jpg", title: "Sprinkles" },
            { img: "category8.jpg", title: "Ingredients" },
            { img: "category9.jpg", title: "Packaging" },
            { img: "category10.jpg", title: "Molds" },
            { img: "category11.jpg", title: "Compound Chocolate" },
            { img: "category12.jpg", title: "Couverture Chocolate" },
          ].map((category, index) => (
            <div
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={`/${category.img}`}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-400 transform-gpu will-change-transform group-hover:scale-110"
                />
              </div>

              {/* Black Fade Top */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/100 to-transparent pointer-events-none"></div>

              {/* Black Fade Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>

              {/* Text Center Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  className="text-white text-3xl font-bold"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    textShadow: "2px 2px 2px rgba(147, 51, 234, 0.8)",
                  }}
                >
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Handpicked Bakery Essentials Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Handpicked Bakery Essentials
          </h2>
          <p className="text-lg text-gray-600">
            From mixers to molds, find the best bakery supplies in Pakistan. Perfect for home bakers and professionals alike.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'Barry Callebaut Dark Cocoa Powder',
              price: 'Rs.1,420.00',
              originalPrice: 'Rs.29,500.00',
              image1: '/p1_image_1.jpg',
              image2: '/p1_image_2.jpg',
              sale: true
            },
            {
              name: 'Callebaut Milk Chocolate Callets 33% 823',
              price: 'Rs.3,330.00',
              image1: '/p2_image_1.jpg',
              image2: '/p2_image_2.jpg',
              sale: false
            },
            {
              name: 'Master Martini Shine Milk Chocolate Buttons',
              price: 'Rs.810.00',
              image1: '/p3_image_1.jpg',
              image2: '/p3_image_2.jpg',
              sale: false
            },
            {
              name: 'Callebaut Dark Chocolate Callets 54% 811',
              price: 'Rs.3,260.00',
              image1: '/p4_image_1.jpg',
              image2: '/p4_image_2.jpg',
              sale: false
            },
            {
              name: 'Chocolate Chips',
              price: 'Rs.510.00',
              image1: '/p5_image_1.jpg',
              image2: '/p5_image_2.jpg',
              sale: false
            },
            {
              name: 'Dezaan Dutch Processed Dark Cocoa Powder',
              price: 'Rs.1,890.00',
              image1: '/p6_image_1.jpg',
              image2: '/p6_image_2.jpg',
              sale: false
            },
            {
              name: 'Callebaut Dark Chocolate Callets 70% 70-30-38',
              price: 'Rs.3,640.00',
              image1: '/p7_image_1.jpg',
              image2: '/p7_image_2.jpg',
              sale: false
            },
            {
              name: 'Round Cake Pan GI',
              price: 'Rs.250.00',
              image1: '/p8_image_1.jpg',
              image2: '/p8_image_2.jpg',
              sale: false
            },
            {
              name: 'Barry Callebaut Dark Cocoa Powder',
              price: 'Rs.1,420.00',
              originalPrice: 'Rs.29,500.00',
              image1: '/p9_image_1.jpg',
              image2: '/p9_image_2.jpg',
              sale: true
            },
            {
              name: 'Callebaut Milk Chocolate Callets 33% 823',
              price: 'Rs.3,330.00',
              image1: '/p10_image_1.jpg',
              image2: '/p10_image_2.jpg',
              sale: false
            },
            {
              name: 'Master Martini Shine Milk Chocolate Buttons',
              price: 'Rs.810.00',
              image1: '/p11_image_1.jpg',
              image2: '/p11_image_2.jpg',
              sale: false
            },
            {
              name: 'Callebaut Dark Chocolate Callets 54% 811',
              price: 'Rs.3,260.00',
              image1: '/p12_image_1.jpg',
              image2: '/p12_image_2.jpg',
              sale: false
            }
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                {product.sale && (
                  <span className="absolute top-3 left-3 z-10 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Sale
                  </span>
                )}

                {/* Default Image */}
                <img
                  src={product.image1}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 transform-gpu will-change-transform group-hover:opacity-0"
                />

                {/* Hover Image */}
                <img
                  src={product.image2}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 transform-gpu will-change-transform opacity-0 group-hover:opacity-100 cursor-pointer"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2 min-h-12 group-hover:underline transition-all cursor-pointer">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-lg font-bold text-gray-900">
                    From {product.price}
                  </span>
                </div>

                <button className="w-full py-2.5 border-2 border-purple-200 text-purple-600 rounded-full font-medium hover:bg-purple-100 transition-colors duration-200 transform-gpu will-change-transform cursor-pointer">
                  Choose options
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Freshly Arrived Bakery Essentials Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Freshly Arrived Bakery Essentials
          </h2>
          <p className="text-lg text-gray-600">
            Explore the latest bakery supplies, from mixers to molds. Perfect for home bakers and professionals seeking fresh trends and tools in Pakistan!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'Barry Callebaut Dark Cocoa Powder',
              price: 'Rs.1,420.00',
              originalPrice: 'Rs.29,500.00',
              image1: '/fa1_image_1.jpg',
              image2: '/fa1_image_2.jpg',
              sale: true
            },
            {
              name: 'Callebaut Milk Chocolate Callets 33% 823',
              price: 'Rs.3,330.00',
              image1: '/fa2_image_1.jpg',
              image2: '/fa2_image_2.jpg',
              sale: false
            },
            {
              name: 'Master Martini Shine Milk Chocolate Buttons',
              price: 'Rs.810.00',
              image1: '/fa3_image_1.jpg',
              image2: '/fa3_image_2.jpg',
              sale: false
            },
            {
              name: 'Callebaut Dark Chocolate Callets 54% 811',
              price: 'Rs.3,260.00',
              image1: '/fa4_image_1.jpg',
              image2: '/fa4_image_2.jpg',
              sale: false
            },
            {
              name: 'Chocolate Chips',
              price: 'Rs.510.00',
              image1: '/fa5_image_1.jpg',
              image2: '/fa5_image_2.jpg',
              sale: false
            },
            {
              name: 'Dezaan Dutch Processed Dark Cocoa Powder',
              price: 'Rs.1,890.00',
              image1: '/fa6_image_1.jpg',
              image2: '/fa6_image_2.jpg',
              sale: false
            },
            {
              name: 'Callebaut Dark Chocolate Callets 70% 70-30-38',
              price: 'Rs.3,640.00',
              image1: '/fa7_image_1.jpg',
              image2: '/fa7_image_2.jpg',
              sale: false
            },
            {
              name: 'Round Cake Pan GI',
              price: 'Rs.250.00',
              image1: '/fa8_image_1.jpg',
              image2: '/fa8_image_2.jpg',
              sale: false
            },
            {
              name: 'Barry Callebaut Dark Cocoa Powder',
              price: 'Rs.1,420.00',
              originalPrice: 'Rs.29,500.00',
              image1: '/fa9_image_1.jpg',
              image2: '/fa9_image_2.jpg',
              sale: true
            },
            {
              name: 'Callebaut Milk Chocolate Callets 33% 823',
              price: 'Rs.3,330.00',
              image1: '/fa10_image_1.jpg',
              image2: '/fa10_image_2.jpg',
              sale: false
            },
            {
              name: 'Master Martini Shine Milk Chocolate Buttons',
              price: 'Rs.810.00',
              image1: '/fa11_image_1.jpg',
              image2: '/fa11_image_2.jpg',
              sale: false
            },
            {
              name: 'Callebaut Dark Chocolate Callets 54% 811',
              price: 'Rs.3,260.00',
              image1: '/fa12_image_1.jpg',
              image2: '/fa12_image_2.jpg',
              sale: false
            }
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                {product.sale && (
                  <span className="absolute top-3 left-3 z-10 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Sale
                  </span>
                )}

                {/* Default Image */}
                <img
                  src={product.image1}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 transform-gpu will-change-transform group-hover:opacity-0"
                />

                {/* Hover Image */}
                <img
                  src={product.image2}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 transform-gpu will-change-transform opacity-0 group-hover:opacity-100 cursor-pointer"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2 min-h-12 group-hover:underline transition-all cursor-pointer">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-lg font-bold text-gray-900">
                    From {product.price}
                  </span>
                </div>

                <button className="w-full py-2.5 border-2 border-purple-200 text-purple-600 rounded-full font-medium hover:bg-purple-100 transition-colors duration-200 transform-gpu will-change-transform cursor-pointer">
                  Choose options
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* Why choose us Section */}
      <div className="w-full bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Choose Zaiqa Traders?
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-5xl mx-auto leading-relaxed">
              At <span className="font-semibold">Zaiqa Traders</span>, we bring you the finest baking ingredients, tools, and accessories, all in one place. Whether you're a home baker or a professional pastry chef, our curated selection ensures top quality, reliability, and creative inspiration for every bake.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="w-16 h-16 text-purple-500" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-lg leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Shop Now Button */}
          <div className="text-center">
            <button className="bg-white text-purple-400 font-semibold text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Shop Now!
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}