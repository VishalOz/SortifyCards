import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-20 items-center bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-6 font-poppins text-center">
        Our Beauty Products
      </h1>

      <div className="flex justify-end w-full max-w-4xl mb-4 px-2">
        <label className="mr-2 text-gray-700 font-medium" htmlFor="sort">
          Sort by:
        </label>
        <select
          id="sort"
          name="sort"
          className="border border-gray-300 rounded-lg px-3 py-1 md:px-4 md:py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
        >
          <option value="popular">Most Popular</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="release-date">Release Date</option>
        </select>
      </div>

      {/* Product Cards */}
      {products.map((product) => (
        <div 
          key={product.name}
          className="flex flex-col md:flex-row items-center w-full max-w-4xl p-4 md:p-6 bg-white rounded-2xl shadow-md space-y-4 md:space-y-0 md:space-x-6"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-xl shadow-sm"
          />
          <div className="flex flex-col px-2 md:px-0">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 font-poppins">
              {product.name}
            </h2>
            <p className="text-gray-600 mt-1 md:mt-2 max-w-md font-light leading-relaxed text-sm md:text-base">
              {product.description}
            </p>
            <p className="text-base md:text-lg font-bold text-black mt-2 md:mt-4">
              Rs. {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

// Product data
const products = [
  {
    name: "Monat Beauticare Pack",
    description: "A premium hair and skincare starter pack designed to refresh, hydrate, and rejuvenate your daily routine. Ideal for all hair types and skin tones.",
    price: "12,000",
    image: "https://monatglobal.com/au/wp-content/uploads/sites/12/2023/11/early-bright-au-ecomm-haircare-starter.jpg"
  },
  {
    name: "Verb Ghost Shampoo",
    description: "Lightweight shampoo that smooths frizz and gently cleanses. Infused with moringa oil for silky, airy hair.",
    price: "8,500",
    image: "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_webp/www.powproductphotography.com/wp-content/uploads/2021/06/white-on-white-product-photography-11.jpg"
  },
  {
    name: "Tiffany Face Serum",
    description: "A hydration-rich facial serum that brightens and tones. Boosts collagen for a youthful glow.",
    price: "5,000",
    image: "https://www.armankophotography.com/wp-content/uploads/2024/09/Makeup-product-photography-for-website-listing-on-white-background.jpg"
  },
  {
    name: "Skin Formula 9",
    description: "Targets dryness, blemishes, and uneven tone with a potent blend of botanicals and vitamins.",
    price: "9,600",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/1/VP/OV/VN/104752620/photography-white-background-500x500.jpg"
  },
  {
    name: "SIDR Honey",
    description: "100% raw honey from the Sidr tree. Naturally rich in antioxidants and immune-boosting nutrients.",
    price: "23,000",
    image: "https://thesuuk.com/cdn/shop/files/Lote_CoBlackSeed500gMockUp01.jpg?v=1694899778"
  },
  {
    name: "Milk and Honey",
    description: "A calming blend of milk and honey extract. Softens the skin and leaves a lasting silky touch.",
    price: "22,000",
    image: "https://i.pinimg.com/736x/84/f5/3c/84f53c5bd502c3f45e1a33ab828abd54.jpg"
  }
]

export default App