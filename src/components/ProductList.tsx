// import React from 'react'
// import { ProductServices } from '../services/products-services'
// import ProductCard from './product-card/ProductCard'
// import { resolve } from 'path'

// async function getProducts(category?: string) {
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   const productResp = category
//     ? await ProductServices.getProductsByCategory(category)
//     : await ProductServices.getProducts();

//   return productResp;
// }

// export async function ProductList(
//   {
//   searchParams,
// }: {
//   searchParams: Promise<{ category?: string }>;
// }) {
//   console.log("products page executed");

//   const { category } = await searchParams ?? {};
//   const products = await getProducts(category);
    
//   return (
//     <>
//     {/* <div className="mb-10 text-center">
//         <h2 className="text-2xl font-bold capitalize tracking-wide text-[#8E4555] sm:text-4xl">
//           {category ? category.replaceAll("-", " ") : "Our Products"}
//         </h2>

//         <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#D8B6A4]"></div>

//         <p className="mt-4 text-sm text-gray-500 sm:text-base">
//           Explore our collection and find your favorites.
//         </p>
//       </div> */}
//     <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//         { products.map((p:any)=>{
//           return (
//             <ProductCard key={p.id} products = {p}/>
//           )
//         })}
//       </div>
//       </>
//   )
// }

// export default ProductList

import React from 'react'
import { ProductServices } from '../services/products-services'
import ProductCard from './ProductCard';
import { resolve } from 'path'

async function ProductList() {
  await new Promise((resolve) => setTimeout(resolve,3000));
      const products = await ProductServices.getProducts()
    
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        { products.map((p:any)=>{
          return (
            <ProductCard key={p.id} products = {p}/>
          )
        })}
      </div>
  )
}

export default ProductList