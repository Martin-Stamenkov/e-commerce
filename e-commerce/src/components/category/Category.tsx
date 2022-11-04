import { Box, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
    titleContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    contentContainer: {
        padding: "2% 5% 2% 16%",
    }
}));

interface ICategory {
    children: React.ReactNode
    title: string
    totalProducts?: number
}

export function Category({ children, title, totalProducts }: ICategory) {
    const classes = useStyles()
    return (
        <Box className={classes.contentContainer}>
            <Box className={classes.titleContainer}>
                <Typography variant='h5'>{title}</Typography>
                <Typography color="GrayText">{`${totalProducts || 0} Продукти`}</Typography>
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}
