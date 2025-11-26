import { Shield, Star, Truck } from "lucide-react";

export default function WhyChooseUs() {
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
  ];

  return (
    <div className="w-full bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose Zaiqa Traders?
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-5xl mx-auto leading-relaxed">
            At <span className="font-semibold">Zaiqa Traders</span>, we bring you the finest baking ingredients, tools, and accessories, all in one place. Whether you're a home baker or a professional pastry chef, our curated selection ensures top quality, reliability, and creative inspiration for every bake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <IconComponent className="w-16 h-16 text-purple-500" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="bg-white text-purple-400 font-semibold text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            Shop Now!
          </button>
        </div>
      </div>
    </div>
  );
}