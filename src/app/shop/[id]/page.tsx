import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// This would typically come from your database
const product = {
  id: 1,
  name: 'Wireless Headphones',
  price: 99.99,
  category: 'Electronics',
  description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
  features: [
    'Active noise cancellation',
    '40-hour battery life',
    'Bluetooth 5.0',
    'Touch controls',
    'Built-in microphone',
  ],
  images: [
    '/images/products/headphones-1.jpg',
    '/images/products/headphones-2.jpg',
    '/images/products/headphones-3.jpg',
  ],
  specifications: {
    'Brand': 'SoundMaster',
    'Model': 'WH-1000XM4',
    'Color': 'Black',
    'Weight': '250g',
    'Warranty': '1 year',
  },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = React.useState(product.images[0]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="flex flex-col">
            <div className="aspect-h-1 aspect-w-1 w-full">
              <div className="relative h-96 w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative aspect-h-1 aspect-w-1 overflow-hidden rounded-lg ${
                      selectedImage === image ? 'ring-2 ring-primary-500' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">{product.description}</div>
            </div>

            <div className="mt-8 flex">
              <button
                type="button"
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Add to cart
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Features</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.features.map((feature) => (
                    <li key={feature} className="text-gray-400">
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
              <div className="mt-4">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-medium text-gray-900">{key}</dt>
                      <dd className="mt-1 text-sm text-gray-500">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 