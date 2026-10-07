import React from 'react'
import Link from 'next/link'

type Products = {
    id: number;
    name: string;
    price: number;
}

async function getProducts(): Promise<Products[]> {
    return [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ]
}

async function ProductPage() {

    const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">
        Product List
      </h1>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>

            <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ProductPage