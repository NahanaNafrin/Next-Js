
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "@/context/CartContext";

function ProductCard(props: any) {
  const prod = props.products;

  const context = useContext(CartContext);

  if (!context) {
    throw new Error("ProductCard must be inside CartProvider");
  }

  const { addToCart } = context;

  const handleAddToCart = () => {
    console.log("Adding product:", prod);

    addToCart({
      id: prod.id,
      title: prod.title,
      price: prod.price,
      category: prod.category,
      thumbnail: prod.thumbnail,
      quantity: 1,
    });

    alert("Product Added to Cart Successfully");
  };

  return (
    <div className="group mb-4 flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <Link href={`/products/${prod.id}`}>
        <div className="mx-auto">

          <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">

            <span className="absolute left-3 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
              {prod.category}
            </span>

            <img
              src={prod.thumbnail}
              alt={prod.title}
              className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
            />

          </div>

          <div className="flex flex-1 flex-col px-1 pt-5">

            <p className="mb-2 text-sm font-medium text-amber-500">
              ★ {prod.rating}
            </p>

            <h5 className="line-clamp-2 text-lg font-semibold leading-6 text-gray-900">
              {prod.title}
            </h5>

            <p className="mt-3 line-clamp-2 text-sm leading-5 text-gray-500">
              {prod.description}
            </p>

          </div>
        </div>
      </Link>

      <div className="mt-auto pt-5">

        <Link
          href={`/products/${prod.id}`}
          className="mb-2 block w-full rounded-full bg-gray-900 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full rounded-full bg-gray-900 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
