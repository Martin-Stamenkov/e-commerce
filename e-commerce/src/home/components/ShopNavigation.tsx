import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'

import React from 'react'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    container: {
        position: "absolute",
        bottom: "64%",
        right: 100,
        left: 0,
        height: 10,
        "& button": {
            color: "#000000",
            background: "#ffffff",
            width: 160,
            height: 58,
            "&:hover": {
                background: "#000000",
                color: "#ffffff"
            }
        }
    },
}));

interface IShopNavigation {
    title: string;
    buttonCaption: string;
    path: string;
}


export function ShopNavigation({ title, buttonCaption, path }: IShopNavigation) {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <Box className={classes.container}>
            <Box>
                <Typography sx={{ fontSize: 70, fontWeight: 800, color: "#ffffff", textShadow: "2px 3px #808080" }}>{title}</Typography>
            </Box>
            <Button variant="contained" onClick={() => navigate(path)}>{buttonCaption}</Button>
        </Box>
    )
}
