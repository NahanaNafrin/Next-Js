import React from "react";
import { ProductServices } from "../../services/products-services";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

function ProductDetail({ product }: any) {
  const router = useRouter();

  return (
    <div className="container mx-auto px-6 py-10">
      <Head>
        <title>{product.title}</title>
      </Head>

      <div className="grid gap-8 md:grid-cols-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-96 w-full object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="mt-4 text-gray-500">{product.description}</p>

          <p className="mt-4 text-2xl font-bold text-blue-600">
            ${product.price}
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block rounded-full bg-gray-900 px-6 py-3 text-white hover:bg-blue-600"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const productId = Number(context.params.productId);

  const product = await ProductServices.getProductById(productId);

  return {
    props: {
      product,
    },
  };
}

export default ProductDetail;
