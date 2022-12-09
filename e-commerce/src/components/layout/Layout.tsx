import React from 'react'
import { Outlet } from 'react-router-dom';
import AppBar from './components/AppBar'

interface ILayout {
    hideCategories?: boolean;
    hideCart?: boolean;
    withBackNavigation?: boolean
    children?: any
}


export function Layout({ hideCart, hideCategories, withBackNavigation, children }: ILayout) {
    
    return (
        <>
            <AppBar hideCart={hideCart} hideCategories={hideCategories} withBackNavigation={withBackNavigation} />
            <Outlet />
        </>
    )
}
