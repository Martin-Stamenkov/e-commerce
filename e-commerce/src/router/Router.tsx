import { Home } from 'home'
import { Men } from 'men'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export function Router() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/men"} element={<Men />} />
            </Routes>
        </>
    )
}