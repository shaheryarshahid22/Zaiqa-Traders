import Footer from "../components/Footer";
import TopBrands from "../components/TopBrands";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductCard from "../components/ProductCard";
import SampleNavBar from "../components/SampleNavBar";
import Share from "../components/Share";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BakingTools() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    // Your product list — add as many as you want! Pages will auto-increase
    const bakewareItems = [
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p1_img1.jpg', image2: 'bakeware/bakeware_p1_img2.jpg', sale: true },
        { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: 'bakeware/bakeware_p2_img1.jpg', image2: 'bakeware/bakeware_p2_img2.jpg', sale: false },
        { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: 'bakeware/bakeware_p3_img1.jpg', image2: 'bakeware/bakeware_p3_img2.jpg', sale: false },
        { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: 'bakeware/bakeware_p4_img1.jpg', image2: 'bakeware/bakeware_p4_img2.jpg', sale: false },
        { name: 'Chocolate Chips', price: 'Rs.510.00', image1: 'bakeware/bakeware_p5_img1.jpg', image2: 'bakeware/bakeware_p5_img2.jpg', sale: false },
        { name: 'Dezaan Dutch Processed Dark Cocoa Powder', price: 'Rs.1,890.00', image1: 'bakeware/bakeware_p6_img1.jpg', image2: 'bakeware/bakeware_p6_img2.jpg', sale: false },
        { name: 'Callebaut Dark Chocolate Callets 70% 70-30-38', price: 'Rs.3,640.00', image1: 'bakeware/bakeware_p7_img1.jpg', image2: 'bakeware/bakeware_p7_img2.jpg', sale: false },
        { name: 'Round Cake Pan GI', price: 'Rs.250.00', image1: 'bakeware/bakeware_p8_img1.jpg', image2: 'bakeware/bakeware_p8_img2.jpg', sale: false },
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p9_img1.jpg', image2: 'bakeware/bakeware_p9_img2.jpg', sale: true },
        { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: 'bakeware/bakeware_p10_img1.jpg', image2: 'bakeware/bakeware_p10_img2.jpg', sale: false },
        // ... keep adding more products here — it will auto-create new pages!
        { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: 'freshly_arrived/fa11_image_1.jpg', image2: 'freshly_arrived/fa11_image_2.jpg', sale: false },
        { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: 'freshly_arrived/fa12_image_1.jpg', image2: 'freshly_arrived/fa12_image_2.jpg', sale: false },
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
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p1_img1.jpg', image2: 'bakeware/bakeware_p1_img2.jpg', sale: true },
        { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: 'bakeware/bakeware_p2_img1.jpg', image2: 'bakeware/bakeware_p2_img2.jpg', sale: false },
        { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: 'bakeware/bakeware_p3_img1.jpg', image2: 'bakeware/bakeware_p3_img2.jpg', sale: false },
        { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: 'bakeware/bakeware_p4_img1.jpg', image2: 'bakeware/bakeware_p4_img2.jpg', sale: false },
        { name: 'Chocolate Chips', price: 'Rs.510.00', image1: 'bakeware/bakeware_p5_img1.jpg', image2: 'bakeware/bakeware_p5_img2.jpg', sale: false },
        { name: 'Dezaan Dutch Processed Dark Cocoa Powder', price: 'Rs.1,890.00', image1: 'bakeware/bakeware_p6_img1.jpg', image2: 'bakeware/bakeware_p6_img2.jpg', sale: false },
        { name: 'Callebaut Dark Chocolate Callets 70% 70-30-38', price: 'Rs.3,640.00', image1: 'bakeware/bakeware_p7_img1.jpg', image2: 'bakeware/bakeware_p7_img2.jpg', sale: false },
        { name: 'Round Cake Pan GI', price: 'Rs.250.00', image1: 'bakeware/bakeware_p8_img1.jpg', image2: 'bakeware/bakeware_p8_img2.jpg', sale: false },
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p9_img1.jpg', image2: 'bakeware/bakeware_p9_img2.jpg', sale: true },
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p9_img1.jpg', image2: 'bakeware/bakeware_p9_img2.jpg', sale: true },
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p1_img1.jpg', image2: 'bakeware/bakeware_p1_img2.jpg', sale: true },
        { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: 'bakeware/bakeware_p2_img1.jpg', image2: 'bakeware/bakeware_p2_img2.jpg', sale: false },
        { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: 'bakeware/bakeware_p3_img1.jpg', image2: 'bakeware/bakeware_p3_img2.jpg', sale: false },
        { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: 'bakeware/bakeware_p4_img1.jpg', image2: 'bakeware/bakeware_p4_img2.jpg', sale: false },
        { name: 'Chocolate Chips', price: 'Rs.510.00', image1: 'bakeware/bakeware_p5_img1.jpg', image2: 'bakeware/bakeware_p5_img2.jpg', sale: false },
        { name: 'Dezaan Dutch Processed Dark Cocoa Powder', price: 'Rs.1,890.00', image1: 'bakeware/bakeware_p6_img1.jpg', image2: 'bakeware/bakeware_p6_img2.jpg', sale: false },
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p9_img1.jpg', image2: 'bakeware/bakeware_p9_img2.jpg', sale: true },
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p9_img1.jpg', image2: 'bakeware/bakeware_p9_img2.jpg', sale: true },
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p1_img1.jpg', image2: 'bakeware/bakeware_p1_img2.jpg', sale: true },
        { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: 'bakeware/bakeware_p2_img1.jpg', image2: 'bakeware/bakeware_p2_img2.jpg', sale: false },
        { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: 'bakeware/bakeware_p3_img1.jpg', image2: 'bakeware/bakeware_p3_img2.jpg', sale: false },
        { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: 'bakeware/bakeware_p4_img1.jpg', image2: 'bakeware/bakeware_p4_img2.jpg', sale: false },
        { name: 'Chocolate Chips', price: 'Rs.510.00', image1: 'bakeware/bakeware_p5_img1.jpg', image2: 'bakeware/bakeware_p5_img2.jpg', sale: false },
        { name: 'Dezaan Dutch Processed Dark Cocoa Powder', price: 'Rs.1,890.00', image1: 'bakeware/bakeware_p6_img1.jpg', image2: 'bakeware/bakeware_p6_img2.jpg', sale: false },
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p9_img1.jpg', image2: 'bakeware/bakeware_p9_img2.jpg', sale: true },
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p9_img1.jpg', image2: 'bakeware/bakeware_p9_img2.jpg', sale: true },
        { name: 'Barry Callebaut Dark Cocoa Powder', price: 'Rs.1,420.00', originalPrice: 'Rs.29,500.00', image1: 'bakeware/bakeware_p1_img1.jpg', image2: 'bakeware/bakeware_p1_img2.jpg', sale: true },
        { name: 'Callebaut Milk Chocolate Callets 33% 823', price: 'Rs.3,330.00', image1: 'bakeware/bakeware_p2_img1.jpg', image2: 'bakeware/bakeware_p2_img2.jpg', sale: false },
        { name: 'Master Martini Shine Milk Chocolate Buttons', price: 'Rs.810.00', image1: 'bakeware/bakeware_p3_img1.jpg', image2: 'bakeware/bakeware_p3_img2.jpg', sale: false },
        { name: 'Callebaut Dark Chocolate Callets 54% 811', price: 'Rs.3,260.00', image1: 'bakeware/bakeware_p4_img1.jpg', image2: 'bakeware/bakeware_p4_img2.jpg', sale: false },
        { name: 'Chocolate Chips', price: 'Rs.510.00', image1: 'bakeware/bakeware_p5_img1.jpg', image2: 'bakeware/bakeware_p5_img2.jpg', sale: false },
        { name: 'Dezaan Dutch Processed Dark Cocoa Powder', price: 'Rs.1,890.00', image1: 'bakeware/bakeware_p6_img1.jpg', image2: 'bakeware/bakeware_p6_img2.jpg', sale: false },
        // Add 100+ products? No problem — it will auto-paginate!
    ];

    // Dynamic Pagination Logic
    const totalPages = Math.ceil(bakewareItems.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = bakewareItems.slice(startIndex, startIndex + productsPerPage);

    const goToPage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 700, behavior: "smooth" });
    };

    const goPrev = () => currentPage > 1 && goToPage(currentPage - 1);
    const goNext = () => currentPage < totalPages && goToPage(currentPage + 1);

    // Generate visible page numbers (1 2 3 ... 20 style)
    const renderPageNumbers = () => {
        const pages = [];
        // const showEllipsisThreshold = 7;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                i === currentPage ||
                Math.abs(i - currentPage) <= 1
            ) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => goToPage(i)}
                        className={`px-3 py-1 transition-colors ${currentPage === i
                                ? "border-b-2 border-black font-medium"
                                : "hover:text-black"
                            }`}
                    >
                        {i}
                    </button>
                );
            } else if (
                pages[pages.length - 1]?.key !== "left-ellipsis" &&
                i < currentPage
            ) {
                pages.push(<span key="left-ellipsis">...</span>);
            } else if (
                pages[pages.length - 1]?.key !== "right-ellipsis" &&
                i > currentPage
            ) {
                pages.push(<span key="right-ellipsis">...</span>);
            }
        }
        return pages;
    };

    return (
        <div className="min-h-screen bg-gray-10">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <header className="absolute inset-x-0 top-0 z-20 mx-auto" style={{ maxWidth: "1400px" }}>
                    <SampleNavBar />
                </header>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('bakeware/bakeware_background_image.jpg')" }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center px-6 max-w-4xl">
                        <h1 className="text-9xl font-bold text-white drop-shadow-2xl mb-6"
                            style={{ fontFamily: "Brush Script MT, cursive", textShadow: "2px 2px 2px rgba(180, 51, 234, 0.8)" }}>
                            Baking Tools
                        </h1>
                    </div>
                </div>
                <Share />
            </section>

            {/* Products Section */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900">Essential Baking Tools in Pakistan</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Explore <strong>essential</strong> baking tools in Pakistan including spatulas, whisks, brushes, and measuring tools. Perfect for home bakers <br />
                       and <strong>professionals</strong> alike.
                    </p>
                </div>

                {/* Product Grid - Only 16 per page */}
                <ProductCard data={currentProducts} />

                {/* Pagination - Fully Dynamic */}
                <div className="flex items-center justify-center gap-6 mt-16 text-gray-700 font-medium">
                    <button
                        onClick={goPrev}
                        disabled={currentPage === 1}
                        className={`p-2 transition ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:text-black"}`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {renderPageNumbers()}

                    <button
                        onClick={goNext}
                        disabled={currentPage === totalPages}
                        className={`p-2 transition ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:text-black"}`}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
             <WhyChooseUs />
             <TopBrands />
             <Footer />
        </div>
    );
}