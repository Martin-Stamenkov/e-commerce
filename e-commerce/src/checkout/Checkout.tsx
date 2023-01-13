import { CheckoutCapture } from '@chec/commerce.js/types/checkout-capture';
import { CheckoutCaptureResponse } from '@chec/commerce.js/types/checkout-capture-response';
import { CheckoutToken } from '@chec/commerce.js/types/checkout-token';
import { Box, Typography, Divider, Button, Step, StepContent, StepLabel, Stepper } from '@mui/material'
import { refreshCart } from 'cart/api';
import { Card, Spinner } from 'components';
import { useCommerce } from 'provider';
import { useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { captureCheckout, generateToken } from './api/api';
import { Review } from './components';
import { AddressForm } from './form/AddressForm';
import { Confirmation } from './form/Confirmation';

const steps = ["Данни за получаване", "Детайли по поръчка"]

export function Checkout() {
    const { cart, updateCart } = useCommerce();
    const [activeStep, setActiveStep] = useState(0);
    const [addressInformation, setAddressInformation] = useState<FieldValues>({});
    const [checkoutToken, setCheckoutToken] = useState<CheckoutToken>();

    useEffect(() => {
        const fetchToken = async () => {
            if (cart) {
                const token = await generateToken(cart.id);
                console.log(token)
                setCheckoutToken(token);
            }
        }
        fetchToken()
    }, [cart])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const next = (data: FieldValues) => {
        setAddressInformation(data)
        handleNext()
    };

    const refreshCartAfterOrder = async () => {
        await refreshCart();
        updateCart()
    }

    const handleCaptureCheckout = async (checkoutTokenId: string, newOrder: CheckoutCapture) => {
        await captureCheckout(checkoutTokenId, newOrder);
        refreshCartAfterOrder();
    };

    const Form = () => {
        return (
            cart && checkoutToken && activeStep === 1 ?
                <Review
                    handleNext={handleNext}
                    handleCaptureCheckout={handleCaptureCheckout}
                    addressInformation={addressInformation}
                    handleBack={handleBack}
                    total={cart.subtotal.formatted_with_code}
                    checkoutToken={checkoutToken} /> : <AddressForm next={next} />
        )
    }
    console.log(steps.length)

    return (
        <Box display="flex" justifyContent="end" marginTop="20px" marginLeft={"12%"}>
            <Box width="50%">
                <Box>
                    {!checkoutToken ? <Spinner /> : <Stepper activeStep={activeStep} orientation="vertical">
                        {cart && steps.map((step, index) => (
                            <Step key={index}>
                                <StepLabel
                                    optional={
                                        index === 1 ? (
                                            <Typography variant="caption">потвърди почъчката</Typography>
                                        ) : null
                                    }
                                >
                                    {step}
                                </StepLabel>
                                <StepContent>
                                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>}
                </Box>
            </Box>
            <Box sx={{
                backgroundColor: "#F3F3F5",
                padding: "0px 45px;",
                marginLeft: "40px",
                minWidth: "28%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }} >
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
                    Купи и плати
                </Button>
                <Box marginTop="20px">
                    {cart?.line_items.map((item) => <Card.Expanded
                        image={item.image}
                        id={item.id}
                        price={item.line_total}
                        name={item.name}
                        path={`../product/${item.product_id}`}
                    />)}
                </Box>
            </Box>
        </Box>
    )
}
