// import React from 'react'
import CartItem from './CartItem'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartDropDown() {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='absolute bg-White w-4/5 md:w-[22rem] h-[15rem] md:h-[13rem] top-20 md:top-16 right-12 md:right-20 rounded-lg shadow-2xl flex flex-col justify-center items-center z-50'>
        <p className='font-bold mb-2 md:mb-5'>Cart</p>

        <hr className='w-full' />

        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}

        <button className='bg-Orange w-4/5 h-10 mt-5 rounded-lg text-White'>Checkout</button>
    </div>
  )
}

export default CartDropDown