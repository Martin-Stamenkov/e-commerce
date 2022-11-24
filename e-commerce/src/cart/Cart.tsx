import { useCommerce } from 'provider'
import React from 'react'

export function Cart() {
    const { cart } = useCommerce();
    console.log(cart)
    return (
        <div>Cart</div>
    )
}
