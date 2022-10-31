import { Box, CardMedia, Typography, Card as CardMUI } from '@mui/material'
import { Category } from 'category/interfaces'
import React from 'react'

export default function Card({ assets, name }: Category) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            alignItems: "center",
            cursor: "pointer",
        }}>
            <CardMUI sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    sx={{
                        width: 240, height: 240
                    }}
                    image={assets[0].url}
                    alt="model"
                />
            </CardMUI>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
        </Box>
    )
}
