import React from 'react'
import { ProductServices } from '@/app/services/products-services'
import ProductCard from '../components/product-card/ProductCard'

async function CategoryProducts(props: any) {

    const searchParams = await props.searchParams

    const category = searchParams.category

    let products

    if (category) {
        products = await ProductServices.getProductsByCategory(category)
    } else {
        products = await ProductServices.getProducts()
    }

    return (
        <div className="container mx-auto px-6 py-10">

            <h2 className="text-3xl font-bold mb-8 capitalize">
                {category || 'All Products'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {products.map((product: any) => (
                    <ProductCard
                        key={product.id}
                        products={product}
                    />
                ))}

            </div>

        </div>
    )
}

export default CategoryProducts