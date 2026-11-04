import { ProductServices } from '@/app/services/products-services';
import React from 'react'
import { Metadata } from 'next';
import { title } from 'process';

// export const metadata:Metadata = {
//   title:"Product Detail Page"
// }

export async function  generateMetadata(props:any){
  console.log("generate metadata",props);
  const params = await props.params;
  const productId = params.productId;
  let product;
  if(productId){
    product = await ProductServices.getProductById(productId);
    return{
      title:product.title
    }
  }
  return{
    title:"Product Detail Page"
  }
}
async function ProductDetail(props:any) {
    console.log(props);
    const params = await props.params;
    const productId = params.productId;
    // const productId = (await props.params).productId;
    let productDetails;
    if(productId){
     productDetails = await ProductServices.getProductById(productId)
    }
    
//   return (
  
// <div >

//   <h2 className="mb-6 text-2xl font-bold text-gray-800">
//     This is Product Details Page: id-{productId}
//   </h2>

// <div className="mx-auto my-10 max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
//   <div className=' text-lg text-center font-semibold text-white rounded-full bg-red-700 w-25 px-3 '>{productDetails.category}</div>
//     <img
//     src={productDetails.thumbnail}
//     className="mx-auto mb-6 h-80  object-contain"
//   />
//   <h3 className=" text-2xl font-semibold text-gray-900">
//     {productDetails.title}
//   </h3>
//   <h6>Product ID: #{productId}</h6>
//   <p>Brand: {productDetails.brand}</p>
//   <p className='text-gray-800 text-lg '>★{productDetails.rating}</p>
//   <p>{productDetails.price}</p>
//   <p>{productDetails.description}</p>
  
// </div>
  

// </div>

//   )

return (
  <div className="min-h-screen bg-gray-50 px-4 py-10">

    <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
      This is Product Details Page: id-{productId}
    </h2>

    <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-lg md:p-10">

      <div className="grid items-center gap-10 md:grid-cols-2">

        {/* Product Image */}
        <div className="flex h-96 items-center justify-center rounded-2xl bg-gray-50 p-6">
          <img
            src={productDetails.thumbnail}
            alt={productDetails.title}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div>

          {/* Category */}
          <div className="mb-4 inline-block rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white">
            {productDetails.category}
          </div>

          {/* Title */}
          <h3 className="mb-4 text-3xl font-bold text-gray-900">
            {productDetails.title}
          </h3>

          {/* Product ID */}
          <h6 className="mb-2 text-sm text-gray-500">
            Product ID: #{productId}
          </h6>

          {/* Brand */}
          <p className="mb-3 text-gray-700">
            <span className="font-semibold">Brand:</span>{" "}
            {productDetails.brand}
          </p>

          {/* Rating */}
          <p className="mb-4 text-lg font-semibold text-yellow-500">
            ★ {productDetails.rating}
          </p>

          {/* Price */}
          <p className="mb-5 text-3xl font-bold text-green-600">
            ${productDetails.price}
          </p>

          {/* Description */}
          <p className="mb-6 leading-7 text-gray-600">
            {productDetails.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">

          

            <a
              href="/products"
              className="rounded-full border border-gray-300 px-7 py-3 text-center font-semibold text-gray-700 hover:bg-gray-100"
            >
              ← Go Back
            </a>

          </div>

        </div>

      </div>

    </div>
  </div>
)

}

export default ProductDetail