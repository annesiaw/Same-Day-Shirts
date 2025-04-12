'use client'

import { useState } from 'react'
import Image from 'next/image'

// Mock product data
const products = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 19.99,
    image: '/images/tshirt.jpg',
    category: 'shirts',
    colors: ['White', 'Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Hooded Sweatshirt',
    price: 39.99,
    image: '/images/hoodie.jpg',
    category: 'hoodies',
    colors: ['Gray', 'Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    name: 'DTF Transfer Sheet',
    price: 9.99,
    image: '/images/transfer.jpg',
    category: 'transfers',
    colors: ['White', 'Black'],
    sizes: ['8.5x11', '11x17'],
  },
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedColor, setSelectedColor] = useState<string>('all')
  const [selectedSize, setSelectedSize] = useState<string>('all')

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false
    if (selectedColor !== 'all' && !product.colors.includes(selectedColor)) return false
    if (selectedSize !== 'all' && !product.sizes.includes(selectedSize)) return false
    return true
  })

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display text-center mb-12">Our Products</h1>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Categories</option>
              <option value="shirts">T-Shirts</option>
              <option value="hoodies">Hoodies</option>
              <option value="transfers">DTF Transfers</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color
            </label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Colors</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Navy">Navy</option>
              <option value="Gray">Gray</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Size
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Sizes</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
              <option value="8.5x11">8.5x11</option>
              <option value="11x17">11x17</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-primary-blue text-lg font-semibold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">
                  Colors: {product.colors.join(', ')}
                </p>
                <p className="text-sm text-gray-600">
                  Sizes: {product.sizes.join(', ')}
                </p>
              </div>
              <button className="btn-primary w-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
} 