import ProductCard from "../components/ProductCard";
import SampleNavBar from "../components/SampleNavBar";
import Share from "../components/Share";
export default function Bakeware() {
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
    ];
    return (
        <div className="min-h-screen bg-gray-10">
            <section className="relative h-screen overflow-hidden">

                {/* NavBar */}
                <header
                    className="absolute inset-x-0 top-0 z-20 mx-auto"
                    style={{ maxWidth: "1400px" }}
                >
                    <SampleNavBar />
                </header>

                {/* Static Hero Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('bakeware/bakeware_background_image.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center px-6 max-w-4xl">
                        <h1 className="text-9xl font-bold text-white drop-shadow-2xl mb-6"
                            style={{
                                fontFamily: "Brush Script MT, cursive",
                                textShadow: "2px 2px 2px rgba(180, 51, 234, 0.8)",
                            }}
                        >
                            Bakeware
                        </h1>
                    </div>
                </div>
                {/* Share Button */}
                <Share />
            </section>
            {/* Bakeware Items */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Non-Stick Bakeware in Pakistan
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Shop <strong>premium</strong> non-stick bakeware in Pakistan for perfect baking every time. Discover cake pans, muffin trays, and more for <br /> hassle-free <strong>baking</strong> at home or professionally.
                    </p>
                </div>
                <ProductCard data={bakewareItems} />
            </div>
        </div>
    );
}
