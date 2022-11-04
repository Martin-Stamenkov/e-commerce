import { Box, } from '@mui/material'
import { Category } from 'api'
import React from 'react'
import { CategoryCard } from './CategoryCard'

interface ICardList {
    cards: Category[]
}

export function CardList({ cards }: ICardList) {
    return (
        <Box display="flex" justifyContent="center">
            {cards && cards.map(({ assets, description, id, name, slug }) => <CategoryCard name={name} key={id} assets={assets} path={slug?.toString()} id={id} description={description} />)}
        </Box>

    )
}
