import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-primary-600">Welcome to Dukan</h1>
      <p className="mt-4 text-xl text-gray-600">Your one-stop shop for everything you need</p>
    </div>
  );
} 