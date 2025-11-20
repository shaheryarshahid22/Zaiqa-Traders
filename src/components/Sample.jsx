import React from "react";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";

export default function Sample({
  menuItems,
  bottomMenuItems,
  activeDropdown,
  toggleDropdown,
  navbarRef,
}) {
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
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
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
                          onClick={() => toggleDropdown(item.name)}
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

          {/* Bottom Menu */}
          <div className="flex items-center justify-center space-x-8 pt-2">
            {bottomMenuItems.map((item, idx) => (
              <div key={idx} className="relative">
                <button
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
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
                        onClick={() => toggleDropdown(item.name)}
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
  );
}