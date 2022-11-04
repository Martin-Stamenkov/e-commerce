import { Box, CardMedia, Typography, Card  } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Category } from 'api'
import React from 'react'
import { Link, To } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    container: {
        textDecoration: "none",
        color: "black",
        "&:hover": {
            textDecoration: "underline",
        },
    }}));

export function CategoryCard({ assets, name, path }: Category) {
    const classes = useStyles();
    return (
        <Link className={classes.container} to={path as To}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px",
                alignItems: "center",
                cursor: "pointer",
            }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        sx={{
                            width: 240, height: 240
                        }}
                        image={assets[0].url}
                        alt="model"
                    />
                </Card>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
            </Box>
        </Link>
    )
}
