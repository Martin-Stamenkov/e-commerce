import { Home } from 'home'
import { Men } from 'men'
import { Product } from 'product'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export function Router() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/men"} element={<Men />} />
                <Route path={"men/product/:id"} element={<Product />} />
            </Routes>
        </>
    )
}