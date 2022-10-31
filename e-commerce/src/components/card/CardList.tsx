import { Box,  } from '@mui/material'
import { Category } from 'category/interfaces'
import React from 'react'
import Card from './Card'

interface ICardList {
    categories: Category[]
}

export function CardList({ categories }: ICardList) {
    return (
        <Box display="flex" justifyContent="center">
            {categories && categories.map(({assets, description, id, name, }) => <Card name={name} assets={assets} id={id} description={description}  />)}
        </Box>

    )
}
