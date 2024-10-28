import React from 'react'
import Image from 'next/image'

const products = [
  { src: '/healthierHoney.jpg', alt: 'Healthier Honey', title: 'Healthier Honey', price: '$40.00' },
  { src: '/jarahHoney.jpg', alt: 'Jarah Honey', title: 'Jarah Honey', price: '$45.00' },
  { src: '/lindhenHoney.jpg', alt: 'Lindhen Honey', title: 'Lindhen Honey', price: '$50.00' },
];

const ProductsSection = () => {
  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-8">OUR PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="p-4 bg-white shadow-lg">
            <Image src={product.src} height={100} width={100} alt={product.alt} className="w-full"/>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3 className="text-xl font-bold mt-4">{product.title}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-4">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductsSection
