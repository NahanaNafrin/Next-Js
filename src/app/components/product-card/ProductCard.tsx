"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState,useContext } from 'react'
import { CartContext } from '@/app/context/CartContext';

function ProductCard(props:any) {
    let prod = props.products;
    const router = useRouter();
    const [selectProduct,setSelectProduct] = useState({});
    const selectProd = () => {
        console.log("selected product:",prod)
        setSelectProduct(prod)
    }

    const context = useContext(CartContext);
    if(!context){
      throw new Error("Product Card must be inside CartProvider")
    }

    const{addToCart}=context

    const handleAddToCart = () =>{
      addToCart({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        category:prod.category,
        thumbnail:prod.thumbnail,
        quantity: 1,
      });
      alert("Product Added to Cart Successfully")
    };
    // const navigateWithFilter = ()=> {
    //     let searchParams = ''
    //     if(price != null){
    //       searchParams = searchParams + 'price=' +10;
    //     }
    //     if(rating){
    //       searchParams = searchParams +'&rating=' + 4;
    //     }
    //     router.push('/products?' + searchParams)
    // }
  return (
    // <div onClick={selectProd}>
    //     <div className="d-flex " key={prod.id} >
    //           <img src={prod.thumbnail} width={50} alt={prod.title}/>
    //           <h5>{prod.title}</h5>
    //         </div>
    // </div>

<div  className="group mb-4 flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
  {/* <button className="w-full rounded-full bg-gray-900 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
    onClick={()=>{
    router.push(`/products?title=${prod.title}`)
  }}>Same Navigation Sample</button> */}
  <Link href={`/products/${prod.id}`}>

    <div
      onClick={selectProd}
      className="mx-auto"
    >

      <div
        key={prod.id}
      >

        {/* Image */}
        <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">

          <span className="absolute left-3 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
            {prod.category}
          </span>

          <img
            src={prod.images}
            alt={prod.title}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
          />

        </div>

        {/* Product Info */}
        <div className="flex flex-1 flex-col px-1 pt-5">

          {/* Rating */}
          <p className="mb-2 text-sm font-medium text-amber-500">
            ★ {prod.rating}
          </p>

          {/* Title */}
          <h5 className="line-clamp-2 text-lg font-semibold leading-6 text-gray-900">
            {prod.title}
          </h5>

          {/* Description */}
          <p className="mt-3 line-clamp-2 text-sm leading-5 text-gray-500">
            {prod.description}
          </p>

          {/* Bottom */}
          <div className="mt-auto pt-5">

            <button
              className="w-full rounded-full bg-gray-900 py-3 text-sm mb-2 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
              onClick={() => {
                router.push(`/products/${prod.id}`)
              }}
            >
              View Details
            </button>
    
          </div>

        </div>

      </div>

    </div>

  </Link>
      <button onClick={handleAddToCart}  className="w-full rounded-full bg-gray-900 py-3  text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600" >
        Add to Cart
      </button>
</div>

    
  )

}

export default ProductCard