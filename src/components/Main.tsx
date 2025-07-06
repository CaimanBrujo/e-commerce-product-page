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
    <main className="container mx-auto sm:px-6 lg:px-8 sm:py-6 grid grid-cols-1 lg:grid-cols-2 gap-16 ">
      {/* Product gallery */}
      <div className="flex flex-col gap-6 items-center w-full ">
        <div className="w-full">
          <img
            src={productImage}
            alt="Sneaker product"
            className="rounded-2xl cursor-pointer w-full"
          />
        </div>
        <div className="hidden sm:flex justify-between w-full gap">
          {[productThumb1, productThumb2, productThumb3, productThumb4].map(
            (thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Product thumbnail ${index + 1}`}
                className="rounded-xl cursor-pointer border-2 border-transparent hover:border-primary transition-colors w-1/4"
              />
            )
          )}
        </div>
      </div>

      {/* Product details */}
      <div className="flex flex-col justify-between gap-6 px-2 sm:px-0">
        <h2 className="uppercase text-primary text-sm font-bold tracking-widest">
          Sneaker Company
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-very-dark-blue leading-tight">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-dark-grayish-blue text-base leading-relaxed max-w-lg">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        {/* Price section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-very-dark-blue">
              $125.00
            </span>
            <span className="bg-primary-pale text-primary font-bold px-2 rounded-md">
              50%
            </span>
          </div>
          <div className="text-grayish-blue line-through font-semibold">
            $250.00
          </div>
        </div>

        {/* Quantity selector & Add to cart */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Quantity selector */}
          <div className="flex items-center justify-between bg-light-grayish-blue rounded-lg px-4 py-3 w-full sm:w-40">
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
          <button className="flex items-center justify-center gap-3 bg-primary text-white font-bold rounded-lg px-6 py-3 shadow-lg hover:opacity-80 transition w-full sm:w-auto">
            <ShoppingCart className="w-5 h-5" />
            Add to cart
          </button>
        </div>
      </div>
    </main>
  )
}
