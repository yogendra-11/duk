#!/bin/bash

# Create the products directory if it doesn't exist
mkdir -p public/images/products

# Download images using curl
# Headphones
curl -o public/images/products/headphones.jpg "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
curl -o public/images/products/headphones-1.jpg "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
curl -o public/images/products/headphones-2.jpg "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"
curl -o public/images/products/headphones-3.jpg "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80"

# Smart Watch
curl -o public/images/products/smartwatch.jpg "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80"

# Running Shoes
curl -o public/images/products/shoes.jpg "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"

# Coffee Maker
curl -o public/images/products/coffee-maker.jpg "https://images.unsplash.com/photo-1517663156590-b82429d1f9d2?w=800&q=80"

echo "Images downloaded successfully!" 