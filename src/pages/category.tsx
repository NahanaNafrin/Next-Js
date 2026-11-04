import React from 'react'
import { ProductServices } from '../services/products-services'
import ProductCard from '../components/ProductCard'
function CategoryProducts({ products, category }: any) {

    return (
        <div className="container mx-auto px-6 py-10">

            <h2 className="mb-8 text-3xl font-bold capitalize">
                {category || 'All Products'}
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

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

export async function getServerSideProps(context: any) {

    const category = context.query.category

    const products = category
        ? await ProductServices.getProductsByCategory(category)
        : await ProductServices.getProducts()

    return {
        props: {
            products,
            category: category || ''
        }
    }
}

export default CategoryProducts