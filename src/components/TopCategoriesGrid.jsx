// export default function TopCategoriesGrid() {
//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <h2 className="text-5xl font-bold text-black-800 text-center">
//           Top Categories
//         </h2>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 pb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             { img: "category1.jpg", title: "Bakeware" },
//             { img: "category2.jpg", title: "Baking Tools" },
//             { img: "category3.jpg", title: "Decoration Tools" },
//             { img: "category4.jpg", title: "Cake Toppers" },
//             { img: "category5.jpg", title: "Stencils" },
//             { img: "category6.jpg", title: "Food & Gel Colors" },
//             { img: "category7.jpg", title: "Sprinkles" },
//             { img: "category8.jpg", title: "Ingredients" },
//             { img: "category9.jpg", title: "Packaging" },
//             { img: "category10.jpg", title: "Molds" },
//             { img: "category11.jpg", title: "Compound Chocolate" },
//             { img: "category12.jpg", title: "Couverture Chocolate" },
//           ].map((category, index) => (
//             <div key={index} className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group">
//               <div className="absolute inset-0 overflow-hidden">
//                 <img
//                   src={`/${category.img}`}
//                   alt={category.title}
//                   className="w-full h-full object-cover transition-transform duration-400 transform-gpu will-change-transform group-hover:scale-110"
//                 />
//               </div>
//               <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/100 to-transparent pointer-events-none"></div>
//               <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <h3
//                   className="text-white text-3xl font-bold"
//                   style={{
//                     fontFamily: "Brush Script MT, cursive",
//                     textShadow: "2px 2px 2px rgba(147, 51, 234, 0.8)",
//                   }}
//                 >
//                   {category.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }






// with animation
import { motion } from "framer-motion";

export default function TopCategoriesGrid() {
  const categories = [
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
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"

              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}

              transition={{
                duration: 1.4,
                ease: "easeOut",
                delay: index * 0.2, // ← slide one by one
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
                  className="text-white text-3xl font-bold"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    textShadow: "2px 2px 2px rgba(147, 51, 234, 0.8)",
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
