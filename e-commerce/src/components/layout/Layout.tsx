import React from 'react'
import AppBar from './components/AppBar'

interface Props {
    children: React.ReactNode
}


export function Layout({ children }: Props) {
    
    return (
        <>
            <AppBar />
            {children}
        </>
    )
}
