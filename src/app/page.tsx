'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Lazy load components
const NewsletterSection = dynamic(() => import('@/components/NewsletterSection'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse" />,
});

// Sample data - replace with your actual data
const sliderData = [
  {
    id: 1,
    image: '/images/slider/slide1.jpg',
    title: 'Welcome to Dukan',
    subtitle: 'Your One-Stop Shop for Everything',
    cta: 'Shop Now',
    link: '/shop',
  },
  {
    id: 2,
    image: '/images/slider/slide2.jpg',
    title: 'New Arrivals',
    subtitle: 'Discover Our Latest Collection',
    cta: 'View Collection',
    link: '/shop?sort=newest',
  },
  {
    id: 3,
    image: '/images/slider/slide3.jpg',
    title: 'Special Offers',
    subtitle: 'Up to 50% Off on Selected Items',
    cta: 'View Deals',
    link: '/shop?sort=discount',
  },
];

const featuredCategories = [
  {
    id: 1,
    name: 'Electronics',
    image: '/images/categories/electronics.jpg',
    count: '120+ Products',
  },
  {
    id: 2,
    name: 'Fashion',
    image: '/images/categories/fashion.jpg',
    count: '200+ Products',
  },
  {
    id: 3,
    name: 'Home & Living',
    image: '/images/categories/home.jpg',
    count: '150+ Products',
  },
  {
    id: 4,
    name: 'Books',
    image: '/images/categories/books.jpg',
    count: '100+ Products',
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize slide navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    setIsAutoPlaying(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
    setIsAutoPlaying(false);
  }, []);

  // Handle auto-play with cleanup
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = [
        ...sliderData.map(slide => {
          const img = new Image();
          img.src = slide.image;
          return new Promise((resolve) => {
            img.onload = resolve;
          });
        }),
        ...featuredCategories.map(category => {
          const img = new Image();
          img.src = category.image;
          return new Promise((resolve) => {
            img.onload = resolve;
          });
        })
      ];

      await Promise.all(imagePromises);
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-[600px] overflow-hidden">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                  <Link
                    href={slide.link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/shop?category=${category.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-gray-600">
                We offer only the highest quality products from trusted brands
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery to your doorstep
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer support team is always here to help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
} 