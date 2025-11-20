import React from 'react';

export default function TopBrands() {
  const brands = [
    { img: '/brands/b1.png', name: 'polac' },
    { img: '/brands/b2.png', name: 'fruitamins' },
    { img: '/brands/b3.png', name: 'adams' },
    { img: '/brands/b4.png', name: 'indus valley' },
    { img: '/brands/b5.png', name: 'vibgyor' },
    { img: '/brands/b6.png', name: 'milkyz brand' },
    { img: '/brands/b7.png', name: 'mozzarella' },
    { img: '/brands/b8.png', name: 'vizyon' },
    { img: '/brands/b9.png', name: 'kolly' }
  ];

  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Top Brands
          </h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 md:p-8 bg-white rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 cursor-pointer group "
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="max-w-full h-auto object-contain max-h-20 md:max-h-24 transition-all duration-300 group-hover:scale-90"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}