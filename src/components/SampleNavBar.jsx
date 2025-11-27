import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

export default function SampleNavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
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
        { name: "Bakeware", path: "/bakeware" },
        { name: "Baking Tools", path: "/baking-tools" }
      ]
      ,
          },
          {
            name: "Cake Decorating Supplies",
            hasDropdown: true,
            items: [
    { name: "Cake Stands", path: "/cake-stands" },
    { name: "Cake Toppers", path: "/cake-toppers" },
    { name: "Fondant Tools", path: "/fondant-tools" },
    { name: "Icing Tools", path: "/icing-tools" },
    { name: "Decoration Tools", path: "/decoration-tools" },
    { name: "Cutters", path: "/cutters" },
    { name: "Stencils", path: "/stencils" },
    { name: "Food & Gel Colors", path: "/food-gel-colors" },
  ],
          },
          {
            name: "Ingredients",
            hasDropdown: true,
            items: [
    { name: "Flour", path: "/flour" },
    { name: "Sugar", path: "/sugar" },
    { name: "Baking Powder", path: "/baking-powder" },
    { name: "Yeast", path: "/yeast" },
    { name: "Vanilla Extract", path: "/vanilla-extract" },
    { name: "Cocoa Powder", path: "/cocoa-powder" },
    { name: "Food Colors", path: "/food-colors" },
    { name: "Essences", path: "/essences" },
  ]
  ,
          },
          {
            name: "Packaging & Presentation",
            hasDropdown: true,
           items: [
    { name: "Cake Boxes", path: "/cake-boxes" },
    { name: "Cupcake Boxes", path: "/cupcake-boxes" },
    { name: "Gift Bags", path: "/gift-bags" },
    { name: "Ribbons", path: "/ribbons" },
    { name: "Labels", path: "/labels" },
    { name: "Disposable Plates", path: "/disposable-plates" },
    { name: "Serving Trays", path: "/serving-trays" },
    { name: "Bakery Bags", path: "/bakery-bags" },
  ]
  ,
          },
        ];
      
        const bottomMenuItems = [
          {
            name: "Chocolates",
            hasDropdown: true,
            items: [
    { name: "Dark Chocolate", path: "/dark-chocolate" },
    { name: "Milk Chocolate", path: "/milk-chocolate" },
    { name: "White Chocolate", path: "/white-chocolate" },
    { name: "Chocolate Chips", path: "/chocolate-chips" },
    { name: "Compound Chocolate", path: "/compound-chocolate" },
    { name: "Cocoa Butter", path: "/cocoa-butter" },
    { name: "Chocolate Molds", path: "/chocolate-molds" },
  ]
  ,
          },
          {
            name: "Top Brands",
            hasDropdown: true,
            items: [
    { name: "Wilton", path: "/wilton" },
    { name: "Americolor", path: "/americolor" },
    { name: "Satin Ice", path: "/satin-ice" },
    { name: "Callebaut", path: "/callebaut" },
    { name: "PME", path: "/pme" },
    { name: "FunCakes", path: "/funcakes" },
    { name: "Rainbow Dust", path: "/rainbow-dust" },
    { name: "Cake Mate", path: "/cake-mate" },
  ]
  ,
          },
          { name: "Discounts & Deals", hasDropdown: false, items: [] },
        ];
  return (
    <header ref={navbarRef} className="relative z-20 mx-auto" style={{ maxWidth: "1400px" }}>
      <div className="bg-white backdrop-blur-sm shadow-2xl mx-6" style={{ borderRadius: "0 0 80px 80px" }}>
        <div className="px-8 py-6">
          {/* Top Navigation */}
          <div className="flex items-center justify-center mb-4 gap-12">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/zaiqa_logo.png" alt="Zaiqa Traders Logo" className="w-20 h-20 object-contain" />
              <div className="ml-3">
                <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Zaiqa Traders™
                </div>
              </div>
            </div>

            {/* Main Menu */}
            <nav className="flex items-center space-x-6">
              {menuItems.map((item, idx) => (
                <div key={idx} className="relative">
                  <button
                    onClick={() => item.hasDropdown && toggleDropdown(item.name)}
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
                        <Link
                          key={subIdx}
                          to={subItem.path}                      // <-- navigation path
                          onClick={() => toggleDropdown(item.name)}
                          className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                        >
                          {subItem.name}
                        </Link>
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

          {/* Bottom Menu */}
          <div className="flex items-center justify-center space-x-8 ">
            {bottomMenuItems.map((item, idx) => (
              <div key={idx} className="relative">
                <button
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
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
                      <Link
                          key={subIdx}
                          to={subItem.path}                      // <-- navigation path
                          onClick={() => toggleDropdown(item.name)}
                          className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}