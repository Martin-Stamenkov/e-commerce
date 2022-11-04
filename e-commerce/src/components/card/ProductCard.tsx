import { Box, Card, CardMedia, Typography } from '@mui/material'
import { Product } from 'api'
import React from 'react'

export function ProductCard({ price, name, image }: Product) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            cursor: "pointer",
        }}>
            <Card
                sx={{ maxWidth: 360 }}>
                <CardMedia
                    component="img"
                    sx={{
                        width: 340, height: 460
                    }}
                    image={image?.url}
                    alt="product"
                />
            </Card>
            <Box marginTop="10px">
                <Typography component="div">
                    {name}
                </Typography>
                <Typography component="div">
                    {price.formatted_with_code}
                </Typography>
            </Box>
        </Box>
    )
}