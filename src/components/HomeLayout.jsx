// src/HomeLayout.jsx
import HeroSlider from "./HeroSlider";
import Sample from "./SampleNavBar";
import TopCategoriesGrid from "./TopCategoriesGrid";
import ProductCard from "./ProductCard";
import WhyChooseUs from "./WhyChooseUs";
import TopBrands from "./TopBrands";
import Footer from "./Footer";
import SampleNavBar from "./SampleNavBar";

export default function HomeLayout() {
  const products = [
    { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'handpicked/p1_image_1.jpg', image2: 'handpicked/p1_image_2.jpg', sale: true },
    { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: 'handpicked/p2_image_1.jpg', image2: 'handpicked/p2_image_2.jpg', sale: false },
    { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: 'handpicked/p3_image_1.jpg', image2: 'handpicked/p3_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: 'handpicked/p4_image_1.jpg', image2: 'handpicked/p4_image_2.jpg', sale: false },
    { name: 'Chocolate Chips', price: 'Rs.510.00', image1: 'handpicked/p5_image_1.jpg', image2: 'handpicked/p5_image_2.jpg', sale: false },
    { name: 'Dezaan Dutch Processed Dark Cocoa Powder', price: 'Rs.1,890.00', image1: 'handpicked/p6_image_1.jpg', image2: 'handpicked/p6_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 70% 70-30-38', price: 'Rs.3,640.00', image1: 'handpicked/p7_image_1.jpg', image2: 'handpicked/p7_image_2.jpg', sale: false },
    { name: 'Round Cake Pan GI', price: 'Rs.250.00', image1: 'handpicked/p8_image_1.jpg', image2: 'handpicked/p8_image_2.jpg', sale: false },
    { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'handpicked/p9_image_1.jpg', image2: 'handpicked/p9_image_2.jpg', sale: true },
    { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: 'handpicked/p10_image_1.jpg', image2: 'handpicked/p10_image_2.jpg', sale: false },
    { name: 'Master Martini Shiny Milk Chocolate Buttons', price: 'Rs.810.00', image1: 'handpicked/p11_image_1.jpg', image2: 'handpicked/p11_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: 'handpicked/p12_image_1.jpg', image2: 'handpicked/p12_image_2.jpg', sale: false },
  ];
  const freshArrivals = [
    { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'freshly_arrived/fa1_image_1.jpg', image2: 'freshly_arrived/fa1_image_2.jpg', sale: true },
    { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: 'freshly_arrived/fa2_image_1.jpg', image2: 'freshly_arrived/fa2_image_2.jpg', sale: false },
    { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: 'freshly_arrived/fa3_image_1.jpg', image2: 'freshly_arrived/fa3_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: 'freshly_arrived/fa4_image_1.jpg', image2: 'freshly_arrived/fa4_image_2.jpg', sale: false },
    { name: 'Chocolate Chips', price: 'Rs.510.00', image1: 'freshly_arrived/fa5_image_1.jpg', image2: 'freshly_arrived/fa5_image_2.jpg', sale: false },
    { name: 'Dezaan Dutch Processed Dark Cocoa Powder', price: 'Rs.1,890.00', image1: 'freshly_arrived/fa6_image_1.jpg', image2: 'freshly_arrived/fa6_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 70% 70-30-38', price: 'Rs.3,640.00', image1: 'freshly_arrived/fa7_image_1.jpg', image2: 'freshly_arrived/fa7_image_2.jpg', sale: false },
    { name: 'Round Cake Pan GI', price: 'Rs.250.00', image1: 'freshly_arrived/fa8_image_1.jpg', image2: 'freshly_arrived/fa8_image_2.jpg', sale: false },
    { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'freshly_arrived/fa9_image_1.jpg', image2: 'freshly_arrived/fa9_image_2.jpg', sale: true },
    { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: 'freshly_arrived/fa10_image_1.jpg', image2: 'freshly_arrived/fa10_image_2.jpg', sale: false },
    { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: 'freshly_arrived/fa11_image_1.jpg', image2: 'freshly_arrived/fa11_image_2.jpg', sale: false },
    { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: 'freshly_arrived/fa12_image_1.jpg', image2: 'freshly_arrived/fa12_image_2.jpg', sale: false },
  ];


  return (
    <div className="min-h-screen bg-gray-10">
      {/* Full-screen Hero Slider + Navbar*/}
      <section className="relative h-screen overflow-hidden">
        <HeroSlider />
        <header
          className="absolute inset-x-0 top-0"
        >
          <SampleNavBar />
        </header>
      </section>

      {/* TopCategoriesGrid */}
      <TopCategoriesGrid />

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Handpicked */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Handpicked Bakery Essentials
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            From mixers to molds, find the best bakery supplies in Pakistan.
          </p>
        </div>

        <ProductCard data={products} />

        {/* Fresh Arrivals */}
        <div className="text-center mt-16 mb-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Freshly Arrived Bakery Essentials
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Explore the latest bakery supplies perfect for professionals and home bakers.
          </p>
        </div>

        <ProductCard data={freshArrivals} />

      </div>
      <WhyChooseUs />
      <TopBrands />
      <Footer />
    </div>
  );
}