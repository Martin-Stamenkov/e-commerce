import React from 'react'

interface IBanner {
    src: string
}

export function Banner({ src }: IBanner) {
    return (
        <img style={{ height: "890px" }} alt="banner" src={src} />
    )
}
