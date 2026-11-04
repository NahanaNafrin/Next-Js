import React from "react";
import Head from "next/head";

function contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Shopé</title>
      </Head>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Get In Touch
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Contact Us
            </h1>

            <p className="mt-4 max-w-lg text-lg leading-7 text-gray-500">
              We'd love to hear from you. Fill out the form or reach us through
              the details below.
            </p>

            <div className="mt-10 space-y-7">
              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  📍
                </div>

                <div>
                  <h6 className="font-bold text-gray-900">Our Location</h6>
                  <p className="mt-1 text-gray-500">Kochi, Kerala, India</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ✉️
                </div>

                <div>
                  <h6 className="font-bold text-gray-900">Email Us</h6>
                  <p className="mt-1 text-gray-500">support@shope.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  📞
                </div>

                <div>
                  <h6 className="font-bold text-gray-900">Call Us</h6>
                  <p className="mt-1 text-gray-500">+91 98765 43210</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  🕐
                </div>

                <div>
                  <h6 className="font-bold text-gray-900">Working Hours</h6>
                  <p className="mt-1 text-gray-500">Mon - Sat: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Send us a message
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Have a question? We'd be happy to help.
            </p>

            <div className="mt-7">
              {/* Name */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  placeholder="Your message..."
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
              >
                Send Message
                <span className="ml-2">➤</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
