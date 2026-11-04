import React from 'react'
import { ProductServices } from '@/app/services/products-services'
import ProductCard from '../components/product-card/ProductCard'

async function SearchProducts(props: any) {

    const searchParams = await props.searchParams

    const query = searchParams.search

    let products = []

    if (query) {
        products = await ProductServices.searchProducts(query)
    }

    return (
        <div className="container mx-auto px-6 py-10">

            <h2 className="text-3xl font-bold mb-2">
                Search Results
            </h2>

            <p className="text-gray-500 mb-8">
                Results for: {query}
            </p>

            {products.length > 0 ? (

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {products.map((product: any) => (
                        <ProductCard
                            key={product.id}
                            products={product}
                        />
                    ))}

                </div>

            ) : (

                <p className="text-gray-500 text-lg">
                    No products found!
                </p>

            )}

        </div>
    )
}

export default SearchProducts