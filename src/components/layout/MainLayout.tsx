'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/shop' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Dukan
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium ${
                    pathname === item.href
                      ? 'text-indigo-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/cart" className="text-gray-500 hover:text-gray-900">
                <ShoppingCartIcon className="h-6 w-6" />
              </Link>
              <Link href="/account" className="text-gray-500 hover:text-gray-900">
                <UserIcon className="h-6 w-6" />
              </Link>
              <button
                type="button"
                className="md:hidden text-gray-500 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    pathname === item.href
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                About Us
              </h3>
              <p className="mt-4 text-base text-gray-500">
                Your trusted destination for quality products and exceptional service.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="mailto:support@dukan.com" className="text-base text-gray-500 hover:text-gray-900">
                    support@dukan.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-base text-gray-500 hover:text-gray-900">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © {new Date().getFullYear()} Dukan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 