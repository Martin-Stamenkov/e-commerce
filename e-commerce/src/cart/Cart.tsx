import { Box, Button, Chip, Divider, IconButton, Typography } from '@mui/material';
import { useCommerce } from 'provider'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { Backdrop, Card, Spinner } from 'components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { updateCartQuantity, removeItemFromCart } from './api';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';


export function Cart() {
    const { cart, updateCart, loading, setLoading } = useCommerce();
    const navigate = useNavigate()

    if (!cart) {
        return <Spinner />
    }

    const handleUpdateClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, productId: string, quantity: number) => {
        event.stopPropagation()
        setLoading(true);
        await updateCartQuantity(productId, quantity);
        updateCart();
    }

    const handleRemoveItem = async (event: React.MouseEvent<{}, MouseEvent>, productId: string) => {
        event.stopPropagation()
        setLoading(true);
        await removeItemFromCart(productId);
        updateCart();
    }

    return (
        cart.line_items.length > 0 ?
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
                        {cart?.line_items.map(x => <Card.Expanded
                            image={x.image}
                            name={x.name}
                            id={x.id}
                            path={`../product/${x.product_id}`}
                            price={x.line_total}
                            handleButtonClick={(e) => handleRemoveItem(e, x.id)}
                            children={
                                <Box>
                                    <IconButton onClick={(e) => handleUpdateClick(e, x.id, x.quantity + 1)}><AddIcon /></IconButton>
                                    <Chip label={x.quantity} variant="outlined" />
                                    <IconButton onClick={(e) => handleUpdateClick(e, x.id, x.quantity - 1)}><RemoveIcon /></IconButton>
                                </Box>
                            }
                            icon={<DeleteOutlineIcon />}
                        />
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
                    <Button sx={{ height: "50px" }} variant="contained" onClick={() => navigate("/checkout")}>
                        Финализирай поръчката
                    </Button>
                </Box>
                <Backdrop open={loading} />
            </Box> :
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 4 }} >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50%" }}>
                    <Typography sx={{ marginLeft: "6px" }} variant="h4">
                        Количката ви е празна
                    </Typography>
                    <Typography variant="h6">
                        Открийте невероятни предложения в различни категории от търсачката в левия ъгъл
                    </Typography>
                </Box>
            </ Box>
    )
}
