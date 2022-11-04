import React from 'react'
import AppBar from './components/AppBar'

interface ILayout {
    children: React.ReactNode
}


export function Layout({ children }: ILayout) {
    
    return (
        <>
            <AppBar />
            {children}
        </>
    )
}
