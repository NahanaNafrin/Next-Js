
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ProductServices } from "@/services/products-services";

function CategoryNavbar() {

    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await ProductServices.getCategories();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="bg-white shadow-sm border-b">
            <div className="flex items-center gap-6 px-6 py-3 overflow-x-auto whitespace-nowrap">

                <Link
                    href="/category"
                    className="font-semibold text-blue-600"
                >
                    All Products
                </Link>

                {categories.map((category: any) => (
                    <Link
                        key={category.slug}
                        href={`/category?category=${category.slug}`}
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        {category.name}
                    </Link>
                ))}

            </div>
        </div>
    );
}

export default CategoryNavbar;
