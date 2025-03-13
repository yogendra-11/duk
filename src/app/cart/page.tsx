import React from 'react';
import Link from 'next/link';
import BillingOptions from '@/components/billing/BillingOptions';

// This would typically come from your cart state management
const cartItems = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    quantity: 1,
    imageUrl: '/images/headphones.jpg',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    quantity: 1,
    imageUrl: '/images/smartwatch.jpg',
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  // This would typically come from user profile or form input
  const phoneNumber = '+1234567890';

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <div className="h-24 w-24 rounded-md bg-gray-200 animate-pulse" />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link href={`/shop/${item.id}`} className="font-medium text-gray-700 hover:text-gray-800">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="ml-4 text-sm font-medium text-gray-900">${item.price}</p>
                        </div>
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex">
                      <button
                        type="button"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:mt-0 lg:col-span-5 lg:ml-8 lg:p-0 lg:p-6"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Shipping</dt>
                <dd className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">${total.toFixed(2)}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{' '}
                <Link
                  href="/shop"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>

            {/* Billing Options */}
            <BillingOptions
              phoneNumber={phoneNumber}
              orderTotal={total}
              orderItems={cartItems.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price
              }))}
            />
          </section>
        </form>
      </div>
    </div>
  );
} 