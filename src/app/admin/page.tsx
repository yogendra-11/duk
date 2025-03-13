import React from 'react';
import {
  ShoppingBagIcon,
  ShoppingCartIcon,
  UsersIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Total Products', value: '0', icon: ShoppingBagIcon },
  { name: 'Total Orders', value: '0', icon: ShoppingCartIcon },
  { name: 'Total Customers', value: '0', icon: UsersIcon },
  { name: 'Total Revenue', value: '$0', icon: CurrencyDollarIcon },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      <div className="mt-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-indigo-500 p-3">
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              </dd>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Recent Orders */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Recent Orders</h3>
              <div className="mt-6">
                <div className="text-sm text-gray-500">No recent orders</div>
              </div>
            </div>
          </div>

          {/* Recent Products */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Recent Products</h3>
              <div className="mt-6">
                <div className="text-sm text-gray-500">No recent products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 