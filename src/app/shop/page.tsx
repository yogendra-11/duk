import React from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    category: 'Electronics',
    imageUrl: '/images/headphones.jpg',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    category: 'Electronics',
    imageUrl: '/images/smartwatch.jpg',
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 79.99,
    category: 'Fashion',
    imageUrl: '/images/shoes.jpg',
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: 129.99,
    category: 'Home & Living',
    imageUrl: '/images/coffee-maker.jpg',
  },
  // Add more products as needed
];

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'electronics', label: 'Electronics' },
      { value: 'fashion', label: 'Fashion' },
      { value: 'home-living', label: 'Home & Living' },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '0-50', label: 'Under $50' },
      { value: '50-100', label: '$50 - $100' },
      { value: '100-200', label: '$100 - $200' },
      { value: '200+', label: 'Over $200' },
    ],
  },
];

export default function ShopPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Products</h1>

          <div className="flex items-center">
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.628 1.601C5.028 1.072 7.49 1 10 1s4.973.072 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.59L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="pt-24 pb-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <div className="hidden lg:block">
              <h2 className="sr-only">Filters</h2>

              <div className="space-y-10 border-b border-gray-200 pb-10">
                {filters.map((filter) => (
                  <div key={filter.id}>
                    <h3 className="text-sm font-medium text-gray-900">{filter.name}</h3>
                    <div className="mt-4 space-y-4">
                      {filter.options.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`${filter.id}-${option.value}`}
                            name={`${filter.id}[]`}
                            value={option.value}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`${filter.id}-${option.value}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <Link key={product.id} href={`/shop/${product.id}`} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <div className="h-48 w-full bg-gray-200 animate-pulse" />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 