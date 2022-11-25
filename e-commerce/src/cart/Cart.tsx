import { Backdrop, Box, Button, Chip, CircularProgress, Divider, IconButton, Typography } from '@mui/material';
import { useCommerce } from 'provider'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { Card, Spinner } from 'components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { commerce } from 'config';

export function Cart() {

    const { cart, updateCart, loading, setLoading } = useCommerce();
    if (!cart) {
        return <Spinner />
    }

    const handleUpdateClick = async (productId: string, quantity: number) => {
        setLoading(true)
        await commerce.cart.update(productId, { quantity })
        updateCart()
    }
    return (
        <Box display="flex" justifyContent="end" marginTop="20px">
            <Box width="60%">
                <Box display="flex">
                    <Typography variant='h5'>Количката ви</Typography>
                    <Chip sx={{ marginLeft: "10px" }} label={cart?.total_items} variant="outlined" />
                </Box>
                <Box marginTop="10px" display="flex" alignItems="center">
                    <InfoIcon color='secondary' />
                    <Typography sx={{ marginLeft: "6px" }} color="secondary" variant="caption">
                        Купете сега, добавянето на артикули в количката не означава резервацията им.
                    </Typography>
                </Box>
                <Box >
                    {cart?.line_items.map(x => <Card.Expanded image={x.image} name={x.name} id={x.id} price={x.line_total} children={
                        <Box>
                            <IconButton onClick={() => handleUpdateClick(x.id, x.quantity + 1)}><AddIcon /></IconButton>
                            <Chip label={x.quantity} variant="outlined" />
                            <IconButton onClick={() => handleUpdateClick(x.id, x.quantity - 1)}><RemoveIcon /></IconButton>
                        </Box>
                    } />
                    )}
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#F3F3F5", padding: "0px 45px;", marginLeft: "40px", minWidth: "24%", display: "flex", flexDirection: "column" }} >
                <Box marginBottom="20px">
                    <Box display="flex" justifyContent="space-around" alignItems="center" marginBottom="10px" marginTop="10%">
                        <Typography sx={{ marginLeft: "6px" }} >
                            ЦЕНА НА ПРОДУКТА
                        </Typography>
                        <Typography variant="h6" sx={{ marginLeft: "6px" }} >
                            {cart?.subtotal.formatted_with_code}
                        </Typography>
                    </Box>
                    <Divider />
                </Box>
                <Button sx={{ height: "50px" }} variant="contained">
                    Финализирай поръчката
                </Button>
            </Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    )
}
