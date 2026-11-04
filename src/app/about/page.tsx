import React from 'react'
import { Metadata } from 'next'
export const metadata:Metadata = {
  title:"About Page"
}
function about() {
  return (
    

  <div className="min-h-screen bg-white">

    {/* Hero */}
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
              About Shopé
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Simple shopping
              <br />
              <span className="text-blue-600">
                for modern living.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              We believe shopping should be simple, beautiful and enjoyable.
              Our goal is to bring you high-quality products, modern designs,
              and a wonderful shopping experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/products"
                className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Explore Products →
              </a>

              <a
                href="/contact"
                className="rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 shadow-2xl">
            <div className="rounded-3xl bg-white/10 p-10 text-center backdrop-blur-sm">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-5xl">
                🛍️
              </div>

              <h2 className="text-3xl font-bold text-white">
                Shopé
              </h2>

              <p className="mt-3 text-blue-100">
                Everything you love, all in one place.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-b border-gray-100 bg-white py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">

        <div>
          <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
          <p className="mt-2 text-sm text-gray-500">Products</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">5K+</h3>
          <p className="mt-2 text-sm text-gray-500">Happy Customers</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">4.9</h3>
          <p className="mt-2 text-sm text-gray-500">Customer Rating</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
          <p className="mt-2 text-sm text-gray-500">Support</p>
        </div>

      </div>
    </section>

    {/* Features */}
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="font-semibold text-blue-600">
            Why Shopé?
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Shopping made better
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We focus on quality, convenience and design to make every
            shopping experience simple and enjoyable.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
              💎
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Quality Products
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Carefully selected products made with quality materials
              and designed to last.
            </p>
          </div>

          <div className="group rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
              ✨
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Modern Design
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Discover trendy and timeless styles that fit perfectly
              into modern lifestyles.
            </p>
          </div>

          <div className="group rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
              🚚
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Easy Shopping
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Enjoy a smooth shopping experience with fast and secure
              checkout.
            </p>
          </div>

          <div className="group rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
              🎧
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Customer Support
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Our support team is always ready to help whenever you
              need us.
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-14 text-center text-white shadow-xl sm:px-16">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
          Our Mission
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Making everyday shopping simple and enjoyable.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
          From discovering products to completing your order, Shopé is
          designed to make every step easy, convenient and enjoyable.
        </p>

        <a
          href="/products"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Start Shopping →
        </a>

      </div>
    </section>

  </div>


  )
}

export default about