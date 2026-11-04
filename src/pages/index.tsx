import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Shopé</title>
      </Head>
      <div className="min-h-screen bg-zinc-50 font-sans">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  ✨ New Collection 2026
                </span>

                <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
                  Shop Your
                  <span className="block text-blue-600">Style</span>
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
                  Discover beautiful products, modern essentials and everyday
                  favorites — all in one place.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/products"
                    className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                  >
                    Shop Now →
                  </Link>

                  <Link
                    href="/about"
                    className="rounded-full border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="mt-10 flex gap-8">
                  <div>
                    <h4 className="text-2xl font-bold">10K+</h4>
                    <p className="text-sm text-gray-500">Products</p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold">5K+</h4>
                    <p className="text-sm text-gray-500">Happy Customers</p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold">4.9</h4>
                    <p className="text-sm text-gray-500">Rating</p>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />

                <div className="relative rounded-[3rem] bg-white p-6 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                    className="h-80 w-full rounded-[2rem] object-cover md:h-[420px]"
                    alt="Shopping"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl">🚚</div>
              <h3 className="font-bold">Free Delivery</h3>
              <p className="mt-2 text-sm text-gray-500">
                Enjoy free shipping on selected orders.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl">🔒</div>
              <h3 className="font-bold">Secure Payment</h3>
              <p className="mt-2 text-sm text-gray-500">
                Safe and secure payment experience.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl">↩️</div>
              <h3 className="font-bold">Easy Returns</h3>
              <p className="mt-2 text-sm text-gray-500">
                Simple and hassle-free return process.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <p className="font-semibold text-blue-600">Explore</p>
            <h2 className="mt-2 text-3xl font-bold">Shop by Category</h2>
            <p className="mt-2 text-gray-500">
              Find everything you need in one place.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl bg-gradient-to-br from-pink-50 to-white p-8 text-center transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-4xl">
                👗
              </div>
              <h5 className="mt-5 text-xl font-bold">Fashion</h5>
              <p className="mt-2 text-gray-500">Latest fashion trends</p>
              <Link
                href="/products"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>
            </div>

            <div className="group rounded-3xl bg-gradient-to-br from-blue-50 to-white p-8 text-center transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">
                💻
              </div>
              <h5 className="mt-5 text-xl font-bold">Electronics</h5>
              <p className="mt-2 text-gray-500">Smart technology</p>
              <Link
                href="/products"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>
            </div>

            <div className="group rounded-3xl bg-gradient-to-br from-purple-50 to-white p-8 text-center transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl">
                👜
              </div>
              <h5 className="mt-5 text-xl font-bold">Accessories</h5>
              <p className="mt-2 text-gray-500">Complete your look</p>
              <Link
                href="/products"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>
            </div>
          </div>
        </section>

        {/* Trending Products */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-semibold text-blue-600">Trending Now</p>

            <h2 className="mt-2 text-3xl font-bold">What's Popular</h2>

            <p className="mt-2 text-gray-500">
              Discover products people are loving right now.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="overflow-hidden rounded-3xl bg-gray-50">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                  alt="Watch"
                />
                <div className="p-5">
                  <p className="text-sm text-gray-500">Accessories</p>
                  <h3 className="mt-1 font-bold">Classic Watches</h3>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-gray-50">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                  alt="Shoes"
                />
                <div className="p-5">
                  <p className="text-sm text-gray-500">Fashion</p>
                  <h3 className="mt-1 font-bold">Trendy Sneakers</h3>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-gray-50">
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500"
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                  alt="Camera"
                />
                <div className="p-5">
                  <p className="text-sm text-gray-500">Electronics</p>
                  <h3 className="mt-1 font-bold">Modern Cameras</h3>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-gray-50">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                  alt="Headphones"
                />
                <div className="p-5">
                  <p className="text-sm text-gray-500">Electronics</p>
                  <h3 className="mt-1 font-bold">Wireless Audio</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 text-center">
            <p className="font-semibold text-blue-600">Handpicked For You</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Recommended Products
            </h2>

            <p className="mt-3 text-gray-500">
              Explore some of our customer favorites.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product 1 */}
            <Link
              href="/products"
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  New
                </span>

                <img
                  src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
                  alt="Essence Mascara Lash Princess"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">Beauty</p>

                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  Essence Mascara Lash Princess
                </h3>

                <p className="mt-2 text-sm text-yellow-500">★ 4.8</p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-blue-600">$59.99</p>

                  <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
                    Add
                  </button>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link
              href="/products"
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </span>

                <img
                  src="https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
                  alt="Calvin Klein CK One"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">Fragrances</p>

                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  Calvin Klein CK One
                </h3>

                <p className="mt-2 text-sm text-yellow-500">★ 4.7</p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-blue-600">$89.99</p>

                  <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
                    Add
                  </button>
                </div>
              </div>
            </Link>

            {/* Product 3 */}
            <Link
              href="/products"
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white">
                  Trending
                </span>

                <img
                  src="https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
                  alt="Red Nail Polish"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">Beauty</p>

                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  Red Nail Polish
                </h3>

                <p className="mt-2 text-sm text-yellow-500">★ 3.9</p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-blue-600">$168</p>

                  <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
                    Add
                  </button>
                </div>
              </div>
            </Link>

            {/* Product 4 */}
            <Link
              href="/products"
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                  20% Off
                </span>

                <img
                  src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
                  alt="Chanel Coco Noir Eau De"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">Fragrances</p>

                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  Chanel Coco Noir Eau De
                </h3>

                <p className="mt-2 text-sm text-yellow-500">★ 4.6</p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-blue-600">$69.99</p>

                  <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
                    Add
                  </button>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-block rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View All Products →
            </Link>
          </div>
        </section>

        {/* Special Offer */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-14 text-center text-white shadow-xl md:px-16">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Limited Time Offer
            </span>

            <h2 className="mt-6 text-4xl font-bold">Special Offer</h2>

            <p className="mx-auto mt-4 max-w-xl text-blue-100">
              Get up to 40% off on selected products. Don't miss out on your
              favorite items.
            </p>

            <Link
              href="/products"
              className="mt-7 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
            >
              Explore Products →
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-900 py-16 text-white">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="font-semibold text-blue-400">Stay Updated</p>

            <h2 className="mt-3 text-3xl font-bold">
              Get the latest deals & updates
            </h2>

            <p className="mt-3 text-gray-400">
              Subscribe to our newsletter and never miss a new collection or
              special offer.
            </p>

            <div className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full bg-white px-5 py-3 text-gray-900 outline-none"
              />

              <button className="rounded-full bg-blue-600 px-7 py-3 font-semibold hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
