import { Cart } from 'cart'
import { Checkout } from 'checkout'
import { Layout } from 'components'
import { Home } from 'home'
import { Men } from 'men'
import { Product } from 'product'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Women } from 'women'

export function Router() {

    return (
        <Routes>
            <Route element={<Layout />} >
                <Route index path={"/"} element={<Home />} />
                <Route path={"/men"} element={<Men />} />
                <Route path={"/women"} element={<Women />} />
                <Route path={"/product/:id"} element={<Product />} />
                <Route path={"/cart"} element={<Cart />} />
            </Route>
            <Route element={<Layout hideCart hideCategories withBackNavigation />} >
                <Route path={"/checkout"} element={<Checkout />} />
            </Route>
            <Route element={<Layout />} >
                <Route path='*' element={<Home />} />
            </Route>

        </Routes>
    )
}