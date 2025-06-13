import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="flex flex-col gap-10 p-20 items-center bg-white bg-gray-100 
    bg-[url('https://assets.isu.pub/document-structure/250214093211-6f229dd00cb4e53040c0bc240ce71a02/v1/ffdfb89a15ce4483cced192600be249b.jpeg')]
    bg-cover bg-no-repeat bg-center min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-6 font-poppins ">Our Beauty Products</h1>


        <div className="flex justify-end w-full max-w-4xl mb-4">
          <label className="mr-2 text-gray-700 font-medium" htmlFor="sort">
            Sort by:
          </label>
          <select
            id="sort"
            name="sort"
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="popular">Most Popular</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="release-date">Release Date</option>
          </select>
        </div>


      {/* Monat Beauticare Pack */}
      <div className="flex flex-row items-center w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md space-x-6">
        <img
          src="https://monatglobal.com/au/wp-content/uploads/sites/12/2023/11/early-bright-au-ecomm-haircare-starter.jpg"
          alt="Monat Beauticare Pack"
          className="w-60 h-60 object-cover rounded-xl shadow-sm"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 font-poppins">
            Monat Beauticare Pack
          </h2>
          <p className="text-gray-600 mt-2 max-w-md font-light leading-relaxed">
            A premium hair and skincare starter pack designed to refresh, hydrate, and
            rejuvenate your daily routine. Ideal for all hair types and skin tones.
          </p>
          <p className="text-lg font-bold text-black mt-4"> Rs. 12'000</p>
        </div>
      </div>

      {/* Verb Ghost Shampoo */}
      <div className="flex flex-row items-center w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md space-x-6">
        <img
          src="https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_webp/www.powproductphotography.com/wp-content/uploads/2021/06/white-on-white-product-photography-11.jpg"
          alt="Verb Ghost Shampoo"
          className="w-60 h-60 object-cover rounded-xl shadow-sm"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 font-poppins">
            Verb Ghost Shampoo
          </h2>
          <p className="text-gray-600 mt-2 max-w-md font-light leading-relaxed">
            Lightweight shampoo that smooths frizz and gently cleanses. Infused with moringa oil for silky, airy hair.
          </p>
          <p className="text-lg font-bold text-black mt-4"> Rs. 8500</p>
        </div>
      </div>

      {/* Tiffany Face Serum */}
      <div className="flex flex-row items-center w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md space-x-6">
        <img
          src="https://www.armankophotography.com/wp-content/uploads/2024/09/Makeup-product-photography-for-website-listing-on-white-background.jpg"
          alt="Tiffany Face Serum"
          className="w-60 h-60 object-cover rounded-xl shadow-sm"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 font-poppins">
            Tiffany Face Serum
          </h2>
          <p className="text-gray-600 mt-2 max-w-md font-light leading-relaxed">
            A hydration-rich facial serum that brightens and tones. Boosts collagen for a youthful glow.
          </p>
          <p className="text-lg font-bold text-black mt-4"> Rs. 5000</p>
        </div>
      </div>

      {/* Skin Formula 9 */}
      <div className="flex flex-row items-center w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md space-x-6">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2022/1/VP/OV/VN/104752620/photography-white-background-500x500.jpg"
          alt="Skin Formula 9"
          className="w-60 h-60 object-cover rounded-xl shadow-sm"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 font-poppins">
            Skin Formula 9
          </h2>
          <p className="text-gray-600 mt-2 max-w-md font-light leading-relaxed">
            Targets dryness, blemishes, and uneven tone with a potent blend of botanicals and vitamins.
          </p>
          <p className="text-lg font-bold text-black mt-4"> Rs. 9600</p>
        </div>
      </div>

      {/* SIDR Honey */}
      <div className="flex flex-row items-center w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md space-x-6">
        <img
          src="https://thesuuk.com/cdn/shop/files/Lote_CoBlackSeed500gMockUp01.jpg?v=1694899778"
          alt="SIDR Honey"
          className="w-60 h-60 object-cover rounded-xl shadow-sm"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 font-poppins">
            SIDR Honey
          </h2>
          <p className="text-gray-600 mt-2 max-w-md font-light leading-relaxed">
            100% raw honey from the Sidr tree. Naturally rich in antioxidants and immune-boosting nutrients.
          </p>
          <p className="text-lg font-bold text-black mt-4"> Rs. 23'000</p>
        </div>
      </div>

      {/* Milk and Honey */}
      <div className="flex flex-row items-center w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md space-x-6">
        <img
          src="https://i.pinimg.com/736x/84/f5/3c/84f53c5bd502c3f45e1a33ab828abd54.jpg"
          alt="Milk and Honey"
          className="w-60 h-60 object-cover rounded-xl shadow-sm"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 font-poppins">
            Milk and Honey
          </h2>
          <p className="text-gray-600 mt-2 max-w-md font-light leading-relaxed">
            A calming blend of milk and honey extract. Softens the skin and leaves a lasting silky touch.
          </p>
          <p className="text-lg font-bold text-black mt-4"> Rs. 22'000</p>
        </div>
      </div>

    </div>
  )
}

export default App
