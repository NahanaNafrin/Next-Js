import React from 'react'
import { ProductServices } from '../services/products-services'
import ProductCard from '../components/ProductCard'
function SearchProducts({ products, query }: any) {

    return (
        <div className="container mx-auto px-6 py-10">

            <h2 className="mb-3 text-3xl font-bold">
                Search Results
            </h2>

            <p className="mb-8 text-gray-500">
                Results for: {query}
            </p>

            {products.length > 0 ? (

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    {products.map((product: any) => (
                        <ProductCard
                            key={product.id}
                            products={product}
                        />
                    ))}

                </div>

            ) : (
                <p className="text-gray-500">
                    No products found!
                </p>
            )}

        </div>
    )
}

export async function getServerSideProps(context: any) {

    const query = context.query.search || ''

    const products = query
        ? await ProductServices.searchProducts(query)
        : []

    return {
        props: {
            products,
            query
        }
    }
}

export default SearchProducts