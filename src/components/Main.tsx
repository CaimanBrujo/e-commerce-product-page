import { useState } from 'react'
import productImage from '../assets/images/image-product-1.jpg'
import productThumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import productThumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import productThumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import productThumb4 from '../assets/images/image-product-4-thumbnail.jpg'
import { Plus, Minus, ShoppingCart } from 'lucide-react'

export default function Main() {
  const [quantity, setQuantity] = useState(0)

  const increment = () => setQuantity((q) => q + 1)
  const decrement = () => setQuantity((q) => (q > 0 ? q - 1 : 0))

  return (
    <main className="container mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 fade-in">
      {/* Product gallery */}
      <div className="flex flex-col gap-4">
        <img
          src={productImage}
          alt="Sneaker product"
          className="rounded-xl cursor-pointer"
        />
        <div className="hidden sm:flex gap-4">
          <img
            src={productThumb1}
            alt="Product thumbnail 1"
            className="rounded-xl cursor-pointer border-2 border-transparent hover:border-primary"
          />
          <img
            src={productThumb2}
            alt="Product thumbnail 2"
            className="rounded-xl cursor-pointer border-2 border-transparent hover:border-primary"
          />
          <img
            src={productThumb3}
            alt="Product thumbnail 3"
            className="rounded-xl cursor-pointer border-2 border-transparent hover:border-primary"
          />
          <img
            src={productThumb4}
            alt="Product thumbnail 4"
            className="rounded-xl cursor-pointer border-2 border-transparent hover:border-primary"
          />
        </div>
      </div>

      {/* Product details */}
      <div className="flex flex-col justify-center gap-6">
        <h2 className="uppercase text-primary text-sm font-bold tracking-widest">
          Sneakers Company
        </h2>
        <h1 className="text-3xl sm:text-4xl font-bold text-very-dark-blue">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-dark-grayish-blue text-base leading-relaxed">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        {/* Price section */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-very-dark-blue">
            $125.00
          </span>
          <span className="bg-primary-pale text-primary font-bold px-2 rounded">
            50%
          </span>
        </div>
        <div className="text-grayish-blue line-through font-semibold">
          $250.00
        </div>

        {/* Quantity selector & Add to cart */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Quantity selector */}
          <div className="flex items-center justify-between bg-light-grayish-blue rounded-lg px-4 py-2 w-full sm:w-40">
            <button
              onClick={decrement}
              aria-label="Decrease quantity"
              className="text-primary hover:opacity-70"
            >
              <Minus />
            </button>
            <span className="font-bold text-very-dark-blue">{quantity}</span>
            <button
              onClick={increment}
              aria-label="Increase quantity"
              className="text-primary hover:opacity-70"
            >
              <Plus />
            </button>
          </div>

          {/* Add to cart */}
          <button className="flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-lg px-6 py-3 shadow-lg hover:opacity-80 transition">
            <ShoppingCart className="w-5 h-5" />
            Add to cart
          </button>
        </div>
      </div>
    </main>
  )
}
