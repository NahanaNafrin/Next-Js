// import React from 'react'

// function Footer() {
//   return (
//     <div className='container px-3  py-2 flex'>
//         <div className=''>
//         <hr />
//         <p>© 2026 ShopEase | Designed using nextJS</p>
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-6 py-8">

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              Shop<span className="text-sky-400">Ease</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Your style, your choice, your shopping destination.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-300">
            <a href="/" className="hover:text-sky-400 transition">Home</a>
            <a href="/products" className="hover:text-sky-400 transition">Products</a>
            <a href="/about" className="hover:text-sky-400 transition">About</a>
            <a href="/contact" className="hover:text-sky-400 transition">Contact</a>
          </div>

        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-col items-center justify-between gap-2 text-sm text-gray-400 md:flex-row">
          <p>© 2026 ShopEase. All rights reserved.</p>
          <p>Designed with Next.js & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer