import { CheckoutCapture } from '@chec/commerce.js/types/checkout-capture';
import { CheckoutToken, CheckoutTokenLineItem } from '@chec/commerce.js/types/checkout-token'
import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import { PaymentForm } from 'checkout/form/PaymentForm';
import React from 'react'
import { FieldValues } from 'react-hook-form';

interface IReview {
    checkoutToken: CheckoutToken;
    total: string;
    handleBack: () => void;
    addressInformation: FieldValues;
    handleCaptureCheckout: (checkoutTokenId: string, newOrder: CheckoutCapture) => Promise<void>
}

export function Review({ checkoutToken, total, handleBack, addressInformation, handleCaptureCheckout }: IReview) {
    return (
        <Box>
            <Typography sx={{ fontWeight: "700" }} >
                Потвърди поръчката и плати
            </Typography>
            <Box>
                <List>
                    {checkoutToken.line_items.map((item: CheckoutTokenLineItem) =>
                        <ListItem sx={{ justifyContent: "space-between" }}>
                            <Box>
                                <ListItemText primary={item.name} />
                                <Typography color="GrayText" variant="caption">
                                    количество: {item.quantity}
                                </Typography>
                            </Box>
                            <Typography>
                                {item.price.formatted_with_code}
                            </Typography>
                        </ListItem>
                    )}
                </List>
            </Box>
            <Divider />
            <Typography sx={{ fontWeight: "500", marginTop: "8px", display: "flex", justifyContent: "end" }} >
                Обща сума: {total}
            </Typography>
            <PaymentForm checkoutToken={checkoutToken} addressInformation={addressInformation} handleBack={handleBack} handleCaptureCheckout={handleCaptureCheckout} />
        </Box>
    )
}
