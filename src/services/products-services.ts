import { ServiceBase } from "./service-base";

// export class ProductServices{
//     static getProducts = async() => {
//         let response = await fetch('https://dummyjson.com/products')
//         let products = await response.json()
//         return products.products;
//     }
    
// }

 export class ProductServices extends ServiceBase{
    static getProducts = async() => {
        let response = await fetch(this.getUrl('/products'),
        {cache:'no-store'});
        let data = await response.json()
        return data.products;
    }
    
    static getProductById = async(id:number) => {
        let response = await fetch(this.getUrl(`/products/${id}`))
        let product = await response.json()
        return product;
    }

    // Get all categories
      static async getCategories() {
        const response = await fetch(
            this.getUrl('/products/categories')
        )

        return await response.json()
    }

     // Get products by category
    static async getProductsByCategory(category: string) {
        const response = await fetch(
            this.getUrl(`/products/category/${category}`)
        )

        const data = await response.json()
        return data.products
    }

static async searchProducts(query: string) {

    const response = await fetch(
        this.getUrl(`/products/search?q=${encodeURIComponent(query)}`)
    )

    if (!response.ok) {
        throw new Error("Failed to fetch search products")
    }

    const data = await response.json()

    return data.products
}
}