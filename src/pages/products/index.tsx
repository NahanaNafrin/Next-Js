import Head from "next/head";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import ProductSkeleton from "../../components/ProductSkeleton";
import { ProductServices } from "../../services/products-services";

function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const data = await ProductServices.getProducts();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Products | Shopé</title>
      </Head>
      <div className="container mx-auto px-6 py-10">
        <h2 className="mb-8 text-3xl font-bold">Products For Your Style</h2>

        {loading ? (
          <ProductSkeleton />
        ) : error ? (
          <p className="py-10 text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p: any) => (
              <ProductCard key={p.id} products={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
