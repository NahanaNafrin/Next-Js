
import React from 'react'

function ProductSkeleton() {

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (

                <div
                    key={item}
                    className="animate-pulse rounded-3xl border border-gray-100 bg-white p-4 shadow-sm"
                >

                    {/* Image */}
                    <div className="h-64 rounded-2xl bg-gray-200" />

                    {/* Rating */}
                    <div className="mt-5 h-3 w-16 rounded bg-gray-200" />

                    {/* Title */}
                    <div className="mt-4 h-5 w-3/4 rounded bg-gray-200" />

                    {/* Description */}
                    <div className="mt-3 h-3 w-full rounded bg-gray-200" />

                    <div className="mt-2 h-3 w-2/3 rounded bg-gray-200" />

                    {/* Button */}
                    <div className="mt-6 h-11 w-full rounded-full bg-gray-200" />

                </div>

            ))}

        </div>
    )
}

export default ProductSkeleton
