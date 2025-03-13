import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Shop the Latest Trends
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Discover our curated collection of high-quality products at unbeatable prices. Shop with confidence and enjoy a seamless shopping experience.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/shop"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Shop Now
                  </Link>
                  <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 ring-gray-900/10 md:-mr-20 lg:-mr-36" aria-hidden="true" />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            App.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            Content.jsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        {/* Placeholder for product showcase */}
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="group relative">
                              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                                <div className="h-48 w-full bg-gray-200 animate-pulse" />
                              </div>
                              <div className="mt-4 flex justify-between">
                                <div>
                                  <h3 className="text-sm text-gray-700">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Product Name
                                  </h3>
                                  <p className="mt-1 text-sm text-gray-500">Category</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">$99.99</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured categories */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Browse our carefully curated collection of products by category.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {[
            {
              name: 'Electronics',
              description: 'Latest gadgets and electronic devices',
              imageUrl: '/images/electronics.jpg',
            },
            {
              name: 'Fashion',
              description: 'Trendy clothing and accessories',
              imageUrl: '/images/fashion.jpg',
            },
            {
              name: 'Home & Living',
              description: 'Home decor and lifestyle products',
              imageUrl: '/images/home.jpg',
            },
          ].map((category) => (
            <article key={category.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="h-48 w-full bg-gray-200 rounded-lg animate-pulse" />
              </div>
              <div className="max-w-xl">
                <div className="mt-6 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-gray-500">
                    2024
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/categories/${category.name.toLowerCase()}`}>
                      <span className="absolute inset-0" />
                      {category.name}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{category.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 