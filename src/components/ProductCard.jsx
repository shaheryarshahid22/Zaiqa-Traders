export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {product.sale && (
          <span className="absolute top-3 left-3 z-10 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
            Sale
          </span>
        )}
        <img
          src={product.image1}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 transform-gpu will-change-transform group-hover:opacity-0"
        />
        <img
          src={product.image2}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 transform-gpu will-change-transform opacity-0 group-hover:opacity-100 cursor-pointer"
        />
      </div>
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
  );
}