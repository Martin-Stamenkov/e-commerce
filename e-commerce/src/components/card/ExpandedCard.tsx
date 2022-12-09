import { Box, Divider, IconButton, Typography } from '@mui/material'
import { Product } from 'api'
import React, { MouseEventHandler, ReactElement } from 'react'
import { makeStyles } from '@mui/styles';
import { To, Link, useNavigate } from 'react-router-dom';


export const useStyles = makeStyles(() => ({
    container: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-between",
        minHeight: "120px",
        "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
        },
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
    handleButtonClick?: MouseEventHandler<{}> | undefined;
    icon?: ReactElement<any, any>;
}

export function ExpandedCard({ price, name, image, path, children, handleButtonClick, icon }: IExpandedCard) {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <>
            <Box onClick={() => navigate(path as To)} sx={{}} className={classes.container}>
                <Box display="flex">
                    <img alt="assets" style={{ width: 100 }} src={image?.url} />
                    <Box className={classes.info}>
                        <Typography sx={{ marginLeft: "6px" }} variant="body1">{name}</Typography>
                        {children}
                    </Box>
                </Box>
                <Box className={classes.priceContainer}>
                    <IconButton onClick={handleButtonClick}>
                        {icon}
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
