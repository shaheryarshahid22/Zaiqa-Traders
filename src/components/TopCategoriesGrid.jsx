import { motion } from "framer-motion";
export default function TopCategoriesGrid() {
  const categories = [
    { img: 'top_category/category1.jpg', title: "Bakeware" },
    { img: "top_category/category2.jpg", title: "Baking Tools" },
    { img: "top_category/category3.jpg", title: "Decoration Tools" },
    { img: "top_category/category4.jpg", title: "Cake Toppers" },
    { img: "top_category/category5.jpg", title: "Stencils" },
    { img: "top_category/category6.jpg", title: "Food & Gel Colors" },
    { img: "top_category/category7.jpg", title: "Sprinkles" },
    { img: "top_category/category8.jpg", title: "Ingredients" },
    { img: "top_category/category9.jpg", title: "Packaging" },
    { img: "top_category/category10.jpg", title: "Molds" },
    { img: "top_category/category11.jpg", title: "Compound Chocolate" },
    { img: "top_category/category12.jpg", title: "Couverture Chocolate" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-5xl font-bold text-black-800 text-center">
          Top Categories
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative h-55 rounded-2xl overflow-hidden cursor-pointer group"

              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}

              transition={{
                duration: 0.6,
                delay: index * 0.3,  // This creates true "one after another" effect
                ease: "easeOut"
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={`/${category.img}`}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-400 transform-gpu will-change-transform group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/100 to-transparent pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  className="text-white text-4xl font-bold"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    textShadow: "2px 2px 2px rgba(180, 51, 234, 0.8)",
                  }}
                >
                  {category.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}