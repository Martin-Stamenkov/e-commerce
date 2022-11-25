import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import { Product } from 'api'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles(() => ({
    container: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-between",
        minHeight: "120px"
    },
    priceContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "end",
        flexDirection: "column"
    },
    info: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    }
}));
interface IExpandedCard extends Product {
    children?: React.ReactNode;
}

export function ExpandedCard({ price, name, image, path, children }: IExpandedCard) {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.container}>
                <Box display="flex">
                    <img alt="assets" style={{ width: 100 }} src={image?.url} />
                    <Box className={classes.info}>
                        <Typography sx={{ marginLeft: "6px" }} variant="body1">{name}</Typography>
                        {children}
                    </Box>
                </Box>
                <Box className={classes.priceContainer}>
                    <IconButton>
                        <DeleteOutlineIcon />
                    </IconButton>
                    <Typography sx={{ marginLeft: "6px" }} variant="body1">{price.formatted_with_code}</Typography>
                </Box>
            </Box>
            <Box marginTop="20px" marginBottom="20px">
                <Divider />
            </Box>
        </>
    )
}
