'use client';

import React, { useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import ProductForm from '@/components/admin/ProductForm';

// This would come from your database
const initialProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    category: 'Electronics',
    stock: 10,
    images: ['/images/products/headphones.jpg'],
  },
  // Add more products as needed
];

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
    setIsFormOpen(false);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setIsFormOpen(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <PlusIcon className="mr-2 h-5 w-5" />
          Add Product
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              <p className="mt-2 text-sm font-medium text-gray-900">${product.price}</p>
              <p className="mt-1 text-sm text-gray-500">Stock: {product.stock}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity">
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="rounded-full bg-white p-2 text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="rounded-full bg-white p-2 text-red-600 shadow-sm hover:bg-gray-50"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <ProductForm
                product={editingProduct}
                onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
                onCancel={() => {
                  setIsFormOpen(false);
                  setEditingProduct(null);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 