import { Box, Button, Typography } from '@mui/material'
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import { loadStripe, Stripe, StripeCardElement, StripeCardNumberElement, StripeElements } from '@stripe/stripe-js';
import { FieldValues } from 'react-hook-form';
import { CheckoutToken } from '@chec/commerce.js/types/checkout-token';
import { CheckoutCapture } from '@chec/commerce.js/types/checkout-capture';

interface IPaymentForm {
  handleBack: () => void;
  handleNext: () => void;
  addressInformation: FieldValues;
  checkoutToken: CheckoutToken
  handleCaptureCheckout: (checkoutTokenId: string, newOrder: CheckoutCapture) => Promise<void>
}

export function PaymentForm({ handleBack, addressInformation, checkoutToken, handleCaptureCheckout, handleNext}: IPaymentForm) {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, stripe: Stripe | null, elements: StripeElements | null) => {
    event.preventDefault();

    if (elements == null || stripe == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement) as StripeCardElement | StripeCardNumberElement | { token: string; },
    });
    if (error) {
      console.log(error);
    } else {
      const orderData: CheckoutCapture = {
        line_items: checkoutToken.line_items,
        customer: {
          firstname: addressInformation.firstName,
          lastname: addressInformation.lastName,
          email: addressInformation.email,
        },
        shipping: {
          name: "Primary",
          street: addressInformation.address,
          town_city: addressInformation.city,
          postal_zip_code: addressInformation.postal,
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      }
      handleCaptureCheckout(checkoutToken.id, orderData);
      handleNext();
    }
  };

  return (
    <>
      <Typography sx={{ fontWeight: "700" }} >
        Плащане
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ stripe, elements }) => (
            <form onSubmit={(event) => handleSubmit(event, stripe, elements)}>
              <Box
                sx={
                  {
                    border: '1px solid #a9a9af',
                    padding: "10px",
                    marginBottom: "10px"
                  }
                }
              >
                <CardElement />
              </Box>
              <Box>
                <Button sx={{ width: "150px" }}
                  variant="contained" type="submit" disabled={!stripe || !elements}>
                  Купи и плати
                </Button>
                <Button
                  sx={{ width: "150px", marginLeft: "10px" }}
                  variant="outlined"
                  onClick={handleBack}
                >
                  Назад
                </Button>
              </Box>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}
