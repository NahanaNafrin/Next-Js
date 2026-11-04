import Link from "next/link";
// import GoToCartButton from "../components/cartButton/GoToCartButton";
import ProductCard from "../components/product-card/ProductCard";
import { ProductServices } from "../services/products-services";
import ProductList from "../components/ProductList";
import { Suspense } from "react";
import { Metadata } from "next";
import { cookies, headers } from "next/headers";

//  async function getProducts() {
//  try{
//     let response = await fetch('https://dummyjson.com/products')
//     let products = await response.json()
//     return products.products;
//     }catch(error){
//       console.error("Error fetching Products:",error);
// }
//   }
function ProductSkeleton(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[1,2,3,4,5,6,7,8].map((item) => (
        <div key={item} className="border rounded-xl p-4 shadow-sm">
          {/* image */}
          <div className="w-full  bg-gray-600 rounded-lg animate-pulse"/>

          {/* Title */}
          <div className=" h-5 bg-gray-200 rounded mt-4 w-3/4 animate-pulse"/>

          {/* rating */}
          <div className=" h-4 bg-gray-200 rounded mt-3 w-1/3 animate-pulse"/>

          {/* price */}
          <div className="h-6 bg-gray-200 rounded mt-3 w-1/2 animate-pulse"/>

          {/* button */}
          <div className="h-10 bg-gray-200 rounded-lg mt-4 animate-pulse"/>
        </div>
      ))}
    </div>

  )
}
export const metadata:Metadata = {
  title:"Product List Page"
}

async function  products() {
 
  // let products = await getProducts()
  const products = await ProductServices.getProducts()
  // const cookieList = cookies();
  // const token = (await cookieList).get('auth token')
  // console.log(token);

  // const headerList = headers();
  // const referer = (await headerList).get('referer')
  // console.log("referer:",referer)
  
  return (
    <div> 
      {/* <GoToCartButton /> */}
      {/* <Link href="#recommended">Go To Recommended Section</Link> */}
      <h3 className="text-3xl font-bold text-center mb-8">Product List</h3>
      {/* <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        { products.map((p:any)=>{
          return (
            <ProductCard key={p.id} products = {p}/>
          )
        })}
      </div> */}
      <Suspense fallback={<ProductSkeleton/>}>
        <ProductList/>
      </Suspense>
      {/* <h3 className="text-4xl" id="recommended">Recommended Section</h3> */}
    </div>
  )
}

export default products